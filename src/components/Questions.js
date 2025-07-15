const Questions = [
  {
    question: "What is React?",
    options: [
      "A CSS framework",
      "A JavaScript library for building UI",
      "A backend language",
      "A database"
    ],
    answer: "A JavaScript library for building UI"
  },
  {
    question: "What is JSX?",
    options: [
      "A templating engine",
      "An XML-like syntax to write React elements",
      "A database query language",
      "A browser API"
    ],
    answer: "An XML-like syntax to write React elements"
  },
  {
    question: "What hook is used to manage state in functional components?",
    options: ["useEffect", "useContext", "useRef", "useState"],
    answer: "useState"
  },
  {
    question: "Which hook is used to perform side-effects in React?",
    options: ["useState", "useEffect", "useReducer", "useMemo"],
    answer: "useEffect"
  },
  {
    question: "What is a key prop in React?",
    options: [
      "Used to encrypt data",
      "Used to identify list elements uniquely",
      "Used to define styles",
      "A special API function"
    ],
    answer: "Used to identify list elements uniquely"
  },
  {
    question: "Which method is used to lift state up?",
    options: [
      "Passing props from child to parent",
      "Calling parent function in child",
      "Using useEffect",
      "State cannot be lifted"
    ],
    answer: "Calling parent function in child"
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A copy of the browser's DOM kept in memory",
      "A real DOM tree",
      "An API to access the DOM",
      "React’s component lifecycle"
    ],
    answer: "A copy of the browser's DOM kept in memory"
  },
  {
    question: "What does `useRef` hook do?",
    options: [
      "Used for HTTP requests",
      "Stores mutable values that don't trigger re-renders",
      "Stores routing paths",
      "Used for animations only"
    ],
    answer: "Stores mutable values that don't trigger re-renders"
  },
  {
    question: "React is based on which programming paradigm?",
    options: ["Object-Oriented", "Functional", "Procedural", "Imperative"],
    answer: "Functional"
  },
  {
    question: "What is prop drilling?",
    options: [
      "Using props to style components",
      "Passing props through multiple levels unnecessarily",
      "Sending props to backend",
      "Using props to drill animation depth"
    ],
    answer: "Passing props through multiple levels unnecessarily"
  },
  {
    question: "Which hook is used for global state in React?",
    options: ["useState", "useGlobal", "useContext", "useScope"],
    answer: "useContext"
  },
  {
    question: "How do you pass data from parent to child?",
    options: [
      "Using Redux",
      "Using state",
      "Using props",
      "Using context only"
    ],
    answer: "Using props"
  },
  {
    question: "What is React Router used for?",
    options: [
      "Routing network requests",
      "Navigating between pages/components",
      "Styling components",
      "Handling API calls"
    ],
    answer: "Navigating between pages/components"
  },
  {
    question: "What is lazy loading in React?",
    options: [
      "Loading images slowly",
      "Delaying render of component until needed",
      "Pausing DOM updates",
      "Reducing CSS size"
    ],
    answer: "Delaying render of component until needed"
  },
  {
    question: "Which lifecycle method is replaced by useEffect?",
    options: [
      "componentWillMount",
      "componentDidMount",
      "render",
      "shouldComponentUpdate"
    ],
    answer: "componentDidMount"
  },
  {
    question: "What is the default behavior of React when a state changes?",
    options: [
      "It reloads the page",
      "It fetches data again",
      "It re-renders the component",
      "It deletes previous state"
    ],
    answer: "It re-renders the component"
  },
  {
    question: "What is Redux?",
    options: [
      "A CSS library",
      "A state management library",
      "A database",
      "A server"
    ],
    answer: "A state management library"
  },
  {
    question: "Which method prevents component re-rendering?",
    options: ["useCallback", "useEffect", "memo", "useReducer"],
    answer: "memo"
  },
  {
    question: "What is a fragment in React?",
    options: [
      "A way to style text",
      "A component that returns multiple elements without extra DOM",
      "A child component",
      "A way to pause render"
    ],
    answer: "A component that returns multiple elements without extra DOM"
  },
  {
    question: "What is the use of `key` in a list rendering?",
    options: [
      "To apply styles",
      "To optimize rendering and avoid re-renders",
      "To trigger events",
      "To set component state"
    ],
    answer: "To optimize rendering and avoid re-renders"
  }
];

export default Questions;
