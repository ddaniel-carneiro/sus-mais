import React from 'react';

interface InputFileProps {
  count: number,
  max: number,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputFile: React.FC<InputFileProps> = ({ count, max, onChange }) => (
  <input
    type="file"
    multiple
    accept="image/*"
    onChange={onChange}
    disabled={count >= max}
    onClick={(e) => (e.currentTarget.value = "")}
    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2 disabled:opacity-50 disabled:cursor-not-allowed"
  />
)

export default InputFile
