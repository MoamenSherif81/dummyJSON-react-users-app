import MainLayout from "../Layouts/MainRoutes";
import HomePage from "../pages/home";
import SingleUserPage from "../pages/singleUser";


export const RootRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { 
        path: '', 
        element: <HomePage /> 
      },
      {
        path: 'user/:id',
        element: <SingleUserPage />
      }
    ]
  }
]