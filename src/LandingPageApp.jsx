
import './Style.css'
import {AppRouter} from "./Router/AppRouter.jsx";
import {AppTheme} from "./LandingPage/Theme/AppTheme.jsx";

export const LandingPageApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );
}
