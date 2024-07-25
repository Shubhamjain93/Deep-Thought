import React from "react";
import { HiMiniArrowUturnLeft, HiMiniArrowUturnRight } from "react-icons/hi2";
import { TfiFullscreen } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
function Card3() {
  return (
    <>
      <div className="border-top">
        <div className="mt-3">
          <div className=" mt-5 px-4 ">
            <h3 className="text-start">Title</h3>
            <input type="text" className="w-100 p-2 fs-4 border border-opacity-25 rounded shadow-lg" />
          </div>
        </div>

        <div className="mt-3">
          <div className=" mt-5 px-4 ">
            <h3 className="text-start">Content</h3>
          </div>
          <div className="border mt-5 mx-4 px-4 ">
              <ul className="d-flex justify-content-between list-unstyled">
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Insert</li>
                <li>Format</li>
                <li>Tools</li>
                <li>Table</li>
                <li>Help</li>
              </ul>
              <ul className="d-flex  list-unstyled">
                <li><HiMiniArrowUturnLeft className="fs-3"/></li>
                <li><HiMiniArrowUturnRight className="fs-3 mx-3"/></li>
                <li><TfiFullscreen className="fs-3 mx-2"/></li>
                <li className="bg-secondary bg-opacity-10 fs-5 ms-3 pe-5">Paragraph </li>
                <li><BsThreeDots  className="fs-2 ms-3"/></li>
              </ul>

          </div>
          <div className="border shadow-lg  mx-4 px-4 ">

          </div>
        </div>
      </div>
    </>
  );
}

export default Card3;
