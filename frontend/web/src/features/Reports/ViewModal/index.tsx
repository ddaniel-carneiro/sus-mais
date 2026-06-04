import Button from "../../../components/Button"
import Input from "../../../components/Input"
import Label from "../../../components/Label"
import Modal from "../../../components/modal"
import TextArea from "../../../components/TextArea"
import Title from "../../../components/Title"
import { useAuth } from "../../../hooks/auth"
import type { Report } from "../../../utils/interfaces"

interface ViewModalProps {
  report: Report | undefined
  onClose(): void
}

const ViewModal: React.FC<ViewModalProps> = ({ report, onClose }) => {

  const { user } = useAuth()

  return(
    <Modal onClose={onClose}>
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <Title
          color="black"
          size="xl"
          additionalClasses="w-full flex justify-start"
        >Visualizar Reporte</Title>

        <div className="w-full flex flex-row gap-3">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Título</Label>
            <Input
              type="text"
              value={report?.title}
              disabled
            />
          </div>
        </div>

        <div className="w-full flex flex-row gap-3">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Descrição</Label>
            <TextArea
              value={report?.description}
              disabled
            ></TextArea>
          </div>
        </div>

        <div className="w-full flex flex-row gap-3">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Rua</Label>
            <Input
              type="text"
              value={report?.street}
              disabled
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Número</Label>
            <Input
              type="text"
              value={report?.number}
              disabled
            />
          </div>
        </div>

        <div className="w-full flex flex-row gap-3">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Bairro</Label>
            <Input
              type="text"
              value={report?.neighborhood}
              disabled
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">CEP</Label>
            <Input
              type="text"
              value={report?.postal_code}
              disabled
            />
          </div>
        </div>

        {/* <div className="w-full flex flex-col gap-5">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Fotos (Máx: 4)</Label>
            <InputFile
              count={report?.images.length}
              max={4}
              onChange={handleImageUpload}
            />
          </div>

          {report?.images.length > 0 && (
            <div className="w-full flex flex-row gap-2 overflow-x-auto py-2">
              {report?.images.map((_, index) => (
                <Image
                  key={index}
                  src={previews[index]}
                  onRemove={() => removeImage(index)}
                />
              ))}
            </div>
          )}
        </div> */}

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
                  value={report?.user.name}
                  disabled
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">CPF</Label>
                <Input
                  type="text"
                  value={report?.user.CPF}
                  disabled
                />
              </div>
            </div>

            <div className="w-full flex flex-row gap-3">
              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">Email</Label>
                <Input
                  type="text"
                  value={report?.user.email}
                  disabled
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <Label additionalClasses="text-sm">Celular</Label>
                <Input
                  type="text"
                  value={report?.user.phone}
                  disabled
                />
              </div>
            </div>
          </>
        }

        <div className="w-full flex gap-5 items-center justify-center">
          <Button
            width="w-32"
            onClick={onClose}
            background="bg-[#BABFC0]"
            additionalClasses="transition-cancel-button"
            shadow
          >
            Fechar
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ViewModal
