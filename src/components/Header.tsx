import { FC } from 'react'

import { Toggle } from 'common'

import Logo from 'assets/logo.svg'

interface HeaderProps {
  toggleTheme: (theme: string) => void
  theme: string
}

export const Header: FC<HeaderProps> = ({ toggleTheme, theme }) => {
  return (
    <header className="flex justify-between">
      <img src={Logo} alt="Logo" />
      <div className="flex items-center gap-x-4">
        <Toggle onClick={toggleTheme} initialValue={theme === 'dark'} />
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
          <path
            fill="none"
            stroke={theme === 'dark' ? 'rgb(167, 51, 255)' : '#838383'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </div>
    </header>
  )
}
