
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import NavBar from './component/NavBar/NavBar';
import Reacts from './component/Reacts/Reacts';
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
          path: '/',
          loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Home></Home>
        },
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
        },
        {
          path: '/topic/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Reacts></Reacts>
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
