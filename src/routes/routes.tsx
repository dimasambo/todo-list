import {Navigate, RouteObject} from 'react-router-dom';
import {ErrorPage} from '../pages/error/page.tsx';
import {routeLinks} from './links.ts';
import {TodoPage} from "../pages/todo/page.tsx";
import {Root} from "../pages/root/page.tsx";

export const routes: RouteObject[] = [
  {
    path: routeLinks.default,
    errorElement: <ErrorPage/>,
    Component: Root,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            Component: TodoPage,
          },
          {
            path: '*',
            element: <Navigate to={routeLinks.default}/>,
          },
        ],
      },
    ],
  },
];
