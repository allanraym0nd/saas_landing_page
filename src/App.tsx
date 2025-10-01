import { Layout } from "./components/Layout"
import { Brands } from "./components/sections/Brands"
import { Hero } from "./components/sections/Hero"
import { Services } from "./components/sections/Services"
import { AboutUs } from "./components/sections/AboutUs"
import { Pricing } from "./components/sections/Pricing"
import { CTA } from "./components/sections/CallToAction"
// import { Footer } from "./components/elements/Footer"

function App() {


  return (
    <Layout title = "EdgeAI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
      
    </Layout>
  )
}

export default App
