/** @format */

import Navbar from '../components/NavBar'
import Description from '../components/Description'
import Projects from '../components/MyProjects'
import { Habilities } from '../components/Habilities'
export default function Home() {
  return (
    <main>
      <Navbar />
      <Description />
      <Habilities />
    </main>
  )
}
