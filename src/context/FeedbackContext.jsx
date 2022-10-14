import React, {createContext, useState} from 'react'
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'From context',
            rating: 5
        },
        {
            id: 2,
            text: 'From context 2',
            rating: 6
        },
    ]);

    const [ feedbackEdit, setFeedbackEdit ] = useState({
        item: {},
        edit: false,
    });


    const handleDelete = (id) => {
        if (window.confirm('Are You sure You want to delete this?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map(item => {
            return item.id === id ? { ...item, ...updItem } : item;
        }))
    };

    const addFeedback = newFeedback => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({item,edit: true});
    };

    return <FeedbackContext.Provider value={
        {
            feedback,
            feedbackEdit,
            handleDelete,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;