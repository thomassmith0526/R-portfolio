import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import AboutMe from './components/Pages/AboutMe.jsx';
import Contact from './components/Pages/Contact.jsx';
// import HomePage from './components/Pages/HomePage.jsx';
// import Portfolio from './components/Pages/Portfolio.jsx';
import Resume from './components/Pages/Resume.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'portfolio',
        // element: <Portfolio />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>

);
