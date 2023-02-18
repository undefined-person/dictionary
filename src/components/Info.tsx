import { Title } from 'common'
import { useWord } from 'context'

import NewWindowIcon from 'assets/icon-new-window.svg'
import { HelpText, Meaning } from 'components'

export const Info = () => {
  const { isLoading, error, data } = useWord()

  if (isLoading) {
    return <HelpText type="loading" />
  }

  if (error) {
    return <HelpText type="notFound" />
  }

  if (!data || !Object.keys(data).length) {
    return <HelpText type="search" />
  }

  const handleAudio = () => {
    const audio = new Audio(data.audio)
    audio.play()
  }

  return (
    <div className="pb-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-6xl font-bold text-black-100 dark:text-white md:text-3xl break-all">{data.word}</h2>
          <span className="text-2xl text-purple-600 md:text-lg">{data.phonetic}</span>
        </div>
        {data.audio ? (
          <button onClick={handleAudio}>
            <svg className="cursor-pointer group w-20 md:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
              <g fill="#A445ED" fillRule="evenodd">
                <circle
                  cx="37.5"
                  cy="37.5"
                  r="37.5"
                  className="opacity-25 group-hover:opacity-100 transition-opacity duration-300"
                />
                <path d="M29 27v21l21-10.5z" className="group-hover:fill-white transition-colors duration-300" />
              </g>
            </svg>
          </button>
        ) : null}
      </div>
      {data.meanings.map((meaning, index) => {
        return (
          <div key={index}>
            <Title>{meaning.partOfSpeech}</Title>
            <h3 className="text-xl text-gray-300 md:text-base">Meaning</h3>
            <div className="mt-8">
              <ul className="flex flex-col gap-y-2">
                {meaning.definitions.map((definition) => {
                  return (
                    <li
                      key={definition.definition}
                      className="flex flex-col gap-y-2 text-black-100 dark:text-white relative md:text-sm"
                    >
                      <span className="pl-4">{definition.definition}</span>
                      {definition.example && (
                        <span className="text-gray-300 dark:text-gray-400 pl-4">&#34;{definition.example}&#34;</span>
                      )}
                      <span
                        className="absolute left-0 top-2 bg-purple-600 w-1 h-1 rounded-full"
                        style={{ content: "'•'" }}
                      ></span>
                    </li>
                  )
                })}
              </ul>
              <Meaning meanings={meaning.antonyms} title="Antonyms" />
              <Meaning meanings={meaning.synonyms} title="Synonyms" />
            </div>
          </div>
        )
      })}
      <hr className="mt-6" />
      <div className="flex items-center mt-6 md:flex-col md:items-start">
        <h4 className="text-gray-300 md:text-sm">Source</h4>
        <div className="flex ml-4 md:ml-0 md:w-full">
          <a
            className="mr-2 underline text-black-100 dark:text-white hover:text-primary md:text-sm break-all"
            target="_blank"
            rel="noreferrer"
            href={data.sourceUrls[0]}
          >
            {data.sourceUrls[0]}
          </a>
          <img className="md:w-4" src={NewWindowIcon} alt="New Window" />
        </div>
      </div>
    </div>
  )
}
