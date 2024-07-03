
import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useFontSizes} from "../Hooks/Index.js";

const TypographyTitleSizes = {
    smallTitle: {
        defaultMobileSize: '1.5rem',
        smallMobileSize: '2.25rem',
        mediumMobileSize: "2.8125rem",
        defaultWebSize: "1.7rem",
        smallWebSize: "2rem",
        mediumWebSize: "2.25rem",
        largeWebSize: "2.5rem",
        wideWebSize: "5rem"
    },
    mediumTitles: {
        defaultMobileSize: '2rem',
        smallMobileSize: '3rem',
        mediumMobileSize: "3.75rem",
        defaultWebSize: "2.5rem",
        smallWebSize: "2.5rem",
        mediumWebSize: "2.75rem",
        largeWebSize: "2.75rem",
        wideWebSize: "5.5rem"
    },
    largeTitles: {
        defaultMobileSize: '3rem',
        smallMobileSize: '4.5rem',
        mediumMobileSize: "5.625rem",
        defaultWebSize: "",
        smallWebSize: "",
        mediumWebSize: "",
        largeWebSize: "",
        wideWebSize: ""
    },
}


/**
 * @param sx
 * @param children
 * @param overrideSizes objeto con las propiedades de los breakpoints que definen el tamaño de la tipografía, por defecto se
 * usa un tamaño especificado, sobreescribe el tamaño por defecto si se pasa un objeto con propiedades de breakpoints
 * @returns {JSX.Element}
 * @constructor
 */
export const TypographySmallTitle =
    ({
         sx, children,
         overrideSizes = {},
     }) => {

        const defaultSizes = TypographyTitleSizes.smallTitle;
        const sizes = {...defaultSizes, ...overrideSizes};

        const matchSize = useFontSizes(sizes);

        return (
            <Typography
                className='fw-bolder'
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
 * @param overrideSizes objeto con las propiedades de los breakpoints que definen el tamaño de la tipografía, por defecto se
 * usa un tamaño especificado, sobreescribe el tamaño por defecto si se pasa un objeto con propiedades de breakpoints
 * @returns {JSX.Element}
 * @constructor
 */
export const TypographyMediumTitle =
    ({
         sx, children,
         overrideSizes = {},
     }) => {
        const defaultSizes = TypographyTitleSizes.mediumTitles;
        const sizes = {...defaultSizes, ...overrideSizes};

        const matchSize = useFontSizes(sizes);

        return (
            <Typography
                className='fw-bold'
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
 * @param overrideSizes objeto con las propiedades de los breakpoints que definen el tamaño de la tipografía, por defecto se
 * usa un tamaño especificado, sobreescribe el tamaño por defecto si se pasa un objeto con propiedades de breakpoints
 * @returns {JSX.Element}
 * @constructor
 */
export const TypographyLargeTitle =
    ({
         sx, children,
         overrideSizes = {},
     }) => {
        const defaultSizes = TypographyTitleSizes.largeTitles;
        const sizes = {...defaultSizes, ...overrideSizes};

        const matchSize = useFontSizes(sizes);

        return (
            <Typography
                className='fw-bold'
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

TypographySmallTitle.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node.isRequired,
    overrideSizes: PropTypes.object,
}

TypographyMediumTitle.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node.isRequired,
    overrideSizes: PropTypes.object,
}

TypographyLargeTitle.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node.isRequired,
    overrideSizes: PropTypes.object,
}





