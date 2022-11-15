import { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import { questions } from '../data/quizData'
import BtnArrow from './Btns/BtnArrow'

interface Props {
  currentQuestion: number
  progressBarWidth: number
  whichSchoolSubjects: any
  whichExtracurriculars: any
  handleProceedQuestions: React.MouseEventHandler
  handleSingleAns: React.MouseEventHandler
  handleMultipleAns: React.MouseEventHandler
  handleBackBtn: React.MouseEventHandler
}

export default function Questions({
  currentQuestion,
  progressBarWidth,
  whichSchoolSubjects,
  whichExtracurriculars,
  handleProceedQuestions,
  handleSingleAns,
  handleMultipleAns,
  handleBackBtn,
}: Props) {
  const [showNextBtn, setShowNextBtn] = useState(false)

  // Show Next Btn
  const handleShowNextBtn = () => {
    if (
      questions[currentQuestion - 1].questionSelector === 'schoolSubjects'
    ) {
      whichSchoolSubjects.firstIssue === true ||
      whichSchoolSubjects.secondIssue === true ||
      whichSchoolSubjects.thirdIssue === true ||
      whichSchoolSubjects.fourthIssue === true ||
      whichSchoolSubjects.fifthIssue === true
        ? setShowNextBtn(true)
        : setShowNextBtn(false)
    }

    if (questions[currentQuestion - 1].questionSelector === 'extracurriculars') {
      whichExtracurriculars.firstFollowing === true ||
      whichExtracurriculars.secondFollowing === true ||
      whichExtracurriculars.thirdFollowing === true ||
      whichExtracurriculars.fourthFollowing === true ||
      whichExtracurriculars.fifthFollowing === true
        ? setShowNextBtn(true)
        : setShowNextBtn(false)
    }
  }

  useEffect(() => {
    handleShowNextBtn()
  }, [
    whichSchoolSubjects,
    whichExtracurriculars,
    currentQuestion,
  ])
  // END Show Next Btn

  const questionItems = questions[currentQuestion - 1].answerOptions.map(
    (answerOption: any, i: number) => (
      <Fragment key={i}>
        {showNextBtn &&
        (answerOption.selector === 'schoolSubjectsNone' ||
          answerOption.selector === 'extracurricularsNone') ? (
          <div className='xsQuiz:my-0 xsQuiz:h-[272px] mt-16 mb-8 flex w-52 items-center justify-center'>
            <BtnArrow
              handleClick={handleProceedQuestions}
              text={
                currentQuestion === questions.length
                  ? 'See My Results!'
                  : 'Next'
              }
            />
          </div>
        ) : (
          <div className='flex w-52 flex-col items-center p-4'>
            <div
              className={`rounded-xl border-2 p-2 ${
                whichSchoolSubjects[answerOption.selector] ||
                whichExtracurriculars[answerOption.selector]
                  ? 'border-blue-500'
                  : 'border-gray-100'
              }`}
            >
              <Image
                src={answerOption.imgSrc}
                width={250}
                height={250}
                className='rounded-xl'
                alt={`"${answerOption.answerText}" Icon`}
              />
            </div>
            <button
              className='bg-blue-500 mt-5 w-full rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105 focus:outline-gray-500'
              value={answerOption.selector}
              onClick={
                answerOption.singleAns
                  ? (e) => handleSingleAns(e)
                  : (e) => handleMultipleAns(e)
              }
            >
              {answerOption.answerText}
            </button>
          </div>
        )}
      </Fragment>
    )
  )

  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='w-full bg-gray-200 py-6'>
          <div className='container max-w-3xl'>
            <p className='text-center'>
              Question: {currentQuestion}/{questions.length}
            </p>
            <div className='border-blue-500 z-10 mt-2 w-full overflow-hidden rounded-full border bg-gray-100'>
              <div
                className='bg-blue-500-400 z-20 h-full rounded-full bg-blue-500'
                style={{
                  width: `${progressBarWidth.toString()}%`,
                  transition: 'width 0.5s',
                }}
              >
                &nbsp;
              </div>
            </div>
          </div>
        </div>
        <div className='container my-16'>
          <h3 className='text-center'>
            {questions[currentQuestion - 1].questionText}
          </h3>
          <div
            className={`mx-auto my-8 flex flex-wrap justify-center ${
              questions[currentQuestion - 1].questionSelector ==
                'schoolSubjects' ||
              questions[currentQuestion - 1].questionSelector ==
                'extracurriculars'
                ? 'max-w-3xl'
                : 'max-w-4xl'
            }`}
          >
            {questionItems}
          </div>
          {currentQuestion === 1 ? null : (
            <div className='container max-w-3xl'>
              <BtnArrow
                handleClick={handleBackBtn}
                addClassNames='text-gray-700 mx-auto'
                text='Back'
                small
                arrowLeft
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
