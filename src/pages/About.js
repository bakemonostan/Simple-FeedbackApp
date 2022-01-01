import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Card>
      <div className='about'>
        <h2>About Project</h2>
        <p>This project is a project</p>
        <Link to='/'>Click me to go home </Link>
      </div>
    </Card>
  );
}

export default About;
