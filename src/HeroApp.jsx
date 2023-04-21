import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from './router/AppRouter';
import { RoutesHero } from './heroes/routes/RoutesHero';

export const HeroApp = () => {
    return (
        <AuthProvider>
            <RoutesHero /> 
            {/* <AppRouter />   */}
        </AuthProvider>
    )
}
