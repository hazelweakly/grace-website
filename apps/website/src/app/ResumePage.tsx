import { Link } from 'react-router-dom';

const ResumePage = ({ title }: { title: string }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <p>My Resume</p>
    </>
  );
};
export default ResumePage;
