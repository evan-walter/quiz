import BtnArrow from './Btns/BtnArrow'
import { useState } from 'react'
import {
  resultsOne,
  resultsTwo,
  resultsThree,
  resultsTitles,
  resultsDescs,
  resultsFour,
  resultsThumbURLs,
  resultsLanguageIconURLs,
  resultsFeature1,
  resultsFeature2,
} from '../data/quizData' // keep this for klaviyo data later

const KLAVIYO_TOKEN = process.env.KLAVIYO_PRIVATE_KEY

// Data for klavio below goes after `token` parameter.
// 'event': 'Quiz - Entered Email',
//     '$email': '${formData.email}',
//     '$first_name': '${formData.name}',
//     'Quiz: Recommended Language': '${firstPickTitle}',
//     'Quiz: Recommended URL': '${firstPickUrl}',
//   'customer_properties': {
//     'Quiz: Sample Result': '${
//       resultsOne[singleAnswersSelected[3].selector]
//     }',
//     'Quiz: Another Sample Result': '${
//       resultsTwo[singleAnswersSelected[1].selector]
//     }',
//     'Quiz: Yet Another Sample Result': '${
//       resultsThree[singleAnswersSelected[0].selector]
//     }',
//     'Quiz: Is Complete': '${resultsCalculated}'
//   }

interface Props {
  handleProceedEmail: any
  currentQuestion: number
  singleAnswersSelected: any // keep this for klaviyo data later
  resultsCalculated: boolean
  firstPickTitle?: string // keep this for klaviyo data later
  firstPickUrl?: string // keep this for klaviyo data later
  handleEmailEntered: any
}

export default function Email({
  handleProceedEmail,
  currentQuestion,
  singleAnswersSelected, // keep this for klaviyo data later
  resultsCalculated = false,
  firstPickTitle = '', // keep this for klaviyo data later
  firstPickUrl = '', // keep this for klaviyo data later
  handleEmailEntered,
}: Props) {
  const viewMyRecommendationText = `
    
  `

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const createKlaviyoList = () => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        list_name: `${formData.name}`,
        data: `{
        'token': '${KLAVIYO_TOKEN}',
      }`,
      }),
    }

    fetch(
      `https://a.klaviyo.com/api/v2/lists?api_key=${KLAVIYO_TOKEN}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err))
  }

  const handleEmailSubmission = () => {
    createKlaviyoList()
    handleEmailEntered()
    handleProceedEmail()
  }

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='container flex max-w-3xl flex-col items-center pb-16'>
        {currentQuestion === 1 ? (
          <div className='mt-16'>
            <h3 className='mb-4 text-center text-2xl font-bold'>
              Let&apos;s start by getting to know{' '}
              <span className='text-blue-500'>you</span>!
            </h3>
          </div>
        ) : (
          <div>
            <h3 className='mb-4 text-center text-2xl font-bold'>
              Sign up for the <span className='text-blue-500'>Email List</span>!
            </h3>
            {resultsCalculated ? null : (
              <p className='my-4 text-center font-bold'>
                We&apos;re checking for Evan&apos;s recommendation now.
              </p>
            )}
            <p className='mt-4 text-center'>
              Enter your name and email to get added to my email list!
            </p>
          </div>
        )}
        <form
          onSubmit={handleEmailSubmission}
          className='flex w-full flex-col items-center'
        >
          <div className='my-8 w-full'>
            <label
              htmlFor='name'
              className='mb-2 block text-sm font-bold text-gray-700'
            >
              Your Name
            </label>
            <input
              id='name'
              className='w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:outline-blue-500'
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor='email'
              className='mt-6 mb-2 block text-sm font-bold text-gray-700'
            >
              Your Email
            </label>
            <input
              id='email'
              className='w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:outline-blue-500'
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <BtnArrow addClassNames='py-4'>
            <input
              type='submit'
              value={
                currentQuestion === 1 ? 'Continue' : 'View My Recommendation'
              }
              className={`cursor-pointer uppercase focus:outline-blue-500 ${
                currentQuestion === 1 ? '' : 'xsQuiz:text-2xl text-lg'
              }`}
            />
          </BtnArrow>
        </form>
        <button
          onClick={handleProceedEmail}
          className='italic text-blue-500 transition hover:scale-105 focus:outline-blue-500'
        >
          {resultsCalculated
            ? 'No thanks. Just show my results.'
            : 'Skip or enter later'}
        </button>
      </div>
    </>
  )
}
