import Features from "../Componets/Features/Index";
import Footer from "../Componets/Footer/Index";
import Hero from "../Componets/Hero";
import Navbar from "../Componets/Navbar";
import WhyKomet from "../Componets/WhyKomet/Index";


const Home = () => {
  return (
    <><div className="">
      <Navbar />
      <Hero />
      <WhyKomet />
      <Features />
      <Footer />
      {/* <Aboutus /> */}
      {/* <Careers /> */}
    </div>
    </>
  )
}

export default Home;