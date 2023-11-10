import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Searchbar from "../Contents/Searchbar";

import av1 from "../../assets/av1.jpg";
import av2 from "../../assets/av2.jpg";
import av3 from "../../assets/av3.jpg";
import sewasew from "../../assets/sewasew.jpg";
import dstv from "../../assets/dstv.jpg";
import { log } from "joi-browser";

const Groups = () => {
  const [show, setShow] = useState([""]);

  const [subscription, setSubscription] = useState([
    { name: "Dstv", description: "100k subscribers", img: dstv },
    {
      name: "Sewasew",
      description: "42k subscribers",
      img: sewasew,
    },
    {
      name: "Canal +",
      description: "89k subscribers",
      img: av3,
    },
  ]);

  const [group, setGroup] = useState([
    {
      name: "Ekub",
      description: "6 members",
      img: av1,
    },
    {
      name: "Edir",
      description: "6 members",
      img: av2,
    },
    {
      name: "Baltna",
      description: "16 members",
      img: av3,
    },
  ]);

  const handleClick = (data) => {
    setShow(data);
  };

  return (
    <>
      <Sidebar></Sidebar>

      <div className="main-contents">
        <div className="row">
          <div className="col-12">
            <Searchbar></Searchbar>
          </div>

          <div className="row mt-4">
            <div className="col-lg-4 col-md-5 col-12">
              {/* Groups */}
              <div className="bg left-border-radius px-1 pt-1 pb-3">
                <div className="row justify-content-between p-2 bg-dark left-border-radius">
                  <div className="col-6">
                    <p>My Group</p>
                  </div>
                  <div className="col-1">
                    <p className="bi-plus-lg cursor-pointer"></p>
                  </div>
                </div>
                <div className="group">
                  {group.map((grp, index) => (
                    <div
                      key={index}
                      onClick={() => handleClick(grp)}
                      className={`${
                        grp.name === show.name && "bg-info"
                      } row mt-4 text-left bg2 rounded mx-3 pt-2 pb-1 cursor-pointer`}
                    >
                      <div className="col-lg-3 col-md-4 col-3 text-center g-0">
                        <img
                          src={grp.img}
                          className="img-fluid contact-badge"
                          width={"45px"}
                        />
                      </div>
                      <div className="col-lg-9 col-md-8 col-9 line-height-low small text-start g-0">
                        <p className="lh-1">{grp.name}</p>
                        <p className="small ">{grp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscriptions */}
              <div className="mt-4 bg left-border-radius px-1 pt-1 pb-3">
                <div className="row justify-content-between p-3 bg-dark left-border-radius">
                  <div className="col-6">
                    <p>My Subscription</p>
                  </div>
                  <div className="col-1">
                    <p className="bi-plus-lg cursor-pointer"></p>
                  </div>
                </div>
                <div className="subscription">
                  {subscription.map((subs, index) => (
                    <div
                      onClick={() => handleClick(subs)}
                      key={index}
                      className={`${
                        subs.name === show.name && "bg-info"
                      } row mt-4 text-left bg2 rounded mx-3 pt-2 pb-1 cursor-pointer`}
                    >
                      <div className="col-3 text-center g-0">
                        <img
                          src={subs.img}
                          className="img-fluid contact-badge"
                          width={"40px"}
                        />
                      </div>
                      <div className="col-9 line-height-low small text-start g-0">
                        <p className="lh-1">{subs.name}</p>
                        <p className="small">{subs.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {show.name && (
              <div className="col-lg-8 col-md-7 col-12 bg right-border-radius p-1 animate__animated animate__slideInLeft">
                <div className="row p-1 bg-info right-border-radius">
                  <div className="col-10">
                    <div className="row g-0">
                      <div className="col-lg-1 col-md-2 col-2 g-0">
                        <img
                          src={show.img}
                          className="img-fluid contact-badge"
                          width={"40px"}
                        />
                      </div>
                      <div className="col-lg-11 col-md-10 col-10 pt-2 fw-semibold line-height-low small text-start mt-2">
                        <p className="small ">{show.name}</p>
                        <p className="small">{show.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-1">
                    <p className="bi-list fs-6 cursor-pointer pt-2"></p>
                  </div>
                </div>

                <div className="col-12 p-3 small label text-center">
                  <p>No transaction history happened ): </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
