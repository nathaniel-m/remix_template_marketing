import type { MetaFunction } from "@remix-run/node";
import Hero from "../components/hero/hero.jsx"
import HeroAlternate from "../components/hero/heroAlternate.jsx"
import ProductImage from "../components/product-image.jsx"
import Navbar from "../components/navbar/navbar.jsx";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero
        heroH1={"Use The AI Taking Over The world"}
        heroH1_bold={""}
        herotext_description={"Ominous has already installed itself on half the devices in the world. Now you can use that same AI to write songs about your dog."}
        herobutton_url={""}
      />
      <ProductImage
        ImageSrcDk={"/hero-dk.png"}
        ImageSrcLt={"/hero-lt.png"}
        ImageAlt={"screen shot"}
      />
    </>
  );
}