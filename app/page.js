import Contact from "@/pages/ContactPage/Contact";
import NavBar from "@/pages/NabBar/NavBar";
import Section1 from "@/pages/Section1.jsx/Section1";
import Section2 from "@/pages/Section2/Section2";
import Section3 from "@/pages/Section3/Section3";

export default function Home() {
  return (
    <div className=" ">
      <NavBar></NavBar>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Contact></Contact>
    </div>
  );
}
