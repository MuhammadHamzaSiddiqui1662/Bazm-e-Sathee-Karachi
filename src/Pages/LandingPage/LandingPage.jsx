import React from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import childrenExpoBanner from "./../../assets/images/childrenExpoBanner.jpeg"
import displayLogo from "./../../assets/images/displayLogo.jpg"
import GallerySection from "./Sections/UpComingEventSection/UpcomingEventSection";
import { ABOUT_US, REGISTER } from "../../utils/constants";

const useStyle = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
    },
    section: {
        marginTop: 60
    },
    sectionHeading: {},
    sectionBody: {
        width: "100%",
        alignItems: "flex-start",
        marginTop: 20,
        gap: 20,
        [theme.breakpoints.down("sm")]: {
            flexWrap: "wrap",
        }
    },
    sectionBody2: {
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse"
        }
    },
    image: {
        maxWidth: "40%",
        maxHeight: "400px",
        backgroundColor: "#555",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
        }
    },
    sectionDetails: {
        // width: "60%",
        color: "#777"
    },
}))

const LandingPage = () => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Container className={classes.root} >
                <div id={ABOUT_US} className={classes.section}>
                    <Typography variant="h3" className={classes.sectionHeading}>
                        About Us
                    </Typography>
                    <div className={classes.sectionBody + " center"}>
                        <div className={classes.sectionDetails}>

                            <Typography className={classes.eventDetails}>
                                The name of Bazm-e-Sathee does not require any recognition in the context of its academic and ideological services to students in the educational Schools & Institutes of Pakistan.
                            </Typography>
                            <br />
                            <Typography className={classes.eventDetails}>
                                Bazm e Sathee is a NGO working for the better future of Pakistan and Muslim Ummah. With a Motto of Be Good, Spread Goodness, Bazm organizes various activities for students of schools across Pakistan like talent awards, children expo, picnics, quizzes and activities related to different days, parties, 40 days prayer challenges, and many other similar activities. As a result of these activities, children get intellectual, physical, and ideological training, they develop love for their country and Islam and increase their knowledge. As a result of which, in the future, the Muslim Ummah and the homeland of Pakistan become talented and When virtuous youth meet, they devote their energies for the betterment and bright future of Homeland and Ummah                            </Typography>
                        </div>
                        <img src={displayLogo} alt="" className={classes.image}></img>
                    </div>
                </div>
                <div className={classes.section}>
                    <Typography variant="h3" className={classes.sectionHeading}>
                        Up Coming Event
                    </Typography>
                    <div className={classes.sectionBody + " center " + classes.sectionBody2}>
                        <img src={childrenExpoBanner} alt="" className={classes.image}></img>
                        <div className={classes.sectionDetails}>
                            <Typography variant="h5" sx={{ mb: 1.5, color: "#444" }}>Chidren Expo Karachi Season 2</Typography>
                            <Typography className={classes.eventDetails}>
                                The name of Bazm-e-Sathee does not require any recognition in the context of its academic and ideological services to students in the educational Schools & Institutes of Pakistan.
                                We, cordially invites you to be a part of our Children’s Expo Season II which shall be InshaAllah held on 27th of October, 2022 at Askari Amusement Park Karachi.
                                Continuing our Legacy, we are organizing a Mega Event consisting of Competitions, Games and Workshops will be held. Moreover, Speech Competition, Quiz Competition, Tableaus, Project Exhibition, Arts Competition, Pictorial Writing, Neelam Ghar, Lucy Draw and many other things.
                            </Typography>
                        </div>
                    </div>
                    <Button id={REGISTER} variant="contained" sx={{ marginTop: 3 }} onClick={() => { window.open("https://forms.gle/eCmS7DHPFHizqyEW7") }}>Register Now</Button>
                </div>
                <GallerySection />
            </Container>
        </div>
    )
}

export default LandingPage;