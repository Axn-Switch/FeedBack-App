import React from 'react'
import FeedBackItem from './FeedBackItem'
import {motion, AnimatePresence} from 'framer-motion'

function FeedBackList({feedback, handleDelete}) {

    if(!feedback || feedback.length === 0){
        return<p>No feedback yet</p>
    }
    
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item)=>(
                    <motion.div key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>    
                        <FeedBackItem key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                        />
                    </motion.div>
                )) }
            </AnimatePresence>
        </div>
    )
    
    
    
    //og version
    /*
    return (
        <div className='feedback-list'>
            {feedback.map((item)=>(
                <FeedBackItem key={item.id}
                item={item}
                handleDelete={handleDelete}
                />
            )) }
        </div>
    ) */
}

export default FeedBackList