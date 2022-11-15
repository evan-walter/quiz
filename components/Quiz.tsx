import { useState, useRef, useEffect } from 'react'
import BtnArrow from './Btns/BtnArrow'
import Header from './Header'
import Evan from './Evan'
import Introduction from './Introduction'
import Email from './Email'
import Questions from './Questions'
import Results from './Results/Results'
import { questions } from '../data/quizData'

export default function Quiz() {
  //// useState and useRef Declarations
  // Shows
  const [showIntroduction, setShowIntroduction] = useState(true)
  const [showEmail, setShowEmail] = useState(false)
  const [showQuestions, setShowQuestions] = useState(false)
  const [showResults, setShowResults] = useState(false)
  // Email
  const [emailEntered, setEmailEntered] = useState(false)
  // Questions Logic
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const singleAnswersSelected = useRef<any[]>([])
  const [whichSchoolSubjects, setWhichSchoolSubjects] =
    useState({
      english: false,
      history: false,
      math: false,
      science: false,
      recess: false,
    })
  const [whichExtracurriculars, setWhichExtracurriculars] =
    useState({
      debate: false,
      chess: false,
      instrument: false,
      art: false,
      act: false,
      gym: false,
    })
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  // Results
  const [defaultScores, setDefaultScores] = useState([
    { selector: 'cp', score: 0 },
    { selector: 'ja', score: 0 },
    { selector: 'py', score: 0 },
    { selector: 'rb', score: 0 },
    { selector: 'js', score: 0 },
  ])
  const includePython = useRef(false)
  const includeRuby = useRef(false)
  const addLisp = useRef(false)
  const addRust = useRef(false)
  const resultsCalculated = useRef(false)
  //// END useState and useRef Declarations

  //// Helper Functions
  // Handle Shows
  const handleShowEmail = () => {
    setShowEmail(true)
    setShowIntroduction(false)
    setShowQuestions(false)
    setShowResults(false)
  }

  const handleShowQuestions = () => {
    setShowQuestions(true)
    setShowIntroduction(false)
    setShowEmail(false)
    setShowResults(false)
  }

  const handleShowResults = () => {
    setShowResults(true)
    setShowIntroduction(false)
    setShowEmail(false)
    setShowQuestions(false)
  }
  // END Handle Shows

  // Questions
  const handleProceedQuestions = () => {
    // Increment to move to next question. Once you reach the end of the questions, show results.
    const nextQuestion = currentQuestion + 1
    nextQuestion <= questions.length
      ? setCurrentQuestion(nextQuestion)
      : handleFinishQuiz()
  }

  const handleSingleAns = (e: any) => {
    e.preventDefault()
    singleAnswersSelected.current.push({ selector: e.target.value })
    handleProceedQuestions()
  }

  const handleMultipleAns = (e: any) => {
    if (e.target.value === 'english') {
      setWhichSchoolSubjects((s) => {
        return {
          ...s,
          english: !whichSchoolSubjects.english,
        }
      })
    }
    if (e.target.value === 'history') {
      setWhichSchoolSubjects((s) => {
        return {
          ...s,
          history: !whichSchoolSubjects.history,
        }
      })
    }
    if (e.target.value === 'math') {
      setWhichSchoolSubjects((s) => {
        return {
          ...s,
          math: !whichSchoolSubjects.math,
        }
      })
    }
    if (e.target.value === 'science') {
      setWhichSchoolSubjects((s) => {
        return {
          ...s,
          science: !whichSchoolSubjects.science,
        }
      })
    }
    if (e.target.value === 'recess') {
      setWhichSchoolSubjects((s) => {
        return {
          ...s,
          recess: !whichSchoolSubjects.recess,
        }
      })
    }
    if (e.target.value === 'debate') {
      setWhichExtracurriculars((s) => {
        return {
          ...s,
          debate: !whichExtracurriculars.debate,
        }
      })
    }
    if (e.target.value === 'chess') {
      setWhichExtracurriculars((s) => {
        return {
          ...s,
          chess: !whichExtracurriculars.chess,
        }
      })
    }
    if (e.target.value === 'instrument') {
      setWhichExtracurriculars((s) => {
        return {
          ...s,
          instrument: !whichExtracurriculars.instrument,
        }
      })
    }
    if (e.target.value === 'art') {
      setWhichExtracurriculars((s) => {
        return {
          ...s,
          art: !whichExtracurriculars.art,
        }
      })
    }
    if (e.target.value === 'act') {
      setWhichExtracurriculars((s) => {
        return {
          ...s,
          act: !whichExtracurriculars.act,
        }
      })
    }
    if (e.target.value === 'gym') {
      setWhichExtracurriculars((s) => {
        return {
          ...s,
          gym: !whichExtracurriculars.gym,
        }
      })
    }
  }
  // END Questions

  // Results
  const handleScore = () => {
    // Single Answers
    switch (singleAnswersSelected.current[0].selector) {
      case 'cold' || 'unsure':
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score + 3 },
          { selector: 'ja', score: s[1].score + 3 },
          { selector: 'py', score: s[2].score + 3 },
          { selector: 'rb', score: s[3].score + 3 },
          { selector: 'js', score: s[4].score + 3 },
        ])
      case 'hot':
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score },
          { selector: 'ja', score: s[1].score + 7 },
          { selector: 'py', score: s[2].score + 9 },
          { selector: 'rb', score: s[3].score + 7 },
          { selector: 'js', score: s[4].score },
        ])
    }
    switch (singleAnswersSelected.current[1].selector) {
      case 'soft':
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score },
          { selector: 'ja', score: s[1].score },
          { selector: 'py', score: s[2].score + 6 },
          { selector: 'rb', score: s[3].score + 6 },
          { selector: 'js', score: s[4].score },
        ])
      case 'middle':
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score },
          { selector: 'ja', score: s[1].score + 6 },
          { selector: 'py', score: s[2].score + 6 },
          { selector: 'rb', score: s[3].score },
          { selector: 'js', score: s[4].score + 4 },
        ])
      case 'firm':
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score + 6 },
          { selector: 'ja', score: s[1].score },
          { selector: 'py', score: s[2].score },
          { selector: 'rb', score: s[3].score },
          { selector: 'js', score: s[4].score },
        ])
    }
    switch (singleAnswersSelected.current[2].selector) {
      case 'memoryFoam':
        includePython.current = true
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score + 7 },
          { selector: 'ja', score: s[1].score },
          { selector: 'py', score: s[2].score + 7 },
          { selector: 'rb', score: s[3].score },
          { selector: 'js', score: s[4].score },
        ])
      case 'innerspring':
        includeRuby.current = true
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score },
          { selector: 'ja', score: s[1].score + 7 },
          { selector: 'py', score: s[2].score },
          { selector: 'rb', score: s[3].score + 7 },
          { selector: 'js', score: s[4].score },
        ])
      case 'hybrid':
        includeRuby.current = true
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score },
          { selector: 'ja', score: s[1].score + 7 },
          { selector: 'py', score: s[2].score },
          { selector: 'rb', score: s[3].score + 7 },
          { selector: 'js', score: s[4].score + 7 },
        ])
      case 'unsure':
        includeRuby.current = true
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score + 7 },
          { selector: 'ja', score: s[1].score },
          { selector: 'py', score: s[2].score + 7 },
          { selector: 'rb', score: s[3].score },
          { selector: 'js', score: s[4].score },
        ])
    }
    switch (singleAnswersSelected.current[3].selector) {
      case 'back':
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score + 4 },
          { selector: 'ja', score: s[1].score + 4 },
          { selector: 'py', score: s[2].score + 4 },
          { selector: 'rb', score: s[3].score + 4 },
          { selector: 'js', score: s[4].score },
        ])
      case 'side':
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score },
          { selector: 'ja', score: s[1].score + 4 },
          { selector: 'py', score: s[2].score + 4 },
          { selector: 'rb', score: s[3].score + 4 },
          { selector: 'js', score: s[4].score },
        ])
      case 'stomach':
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score + 4 },
          { selector: 'ja', score: s[1].score + 4 },
          { selector: 'py', score: s[2].score },
          { selector: 'rb', score: s[3].score + 4 },
          { selector: 'js', score: s[4].score },
        ])
      case 'combo':
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score },
          { selector: 'ja', score: s[1].score + 4 },
          { selector: 'py', score: s[2].score + 4 },
          { selector: 'rb', score: s[3].score },
          { selector: 'js', score: s[4].score },
        ])
    }
    switch (singleAnswersSelected.current[4].selector) {
      case 'yes':
        setDefaultScores((s) => [
          { selector: 'cp', score: s[0].score },
          { selector: 'ja', score: s[1].score },
          { selector: 'py', score: s[2].score },
          { selector: 'rb', score: s[3].score },
          { selector: 'js', score: s[4].score + 4 },
        ])
    }
    // `singleAnswersSelected.current[5]` has no effect on quiz scores
    if (
      singleAnswersSelected.current.length > 6 &&
      singleAnswersSelected.current[6].selector === 'schoolSubjectsNone'
    ) {
      setDefaultScores((s) => [
        { selector: 'cp', score: s[0].score },
        { selector: 'ja', score: s[1].score + 3 },
        { selector: 'py', score: s[2].score + 3 },
        { selector: 'rb', score: s[3].score },
        { selector: 'js', score: s[4].score },
      ])
    }
    // The following line has no effect on quiz scores.
    // `singleAnswersSelected.current[6].selector === 'extracurricularsNone' || singleAnswersSelected.current[7].selector === 'extracurricularsNone'`
    // END Single Answers

    // Multiple Answers
    if (whichSchoolSubjects.english) {
      setDefaultScores((s) => [
        { selector: 'cp', score: s[0].score + 3 },
        { selector: 'ja', score: s[1].score + 3 },
        { selector: 'py', score: s[2].score },
        { selector: 'rb', score: s[3].score + 3 },
        { selector: 'js', score: s[4].score },
      ])
    }
    if (
      whichSchoolSubjects.history ||
      whichSchoolSubjects.math
    ) {
      addLisp.current = true
      setDefaultScores((s) => [
        { selector: 'cp', score: s[0].score },
        { selector: 'ja', score: s[1].score + 3 },
        { selector: 'py', score: s[2].score + 3 },
        { selector: 'rb', score: s[3].score + 3 },
        { selector: 'js', score: s[4].score },
      ])
    }
    if (whichSchoolSubjects.science) {
      setDefaultScores((s) => [
        { selector: 'cp', score: s[0].score },
        { selector: 'ja', score: s[1].score + 3 },
        { selector: 'py', score: s[2].score + 3 },
        { selector: 'rb', score: s[3].score + 3 },
        { selector: 'js', score: s[4].score },
      ])
    }
    if (whichSchoolSubjects.recess) {
      setDefaultScores((s) => [
        { selector: 'cp', score: s[0].score },
        { selector: 'ja', score: s[1].score + 3 },
        { selector: 'py', score: s[2].score },
        { selector: 'rb', score: s[3].score + 3 },
        { selector: 'js', score: s[4].score },
      ])
    }
    if (
      whichExtracurriculars.debate ||
      whichExtracurriculars.chess ||
      whichExtracurriculars.instrument ||
      whichExtracurriculars.art
    ) {
      addLisp.current = true
    }
    if (whichExtracurriculars.act) {
      addLisp.current = true
    }
  }

  const handleFinishQuiz = () => {
    if (!resultsCalculated.current) {
      handleScore()
      setDefaultScores((s) => s.sort((a, b) => b.score - a.score).slice(0, 2))
      resultsCalculated.current = true
    }
    if (emailEntered) {
      handleShowResults()
    } else {
      handleShowEmail()
    }
  }
  // END Results

  // Email
  const handleProceedEmail = () => {
    resultsCalculated.current ? handleShowResults() : handleShowQuestions()
  }

  const handleEmailEntered = () => {
    setEmailEntered(true)
    setShowEmail(false)
  }
  // END Email

  // Back Btn
  const handleBackBtn = () => {
    singleAnswersSelected.current = singleAnswersSelected.current.slice(
      0,
      singleAnswersSelected.current.length - 1
    )
    setCurrentQuestion(currentQuestion - 1)
  }
  // END Back Btn

  // Set Progress Bar Side Effect
  useEffect(() => {
    setProgressBarWidth(Math.round((currentQuestion / questions.length) * 100))
  }, [currentQuestion])
  // END Set Progress Bar Side Effect
  //// END Helper Functions

  return (
    <div className='bg-gray-100'>
      <Header
        showIntroduction={showIntroduction}
        showQuestions={showQuestions}
        currentQuestion={currentQuestion}
        evan={<Evan />}
      />
      {showIntroduction ? (
        <Introduction>
          <BtnArrow handleClick={handleShowEmail} text='Begin' />
        </Introduction>
      ) : showEmail ? (
        <Email
          handleProceedEmail={handleProceedEmail}
          currentQuestion={currentQuestion}
          singleAnswersSelected={singleAnswersSelected.current} // keep this for klaviyo data later
          resultsCalculated={resultsCalculated.current}
          handleEmailEntered={handleEmailEntered}
        />
      ) : showQuestions ? (
        <Questions
          currentQuestion={currentQuestion}
          progressBarWidth={progressBarWidth}
          whichSchoolSubjects={whichSchoolSubjects}
          whichExtracurriculars={whichExtracurriculars}
          handleProceedQuestions={handleProceedQuestions}
          handleSingleAns={handleSingleAns}
          handleMultipleAns={handleMultipleAns}
          handleBackBtn={handleBackBtn}
        />
      ) : showResults ? (
        <Results
          singleAnswersSelected={singleAnswersSelected.current}
          defaultScores={defaultScores}
          includePython={includePython.current}
          includeRuby={includeRuby.current}
          addLisp={addLisp.current}
          addRust={addRust.current}
          handleShowEmail={handleShowEmail}
          emailEntered={emailEntered}
          evan={<Evan />}
        />
      ) : null}
    </div>
  )
}
