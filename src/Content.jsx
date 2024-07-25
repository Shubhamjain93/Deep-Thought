import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaInfoCircle } from "react-icons/fa";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";


function Content({ task }) {
  const RenderCards = ({ card, children }) => {
    return (
      <div className="col-6 mb-5">
        <div className="card rounded-top-4 " style={{ height: "745px" }}>
          <div className="card-body text-center p-0 mb-3">
            <div className="bg-black rounded-top-4 d-flex justify-content-between align-items-center">
              <div className="flex-grow-1 d-flex justify-content-center">
                <h5 className="card-title text-white p-3 fs-4">
                  {card.asset_title}
                </h5>
              </div>
              <div className=" me-3 ">
                <a href="#">
                  <FaInfoCircle className="text-white fs-2" />
                </a>
              </div>
            </div>
            <p className="card-text mt-3 fs-5 text-start px-3 mb-5">
              Description: {card.asset_description}
            </p>
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container text-center mt-3">
        <div className="row">
          <div className="col fs-1 text-primary text-start fw-bold">
            Technical Project Management
          </div>
          <div className="col fs-3 text-end">
            <button className="btn btn-primary px-3">Submit Task</button>
          </div>
        </div>
      </div>

      <div className="container bg-secondary bg-opacity-10 rounded p-4 mt-3">
        <div className="row">
          <p className="fs-3  fw-semibold">{task.task_title} </p>{" "}
          <p>{task.task_description}</p>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          {task.assets.map((card) => (
            <RenderCards card={card} key={card.asset_id}>
              {card.asset_content_type === "video" && <Card1 details={card} />}
              {card.asset_content_type === "threadbuilder" && <Card2 />}
              {card.asset_content_type === "article" &&
                card.asset_type === "input_asset" && <Card3 />}
              {card.asset_content_type === "article" &&
                card.asset_type === "display_asset" && <Card4 />}
            </RenderCards>
          ))}
        </div>
      </div>

      <div className="position-fixed bottom-0 end-0 m-3 d-flex flex-column">
        <a href="#" title="Help" className="d-block bg-primary text-white  py-2 px-3 rounded-circle fs-3 text-decoration-none text-center mb-3">?</a>
        <a href="#" title="Users" className="d-block bg-primary text-white  py-2 px-3 rounded-circle fs-3 text-decoration-none text-center mb-3"><IoIosPeople /></a>
        <a href="https://www.bing.com/ck/a?!&&p=b691145980063de2JmltdHM9MTcxNzg5MTIwMCZpZ3VpZD0zOGE1MWNjZC0yYzYwLTYwNWQtMTJjZS0wZjYyMmRiZDYxMTgmaW5zaWQ9NTIyOA&ptn=3&ver=2&hsh=3&fclid=38a51ccd-2c60-605d-12ce-0f622dbd6118&psq=calender&u=a1aHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tLw&ntb=1" title="Calendar" className="d-block bg-primary text-white  py-2 px-2 rounded-circle fs-3 text-decoration-none text-center"><FaRegCalendarAlt /></a>
    </div>
    </>
  );
}

export default Content;
