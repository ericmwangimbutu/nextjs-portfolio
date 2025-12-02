import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Layout>
  );
}
