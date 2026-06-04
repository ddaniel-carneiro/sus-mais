import Button from "../../../components/Button"
import Input from "../../../components/Input"
import Label from "../../../components/Label"
import Modal from "../../../components/modal"
import Title from "../../../components/Title"
import type { Collection } from "../../../utils/interfaces"

interface ViewModalProps {
  collection: Collection | undefined,
  onClose(): void
}

const ViewModal: React.FC<ViewModalProps> = ({ collection, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <Title
          color="black"
          size="xl"
          additionalClasses="w-full flex justify-start"
        >Visualização de Pedido de Coleta</Title>

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
