import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import { motion, AnimatePresence } from 'framer-motion';

export default function FeedbackList() {
  //create a context variable
  const { feedback } = useContext(FeedbackContext);

  //display this if there isnt any feedback yet
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    // map through the feedback data and render it
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
