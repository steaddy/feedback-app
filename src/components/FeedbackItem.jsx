import React, { useContext } from 'react'
import './../index.css'
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
    const { handleDelete, editFeedback } = useContext(FeedbackContext);
    const { text, rating, id } = item;

    return (
    <Card reverse={false}>
      <div className="num-display">{rating}</div>
        <button className="close" onClick={()=>handleDelete(id)}>
            <FaTimes color='purple'/>
        </button>
        <button className="edit" onClick={()=>editFeedback(item)}>
            <FaEdit color='purple'/>
        </button>
        <div className="text-display">{text}</div>
    </Card>
  )
}

export default FeedbackItem
