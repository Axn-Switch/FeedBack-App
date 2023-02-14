import React from 'react'
import Card from '../shared/Card'
import {FaTimes} from 'react-icons/fa'
//import { useState } from 'react'

function FeedBackItem({item, handleDelete}) {
    //const [rating, setRating] = useState(7)
   //const [text, setText] = useState('This is an example')


        return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button className='close' onClick={() => handleDelete(item.id)}>
                <FaTimes color = 'purple'/>
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}

export default FeedBackItem