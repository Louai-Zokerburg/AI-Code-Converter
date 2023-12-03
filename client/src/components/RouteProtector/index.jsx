import { useStore } from '../../context/store';
import { Navigate } from 'react-router-dom';

const index = ({ children }) => {
  const auth = useStore((state) => state.auth);

  if (!auth.user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default index;
