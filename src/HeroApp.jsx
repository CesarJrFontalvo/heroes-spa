import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouterPublic } from './router/AppRouterPublic';
import { RoutesHeroPrivate } from './heroes/routes/RoutesHeroPrivate';
import { AuthContext } from "./auth/context/AuthContext";
import { useContext } from "react";

export const HeroApp = () => {
    const { logged } = useContext(AuthContext);

    return (
        <>
            {logged ? <RoutesHeroPrivate /> : <AppRouterPublic />}
        </>
    )
}
