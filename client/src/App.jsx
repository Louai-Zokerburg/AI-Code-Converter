import { BrowserRouter as Router, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Converter from './pages/app';
import Auth from './pages/auth';
import RouteProtector from './components/RouteProtector';

import { useStore } from './context/store';
import { useEffect } from 'react';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />
  },
  {
    path: 'app',
    element: (
      <RouteProtector>
        <Converter />
      </RouteProtector>
    )
  }
])

const App = () => {
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
};

export default App;
