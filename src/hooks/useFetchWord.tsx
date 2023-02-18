import { useState } from 'react'

import { IWord, Phonetic } from 'models'

export const useFetchWord = (word: string) => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState<IWord>({} as IWord)

  const fetchData = async () => {
    setLoading(true)
    setError(false)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${word}`)
      const data = await response.json()

      const audio = data[0].phonetics.find((phonetic: Phonetic) => phonetic.audio).audio

      setData({ ...data[0], audio })
    } catch (error) {
      setError(true)
      console.error(error)
    }

    setLoading(false)
  }

  return { isLoading, error, data, fetchData }
}
