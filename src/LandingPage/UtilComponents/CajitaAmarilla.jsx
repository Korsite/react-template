
import {Box, useTheme} from '@mui/material';
import PropTypes from "prop-types";

import {UseObserve} from "../Hooks/Index.js";
import 'animate.css';

export const CajitaAmarilla =
    ({
         sx,
         animacionDeAnimateCss = 'animate__fadeIn'
    }) => {
        const theme = useTheme();

        const {referencia} = UseObserve(animacionDeAnimateCss);

        return (
            <Box
                ref={referencia}
                className="initial" // Clase inicial sin animación
                sx={{
                    width: '20rem',
                    height: '1rem',
                    backgroundColor: theme.palette.primary.secondary,
                    borderRadius: '0.5rem / 0.25rem',
                    ...sx,
                }}
            />
        );
    };


CajitaAmarilla.propTypes = {
    sx: PropTypes.object,
    animacionDeAnimateCss: PropTypes.string
};