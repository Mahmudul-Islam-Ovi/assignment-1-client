import Image from "next/image";
import navImage from "../../public/Image/Marketing 1.png";
import v from "../../public/Image/Vector.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" bg-black lg:h-[1024px] rounded-bl-[100px]">
      <div className="flex text-white p-5 justify-between ">
        <Link href="#">MARKALL</Link>
        <div className="flex gap-5">
          <Link href="#">Service</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">About Us</Link>
        </div>
        <p className="btn bg-[#7CEDA1] text-black">Get Started</p>
      </div>

      <div className="flex  flex-col lg:flex-row text-white gap-40 p-10">
        <div className="">
          <div className="font-bold text-[70px]">Reach your - </div>
          <div className="font-bold text-[70px]">audience & convert</div>
          <div className="font-bold text-[70px]">your leads</div>

          <div className="lg:w-[700px] mt-5 text-[#FFF] text-[25px]">
            Get your customers with SEO, rank your business with email
            marketing, build sales leads
          </div>
          <div className="mt-5 flex gap-5">
            <button className="btn bg-[#7CEDA1] text-black">Get Started</button>
            <div className="btn bg-black text-white">
              <Image src={v} alt="vector"></Image>
              <p>Watch Demo</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="w-[578px] h-[386px]"
            src={navImage}
            alt="nav image"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
