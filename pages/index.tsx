
import { About } from "../components/About";
import { Contacts } from "../components/Contacts";
import { Offer } from "../components/Offer";
import { PreparedSolutions } from "../components/PreparedSolutions";
import { SignForConsult } from "../components/SignForConsult";


export default function Home() {

  return (
    <>
      <Offer />
      <div>
        <About />
      </div>
      <SignForConsult />
      <PreparedSolutions />
      <Contacts />
    </>
  )
}
