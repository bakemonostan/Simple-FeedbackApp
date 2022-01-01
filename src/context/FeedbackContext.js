//import createcontext and useState
import { createContext, useState } from 'react';

//set a variable to the create context method
const FeedbackContext = createContext();

//export a context provider that takes children as an argument and returns a context component with and attr of value which would be set to the states and function we want to pass to other components

export const FeedbackProvider = ({ children }) => {
  //states and functions would be created before the return

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this item is from the context ',
      rating: 10,
    },
  ]);

  //return context provider component
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

// export the context also

export default FeedbackContext;
