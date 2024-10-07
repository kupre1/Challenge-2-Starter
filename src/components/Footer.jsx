import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center py-6 sm:py-16 flex-col">
        {/*top size*/}
        <div className="flex justify-center items-start md:flex-row mb-8 w-full">
          {/*left side */}
          <div className="flex-[1] fle flex-col justify-start mr-10">
            <img
              src={logo}
              alt="bank-logo"
              className="w-[266px] h-[72.14px] object-contain"
            />
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px] ">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          {/* right size*/}
          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
            {footerLinks.map((footerlink) => (
              <div
                key={footerlink.title}
                className="flex flex-col ss:my-0 my-4 min-w-[150px] "
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {footerlink.title}
                </h4>
                <ul className="list-none mt-4 gap-4 flex flex-col">
                  {footerlink.links.map((link) => (
                    <li
                      key={link.name}
                      className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                    >
                      <a href={link.link}> {link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/*bottom size*/}
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45w]">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            Copyright 2021 HooBank. All Rights Reserved.
          </p>
          <div className="flex flex-row mt-6 md:mt-0 gap-[30px]">
            {socialMedia.map((social) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className="w-[21px] h-[21px] object-contain cursor-pointer"
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
