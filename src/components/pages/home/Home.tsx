import ContactHome from "./contact/ContactHome";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Quote from "./quote/Quote";
import Stacks from "./stacks/Stacks";
import "./home.css";

function Home() {
  return (
    <main id="home">
      <Hero />
      <Stacks />
      <Quote />
      <Projects />
      <ContactHome />
    </main>
  );
}

export default Home;
