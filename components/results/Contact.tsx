import Image from 'next/image'

interface Props {
  href: string
  icon?: boolean
  src?: string
  alt?: string
  text: string
}

export default function Contact({
  href,
  icon,
  src = '',
  alt = '',
  text,
}: Props) {
  return (
    <>
      <a
        href={href}
        className='focus:outline-blue-500 flex items-center justify-center rounded-lg bg-gray-300 px-4 py-3 text-sm font-semibold drop-shadow-sm transition hover:scale-105'
      >
        {icon ? <Image src={src} width={20} height={20} alt={alt} /> : null}
        <span className='ml-2'>{text}</span>
      </a>
    </>
  )
}
