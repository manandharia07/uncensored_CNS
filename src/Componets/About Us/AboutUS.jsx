import React from "react";
import { profilePic } from "../../assests/indexImg";
import teamData from "./../../handle/teamData";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
const AboutUS = () => {
  return (
    <section className="min-h-screen text-white  gradient-bg-welcome flex flex-col items-center">
      <h2 className="py-2 text-5xl uppercase font-bold mt-10">Meat Our Team</h2>
      <p className="font-light italic ">Who we are?</p>
      <div className="flex gap-x-5 gap-y-28 mt-36 flex-wrap justify-center">
        {teamData.map((memData, i) => (
          <div
            className="bg-gray-50 relative text-gray-800 rounded text-center min-w-[13rem] flex flex-col items-center pt-16"
            key={memData.social.github + i}
          >
            <div
              className="w-40 absolute -top-1/2"
              style={{
                clipPath:
                  "polygon(50% 0%, 93% 29%, 93% 73%, 52% 100%, 7% 73%, 7% 29%)",
              }}
            >
              <img src={profilePic} alt="" className="object-cover w-40 " />
            </div>
            <h3 className="font-bold text-xl ">{memData.name}</h3>
            <p>{memData.role}</p>
            <p>{memData.data}</p>
            <div className="flex w-full gap-4 bg-orange-600 text-white text-4xl mt-8 rounded">
              <a href={memData.social.insta} className="p-2">
                <AiOutlineInstagram  />
              </a>
              <a href={memData.social.twitter} className="p-2">
                <AiOutlineTwitter  />
              </a>
              <a href={memData.social.linkedIn} className="p-2">
                <AiOutlineLinkedin  />
              </a>
              <a href={memData.social.github} className="p-2">
                <AiOutlineGithub  />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUS;
