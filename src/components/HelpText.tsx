import { FC, useMemo } from 'react'

interface HelpTextProps {
  type: 'search' | 'loading' | 'notFound'
}

export const HelpText: FC<HelpTextProps> = ({ type }) => {
  const text = useMemo(
    () => ({
      search: {
        icon: '🔍',
        title: 'Search for a word to get started',
      },
      loading: {
        icon: '⌛',
        title: 'Please wait...',
      },
      notFound: {
        icon: '🤷‍♂️',
        title: 'Word not found',
      },
    }),
    []
  )

  return (
    <div className="flex flex-col items-center m-auto text-2xl text-black-100 font-bold dark:text-white md:text-lg">
      <span className="text-4xl">{text[type].icon}</span> {text[type].title}
    </div>
  )
}
