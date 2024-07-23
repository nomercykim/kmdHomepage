import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Natural from './pages/Natural';
import Therapy from './pages/Therapy';
import Wednesday from './pages/Wednesday';
import Research from './pages/Research';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    
    children :[
      {index: true, element:<Home />},
      {path: '/Profile', element: <Profile />},
      {path: '/Natural', element: <Natural />},
      {path: '/Therapy', element: <Therapy />},
      {path: '/Wednesday', element: <Wednesday />},
      {path: '/Research', element: <Research />},
      {path: '/Contact', element: <Contact />}
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


