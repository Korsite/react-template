
import {AppBar, CssBaseline, Slide, Toolbar, useScrollTrigger} from "@mui/material";

import PropTypes from "prop-types";

import {TypographySmallText} from "../Theme/index.js";


function HideOnScroll(props) {
    const {children, window} = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );

}


export const Navbar = (props) => {
    // todo buscar la manera de no cambiar el color del navbar si se muestra un modal

    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar
                    style={{
                        backgroundColor: '#3437ff'
                    }}
                    elevation={0}
                    position='fixed'
                >

                    <Toolbar>
                        <TypographySmallText
                            className='w-100 text-center'
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </TypographySmallText>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>


        </>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


