import Image from 'next/image'
import styles from './page.module.css';
import { Header } from '@/container';
import { Navbar } from '@/components';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  )
}
