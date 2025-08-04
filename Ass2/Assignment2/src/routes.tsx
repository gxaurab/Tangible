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
import Awareness from './Components/Awareness';
import Tanstack from './Components/Tanstack';
import { Application } from './Components/Application';
import Influence from './Components/Influence';
import LearningTanStack from './Components/LearningTanStack';

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
      {path: '1', Component: practiceUsereducer},
      {path: 'awareness', Component: Awareness},
      {path: 'tanstackget', Component: Tanstack},
      {path: 'application', Component: Application},
      {path: 'influence', Component: Influence},
      {path: 'learnings', Component: LearningTanStack}


    ],
  },
  { path: '*', element: <NotFound /> },
  
]);

