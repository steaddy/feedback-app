import React, { useContext } from 'react';
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext);

    let average = feedback.reduce((acc, item)=> acc + item.rating, 0) / feedback.length
    return (
    <div className='feedback-stats'>
      <h4>{feedback.length} reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average.toFixed(1).replace(/.0/, '')}</h4>
    </div>
  )
}

export default FeedbackStats
