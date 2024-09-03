import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import AboutMe from './components/Pages/AboutMe.jsx';
import Contact from './components/Pages/Contact.jsx';
import Resume from './components/Pages/Resume.jsx';
import ErrorPage from './components/Pages/Errorpage.jsx';
import ProjectList from './components/Pages/ProjectsList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
         element: <Resume />,
       },
      {
        path: 'projects',
        element: <ProjectList />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />

);
