import {ImageList, ImageListItem, Link, useTheme} from "@mui/material";
import {
    FacebookIcon,
    InstagramIcon,
    TikTokIcon,
    TwitterIcon, // X Icon
    YouTubeIcon,
    LinkedInIcon,
    WhatsappIcon
} from '../../assets/RedesSociales/Index.js';
import {useContext} from "react";
import {BreakpointsContext} from "../Context/Index.js";

export const ListaDeRedesSociales = () => {

    const theme = useTheme();
    const {
        isUpSmallMobile,
        isUpMediumMobile,
        isUpDefaultWebSize,
        isUpSmallWebSize,
        isUpMediumWebSize,
        isUpLargeWebSize,
        isUpWideWebSize,
    } = useContext(BreakpointsContext);


    const gap = isUpWideWebSize ? 190
        : isUpLargeWebSize ? 110
            : isUpMediumWebSize ? 100
                : isUpSmallWebSize ? 85
                    : isUpDefaultWebSize ? 70
                        : isUpMediumMobile ? 40
                            : isUpSmallMobile ? 30 : 20;

    return (

        <ImageList cols={7} gap={gap} style={{overflow: 'visible'}}>
            {
                itemData.map(item =>
                    <ImageListItem
                        key={item.icon}
                        sx={{
                            overflow: 'visible',
                            [theme.breakpoints.up('defaultMobileSize')]: {
                                width: 20, height: 20
                            },
                            [theme.breakpoints.up('smallMobileSize')]: {
                                width: 30, height: 30
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                width: 35, height: 35
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                width: 30, height: 30
                            },
                            [theme.breakpoints.up('smallWebSize')]: {
                                width: 40, height: 40
                            },
                            [theme.breakpoints.up('largeWebSize')]: {
                                width: 50, height: 50
                            },
                            [theme.breakpoints.up('wideWebSize')]: {
                                width: 65, height: 65
                            }
                        }}
                    >

                        <Link href={item.link} target="_blank">
                            <img
                                src={item.icon}
                                alt={item.alt}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.3)'} // Añade esta línea
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} // Añade esta línea
                                style={{
                                    transition: 'transform 0.3s ease-in-out', // Añade esta línea

                                }}
                            />
                        </Link>
                    </ImageListItem>
                )
            }
        </ImageList>
    )
}

const itemData = [
    {
        icon: FacebookIcon,
        alt: 'Facebook',
        link: "https://www.facebook.com/"
    },
    {
        icon: InstagramIcon,
        alt: 'Instagram',
        link: "https://www.instagram.com/"
    },
    {
        icon: TikTokIcon,
        alt: 'TikTok',
        link: "https://www.tiktok.com/"
    },
    {
        icon: TwitterIcon,
        alt: 'Twitter',
        link: "https://x.com/home"
    },
    {
        icon: YouTubeIcon,
        alt: 'YouTube',
        link: "https://www.youtube.com/"
    },
    {
        icon: LinkedInIcon,
        alt: 'LinkedIn',
        link: "https://www.linkedin.com/in/gandhi-soto-s%C3%A1nchez-4a760b234/"
    },
    {
        icon: WhatsappIcon,
        alt: 'Whatsapp',
        link: "https://www.whatsapp.com/catalog/123465789/?app_absent=0"
    }
]
