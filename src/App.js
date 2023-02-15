import React from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import { useState } from 'react'
import FeedbackData from './data/feedbackdata'
import FeedbackStats from './components/feedbackStats'
import FeedBackForm from './components/FeedBackForm'
import {v4 as uuidv4} from 'uuid'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
        if(window.confirm('are you sure you want to delete')){
            
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
        <Header />
        <div className='container'>
            <FeedBackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <FeedBackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App