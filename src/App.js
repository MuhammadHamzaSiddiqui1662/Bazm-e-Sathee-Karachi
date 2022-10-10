import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage"
import NavBar from "./components/NavBar/NavBar"
import { makeStyles } from '@mui/styles';
import Footer from './components/Footer/Footer';
import bg from "./assets/images/logo.jpg"

const useStyle = makeStyles({
  root: {
    // backgroundColor: "#f0f0f0",
  },
  bgLogo: {
    width: "100%",
    height: "80vh",
    objectFit: "contain",
    position: 'fixed',
    top: "50%",
    left: 0,
    transform: "translateY(-50%)",
    zIndex: -10,
    opacity: 0.1
  }
})

function App() {
  const classes = useStyle()
  return (
    <div className={classes.root + " App"}>
      <img src={bg} alt="" className={classes.bgLogo} />
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
