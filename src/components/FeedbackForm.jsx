import React, {useState, useContext, useEffect} from 'react'
import Card from "./shared/Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [message, setMessage] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if(feedbackEdit.edit) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleTextChange = e => {
        setText(e.target.value)

        if(e.target.value === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(e.target.value !== '' && e.target.value.trim().length < 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }

    }

    const handleSubmit = e => {
        e.preventDefault();
        if(text.length >= 10) {
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }
            setText('');
            setRating(10);
        }

    }

  return (
    <div>
        <Card>
            <form onSubmit={handleSubmit}>
                {<p>Rating: {rating}</p>}
                <h2>How would You rate your service with us?</h2>
                <RatingSelect select={rating=>setRating(rating)}/>
                <div className="input-group">
                    <input placeholder='Write a review' onChange={handleTextChange} value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    </div>
  )
}

export default FeedbackForm
