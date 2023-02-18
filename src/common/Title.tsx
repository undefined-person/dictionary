import { FC, ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export const Title: FC<TitleProps> = ({ children }) => {
  return (
    <h3 className="flex items-center gap-x-4 my-8 text-xl text-black-100 dark:text-white italic after:h-[1px] after:bg-gray-300 after:w-full">
      {children}
    </h3>
  )
}
