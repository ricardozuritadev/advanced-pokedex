import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetter } from './context';

const App: React.FC = () => {
  const { setPokedex } = useGetter();

  useEffect(() => {
    setPokedex();
  }, []);

  return <Outlet />;
};

export default App;
