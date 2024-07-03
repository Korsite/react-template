
import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useFontSizes} from "../Hooks/Index.js";


const TypographyTextSizes = {
    smallText: {
        defaultMobileSize: '1rem',
        smallMobileSize: '1.5rem',
        mediumMobileSize: '1.5rem',
        defaultWebSize: '1.8rem',
        smallWebSize: '1.8rem',
        mediumWebSize: "2rem",
        largeWebSize: "2rem",
        wideWebSize: "2.2rem"
    },
    mediumText: {
        defaultMobileSize: '1.2rem',
        smallMobileSize: '1.8rem',
        mediumMobileSize: "2.25rem",
        defaultWebSize: "1.4rem",
        smallWebSize: "1.75rem",
        mediumWebSize: "2rem",
        largeWebSize: "2.2rem",
        wideWebSize: "4rem"
    },
    largeText: {
        defaultMobileSize: '1.5rem',
        smallMobileSize: '2.25rem',
        mediumMobileSize: "2.8125rem",
        defaultWebSize: "1.75rem",
        smallWebSize: "2rem",
        mediumWebSize: "2.25rem",
        largeWebSize: "2.5rem",
        wideWebSize: "5rem"
    },
}

/**
 * @param sx
 * @param children
 * @param className
 * @param overrideSizes objeto con las propiedades de los breakpoints que definen el tamaño de la tipografía, por defecto se
 * usa un tamaño especificado, sobreescribe el tamaño por defecto si se pasa un objeto con propiedades de breakpoints
 * @returns {JSX.Element}
 * @constructor
 */
export const TypographySmallText =
    ({
         sx, children,
         className = '',
         overrideSizes = {},
     }) => {
        const defaultSizes = TypographyTextSizes.smallText;
        const sizes = {...defaultSizes, ...overrideSizes};
        const matchSize = useFontSizes(sizes);

        return (
            <Typography
                className={className}
                sx={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: matchSize,
                    ...sx
                }}
            >
                {children}
            </Typography>
        )
    }

/**
 * @param sx
 * @param children
 * @param className
 * @param overrideSizes objeto con las propiedades de los breakpoints que definen el tamaño de la tipografía, por defecto se
 * usa un tamaño especificado, sobreescribe el tamaño por defecto si se pasa un objeto con propiedades de breakpoints
 * @returns {JSX.Element}
 * @constructor
 */
export const TypographyMediumText =
    ({
         sx, children,
         className = '',
         overrideSizes = {},
     }) => {
        const defaultSizes = TypographyTextSizes.mediumText;
        const sizes = {...defaultSizes, ...overrideSizes};

        const matchSize = useFontSizes(sizes);

        return (
            <Typography
                className={className}
                sx={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: matchSize,
                    ...sx
                }}
            >
                {children}
            </Typography>
        )
    }

/**
 * @param sx
 * @param children
 * @param className
 * @param overrideSizes objeto con las propiedades de los breakpoints que definen el tamaño de la tipografía, por defecto se
 * usa un tamaño especificado, sobreescribe el tamaño por defecto si se pasa un objeto con propiedades de breakpoints
 * @returns {JSX.Element}
 * @constructor
 */
export const TypographyLargeText =
    ({
         sx, children,
         className = '',
         overrideSizes = {},
     }) => {
        const defaultSizes = TypographyTextSizes.largeText;
        const sizes = {...defaultSizes, ...overrideSizes};

        const matchSize = useFontSizes(sizes);

        return (
            <Typography
                className={className}
                sx={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: matchSize,
                    ...sx
                }}
            >
                {children}
            </Typography>
        )
    }

TypographySmallText.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    overrideSizes: PropTypes.object
}
TypographyMediumText.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    overrideSizes: PropTypes.object
}

TypographyLargeText.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    overrideSizes: PropTypes.object
}