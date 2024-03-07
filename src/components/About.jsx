import React from "react";
import pic3 from "../assets/Img/img-och.jpg"

function About() {
  return (
    <div className="W-full py-20 px-[4.5vw] bg-[#CDEA68] rounded-t-3xl">
      <h1 className="text-[3.5vw] leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech <br /> businesses
        that need to <u>raise funds</u>, <u>sell products</u>,
        <br /> <u>explain complex ideas</u>, and <u>hire great people</u>.
      </h1>

      <div className=" textpart  flex justify-between mt-[3vw]  border-y	 border-black  pt-[1.5vw] pb-[4vw]">
        <p>What you can expect:</p>
        <p>
          We create tailored presentations to help
          <br /> you persuade your colleagues, clients, or
          <br /> investors. Whether it's live or digital,
          <br /> delivered for one or a hundred people.
          <br />
          <br />
          We believe the mix of strategy and <br />
          design (with a bit of coffee) is what
          <br /> makes your message clear, convincing,
          <br /> and captivating.
        </p>
        <p>
          <br />
          <br />
          <br />
          S:
          <br />
          <br />
          Instagram
          <br />
          Behance
          <br />
          Facebook
          <br />
          Linkedin
          <br />
        </p>
      </div>

      <div className="w-full flex gap-10 pt-[2vw] pb=[2vw] ">
        <div className="w-1/2">
          <h1 className="text-[3.8vw]">Our approch:</h1>
          <button className=" group flex hover:bg-black  gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-900 rounded-full text-white">
            READ MORE
            <div className=" group-hover:scale-150  rounded-full bg-white w-[0.8vw] h-[0.8vw]"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh]">
          <img className="rounded-lg" src={pic3} alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default About;