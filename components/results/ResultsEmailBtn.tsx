interface Props {
  handleShowEmail: React.MouseEventHandler
  wide?: boolean
}

export default function ResultsEmailBtn({ handleShowEmail, wide }: Props) {
  const classNames = wide
    ? 'justify-center w-full mt-24'
    : 'justify-between -mb-16'

  return (
    <>
      <button
        onClick={handleShowEmail}
        className={`focus:outline-blue-500 mx-auto flex items-center rounded-xl bg-gray-900 px-5 py-3 font-bold uppercase text-white drop-shadow-lg transition hover:scale-105 ${classNames}`}
      >
        <span>
          <svg
            className='h-5 fill-current pr-2 text-white'
            enableBackground='new 0 0 184 184'
            viewBox='0 0 184 184'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m160.746 24.61h-137.492c-12.822 0-23.254 10.432-23.254 23.254v88.271c0 12.822 10.432 23.254 23.254 23.254h137.492c12.822 0 23.254-10.432 23.254-23.254v-88.271c0-12.822-10.432-23.254-23.254-23.254zm-3.633 15-65.113 50.299-65.113-50.299zm3.633 104.78h-137.492c-4.551 0-8.254-3.703-8.254-8.254v-86.754l72.415 55.94c1.35 1.043 2.968 1.564 4.585 1.564s3.235-.521 4.585-1.564l72.415-55.94v86.753c0 4.552-3.703 8.255-8.254 8.255z'
              fill='currentColor'
            />
          </svg>
        </span>
        <span>Email My Results</span>
      </button>
    </>
  )
}
