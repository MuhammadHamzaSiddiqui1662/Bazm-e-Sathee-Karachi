import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import banner1 from "./../../assets/images/banners/childrenExpoBanner.jpg"
import banner2 from "./../../assets/images/banners/visitingCard.jpg"


const banners = [
    {
        _id: 1,
        link: banner1,
    },
    {
        _id: 2,
        link: banner2,
    }
]

const useStyle = makeStyles(theme => ({
    root: {
        height: 400,
        borderRadius: 10,
        position: "relative",
        overflow: "hidden",
        [theme.breakpoints.down("laptopHD")]: {
            height: 350
        },
        [theme.breakpoints.down("tablet")]: {
            height: 200
        },
    },
    slide: {
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: 0,
        transition: "opacity ease-in-out 0.6s",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "fill"
        },
    },
    activeSlide: {
        opacity: 1,
    },
    containerDots: {
        position: "absolute",
        bottom: 25,
        left: "50%",
        transform: "translateX(-50%)",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        margin: "0px 5px",
        backgroundColor: theme.palette.primary.main,
    },
    activeDot: {
        width: 8,
        height: 8,
        backgroundColor: "#fff",
        border: `2px solid ${theme.palette.primary.main}`,
    }
}))

const Banner = ({ className, link }) =>
    <div className={className}>
        <img src={link} alt="" />
    </div>

const Slider = props => {
    const classes = useStyle();
    const [slideIndex, setSlideIndex] = useState(0);

    const moveDot = index => {
        setSlideIndex(index)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (slideIndex == banners.length - 1) setSlideIndex(0)
            else setSlideIndex(slideIndex + 1)
        }, 2500)
        return () => { clearInterval(timer) }
    })

    return (
        <div className={classes.root}>
            {banners.map(({ _id, link }, index) =>
                <Banner className={slideIndex === index ? `${classes.slide} ${classes.activeSlide}` : classes.slide} key={_id} link={link} />
            )}
            <div className={classes.containerDots + " center"}>
                {Array.from({ length: banners.length }).map((item, index) =>
                    <div key={index} onClick={() => moveDot(index)} className={slideIndex === index ? `${classes.dot} ${classes.activeDot}` : classes.dot} ></div>
                )}
            </div>
        </div>
    )
}
export default Slider;