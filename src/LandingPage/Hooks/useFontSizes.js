
import {useContext} from "react";
import {BreakpointsContext} from "../Context/Index.js";

/**
 * Hook para obtener el tamaño de fuente segun el breakpoint
 * @param sizes
 * @returns {number|string|*}
 */
export const useFontSizes = (sizes) => {
    const {
        isUpWideWebSize,
        isUpLargeWebSize,
        isUpMediumWebSize,
        isUpSmallWebSize,
        isUpDefaultWebSize,
        isUpMediumMobileSize,
        isUpSmallMobileSize,
    } = useContext(BreakpointsContext);

    const matches = {
        wideWebSize: isUpWideWebSize,
        largeWebSize: isUpLargeWebSize,
        mediumWebSize: isUpMediumWebSize,
        smallWebSize: isUpSmallWebSize,
        defaultWebSize: isUpDefaultWebSize,
        mediumMobileSize: isUpMediumMobileSize,
        smallMobileSize: isUpSmallMobileSize,
    };

    if (matches.wideWebSize) return sizes.wideWebSize;
    if (matches.largeWebSize) return sizes.largeWebSize;
    if (matches.mediumWebSize) return sizes.mediumWebSize;
    if (matches.smallWebSize) return sizes.smallWebSize;
    if (matches.defaultWebSize) return sizes.defaultWebSize;
    if (matches.mediumMobileSize) return sizes.mediumMobileSize;
    if (matches.smallMobileSize) return sizes.smallMobileSize;

    return sizes.defaultMobileSize;
};