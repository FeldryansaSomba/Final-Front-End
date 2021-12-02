import About from "../components/About"
import Home from "../components/Home"
import Portofolio from "../components/Portofolio"
import Team from "../components/Team"
import Work from "../components/Work"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

export default function Homepage() {
    return (
        <div>
  <div className="preloader">
    <div className="sk-spinner sk-spinner-circle">
      <div className="sk-circle1 sk-circle" />
      <div className="sk-circle2 sk-circle" />
      <div className="sk-circle3 sk-circle" />
      <div className="sk-circle4 sk-circle" />
      <div className="sk-circle5 sk-circle" />
      <div className="sk-circle6 sk-circle" />
      <div className="sk-circle7 sk-circle" />
      <div className="sk-circle8 sk-circle" />
      <div className="sk-circle9 sk-circle" />
      <div className="sk-circle10 sk-circle" />
      <div className="sk-circle11 sk-circle" />
      <div className="sk-circle12 sk-circle" />
    </div>
  </div>
  {/* navigation section */}
  <Navigation/>
  {/* home section */}
  <Home/>
  {/* work section */}
  <Work/>
  {/* about section */}
  <About/>
  {/* team section */}
  <Team/>
  {/* portfolio section */}
  <Portofolio/>
  {/* pricing section */}
  <Pricing/>
  {/* contact section */}
  <Contact/>
  {/* footer section */}
  <Footer/>
</div>
    )
}
