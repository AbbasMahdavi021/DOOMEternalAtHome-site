import { Header, About, Process, ConceptArt, Video } from '@/container';
import { Navbar } from '@/components';
import './App.css';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Process />
      <ConceptArt />
      <Video />
    </div>
  )
}
