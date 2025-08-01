// routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { Register } from './pages/Register';
import App from './App';
import { Post } from './pages/Post';
import { PostID } from './pages/PostID';
import { NotFound } from './pages/NotFound';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Counter from './Components/Counter';
import StepFoms from './Components/StepFoms';
import TimerComponent from './Components/TimerComponent';
import practiceUsereducer from './Components/practiceUsereducer';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'posts', element: <Post /> },
      { path: 'posts/:id', element: <PostID /> },
      {
        path: 'dashboard',
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Dashboard /> }],
      },
      {path: 'counter', Component:Counter },
      {path: 'useReducer', Component:StepFoms},
      {path: 'influenceAssignment', Component:TimerComponent},
      {path: '1', Component: practiceUsereducer}
    ],
  },
  { path: '*', element: <NotFound /> },
  
]);