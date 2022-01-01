import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

export default function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='red' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}
// this component is for each feedBackItem and will be nested in the feedBackList component
//We'll pass item as a prop here
