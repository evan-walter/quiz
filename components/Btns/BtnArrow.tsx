interface Props {
  handleClick?: React.MouseEventHandler
  addClassNames?: string
  text?: string
  small?: boolean
  arrowLeft?: boolean
  children?: React.ReactElement
}

export default function BtnArrow({
  handleClick,
  addClassNames = '',
  text = '',
  small,
  arrowLeft,
  children,
}: Props) {
  return (
    <>
      <button
        onClick={handleClick}
        className={`w-contain group flex items-center justify-center font-bold uppercase leading-none text-blue-500 focus:outline-blue-500 ${addClassNames} ${
          !small ? 'text-2xl' : ''
        } ${arrowLeft ? 'flex-row-reverse' : ''}`}
      >
        <span className={arrowLeft ? 'ml-2' : 'mr-2'}>
          {text ? text : children}
        </span>
        <span
          className={`transition ${
            arrowLeft
              ? 'group-hover:-translate-x-2'
              : 'group-hover:translate-x-2'
          }`}
        >
          {arrowLeft ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={!small ? '39' : '25'}
              height={!small ? '39' : '25'}
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={!small ? '39' : '25'}
              height={!small ? '39' : '25'}
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
              />
            </svg>
          )}
        </span>
      </button>
    </>
  )
}
