import { FC, useState } from 'react'

import { useWord } from 'context'

import SearchIcon from 'assets/icon-search.svg'

interface SearchProps {
  placeholder?: string
  searchValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search: FC<SearchProps> = ({ placeholder, onChange, searchValue }) => {
  const [isError, setIsError] = useState(false)
  const { fetchData } = useWord()

  const handleSubmit = async () => {
    if (!searchValue) {
      setIsError(true)
      return
    }
    await fetchData()
    setIsError(false)
  }

  return (
    <div className="flex flex-col my-8 relative">
      <div
        className={`flex justify-between rounded-2xl bg-gray-200 p-4 md:p-2 dark:bg-black-100 ${
          isError ? 'border-red-300 border-2' : ''
        }`}
      >
        <input
          className="bg-transparent w-full placeholder:font-bold placeholder:text-gray-500 dark:text-white font-bold"
          type="text"
          value={searchValue}
          onChange={onChange}
          placeholder={placeholder}
        />

        <button onClick={handleSubmit}>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
      {isError ? <span className="text-red-500 mt-2 absolute top-14">Please enter a word</span> : null}
    </div>
  )
}
