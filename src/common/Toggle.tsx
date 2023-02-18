import { FC, useState } from 'react'

interface ToggleProps {
  onClick: (theme: string) => void
  initialValue: boolean
}

export const Toggle: FC<ToggleProps> = ({ onClick, initialValue }) => {
  const [isActive, setIsActive] = useState(initialValue)
  const toggleButtonClasses = `flex items-center rounded-full h-5 w-10 ${isActive ? 'bg-purple-600' : 'bg-gray-400'}`

  const handleClick = () => {
    setIsActive(!isActive)
    onClick(isActive ? 'light' : 'dark')
  }

  return (
    <button className={toggleButtonClasses} onClick={handleClick}>
      <span
        className={`${
          isActive ? 'translate-x-5' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
      ></span>
    </button>
  )
}
