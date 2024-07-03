
import {CssBaseline, ThemeProvider} from "@mui/material";
import {LandingPageTheme} from "./LandingPageTheme.js";
import PropTypes from "prop-types";

export const AppTheme = ({ children }) => {
    return(
        <ThemeProvider theme={ LandingPageTheme }>

            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}

AppTheme.propTypes = {
    children: PropTypes.node.isRequired
}