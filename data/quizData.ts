import { createElement } from 'react'

export const quotes: string[] = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus.',
  'Magnam numquam, facere repellendus expedita maiores adipisci.',
  'Exercitationem maxime amet consequatur! Quidem dignissimos repudiandae.',
  'Odit corporis cumque voluptate rem praesentium voluptas possimus.',
  'Inventore excepturi! Magni natus obcaecati consequatur maxime nam.',
  'Laudantium placeat, quae itaque. Enim suscipit officiis ducimus.',
  'Quam error officiis quidem quisquam omnis iste, nulla dicta esse.',
  'Deserunt quos quibusdam assumenda voluptate. Quisquam, sit ducimus.',
]

export const questions: any[] = [
  {
    questionSelector: 'career',
    questionText: createElement(
      'p',
      { className: 'text-2xl font-bold' },
      createElement('span', null, 'My '),
      createElement('span', { className: 'text-blue-500' }, 'career goal'),
      createElement('span', null, ' is to work as...')
    ),
    answerOptions: [
      {
        selector: 'embedded',
        answerText: 'An embedded systems engineer or hardware engineer',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'software',
        answerText: 'A software engineer or computer scientist',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'fullStack',
        answerText: 'A full stack engineer or web developer',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'cyber',
        answerText: 'A cyber security engineer',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'data',
        answerText: 'A data scientist or data analyst',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'skip',
        answerText: "I have no idea, or I'm not sure, or skip this question",
        imgSrc: '',
        singleAns: true,
      },
    ],
  },
  {
    questionSelector: 'personality',
    questionText: createElement(
      'p',
      { className: 'text-2xl font-bold' },
      createElement('span', null, 'I need to know how things work '),
      createElement('span', { className: 'text-blue-500' }, '"under the hood."')
    ),
    answerOptions: [
      {
        selector: 'yes',
        answerText: 'Yes usually',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'somewhat',
        answerText: 'Sometimes',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'no',
        answerText: 'Not really',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'skip',
        answerText: "Doesn't matter, or I don't know",
        imgSrc: '',
        singleAns: true,
      },
    ],
  },
  {
    questionSelector: 'background',
    questionText: createElement(
      'p',
      { className: 'text-2xl font-bold' },
      createElement('span', null, 'My '),
      createElement('span', { className: 'text-blue-500' }, 'background'),
      createElement('span', null, ' is best described as...')
    ),
    answerOptions: [
      {
        selector: 'technical',
        answerText: 'Technical',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'nonTechnical',
        answerText: 'Non-technical',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'middle',
        answerText: 'Somewhere in the middle',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'skip',
        answerText:
          'I am a student, just getting started, or wanting to ignore my background for the purpose of this quiz.',
        imgSrc: '',
        singleAns: true,
      },
    ],
  },
  {
    questionSelector: 'schoolSubjectsFirst',
    questionText: createElement(
      'div',
      'text-2xl',
      createElement(
        'p',
        { className: 'font-bold' },
        createElement('span', null, 'I like(d) the following '),
        createElement(
          'span',
          { className: 'text-blue-500' },
          'subject(s) in school'
        ),
        createElement('span', null, ' the most.')
      ),
      createElement('i', null, '(Select all that apply)')
    ),
    answerOptions: [
      {
        selector: 'english',
        answerText: 'English',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'history',
        answerText: 'History',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'math',
        answerText: 'Math',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'science',
        answerText: 'Science',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'recess',
        answerText: 'Recess',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'none',
        answerText: "None—I strongly disliked school or didn't go to school.",
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'skip',
        answerText: 'Skip this question',
        imgSrc: '',
        singleAns: false,
      },
    ],
  },
  {
    questionSelector: 'exextracurricularstracu',
    questionText: createElement(
      'p',
      { className: 'text-2xl font-bold' },
      createElement('span', null, 'I like(d) the following '),
      createElement(
        'span',
        { className: 'text-blue-500' },
        'extracurricular(s) in school'
      ),
      createElement('span', null, ' the most.'),
      createElement('i', null, '(Select all that apply)')
    ),
    answerOptions: [
      {
        selector: 'debate',
        answerText: 'Debate Team',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'chess',
        answerText: 'Chess Team',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'band',
        answerText: 'Band or Orchestra',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'art',
        answerText: 'Art and/or Photography',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'act',
        answerText: 'Theater, Choir, and/or Dance',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'gym',
        answerText: 'Gym',
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'none',
        answerText: "None—I do not like these types of extracurriculars or didn't go to school.",
        imgSrc: '',
        singleAns: false,
      },
      {
        selector: 'skip',
        answerText: 'Skip this question',
        imgSrc: '',
        singleAns: false,
      },
    ],
  },
  {
    questionSelector: 'think',
    questionText: createElement(
      'p',
      { className: 'text-2xl font-bold' },
      createElement('span', null, 'I tend to '),
      createElement('span', { className: 'text-blue-500' }, 'think'),
      createElement('span', null, ' in the following manner.')
    ),
    answerOptions: [
      {
        selector: 'concretely',
        answerText: 'Concretely',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'abstractly',
        answerText: 'Abstractly',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'middle',
        answerText: 'Somewhere in the middle',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'skip',
        answerText: 'Unsure or skip',
        imgSrc: '',
        singleAns: true,
      },
    ],
  },
  {
    questionSelector: 'change',
    questionText: createElement(
      'p',
      { className: 'text-2xl font-bold' },
      createElement(
        'span',
        null,
        'The following best describes my preferences for my '
      ),
      createElement(
        'span',
        { className: 'text-blue-500' },
        'working tools and systems'
      ),
      createElement('span', null, '.')
    ),
    answerOptions: [
      {
        selector: 'same',
        answerText:
          'I like things to stay a little more consistent and not change so frequently.',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'change',
        answerText:
          'I like changing things up and/or learning new things to keep things interesting.',
        imgSrc: '',
        singleAns: true,
      },
      {
        selector: 'skip',
        answerText: 'Unsure or skip',
        imgSrc: '',
        singleAns: true,
      },
    ],
  },
  // {
  //   questionSelector: '',
  //   questionText: createElement(
  //     'p',
  //     { className: 'text-2xl font-bold' },
  //     createElement('span', null, 'Am I asking a '),
  //     createElement('span', { className: 'text-blue-500' }, 'sample'),
  //     createElement('span', null, 'question?')
  //   ),
  //   answerOptions: [
  //     {
  //       selector: '',
  //       answerText: '',
  //       imgSrc: '',
  //       singleAns: true,
  //     },
  //   ],
  // },
]

export const resultsOne: any = {
  test: 'test',
}

export const resultsTwo: any = {
  test: 'test',
}

export const resultsThree: any = {
  test: 'test',
}

export const resultsTitles: any = {
  test: 'test',
}

export const resultsDescs: any = {
  test: 'test',
}

export const resultsFour: any = {
  test: 'test',
}

export const resultsThumbURLs: any = {
  test: 'test',
}

export const resultsLanguageIconURLs: any = {
  test: 'test',
}

export const resultsFeature1: any = {
  test: 'test',
}

export const resultsFeature2: any = {
  test: 'test',
}
