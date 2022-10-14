import React, { useContext } from 'react'
import {FaQuestion} from "react-icons/fa";
import {Link} from 'react-router-dom'
import FeedbackContext from "../context/FeedbackContext";

const AboutIconLink = () => {
    const { feedback } = useContext(FeedbackContext);

    return (
        <div className='about-link'>
            <Link to={{
                pathname: '/about'
            }}>
                <FaQuestion size={30}/>
            </Link>
        </div>
    )
}

export default AboutIconLink
