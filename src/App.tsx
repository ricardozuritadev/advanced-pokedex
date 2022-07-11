import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetter } from './context';

const App: React.FC = () => {
  const { setPokedex, setSpecies } = useGetter();

  useEffect(() => {
    setPokedex();
    setSpecies();
  }, []);

  return <Outlet />;
};

export default App;
