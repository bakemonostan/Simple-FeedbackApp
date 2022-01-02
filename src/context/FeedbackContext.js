//import createcontext and useState
import { createContext, useState, useEffect } from 'react';

//set a variable to the create context method
const FeedbackContext = createContext();

//export a context provider that takes children as an argument and returns a context component with and attr of value which would be set to the states and function we want to pass to other components

export const FeedbackProvider = ({ children }) => {
  //states and functions would be created before the return
  //set feedbackdata to a state
  const [feedback, setFeedback] = useState([]);
  //loading state
  const [isloading, setIsLoading] = useState(true);

  //edit feedback state
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //using useEffect
  useEffect(() => {
    fetchFeedback();
  }, []);

  //function to fetch data
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  //addFeedback function
  const addFeedback = async (newFeedback) => {
    //
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  //deleteFeedback function
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      //
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

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
  const updateFeedback = async (id, updateItem) => {
    //if the id is the same return the data and the updated data using spread, else just return the data

    //
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  //return context provider component
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isloading,
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
