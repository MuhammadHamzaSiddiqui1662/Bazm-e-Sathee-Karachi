import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Box, Container, Typography, IconButton, Grid } from "@mui/material";
// import Bg from "src/assets/bg-images/footer.png";
// import Discord from "src/assets/icons/discord.png";
// import Instagram from "src/assets/icons/instagram.png";
// import Reddit from "src/assets/icons/reddit.png";
// import Telegram from "src/assets/icons/telegram.png";
// import Twitter from "src/assets/icons/twitter.png";
// import Website from "src/assets/icons/website.png";
// import Youtube from "src/assets/icons/youtube.png";
// import PaperBg from "../PaperBg/PaperBg";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import TwitterIcon from '@mui/icons-material/Twitter';
import { CONTACT_US } from "../../utils/constants";

// import {
//     DISCORD_URL,
//     INSTAGRAM_URL,
//     REDDIT_URL,
//     SOLCIAL_ID,
//     TELEGRAM_URL,
//     TWITTER_URL,
//     YOUTUBE_CHANNEL_URL,
// } from "src/utils/constants";


const useStyles = makeStyles({
    root: {
        // background: "url(" + Bg + ")",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        position: "relative",
        backgroundColor: "#222",
        marginTop: 50,
        color: "#999",
        padding: 60,
        "& svg": {
            color: "#999"
        }
    },
    text: {
        // fontFamily: theme.fonts[3],
    },
    icon: {
        width: 80,
    },
    flexGrid: {
        display: "flex",
        justifyContent: "center",
        gap: 25,
        flexWrap: "wrap",
        rowGap: 5,
    },
});

const Footer = () => {
    const classes = useStyles();

    return (
        <Box id={CONTACT_US} sx={{ pt: 4, pb: 4 }} className={classes.root}>
            {/* <PaperBg /> */}
            <Container maxWidth="lg">
                <Typography className={classes.text} align="center" variant="h6" sx={{ mt: 1, mb: 1 }}>
                    It only takes a few minutes to get started with us. Understand your community, start free, today.
                </Typography>
                <div className={classes.flexGrid}>
                    <IconButton size="small" href={"#"} target="__blank">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton size="small" href={"mailto: bazmkhi@gmail.com"}>
                        <EmailIcon />
                    </IconButton>
                    <IconButton size="small" href={"tel:+923158508658"}>
                        <WhatsAppIcon />
                    </IconButton>
                    {/* <IconButton size="small" href={TWITTER_URL} target="__blank">
                        <img src={Twitter} alt="" className={classes.icon} />
                    </IconButton> */}
                    {/* <IconButton size="small" href="https://t.me/mutantfroggo">
            <img src={Website} alt="" className={classes.icon} style={{ transform: "scale(0.8)" }} />
          </IconButton> */}
                    {/* <IconButton size="small" href={YOUTUBE_CHANNEL_URL} target="__blank">
                        <img src={Youtube} alt="" className={classes.icon} style={{ transform: "scale(0.8)" }} />
                    </IconButton>
                    <IconButton size="small" href={REDDIT_URL} target="__blank">
                        <img src={Reddit} alt="" className={classes.icon} style={{ transform: "scale(0.85)" }} />
                    </IconButton> */}
                </div>

                <Typography className={classes.text} align="center" variant="h6" sx={{ mt: 0 }}>
                    © 2022 Bazam e Sathi (Karachi). All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
