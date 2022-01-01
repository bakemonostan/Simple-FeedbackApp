import { useState, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

//contexts
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextchange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMsg('Feedback Must be at least 10 characters long');
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  //Submit feedback
  // Double check if the length is less than 10 characters
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      //updating feedback
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        {/* @todo rating select component */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextchange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {msg && <p>{msg}</p>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
