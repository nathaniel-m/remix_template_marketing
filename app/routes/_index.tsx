import type { MetaFunction } from "@remix-run/node";
import Hero from "../components/hero/hero.jsx"
import HeroAlternate from "../components/hero/heroAlternate.jsx"
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
      <Hero />
    </>
  );
}
