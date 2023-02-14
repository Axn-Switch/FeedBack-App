import React from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import { useState } from 'react'
import FeedbackData from './data/feedbackdata'
import FeedbackStats from './components/feedbackStats'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
        if(window.confirm('are you sure you want to delete')){
            
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
        <Header />
        <div className='container'>
            <FeedbackStats feedback={feedback}/>
            <FeedBackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App