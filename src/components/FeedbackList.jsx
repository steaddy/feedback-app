import React, { useContext } from 'react'
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
    const { feedback, isLoading } = useContext(FeedbackContext);

    if (!isLoading && (!feedback || !feedback.length)) {
        return (<div>There is no Feedback yet</div>)
    }

    return isLoading ? <Spinner/> :
     (
        <div className='feedback-list'>
            <div>{isLoading}</div>
            {feedback.map(item => {
                return <FeedbackItem key={item.id} item={item}/>
            })}
        </div>
    )
}

export default FeedbackList
