import { StrictMode, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//context
import { FeedbackProvider } from './context/FeedbackContext';

//Components
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';

//Pages
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';

export default function App() {
  //set feedbackdata to a state
  //Pass the state as a prop to feedbackList
  // Go through how the function as props are passed and the filter() method
  const [feedback, setFeedback] = useState(FeedbackData);

  //addFeedback function prop
  const addFeedback = (newFeedback) => {
    //adding a unique ID with uuid
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //deleteFeedback function prop
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <StrictMode>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <>
                    <FeedbackForm handleAdd={addFeedback} />
                    <FeedbackStats />
                    <FeedbackList handleDelete={deleteFeedback} />
                  </>
                }
              />
              <Route path='/about' element={<About />} />
            </Routes>
            <AboutIconLink />
          </div>
        </Router>
      </FeedbackProvider>
    </StrictMode>
  );
}
