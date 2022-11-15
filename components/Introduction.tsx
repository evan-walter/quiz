interface Props {
  children: React.ReactElement
}

export default function Introduction({ children }: Props) {
  return (
    <>
      <div className='bg-gray-100'>
        <div className='container flex max-w-2xl flex-col justify-between gap-6 pb-16'>
          <h1 className='text-center text-2xl font-bold'>
            Which Programming Language Should I Learn?
          </h1>
          <p>
            This question is common among those who are new to programming. The
            best way to get started is to just choose a language and focus on
            learning it. It doesn't matter which language you choose at first.
            It's more about learning problem solving fundamentals, which
            transfer to most languages in the end.
          </p>
          <p>
            The goal of this quiz is to teach you some{' '}
            <span className='font-bold text-blue-500'>
              basic characteristics
            </span>{' '}
            of several popular programming languages and to{' '}
            <span className='font-bold text-blue-500'>ease your mind</span>{' '}
            about which one to choose.
          </p>
          {children}
        </div>
      </div>
    </>
  )
}
