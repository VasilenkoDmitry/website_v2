import { ADMIN_ROUTE, FAVOURITES_ROUTE, MAIN_ROUTE, MOVIE_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import Admin from "./pages/Admin";
import Favourites from "./pages/Favourites";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import MoviePage from "./pages/MoviePage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FAVOURITES_ROUTE,
        Component: Favourites
    },
    {
        path: MOVIE_ROUTE + '/:id',
        Component:MoviePage
    },
    
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component:Main
    },
    {
        path: LOGIN_ROUTE,
        Component:Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component:Auth
    },
    
]