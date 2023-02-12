import React from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import { useState } from 'react'
import FeedbackData from './data/feedbackdata'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
        <Header />
        <div className='container'>
            <FeedBackList feedback={feedback}/>
        </div>
        </>
    )
}

export default App