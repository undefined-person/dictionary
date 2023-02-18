import { createContext, FC, useContext } from 'react'

import { useFetchWord } from 'hooks'
import { IWord } from 'models'

interface IWordContext {
  isLoading: boolean
  error: boolean
  data: IWord
  fetchData: () => Promise<void>
}

export const WordContext = createContext<IWordContext>({
  isLoading: false,
  error: false,
  data: {} as IWord,
  fetchData: async () => {},
})

interface WordProviderProps {
  word: string
  children: React.ReactNode
}

export const WordProvider: FC<WordProviderProps> = ({ word, children }) => {
  const { isLoading, error, data, fetchData } = useFetchWord(word)

  return <WordContext.Provider value={{ isLoading, error, data, fetchData }}>{children}</WordContext.Provider>
}

export function useWord() {
  const context = useContext(WordContext)

  if (!context) {
    throw new Error('useWord must be used within a WordProvider')
  }

  return context
}
