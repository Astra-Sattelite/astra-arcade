import { createHashRouter } from 'react-router-dom'
import Landing from '../pages/Landing/Landing';
import RootLayout from '../layouts/RootLayout';
import StellarDodge from '../pages/StellarDodge/StellarDodge';
// import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, 
        element: <Landing />,
        handle: { showInMenu: true, label: "Home" } 
      },
      {
        path: 'stellardodge',
        element: <StellarDodge />,
        handle: { showInMenu: true, label: "Stellar Dodge" } 
      }
    ],
  },
]);