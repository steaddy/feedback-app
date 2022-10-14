import React from "react";
import './index.css';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

import {Routes, Route} from 'react-router-dom'
import AboutIconLink from "./components/AboutIconLink";

const App = () => {

    return (
        <FeedbackProvider>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path='/' element={
                        <>
                            <FeedbackForm/>
                            <FeedbackStats/>
                            <FeedbackList/>
                        </>
                    }/>
                    <Route path='/about' element={
                        <AboutPage/>
                    }/>
                </Routes>
                <AboutIconLink/>
            </div>
        </FeedbackProvider>
    );
};

export default App;