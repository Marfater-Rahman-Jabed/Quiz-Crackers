
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import NavBar from './component/NavBar/NavBar';
import Statistics from './component/Statistics/Statistics';
import Topic from './component/Topic/Topic';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/topic',
          element: <Topic></Topic>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },

  ])
  return (
    <div >
      {/* <NavBar></NavBar> */}
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
