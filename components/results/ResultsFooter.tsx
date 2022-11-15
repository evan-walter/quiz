import Contact from './Contact'

interface Props {
  evan: React.ReactElement
}

export default function ResultsFooter({ evan }: Props) {
  return (
    <>
      <div className='mt-24 bg-white px-10 py-4 drop-shadow-lg sm:p-4'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-5'>
          {evan}
          <div className='flex flex-col justify-between text-center sm:col-span-4 sm:text-left'>
            <h2 className='text-2xl'>Still have questions?</h2>
            <p className='my-4'>Reach out to me directly.</p>
            <p>
              <span className='font-bold text-blue-500'>Have questions?</span>
              <span> Contact me directly with one of the options below.</span>
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2'>
        (Contact form, social links, portfolio link, and other options go here.)
      </div>
    </>
  )
}
