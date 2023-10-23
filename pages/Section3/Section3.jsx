import Image from "next/image";
import animation from "../../public/Image/Vector3.png";

const Section3 = () => {
  return (
    <div>
      <div className="flex mt-20 bg-[#FFFBEE] flex-col lg:flex-row justify-between p-10 ">
        <div className="">
          <div>OUR HAPPY CUSTOMERS</div>
          <div className="text-[50px] w-[500px] font-bold">
            What our customers say about us
          </div>
          <p className="h-0.5 w-[553px] bg-black"></p>
        </div>
        <div className="w-[608px]  mt-52">
          <Image className="mr-10" src={animation} alt="vector"></Image>
          <div className="text-[40px]">
            Lorem ipsum dolor sit amet consectetur. In praesent ac sit
            scelerisque lacus. Faucibus tincidunt commodo mi.
          </div>

          <div className="font-bold text-[30px]">Jane Doe</div>
          <p>Product Specialist, Lorem Co.</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
