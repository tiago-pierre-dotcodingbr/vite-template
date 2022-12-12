import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import { Home } from '../pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);

export function Routes() {
    return <RouterProvider router={router} />;
}
