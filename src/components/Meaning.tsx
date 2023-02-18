import { FC } from 'react'

interface MeaningProps {
  title: string
  meanings?: string[]
}

export const Meaning: FC<MeaningProps> = ({ meanings, title }) => {
  return (
    <>
      {meanings?.length ? (
        <div className="flex gap-x-4 items-center mt-4">
          <h3 className="text-xl text-gray-300 md:text-base">{title}</h3>
          <div className="flex">
            {meanings.map((meaning) => {
              return (
                <span key={meaning} className="text-purple-600 font-bold mr-2 text-xl md:text-base">
                  {meaning}
                </span>
              )
            })}
          </div>
        </div>
      ) : null}
    </>
  )
}
