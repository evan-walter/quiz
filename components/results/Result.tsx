interface Props {
  languagePick?: number
  thumbURL: string
  recommendTextPrimary: string
  title: string
  languageIconURL: string
  feature1: string
  feature2: string | React.ReactElement
  url: string
}

export default function Result({
  languagePick = 0,
  thumbURL,
  recommendTextPrimary,
  title,
  languageIconURL,
  feature1,
  feature2,
  url,
}: Props) {
  return (
    <>
      <div
        className={`mx-auto mt-24 grid grid-cols-1 bg-white drop-shadow-lg md:grid-cols-2 ${
          languagePick === 1 ? null : 'max-w-2xl'
        }`}
      >
        <div>
          <img
            src='`${thumbURL}`'
            className='h-full overflow-hidden object-cover'
            alt={`The ${title} Image`}
          />
          {languagePick === 0 ? null : (
            <div className='w-full -translate-y-10 bg-orange-500 py-2 text-center font-bold text-white'>
              {languagePick === 1
                ? 'Recommended'
                : languagePick === 2
                ? 'Another Great Choice'
                : null}
            </div>
          )}
        </div>
        <div className='flex flex-col items-center justify-around gap-4 px-4 py-6 text-center'>
          <p className={languagePick === 1 ? 'text-xl font-bold' : ''}>
            {recommendTextPrimary}
          </p>
          <p className='text-blue-500 text-3xl font-bold'>The {title}</p>
          <img src={languageIconURL} alt={`The ${title} Language Icon`} />
          <p>{feature1}</p>
          {feature2 ? <p>{feature2}</p> : null}
          <a
            href={url}
            className='bg-blue-500 rounded-xl px-6 py-2 text-center font-bold uppercase text-white drop-shadow-lg transition hover:scale-105 focus:outline-gray-500'
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  )
}
