import React from "react";
import { MdKeyboardArrowUp, MdMessage } from "react-icons/md";
import { IoMdBulb } from "react-icons/io";
import { TbMessageQuestion } from "react-icons/tb";
import { TiFeather } from "react-icons/ti";
import { FaChevronDown, FaPlus } from "react-icons/fa";

function Card2() {
  return (
    <>
      <div>
        <div className="d-flex fs-1 align-items-center bg-warning bg-opacity-10">
          <div className="me-5 fs-1">
            <MdKeyboardArrowUp />
          </div>
          <div className="ms-5 fs-2">
            <p className="fw-bold mb-0">Thread A</p>
          </div>
        </div>

        {/* Text Area */}
        <div className="container mt-5 p-0">
          <div className="row justify-content-evenly">
            <div className="col-5 border text-start rounded p-0 bg-light shadow-lg">
              <div>
                <h5 className="p-2 mb-0 ">Sub Thread 1</h5>
              </div>
              <textarea
                name=""
                id=""
                placeholder="Enter Text here"
                className="border w-100 h-100 p-2 rounded"
              ></textarea>
            </div>

            <div className="col-5 border text-start rounded p-0 bg-light shadow">
              <div>
                <h5 className="p-2 mb-0 ">Sub Interpretation 1</h5>
              </div>
              <textarea
                name=""
                id=""
                placeholder="Enter Text here"
                className="border w-100 h-100 p-2 rounded"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-5 d-flex justify-content-end ">
          <div className="fs-1 px-2 mt-3">
            <a href="#">
              <IoMdBulb className="px-1 text-black" />
            </a>
            <a href="#">
              <MdMessage className="px-1 text-black" />
            </a>
            <a href="#">
              <TbMessageQuestion className="px-1 text-black" />
            </a>
            <a href="#">
              <TiFeather className="px-1  text-black" />
            </a>
          </div>

          <div className="border rounded p-2 shadow d-flex align-items-center mx-2  mt-3">
            <p className="mb-0 me-2">Select Category</p>
            <FaChevronDown />
          </div>
          <div className="border rounded p-2 shadow d-flex align-items-center mx-2 me-4  mt-3">
            <p className="mb-0 me-2">Select Process</p>
            <FaChevronDown />
          </div>
        </div>

        <div className="text-start ms-4">
          <button className="btn btn-primary  mt-3 py-2 fs-5 rounded-4">
            <FaPlus className="me-2" />
            Sub Thread
          </button>
        </div>

        {/* Text Area */}

        <div className=" border text-start rounded p-0 bg-light shadow mx-4 mt-3">
          <div>
            <h5 className="p-2 mb-0 ">Sub Interpretation 1</h5>
          </div>
          <textarea
            name=""
            id=""
            placeholder="Enter Text here"
            className="border-0 border-top w-100 h-100 p-2 rounded"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Card2;
