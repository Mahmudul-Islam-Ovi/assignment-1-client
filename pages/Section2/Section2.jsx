import Image from "next/image";
import animation from "../../public/Image/Automation 1.png";
import vector from "../../public/Image/Vector 2.png";
import Link from "next/link";

const Section2 = () => {
  return (
    <div className="h-[488px] container mx-auto rounded-lg bg-[#F1F1F1]">
      <div className="flex  flex-col lg:flex-row gap-40 p-10">
        <div className="">
          <div className="text-[35px] w-[375px font-semibold">
            Save precious time with automation
          </div>
          <div className="w-[240px] h-[211px]">
            Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa
            leo purus cras commodo. Volutpat massa fusce sit libero ut mollis
            risus.
          </div>

          <Link href="#">
            <div className="flex gap-1">
              Learn More
              <Image
                className="w-[26px] h-[12.78px] mt-1.5"
                src={vector}
                alt="vector"
              ></Image>
            </div>
          </Link>
        </div>
        <div>
          <Image
            className="w-[528px] h-[332px]"
            src={animation}
            alt="nav image"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Section2;
