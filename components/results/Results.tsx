import Result from './Result'
import ResultsEmailBtn from './ResultsEmailBtn'
import ResultsFooter from './ResultsFooter'
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
} from '../../data/quizData'

interface Props {
  singleAnswersSelected: any
  defaultScores: any
  includeFirstExample: boolean
  includeSecondExample: boolean
  includeThirdExample: boolean
  includeFourthExample: boolean
  handleShowEmail: React.MouseEventHandler
  emailEntered: boolean
  evan: React.ReactElement
}

const Results = ({
  singleAnswersSelected,
  defaultScores,
  includeFirstExample,
  includeSecondExample,
  includeThirdExample,
  includeFourthExample,
  handleShowEmail,
  emailEntered,
  evan,
}: Props) => {
  const firstPick = (
    <Result
      languagePick={1}
      thumbURL={resultsThumbURLs[defaultScores[0].selector]}
      recommendTextPrimary='I recommend'
      title={resultsTitles[defaultScores[0].selector]}
      languageIconURL={resultsLanguageIconURLs[defaultScores[0].selector]}
      feature1={resultsFeature1[defaultScores[0].selector]}
      feature2={resultsFeature2[defaultScores[0].selector]}
      url={resultsFour[defaultScores[0].selector]}
    />
  )

  const secondPick =
    includeFirstExample || includeSecondExample ? (
      includeFirstExample ? (
        <Result
          languagePick={2}
          thumbURL={resultsThumbURLs.venusLegend}
          recommendTextPrimary='I also recommend...'
          title={resultsTitles.venusLegend}
          languageIconURL={resultsLanguageIconURLs.venusLegend}
          feature1={resultsFeature1.venusLegend}
          feature2={resultsFeature2.venusLegend}
          url={resultsFour.venusLegend}
        />
      ) : (
        <Result
          languagePick={2}
          thumbURL={resultsThumbURLs.venusHybrid}
          recommendTextPrimary='I also recommend...'
          title={resultsTitles.venusHybrid}
          languageIconURL={resultsLanguageIconURLs.venusHybrid}
          feature1={resultsFeature1.venusHybrid}
          feature2={resultsFeature2.venusHybrid}
          url={resultsFour.venusHybrid}
        />
      )
    ) : (
      <Result
        thumbURL={resultsThumbURLs[defaultScores[1].selector]}
        recommendTextPrimary='I also recommend...'
        title={resultsTitles[defaultScores[1].selector]}
        languageIconURL={resultsLanguageIconURLs[defaultScores[1].selector]}
        feature1={resultsFeature1[defaultScores[1].selector]}
        feature2={resultsFeature2[defaultScores[1].selector]}
        url={resultsFour[defaultScores[1].selector]}
      />
    )

  return (
    <>
      <div className='container max-w-4xl py-10'>
        <div className='border-blue-500 border-4'>
          <h3 className='m-auto -mt-5 w-fit bg-gray-100 px-8 text-2xl font-bold'>
            Your <span className='text-blue-500'>Results</span>
          </h3>
          <div className='my-6 text-lg'>
            <div className='flex flex-col items-center justify-around px-1 text-center md:flex-row'>
              <p className='m-1 text-lg'>
                Sleeper Type:{' '}
                <span className='font-bold'>
                  {resultsOne[singleAnswersSelected[3].selector]}
                </span>
              </p>
              <p className='m-1 text-lg'>
                Firmness Preference:{' '}
                <span className='font-bold'>
                  {resultsTwo[singleAnswersSelected[1].selector]}
                </span>
              </p>
              <p className='m-1 text-lg'>
                Sleep Temperature:{' '}
                <span className='font-bold'>
                  {resultsThree[singleAnswersSelected[0].selector]}
                </span>
              </p>
            </div>
          </div>
          {emailEntered ? null : (
            <ResultsEmailBtn handleShowEmail={handleShowEmail} />
          )}
          {firstPick}
        </div>
        {secondPick}
        {includeThirdExample ? (
          <Result
            thumbURL={resultsThumbURLs.adjustableBase}
            recommendTextPrimary="I'd also recommend adding..."
            title={resultsTitles.adjustableBase}
            languageIconURL={resultsLanguageIconURLs.adjustableBase}
            feature1={resultsFeature1.adjustableBase}
            feature2={resultsFeature2.adjustableBase}
            url={resultsFour.adjustableBase}
          />
        ) : null}
        {includeFourthExample ? (
          <Result
            thumbURL={resultsThumbURLs.splitKingAdjustableSet}
            recommendTextPrimary="I'd also recommend adding..."
            title={resultsTitles.splitKingAdjustableSet}
            languageIconURL={resultsLanguageIconURLs.splitKingAdjustableSet}
            feature1={resultsFeature1.splitKingAdjustableSet}
            feature2={resultsFeature2.splitKingAdjustableSet}
            url={resultsFour.splitKingAdjustableSet}
          />
        ) : null}
        <div className='mx-auto max-w-sm'>
          {emailEntered ? null : (
            <ResultsEmailBtn handleShowEmail={handleShowEmail} wide />
          )}
          <a
            href='#'
            className='focus:outline-blue-500 mx-auto mt-8 flex w-full items-center justify-center rounded-xl bg-gray-500 px-5 py-3 font-semibold text-gray-100 drop-shadow-lg transition hover:scale-105'
          >
            <span>
              <svg
                className='h-5 fill-current pr-2'
                enableBackground='new 0 0 14.155 14.155'
                viewBox='0 0 14.155 14.155'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='m12.083 1.887c-.795-.794-1.73-1.359-2.727-1.697v2.135c.48.239.935.55 1.334.95 1.993 1.994 1.993 5.236 0 7.229-1.993 1.99-5.233 1.99-7.229 0-1.991-1.995-1.991-5.235 0-7.229.005-.006.021-.016.028-.025h.002l1.181 1.179-.007-3.744-3.742-.005 1.176 1.176c-.007.012-.018.024-.027.031-2.763 2.762-2.763 7.243 0 10.005 2.767 2.765 7.245 2.765 10.011 0 2.761-2.762 2.764-7.243 0-10.005z'
                  fill='currentColor'
                ></path>
              </svg>
            </span>
            <span>Retake the Quiz</span>
          </a>
        </div>
        <ResultsFooter evan={evan} />
      </div>
    </>
  )
}

export default Results
