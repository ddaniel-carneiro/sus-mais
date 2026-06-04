import Button from "../../../components/Button"
import Input from "../../../components/Input"
import Label from "../../../components/Label"
import Modal from "../../../components/modal"
import TextArea from "../../../components/TextArea"
import Title from "../../../components/Title"
import { useEffect, useState } from "react"
import type { ReportForm, Report } from "../../../utils/interfaces"
import api from "../../../services/api"
import { Toast } from "../../../utils/toast"
import { useAuth } from "../../../hooks/auth"

interface EditModalProps {
  report: Report | undefined
  postProcessing(): void,
  onClose(): void
}

const EditModal: React.FC<EditModalProps> = ({ report, postProcessing, onClose }) => {

  const { token } = useAuth()

  const [formState, setFormState] = useState<ReportForm>({
    title: '',
    description: '',
    street: '',
    number: '',
    neighborhood: '',
    postal_code: '',
    images: []
  })

  // const [previews, setPreviews] = useState<string[]>([])

  const handleChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof ReportForm,
  ) => {
    const { value } = event.target as HTMLInputElement
    setFormState((prev) => ({ ...prev, [key]: value }))
  };

  const handleSendForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('title', formState.title);
    formData.append('description', formState.description);
    formData.append('street', formState.street);
    formData.append('number', formState.number);
    formData.append('neighborhood', formState.neighborhood);
    formData.append('postal_code', formState.postal_code);

    formState.images.forEach((file) => {
      formData.append('images', file);
    });

    await api.put(`/admin/report/${report?.id}`, formData, {
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
      clearForm()
      postProcessing()
    })
    .catch(error => {
      Toast.fire({
        icon: 'error',
        title: error.response.data.error
      });
    })
  }

  const clearForm = () => {
    setFormState({
      title: '',
      description: '',
      street: '',
      number: '',
      neighborhood: '',
      postal_code: '',
      images: []
    })
  }

  // useEffect(() => {
  //   const newPreviews = formState.images.map(file => URL.createObjectURL(file))
  //   setPreviews(newPreviews)

  //   return () => {
  //     newPreviews.forEach(url => URL.revokeObjectURL(url))
  //   }
  // }, [formState.images])

  useEffect(() => {
    if(report) {
      setFormState({
        title: report.title,
        description: report.description,
        street: report.street,
        number: report.number,
        neighborhood: report.neighborhood,
        postal_code: report.postal_code,
        images: []
      })
    }
  }, [])

  return (
    <Modal onClose={onClose}>
      <form
        onSubmit={(e) => handleSendForm(e)}
        className="w-full flex flex-col gap-4 justify-center items-center"
      >
        <Title
          color="black"
          size="xl"
          additionalClasses="w-full flex justify-start"
        >Editar Reporte</Title>

        <div className="w-full flex flex-row gap-3">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Título <span className="text-red-400">*</span></Label>
            <Input
              type="text"
              value={formState.title}
              onChange={(e) => handleChangeForm(e, 'title')}
              placeholder="Digite um título"
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-row gap-3">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Descrição <span className="text-red-400">*</span></Label>
            <TextArea
              value={formState.description}
              onChange={(e) => handleChangeForm(e, 'description')}
              placeholder="Digite uma descrição"
              required
            ></TextArea>
          </div>
        </div>

        <div className="w-full flex flex-row gap-3">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Rua <span className="text-red-400">*</span></Label>
            <Input
              type="text"
              value={formState.street}
              onChange={(e) => handleChangeForm(e, 'street')}
              placeholder="Digite a rua"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Número <span className="text-red-400">*</span></Label>
            <Input
              type="text"
              value={formState.number}
              onChange={(e) => handleChangeForm(e, 'number')}
              placeholder="Digite o número"
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-row gap-3">
          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">Bairro <span className="text-red-400">*</span></Label>
            <Input
              type="text"
              value={formState.neighborhood}
              onChange={(e) => handleChangeForm(e, 'neighborhood')}
              placeholder="Digite o bairro"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label additionalClasses="text-sm">CEP <span className="text-red-400">*</span></Label>
            <Input
              type="text"
              value={formState.postal_code}
              onChange={(e) => handleChangeForm(e, 'postal_code')}
              placeholder="Digite o CEP"
              required
            />
          </div>
        </div>

        <div className="w-full flex gap-5 items-center justify-center">
          <Button
            width="w-32"
            onClick={() => {}}
            background="bg-[#DC1D54]"
            additionalClasses="bg-primary transition-btn"
            shadow
          >
            Salvar
          </Button>

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
      </form>
    </Modal>
  )
}

export default EditModal
