import { quotes, questions } from '../data/quizData'

interface Props {
  showIntroduction: boolean
  showQuestions: boolean
  currentQuestion: number
  evan: React.ReactElement
}

export default function Header({
  showIntroduction,
  showQuestions,
  currentQuestion,
  evan,
}: Props) {
  return (
    <>
      <div className='container max-w-4xl pt-8 pb-16'>
        <div className='mx-auto bg-white px-10 py-4 drop-shadow-lg sm:p-4'>
          <div className='grid grid-cols-1 gap-2 sm:grid-cols-5 sm:gap-4'>
            {evan}
            <div className='flex grid-rows-2 flex-col gap-2 text-center sm:col-span-4 sm:gap-4 sm:text-left'>
              <p className='text-blue-500'>
                <span className='font-bold'>Evan Walter</span>
                <span>, Full Stack Engineer</span>
              </p>
              <p className='font-semibold'>
                "
                {showIntroduction
                  ? quotes[0]
                  : showQuestions
                  ? quotes[currentQuestion]
                  : quotes[questions.length + 1]}
                "
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
