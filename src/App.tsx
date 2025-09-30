import { Layout } from "./components/Layout"
import { Brands } from "./components/sections/Brands"
import { Hero } from "./components/sections/Hero"
import { Services } from "./components/sections/Services"
import { AboutUs } from "./components/sections/AboutUs"
import { Pricing } from "./components/sections/Pricing"

function App() {


  return (
    <Layout title = "EdgeAI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
    </Layout>
  )
}

export default App
