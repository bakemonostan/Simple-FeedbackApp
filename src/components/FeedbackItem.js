import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

//Context
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='red' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}
// this component is for each feedBackItem and will be nested in the feedBackList component
//We'll pass item as a prop here
