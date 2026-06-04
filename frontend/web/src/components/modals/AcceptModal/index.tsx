import { useAuth } from "../../../hooks/auth"
import api from "../../../services/api"
import { handleTranslate } from "../../../utils/functions"
import { Toast } from "../../../utils/toast"
import Button from "../../Button"
import FillAccept from "../../Icons/FillAccept"
import Modal from "../../modal"

interface AcceptModalProps {
  id: number | undefined,
  title: string | undefined,
  type: 'scheduling' | 'order' | 'report',
  onClose(): void,
  postProcessing(): void,
}

const AcceptModal: React.FC<AcceptModalProps> = ({ onClose, postProcessing, id, title, type }) => {

  const { user, token } = useAuth()

  const handleSendForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await api.patch(`/${user?.ability}/${type}/accept/${id}`, [], {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      Toast.fire({
        icon: 'success',
        title: response.data.message
      });
      onClose()
      postProcessing()
    })
    .catch(error => {
      Toast.fire({
        icon: 'error',
        title: error.response.data.error
      });
    })
  }

  return (
    <Modal onClose={onClose}>
      <form
        onSubmit={(e) => handleSendForm(e)}
        className="text-center"
      >
        <FillAccept additionalClasses="mx-auto mb-4"/>

        <h3 className="text-[#485558] font-bold mb-3 text-body">
          Você tem certeza que gostaria de aceitar esse {handleTranslate(type)}?
        </h3>

        <h3 className="mb-6 text-lg text-body">
          {title}
        </h3>

        <div className="flex items-center space-x-4 justify-center">
          <Button
            width="w-32"
            additionalClasses="bg-primary transition-btn"
          >
            Aceitar
          </Button>

          <Button
            width="w-32"
            onClick={onClose}
            background="bg-[#BABFC0]"
            additionalClasses="transition-cancel-button"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AcceptModal
