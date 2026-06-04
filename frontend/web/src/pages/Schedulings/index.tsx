import { useEffect, useState } from "react"
import ActionButton from "../../components/ActionButton"
import Badge from "../../components/Badge"
import Button from "../../components/Button"
import GridBody from "../../components/Grid/GridBody"
import GridContainer from "../../components/Grid/GridContainer"
import GridHeader from "../../components/Grid/GridHeader"
import GridItem from "../../components/Grid/GridItem"
import Eye from "../../components/Icons/Eye"
import Pen from "../../components/Icons/Pen"
import Trash from "../../components/Icons/Trash"
import SearchInput from "../../components/SearchInput"
import Title from "../../components/Title"
import { useAuth } from "../../hooks/auth"
import type { Collection, PagesModals } from "../../utils/interfaces"
import api from "../../services/api"
import { Toast } from "../../utils/toast"
import CreateModal from "../../features/Schedulings/CreateModal"
import { formatAddress, formatDateTimeBR, handleBadgeColor } from "../../utils/functions"
import Pagination from "../../components/Pagination"
import EditModal from "../../features/Schedulings/EditModal"
import ViewModal from "../../features/Schedulings/ViewModal"
import Accept from "../../components/Icons/Accept"
import AcceptModal from "../../components/modals/AcceptModal"

const Schedulings: React.FC = () => {

  const { user, token } = useAuth()

  const [collection, setCollection] = useState<Collection>()
  const [collections, setCollections] = useState<Collection[]>([])

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsPerPage: number = 6;

  const [modals, setModals] = useState<PagesModals>({
    create: false,
    edit: false,
    view: false,
    accept: false,
    refuse: false,
    delete: false,
  })

  const handleModalsClick = (option: keyof PagesModals, value: boolean, id?: number) => {
    setModals({
      create: false,
      edit: false,
      view: false,
      accept: false,
      refuse: false,
      delete: false,
      [option]: value
    })

    if (id) {
      const report = collections.find(collection => collection.id === id)
      setCollection(report)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const fetchCollections = async () => {
    await api.get(`/${user?.ability}/collection?page=${currentPage}&limit=${itemsPerPage}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setCollections(response.data.collections)
      setTotalPages(response.data.totalPages)
    })
    .catch(error => {
      Toast.fire({
        icon: 'error',
        title: error.response.data.error
      });
    })
  }

  useEffect(() => {
    fetchCollections()
  }, [token, currentPage])

  const collectionsToDisplay = user?.ability !== 'collector'
    ? collections
    : collections.filter(collection => collection?.usersInteracting.length <= 0);

  return (
    <>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-row justify-between w-full">
          <Title>Agendamentos de Coletas</Title>

          {user?.ability === 'user' &&
            <Button
              onClick={() => handleModalsClick('create', true)}
              width="w-1/6"
              background="bg-secondary"
              additionalClasses="transition-btn"
              shadow
            >Adicionar Agendamento</Button>
          }
        </div>

        <div className="flex justify-end">
          <SearchInput />
        </div>

        <div className="bg-white p-8 rounded-xl flex flex-col flex-grow overflow-hidden">
          <GridContainer additionalClasses="flex-grow overflow-y-auto">
            <GridHeader
              gridCols="grid-cols-[1fr_1fr_0.5fr_0.5fr]"
            >
              <GridItem>Endereço</GridItem>
              <GridItem>Data de abertura</GridItem>
              <GridItem>Status</GridItem>
              <GridItem>Ações</GridItem>
            </GridHeader>

            {collectionsToDisplay.map(collection => (
              <GridBody
                key={collection.id}
                gridCols="grid-cols-[1fr_1fr_0.5fr_0.5fr]"
              >
                <GridItem additionalClasses="h-15">
                  {formatAddress(collection.street, collection.number, collection.neighborhood, collection.postal_code)}
                </GridItem>
                <GridItem additionalClasses="h-15">{formatDateTimeBR(collection.createdAt)}</GridItem>
                <GridItem additionalClasses="h-15">
                  <Badge color={handleBadgeColor(collection.status.name)}>
                    {collection.status.name}
                  </Badge>
                </GridItem>
                <GridItem additionalClasses="h-15 gap-2">
                  <ActionButton onClick={() => handleModalsClick('view', true, collection.id)}>
                    <Eye />
                  </ActionButton>

                  {user?.ability === 'admin' && collection?.status_id === 1 &&
                    <ActionButton onClick={() => handleModalsClick('edit', true, collection.id)}>
                      <Pen />
                    </ActionButton>
                  }

                  {user?.ability === 'user' && collection.status_id === 4 &&
                    <ActionButton onClick={() => handleModalsClick('delete', true, collection.id)}>
                      <Trash />
                    </ActionButton>
                  }

                  {user?.ability === 'collector' && collection?.status_id === 1 &&
                    <ActionButton onClick={() => handleModalsClick('accept', true, collection.id)}>
                      <Accept />
                    </ActionButton>
                  }
                </GridItem>
              </GridBody>
            ))}
          </GridContainer>

          <div className="flex justify-start">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrev={handlePrevPage}
              onNext={handleNextPage}
              onPageClick={handlePageClick}
            />
          </div>
        </div>
      </div>

      {modals.create &&
        <CreateModal
          onClose={() => handleModalsClick('create', false)}
          postProcessing={fetchCollections}
        />
      }

      {modals.view &&
        <ViewModal
          collection={collection}
          onClose={() => handleModalsClick('view', false)}
        />
      }

      {modals.accept &&
        <AcceptModal
          id={collection?.id}
          type="scheduling"
          title={formatAddress(collection?.street, collection?.number, collection?.neighborhood, collection?.postal_code)}
          onClose={() => handleModalsClick('accept', false)}
          postProcessing={fetchCollections}
        />
      }

      {modals.edit &&
        <EditModal
          collection={collection}
          onClose={() => handleModalsClick('edit', false)}
          postProcessing={fetchCollections}
        />
      }
    </>
  )
}

export default Schedulings
