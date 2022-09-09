import "./DashboardForm.css";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { GrDocumentPpt } from "react-icons/gr";
function DashboardForm() {
  const list = useSelector((state) => state.list);
  return (
    <div>
      {list.map((item) => {
        return (
          <div className="dash-form">
            <div className="py-2 ps-3 pe-1" id="first-list">
              <div className="d-flex">
                <div>
                  <h6 className="fw-bold" id="title">
                    {item.title}
                  </h6>
                </div>
                <div className="ms-auto">
                  <AiOutlinePlus />
                  <BiPencil />
                </div>
              </div>
              <div className="d-flex">
                <div className="fs-1 d-flex" id="icon-form">
                  <FaSchool />
                </div>
                <div className="ms-2">
                  <div className="fw-bold" id="title">
                    {item.body}
                  </div>
                  <div className="course-study">{item.course}</div>
                  <div className="course-study">Sept 2015- Dec 2021</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default DashboardForm;
