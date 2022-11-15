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
  const [whichIssuesChallengesSelected, setWhichIssuesChallengesSelected] =
    useState({
      firstIssue: false,
      secondIssue: false,
      thirdIssue: false,
      fourthIssue: false,
      fifthIssue: false,
    })
  const [whichFollowingApplySelected, setWhichFollowingApplySelected] =
    useState({
      firstFollowing: false,
      secondFollowing: false,
      thirdFollowing: false,
      fourthFollowing: false,
      fifthFollowing: false,
    })
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  // Results
  const [defaultScores, setDefaultScores] = useState([
    { selector: 'first', score: 0 },
    { selector: 'second', score: 0 },
    { selector: 'third', score: 0 },
    { selector: 'fourth', score: 0 },
    { selector: 'fifth', score: 0 },
  ])
  const includeFirstExample = useRef(false)
  const includeSecondExample = useRef(false)
  const includeThirdExample = useRef(false)
  const includeFourthExample = useRef(false)
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
    if (e.target.value === 'firstIssue') {
      setWhichIssuesChallengesSelected((s) => {
        return {
          ...s,
          firstIssue: !whichIssuesChallengesSelected.firstIssue,
        }
      })
    }
    if (e.target.value === 'secondIssue') {
      setWhichIssuesChallengesSelected((s) => {
        return {
          ...s,
          secondIssue: !whichIssuesChallengesSelected.secondIssue,
        }
      })
    }
    if (e.target.value === 'thirdIssue') {
      setWhichIssuesChallengesSelected((s) => {
        return {
          ...s,
          thirdIssue: !whichIssuesChallengesSelected.thirdIssue,
        }
      })
    }
    if (e.target.value === 'fourthIssue') {
      setWhichIssuesChallengesSelected((s) => {
        return {
          ...s,
          fourthIssue: !whichIssuesChallengesSelected.fourthIssue,
        }
      })
    }
    if (e.target.value === 'fifthIssue') {
      setWhichIssuesChallengesSelected((s) => {
        return {
          ...s,
          fifthIssue: !whichIssuesChallengesSelected.fifthIssue,
        }
      })
    }
    if (e.target.value === 'firstFollowing') {
      setWhichFollowingApplySelected((s) => {
        return {
          ...s,
          firstFollowing: !whichFollowingApplySelected.firstFollowing,
        }
      })
    }
    if (e.target.value === 'secondFollowing') {
      setWhichFollowingApplySelected((s) => {
        return {
          ...s,
          secondFollowing: !whichFollowingApplySelected.secondFollowing,
        }
      })
    }
    if (e.target.value === 'thirdFollowing') {
      setWhichFollowingApplySelected((s) => {
        return {
          ...s,
          thirdFollowing: !whichFollowingApplySelected.thirdFollowing,
        }
      })
    }
    if (e.target.value === 'fourthFollowing') {
      setWhichFollowingApplySelected((s) => {
        return {
          ...s,
          fourthFollowing: !whichFollowingApplySelected.fourthFollowing,
        }
      })
    }
    if (e.target.value === 'fifthFollowing') {
      setWhichFollowingApplySelected((s) => {
        return {
          ...s,
          fifthFollowing: !whichFollowingApplySelected.fifthFollowing,
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
          { selector: 'first', score: s[0].score + 3 },
          { selector: 'second', score: s[1].score + 3 },
          { selector: 'third', score: s[2].score + 3 },
          { selector: 'fourth', score: s[3].score + 3 },
          { selector: 'fifth', score: s[4].score + 3 },
        ])
      case 'hot':
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score },
          { selector: 'second', score: s[1].score + 7 },
          { selector: 'third', score: s[2].score + 9 },
          { selector: 'fourth', score: s[3].score + 7 },
          { selector: 'fifth', score: s[4].score },
        ])
    }
    switch (singleAnswersSelected.current[1].selector) {
      case 'soft':
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score },
          { selector: 'second', score: s[1].score },
          { selector: 'third', score: s[2].score + 6 },
          { selector: 'fourth', score: s[3].score + 6 },
          { selector: 'fifth', score: s[4].score },
        ])
      case 'middle':
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score },
          { selector: 'second', score: s[1].score + 6 },
          { selector: 'third', score: s[2].score + 6 },
          { selector: 'fourth', score: s[3].score },
          { selector: 'fifth', score: s[4].score + 4 },
        ])
      case 'firm':
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score + 6 },
          { selector: 'second', score: s[1].score },
          { selector: 'third', score: s[2].score },
          { selector: 'fourth', score: s[3].score },
          { selector: 'fifth', score: s[4].score },
        ])
    }
    switch (singleAnswersSelected.current[2].selector) {
      case 'memoryFoam':
        includeFirstExample.current = true
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score + 7 },
          { selector: 'second', score: s[1].score },
          { selector: 'third', score: s[2].score + 7 },
          { selector: 'fourth', score: s[3].score },
          { selector: 'fifth', score: s[4].score },
        ])
      case 'innerspring':
        includeSecondExample.current = true
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score },
          { selector: 'second', score: s[1].score + 7 },
          { selector: 'third', score: s[2].score },
          { selector: 'fourth', score: s[3].score + 7 },
          { selector: 'fifth', score: s[4].score },
        ])
      case 'hybrid':
        includeSecondExample.current = true
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score },
          { selector: 'second', score: s[1].score + 7 },
          { selector: 'third', score: s[2].score },
          { selector: 'fourth', score: s[3].score + 7 },
          { selector: 'fifth', score: s[4].score + 7 },
        ])
      case 'unsure':
        includeSecondExample.current = true
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score + 7 },
          { selector: 'second', score: s[1].score },
          { selector: 'third', score: s[2].score + 7 },
          { selector: 'fourth', score: s[3].score },
          { selector: 'fifth', score: s[4].score },
        ])
    }
    switch (singleAnswersSelected.current[3].selector) {
      case 'back':
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score + 4 },
          { selector: 'second', score: s[1].score + 4 },
          { selector: 'third', score: s[2].score + 4 },
          { selector: 'fourth', score: s[3].score + 4 },
          { selector: 'fifth', score: s[4].score },
        ])
      case 'side':
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score },
          { selector: 'second', score: s[1].score + 4 },
          { selector: 'third', score: s[2].score + 4 },
          { selector: 'fourth', score: s[3].score + 4 },
          { selector: 'fifth', score: s[4].score },
        ])
      case 'stomach':
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score + 4 },
          { selector: 'second', score: s[1].score + 4 },
          { selector: 'third', score: s[2].score },
          { selector: 'fourth', score: s[3].score + 4 },
          { selector: 'fifth', score: s[4].score },
        ])
      case 'combo':
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score },
          { selector: 'second', score: s[1].score + 4 },
          { selector: 'third', score: s[2].score + 4 },
          { selector: 'fourth', score: s[3].score },
          { selector: 'fifth', score: s[4].score },
        ])
    }
    switch (singleAnswersSelected.current[4].selector) {
      case 'yes':
        setDefaultScores((s) => [
          { selector: 'first', score: s[0].score },
          { selector: 'second', score: s[1].score },
          { selector: 'third', score: s[2].score },
          { selector: 'fourth', score: s[3].score },
          { selector: 'fifth', score: s[4].score + 4 },
        ])
    }
    // `singleAnswersSelected.current[5]` has no effect on quiz scores
    if (
      singleAnswersSelected.current.length > 6 &&
      singleAnswersSelected.current[6].selector === 'issuesChallengesNone'
    ) {
      setDefaultScores((s) => [
        { selector: 'first', score: s[0].score },
        { selector: 'second', score: s[1].score + 3 },
        { selector: 'third', score: s[2].score + 3 },
        { selector: 'fourth', score: s[3].score },
        { selector: 'fifth', score: s[4].score },
      ])
    }
    // The following line has no effect on quiz scores.
    // `singleAnswersSelected.current[6].selector === 'followingApplyNone' || singleAnswersSelected.current[7].selector === 'followingApplyNone'`
    // END Single Answers

    // Multiple Answers
    if (whichIssuesChallengesSelected.firstIssue) {
      setDefaultScores((s) => [
        { selector: 'first', score: s[0].score + 3 },
        { selector: 'second', score: s[1].score + 3 },
        { selector: 'third', score: s[2].score },
        { selector: 'fourth', score: s[3].score + 3 },
        { selector: 'fifth', score: s[4].score },
      ])
    }
    if (
      whichIssuesChallengesSelected.secondIssue ||
      whichIssuesChallengesSelected.thirdIssue
    ) {
      includeThirdExample.current = true
      setDefaultScores((s) => [
        { selector: 'first', score: s[0].score },
        { selector: 'second', score: s[1].score + 3 },
        { selector: 'third', score: s[2].score + 3 },
        { selector: 'fourth', score: s[3].score + 3 },
        { selector: 'fifth', score: s[4].score },
      ])
    }
    if (whichIssuesChallengesSelected.fourthIssue) {
      setDefaultScores((s) => [
        { selector: 'first', score: s[0].score },
        { selector: 'second', score: s[1].score + 3 },
        { selector: 'third', score: s[2].score + 3 },
        { selector: 'fourth', score: s[3].score + 3 },
        { selector: 'fifth', score: s[4].score },
      ])
    }
    if (whichIssuesChallengesSelected.fifthIssue) {
      setDefaultScores((s) => [
        { selector: 'first', score: s[0].score },
        { selector: 'second', score: s[1].score + 3 },
        { selector: 'third', score: s[2].score },
        { selector: 'fourth', score: s[3].score + 3 },
        { selector: 'fifth', score: s[4].score },
      ])
    }
    if (
      whichFollowingApplySelected.firstFollowing ||
      whichFollowingApplySelected.secondFollowing ||
      whichFollowingApplySelected.thirdFollowing ||
      whichFollowingApplySelected.fourthFollowing
    ) {
      includeThirdExample.current = true
    }
    if (whichFollowingApplySelected.fifthFollowing) {
      includeThirdExample.current = true
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
          whichIssuesChallengesSelected={whichIssuesChallengesSelected}
          whichFollowingApplySelected={whichFollowingApplySelected}
          handleProceedQuestions={handleProceedQuestions}
          handleSingleAns={handleSingleAns}
          handleMultipleAns={handleMultipleAns}
          handleBackBtn={handleBackBtn}
        />
      ) : showResults ? (
        <Results
          singleAnswersSelected={singleAnswersSelected.current}
          defaultScores={defaultScores}
          includeFirstExample={includeFirstExample.current}
          includeSecondExample={includeSecondExample.current}
          includeThirdExample={includeThirdExample.current}
          includeFourthExample={includeFourthExample.current}
          handleShowEmail={handleShowEmail}
          emailEntered={emailEntered}
          evan={<Evan />}
        />
      ) : null}
    </div>
  )
}
