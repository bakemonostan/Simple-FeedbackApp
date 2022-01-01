import { StrictMode } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//context
import { FeedbackProvider } from './context/FeedbackContext';

//Components
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';

//Pages
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';

export default function App() {
  //Pass the state as a prop to feedbackList
  // Go through how the function as props are passed and the filter() method

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
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
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
