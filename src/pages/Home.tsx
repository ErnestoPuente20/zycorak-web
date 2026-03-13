import { Helmet } from "react-helmet-async";
import AboutUs from "../components/sections/AboutUs";
import BestSellers from "../components/sections/BestSellers";
import Collections from "../components/sections/Collections";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zycorak — Cristalería Premium en La Paz</title>
        <meta name="description" content="Descubre nuestra colección de cristalería de alta calidad. Copas, vasos y más para elevar cada momento. Entregas en La Paz, Bolivia."/>
        <meta name="keywords" content="cristalería, vasos, copas, cristal premium, La Paz, Bolivia, Zycorak"/>
        <meta property="og: title" content="Zycorak — Cristalería Premium en La Paz"/>
        <meta property="og:description" content="Cristalería de alta calidad para cada ocasión. Entregas en La Paz." />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
          <Hero/>
          <Collections/>
          <BestSellers/>
          <AboutUs/>
      </main>   
    </>
  )
}
