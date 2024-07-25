import React from "react";
import { IoIosArrowUp } from "react-icons/io";

function Card4() {
  return (
    <div className="border-top mt-5 ">
      <div className="mx-4 ">
        <div className="d-flex  align-items-center py-2 bg-secondary bg-opacity-10">
          <IoIosArrowUp className="fs-2" />
          <h2 className="m-0 ms-3">Introduction</h2>
        </div>

        <div className="mt-4">
          <p className="text-start fs-5">
            The 4SA Method , How to bring a idea into progress ?
          </p>
        </div>
        <div className="text-end mt-5">
          <a href="" className="text-decoration-none text-secondary fs-5 ">
            See More
          </a>
        </div>

        <div className="d-flex  align-items-center py-2 border ">
          <IoIosArrowUp className="fs-2" />
          <h2 className="m-0 ms-3">Thread A</h2>
        </div>

        <div className="mt-4">
          <p className="text-start fs-5">
          How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?
          </p>
        </div>
        <div className="text-end mt-5">
          <a href="" className="text-decoration-none text-secondary fs-5 ">
            See More
          </a>
        </div>

        <div className="  ms-5 mt-3">
          <div className="d-flex py-2 border align-items-center">
          <h2 className="m-0 ms-3">Example 1</h2>
          </div>
          <p className="text-start fs-5 mt-3">You have a concept , How will you put into progress?</p>
        </div>


      </div>
    </div>
  );
}

export default Card4;
