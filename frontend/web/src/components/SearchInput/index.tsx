import Button from "../Button"
import SearchGlyph from "../Icons/SearchGlyph"
import Input from "../Input"

const SearchInput: React.FC = () => {
  return (
    <div className="bg-white w-1/6 flex gap-1 items-center justify-center rounded-lg">
      <Input
        placeholder="Faça uma busca..."
        additionalClasses='font-bold'
        border={false}
      />

      <Button
        width='w-6'
        height='h-6'
        additionalClasses="flex justify-center items-center mr-2"
      >
        <SearchGlyph
          width='15'
          height='15'
        />
      </Button>
    </div>
  )
}

export default SearchInput
