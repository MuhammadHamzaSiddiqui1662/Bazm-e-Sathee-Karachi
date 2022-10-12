import React from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import img1 from "./../../../../assets/images/gallerySection/1.jpeg";
import img2 from "./../../../../assets/images/gallerySection/2.jpeg";
import img3 from "./../../../../assets/images/gallerySection/3.jpeg";
import img4 from "./../../../../assets/images/gallerySection/4.jpeg";
import img5 from "./../../../../assets/images/gallerySection/5.jpeg";
import img6 from "./../../../../assets/images/gallerySection/6.jpeg";
import { GALLERY } from "../../../../utils/constants";


const useStyle = makeStyles(theme => ({
    root: {
        marginTop: 60,
        width: "100%",
    },
    heading: {
    },
    body: {
        width: "100%",
        flexWrap: "wrap",
        marginTop: 20,
    },
    images: {
        width: "33.33%",
        height: 200,
        [theme.breakpoints.down("md")]: {
            width: "50%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        }
    },
}));

const GallerySection = () => {
    const classes = useStyle()
    return (
        <div id={GALLERY} className={classes.root}>
            <Typography variant="h3" className={classes.heading}>
                Gallery
            </Typography>
            <div className={classes.body + " center"}>
                <img src={img1} alt="" className={classes.images} />
                <img src={img2} alt="" className={classes.images} />
                <img src={img3} alt="" className={classes.images} />
                <img src={img4} alt="" className={classes.images} />
                <img src={img5} alt="" className={classes.images} />
                <img src={img6} alt="" className={classes.images} />
            </div>
        </div>
    )
}

export default GallerySection;