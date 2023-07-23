import React, { useEffect, useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';


function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle successful response
    console.log(data);
  })
  .catch(error => {
    // Handle error
    console.error('Fetch error:', error);
  });

  })
  return (
    <FlashcardList flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2+2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  }, 
  {
    id: 2,
    question: 'Question 2',
    answer: 'Answer',
    options: [
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ]
  }
]

export default App;
