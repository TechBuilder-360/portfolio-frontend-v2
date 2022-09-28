import "./DashboardBody.css";
import { useState } from "react";
import Modal from "../../components/Modal/eduModal";
import { useDispatch } from "react-redux";
import {BiPlusMedical} from "react-icons/bi";
import { useSelector } from "react-redux";
import { GrEdit } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { BsDownload } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import DashboardForm from "./DashboardForm.js";

function DashboardBody() {
  const [list, setList] = useState([
    {
      title: "Andrew Martin",
      job: "Writer|Blogger"
    },
    {
      title: "Andrew Martin",
      job: "Writer|Blogger"
    },
    {
      title: "Andrew Martin",
      job: "Writer|Blogger"
    },
    {
      title: "Andrew Martin",
      job: "Writer|Blogger"
    },
    {
      title: "Andrew Martin",
      job: "Writer|Blogger"
    }
  ]);
  const dispatch = useDispatch();
  const modalisOpened = useSelector((state) => state.firstModal);
  return (
    <div className="rel">
      {modalisOpened && (
        <div className="overlay">
          <Modal />
        </div>
      )}
      <div className="main-dashboard">
        <div className="upload">
          <div className="upload-div">
            <div>
              <BiPlusMedical className="plus-icon" />
              <h4 className="">Upload Banner</h4>
            </div>
          </div>
          <div className="main-details">
            <div className="d-flex">
              <div className="image-border"></div>
              <div className="ms-auto edit-icon">
                <GrEdit />
              </div>
            </div>
            <div className="relative">
              <h6 className="fw-bold">Maria Ty Allyson</h6>
              <p className="text-banner">
                Lorem ipsum dolor sit amet, consectetur adipiscingelit. Ut vel
                non, lorem donec. Ornare turpis nec, suscipit cur sus placerat.
                Mi ac in mauris varius. Mi tellus pell en tesque sit olutpat
                porta diam.
              </p>
              <div>
                <HiOutlineLocationMarker />
                <span className="ps-1">Lagos, Nigeria</span>
              </div>
              <div>
                <span className="follow">45,000 followers</span>
                <span className="friends">13,500 friends</span>
              </div>
              <p className="connect">CONNECT HERE</p>
              <div className="d-flex" id="social">
                <div className="d-flex" id="icons-menu">
                  <div>
                    {" "}
                    <SiGmail className="gmail" />{" "}
                  </div>
                  <div className="ps-2">
                    {" "}
                    <CgFacebook />
                  </div>
                  <div className="px-2">
                    <AiOutlineWhatsApp />{" "}
                  </div>
                  <div>
                    {" "}
                    <FaLinkedinIn />
                  </div>
                  <div className="ps-2">
                    <FiTwitter />{" "}
                  </div>
                </div>
                <div className="resume">
                  <button type="button" className="btn fw-bold" id="download">
                    <BsDownload /> <span className="download">DOWNLOAD</span>{" "}
                    RESUME
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-div">
          <div className="fw-bold text-center pt-4 px-3">Suggested List</div>

          <div>
            {list.map((list) => {
              return (
                <div className="">
                  <div className="d-flex my-3" id="center-list">
                    <div className="list-image"></div>
                    <div className="ps-2">
                      <div className="list-title fw-bold">{list.title}</div>{" "}
                      <div className="list-job">{list.job}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="button" className="message-button">
                      Message
                    </button>{" "}
                    <button type="button" className="follow-button">
                      Follow
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <DashboardForm />
    </div>
  );
}
export default DashboardBody;
