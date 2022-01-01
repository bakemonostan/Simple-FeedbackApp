import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

//import createcontext and useState
import { createContext, useState } from 'react';

//set a variable to the create context method
const FeedbackContext = createContext();

//export a context provider that takes children as an argument and returns a context component with and attr of value which would be set to the states and function we want to pass to other components

export const FeedbackProvider = ({ children }) => {
  //states and functions would be created before the return
  //set feedbackdata to a state

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

  //return context provider component
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

// export the context also

export default FeedbackContext;
