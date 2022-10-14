import React, { useContext } from 'react'
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
    const { feedback } = useContext(FeedbackContext);

    if (!feedback || !feedback.length) {
        return (<div>There is no Feedback yet</div>)
    }
    return (
        <div className='feedback-list'>
            {feedback.map(item => {
                return <FeedbackItem key={item.id} item={item}/>
            })}
        </div>
    )
}

export default FeedbackList