import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="m-0 absolute top-[0px] left-[0px] w-[100%] h-[200px]">
        <nav className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white overflow-hidden text-left text-17xl text-white font-roboto-condensed">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-darkslateblue-300" />
            <img
              className="absolute h-[97.%] w-[99.32%] top-[2.5%] right-[0.34%] bottom-[0%] left-[0.34%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/line-11@2x.png"
            />
            <img
              className="absolute h-[86.5%] w-[99.43%] top-[0%] right-[0.57%] bottom-[13.5%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/line-21@2x.png"
            />
            <img
              className="absolute h-[87%] w-[98.64%] top-[13%] right-[0.34%] bottom-[0%] left-[1.02%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/line-31@2x.png"
            />
          </div>

          <img
            className="absolute h-[57%] w-[7.78%] top-[19%] right-[23.89%] bottom-[24%] left-[68.33%] rounded-41xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <img
            className="absolute h-[57%] w-[7.78%] top-[22.5%] right-[13.47%] bottom-[20.5%] left-[78.75%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-3@2x.png"
          />
          <img
            className="absolute h-[57%] w-[7.78%] top-[20%] right-[3.06%] bottom-[23%] left-[89.17%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-4@2x.png"
          />
          <img
            className="absolute h-[57%] w-[7.78%] top-[22.5%] right-[91.18%] bottom-[20.5%] left-[1.04%] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-2@2x.png"
          />
          <div className="absolute top-[74px] left-[190px] w-[692px] h-[47px] flex flex-row items-start justify-start gap-[39px] font-times-new-roman">
            <div className="w-[105px] relative h-[47px]">
              <a className="[text-decoration:none] absolute h-full w-full top-[0%] left-[0%] font-bold text-[inherit] inline-block">
                Home
              </a>
            </div>
            <div className="w-[135px] relative h-[42px]">
              <a className="[text-decoration:none] absolute top-[0%] left-[0%] font-bold text-[inherit]">{`About US `}</a>
            </div>
            <div className="w-[198px] relative h-[42px]">
              <a className="[text-decoration:none] absolute top-[0%] left-[0%] font-bold text-[inherit]">{` Our Products `}</a>
            </div>
            <div className="w-[158px] relative h-[42px]">
              <a className="[text-decoration:none] absolute top-[0%] left-[0%] font-bold text-[inherit]">
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
