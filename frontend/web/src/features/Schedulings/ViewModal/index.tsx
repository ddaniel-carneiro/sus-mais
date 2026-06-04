import Button from "../../../components/Button"
import Input from "../../../components/Input"
import Label from "../../../components/Label"
import Modal from "../../../components/modal"
import Title from "../../../components/Title"
import type { Collection } from "../../../utils/interfaces"
import { useAuth } from "../../../hooks/auth"

interface ViewModalProps {
  collection: Collection | undefined,
  onClose(): void
}

const ViewModal: React.FC<ViewModalProps> = ({ collection, onClose }) => {

  const { user } = useAuth()

  return (
    <Modal onClose={onClose}>
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <Title
          color="black"
          size="xl"
          additionalClasses="w-full flex justify-start"
        >Visualização de Agendamento de Coleta</Title>

        <div className="w-full flex flex-row gap-3">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Rua</Label>
            <Input
              type="text"
              value={collection?.street}
              disabled
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Número</Label>
            <Input
              type="text"
              value={collection?.number}
              disabled
            />
          </div>
        </div>

        <div className="w-full flex flex-row gap-3">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Bairro</Label>
            <Input
              type="text"
              value={collection?.neighborhood}
              disabled
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">CEP</Label>
            <Input
              type="text"
              value={collection?.postal_code}
              disabled
            />
          </div>
        </div>

        {user?.ability === 'admin' &&
          <>
            <Title
              color="black"
              size="xl"
              additionalClasses="w-full flex justify-start"
            >Informações do reclamante</Title>

            <div className="w-full flex flex-row gap-3">
              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">Nome</Label>
                <Input
                  type="text"
                  value={collection?.user.name}
                  disabled
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">CPF</Label>
                <Input
                  type="text"
                  value={collection?.user.CPF}
                  disabled
                />
              </div>
            </div>

            <div className="w-full flex flex-row gap-3">
              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">Email</Label>
                <Input
                  type="text"
                  value={collection?.user.email}
                  disabled
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">Celular</Label>
                <Input
                  type="text"
                  value={collection?.user.phone}
                  disabled
                />
              </div>
            </div>
          </>
        }

        {user?.ability === 'collector' &&
          <>
            <Title
              color="black"
              size="xl"
              additionalClasses="w-full flex justify-start"
            >Informações do reclamante</Title>

            <div className="w-full flex flex-row gap-3">
              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">Nome</Label>
                <Input
                  type="text"
                  value={collection?.user.name}
                  disabled
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">Celular</Label>
                <Input
                  type="text"
                  value={collection?.user.phone}
                  disabled
                />
              </div>
            </div>
          </>
        }
        {/* {user?.ability === 'admin' && collection?.usersInteracting &&
          <>
            <Title
              color="black"
              size="xl"
              additionalClasses="w-full flex justify-start"
            >Informações do coletor</Title>

            <div className="w-full flex flex-row gap-3">
              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">Nome</Label>
                <Input
                  type="text"
                  value={collection?.usersInteracting.name}
                  disabled
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">CPF</Label>
                <Input
                  type="text"
                  value={collection?.usersInteracting.CPF}
                  disabled
                />
              </div>
            </div>

            <div className="w-full flex flex-row gap-3">
              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">Email</Label>
                <Input
                  type="text"
                  value={collection?.usersInteracting.email}
                  disabled
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">Celular</Label>
                <Input
                  type="text"
                  value={collection?.usersInteracting.phone}
                  disabled
                />
              </div>
            </div>
          </>
        } */}

        <div className="w-full flex gap-5 items-center justify-center">
          <Button
            width="w-32"
            onClick={onClose}
            background="bg-[#BABFC0]"
            additionalClasses="transition-cancel-button"
            shadow
          >
            Cancelar
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ViewModal
