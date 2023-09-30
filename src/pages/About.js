import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate()
  const navigateOnClick = () => {
    navigate('/')
  }
  return (
    <section className='section'>
      <h2>About</h2>
      <button onClick={navigateOnClick}>
        Back Home
      </button>
    </section>
  );
};
export default About;
