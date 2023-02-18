import { useEffect, useState } from 'react'

import { Header, Info, Search } from 'components'
import { WordProvider } from 'context'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme')! : 'light')
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleTheme = (theme: string) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark')
        break
      case 'light':
        document.documentElement.classList.remove('dark')
        break
    }
  }, [theme])

  return (
    <WordProvider word={searchValue}>
      <div className="bg-white dark:bg-black min-h-screen">
        <div className="flex flex-col pt-10 m-auto container md:px-5 md:pt-5">
          <Header toggleTheme={handleTheme} theme={theme} />
          <Search searchValue={searchValue} onChange={handleChange} placeholder="Search..." />
          <Info />
        </div>
      </div>
    </WordProvider>
  )
}

export default App
