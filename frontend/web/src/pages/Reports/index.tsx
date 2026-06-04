import { useEffect, useState } from "react"
import ActionButton from "../../components/ActionButton"
import Badge from "../../components/Badge"
import GridBody from "../../components/Grid/GridBody"
import GridContainer from "../../components/Grid/GridContainer"
import GridHeader from "../../components/Grid/GridHeader"
import GridItem from "../../components/Grid/GridItem"
import Eye from "../../components/Icons/Eye"
import Pen from "../../components/Icons/Pen"
import SearchInput from "../../components/SearchInput"
import Title from "../../components/Title"
import type { PagesModals, Report } from "../../utils/interfaces"
import Button from "../../components/Button"
import CreateModal from "../../features/Reports/CreateModal"
import api from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { Toast } from "../../utils/toast"
import { formatAddress, formatDateTimeBR, handleBadgeColor } from "../../utils/functions"
import Pagination from "../../components/Pagination"
import ViewModal from "../../features/Reports/ViewModal"
import EditModal from "../../features/Reports/EditModal"
import AcceptModal from "../../components/modals/AcceptModal"
import Accept from "../../components/Icons/Accept"
import RefuseModal from "../../components/modals/RefuseModal"
import Refuse from "../../components/Icons/Refuse"
import Trash from "../../components/Icons/Trash"
import DeleteModal from "../../components/modals/DeleteModal"

const Reports: React.FC = () => {

  const { user, token } = useAuth()

  const [report, setReport] = useState<Report>()
  const [reports, setReports] = useState<Report[]>([])

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
      const report = reports.find(report => report.id === id)
      setReport(report)
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

  const fetchReports = async () => {
    await api.get(`/${user?.ability}/report?page=${currentPage}&limit=${itemsPerPage}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setReports(response.data.reports)
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
    fetchReports()
  }, [token, currentPage])

  return (
    <>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-row justify-between w-full">
          <Title>Reportes</Title>

          {user?.ability === 'user' &&
            <Button
              onClick={() => handleModalsClick('create', true)}
              width="w-1/6"
              background="bg-secondary"
              additionalClasses="transition-btn"
              shadow
            >Adicionar Reporte</Button>
          }
        </div>

        <div className="flex justify-end">
          <SearchInput />
        </div>

        <div className="bg-white p-8 rounded-xl flex flex-col flex-grow overflow-hidden">
          <GridContainer additionalClasses="flex-grow overflow-y-auto">
            <GridHeader
              gridCols="grid-cols-[1fr_1fr_1fr_0.5fr_0.5fr]"
            >
              <GridItem>Titulo</GridItem>
              <GridItem>Endereço</GridItem>
              <GridItem>Data de abertura</GridItem>
              <GridItem>Status</GridItem>
              <GridItem>Ações</GridItem>
            </GridHeader>

            {reports.map(report => (
              <GridBody
                key={report.id}
                gridCols="grid-cols-[1fr_1fr_1fr_0.5fr_0.5fr]"
              >
                <GridItem additionalClasses="h-15">{report.title}</GridItem>
                <GridItem additionalClasses="h-15">
                  {formatAddress(report.street, report.number, report.neighborhood, report.postal_code)}
                </GridItem>
                <GridItem additionalClasses="h-15">{formatDateTimeBR(report.createdAt)}</GridItem>
                <GridItem additionalClasses="h-15">
                  <Badge color={handleBadgeColor(report.status.name)}>
                    {report.status.name}
                  </Badge>
                </GridItem>
                <GridItem additionalClasses="h-15 gap-2">
                  <ActionButton onClick={() => handleModalsClick('view', true, report.id)}>
                    <Eye />
                  </ActionButton>

                  {user?.ability === 'admin' && report?.status_id === 1 &&
                    <>
                      <ActionButton onClick={() => handleModalsClick('edit', true, report.id)}>
                        <Pen />
                      </ActionButton>

                      <ActionButton onClick={() => handleModalsClick('accept', true, report.id)}>
                        <Accept />
                      </ActionButton>

                      <ActionButton onClick={() => handleModalsClick('refuse', true, report.id)}>
                        <Refuse />
                      </ActionButton>
                    </>
                  }

                  {user?.ability === 'user' && report.status_id === 4 &&
                    <ActionButton onClick={() => handleModalsClick('delete', true, report.id)}>
                      <Trash />
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
          postProcessing={fetchReports}
        />
      }

      {modals.view &&
        <ViewModal
          report={report}
          onClose={() => handleModalsClick('view', false)}
        />
      }

      {modals.edit &&
        <EditModal
          report={report}
          onClose={() => handleModalsClick('edit', false)}
          postProcessing={fetchReports}
        />
      }

      {modals.accept &&
        <AcceptModal
          id={report?.id}
          type="report"
          title={report?.title}
          onClose={() => handleModalsClick('accept', false)}
          postProcessing={fetchReports}
        />
      }

      {modals.refuse &&
        <RefuseModal
          id={report?.id}
          type="report"
          title={report?.title}
          onClose={() => handleModalsClick('refuse', false)}
          postProcessing={fetchReports}
        />
      }

      {modals.delete &&
        <DeleteModal
          id={report?.id}
          type="report"
          title={report?.title}
          onClose={() => handleModalsClick('delete', false)}
          postProcessing={fetchReports}
        />
      }
    </>
  )
}

export default Reports
