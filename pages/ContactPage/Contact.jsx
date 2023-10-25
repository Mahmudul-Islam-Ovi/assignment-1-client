"use client";

import Image from "next/image";
import { useState } from "react";
import call from "../../public/Image/call.png";
import location from "../../public/Image/location.png";
import global from "../../public/Image/global.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const sentMail = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, phone }),
    });

    if (data.status === 401 || !data) {
      alert(error);
    } else {
      setEmail("");
      setName("");
      setMessage("");
      setPhone("");
      alert("Message sent successfully");
    }
  };
  return (
    <div className="lg:h-[661px] mt-24 mb-10 bg-[#bac3cf]	flex flex-col lg:flex-row p-10  justify-center items-center">
      <div className="flex  w-[500px] flex-col gap-10 justify-center  items-center">
        <div className="flex flex-col gap-10">
          <div>
            <div className="flex gap-1">
              <Image src={call} alt=""></Image>
              <p className="text-[32px] font-semibold"> Call Us</p>
            </div>
            <div className="text-[20px] underline pointer-events-auto">
              +91 9876543210
            </div>
          </div>
          <div>
            <div className="flex gap-1">
              <Image src={location} alt=""></Image>
              <p className="text-[32px] font-semibold"> Call UsLocation </p>
            </div>
            <div className="text-[20px]">Ghaziabad, Uttar Pradesh</div>
          </div>
          <div>
            <div className="flex gap-1">
              <Image src={global} alt=""></Image>
              <p className="text-[32px] font-semibold"> Mail us </p>
            </div>
            <div className="text-[20px]">info@markall.in</div>
          </div>
        </div>
      </div>

      <div className="lg:w-[650px] bg-white border rounded h-[811px] flex justify-center items-center">
        <div>
          <div className="p-5">
            <p className="lg:text-[56px] font-semibold">Contact Now</p>
            <p>
              In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum
              viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl.
              Id vestibulum tincidunt adipiscing gravida risus.
            </p>
          </div>
          <form
            action=""
            className="flex justify-center items-center mt-10 flex-col gap-3"
          >
            <input
              type="text"
              placeholder="Enter name*"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Enter email*"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="phone"
              placeholder="phone*"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Message*"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <div onClick={sentMail} className="btn mt-2 btn-primary w-52">
              Submit
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
