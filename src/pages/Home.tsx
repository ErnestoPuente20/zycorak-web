import AboutUs from "../components/sections/AboutUs";
import BestSellers from "../components/sections/BestSellers";
import Collections from "../components/sections/Collections";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <main>
        <Hero/>
        <Collections/>
        <BestSellers/>
        <AboutUs/>
    </main>
  )
}
