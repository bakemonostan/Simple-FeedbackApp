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

  //edit feedback state
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //addFeedback function
  const addFeedback = (newFeedback) => {
    //adding a unique ID with uuid
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //deleteFeedback function
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //edit feedback function
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //update feedback
  const updateFeedback = (id, updateItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    );
  };

  //return context provider component
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

// export the context also

export default FeedbackContext;
