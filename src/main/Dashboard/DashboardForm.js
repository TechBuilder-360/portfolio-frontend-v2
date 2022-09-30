import "./DashboardForm.css";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { userActions } from "../../store/reducer/dataSlice";
import { GrDocumentPpt } from "react-icons/gr";
function DashboardForm() {
  const dispatch = useDispatch();
  const edu = useSelector((state) => state.list.education);
  const exp = useSelector((state) => state.list.experience);
  const skill = useSelector((state) => state.list.skill);
  const project = useSelector((state) => state.list.project);
  return (
    <div>
      {edu.map((item) => {
        return (
          <div className="dash-form">
            <div className="py-2 ps-3 pe-1" id="first-list">
              <div className="d-flex">
                <div>
                  <h6 className="fw-bold" id="title">
                    EDUCATION
                  </h6>
                </div>
                <div className="ms-auto">
                  <AiOutlinePlus className="show-form"
                    onClick={() => {
                      dispatch(userActions.openModal());
                    }}
                  />
                  <BiPencil />
                </div>
              </div>
              <div className="d-flex">
                <div className="fs-1 d-flex" id="icon-form">
                  <img
                    src="/images/emojione-v1_school.jpg"
                    className="school-image"
                    alt="school"
                  />
                </div>
                <div className="ms-2">
                  <div className="fw-bold" id="title">
                    {item.institution}
                  </div>
                  <div className="course-study">{item.degree}</div>
                  <div className="course-study">
                    from {item.start_date} to {item.end_date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {exp.map((item) => {
        return (
          <div className="dash-form">
            <div className="py-2 ps-3 pe-1" id="first-list">
              <div className="d-flex">
                <div>
                  <h6 className="fw-bold" id="title">
                    EXPERIENCE
                  </h6>
                </div>
                <div className="ms-auto">
                  <AiOutlinePlus />
                  <BiPencil />
                </div>
              </div>
              <div className="d-flex">
                <div className="fs-1 d-flex" id="icon-form">
                  <img src="/images/emojione-v1_office-building.jpg" className="school-image" alt="school" />
                </div>
                <div className="ms-2">
                  <div className="fw-bold" id="title">
                    {item.company}
                  </div>
                  <div className="course-study">{item.role}</div>
                  <div className="course-study">{item.location}</div>
                  <div className="course-study">
                    {item.start_date}- {item.end_date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {skill.map((item) => {
        return (
          <div className="dash-form">
            <div className="py-2 ps-3 pe-1" id="first-list">
              <div className="d-flex">
                <div>
                  <h6 className="fw-bold" id="title">
                    SKILL
                  </h6>
                </div>
                <div className="ms-auto">
                  <AiOutlinePlus />
                  <BiPencil />
                </div>
              </div>
              <div className="d-flex">
                <div className="fs-1 d-flex" id="icon-form">
                  <img src="/images/skill emoji.jpg" className="school-image" alt="school" />
                </div>
                <div className="">
                  <div className="fw-bold" id="title">
                    {item.skilltype}
                  </div>
                  <div className="course-study">{item.endorsement}</div>

                  <div className="course-study">{item.certificate}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

{project.map((project)=> {
  return <div className="dash-form">
    <div className="py-2 ps-3 pe-1" id="first-list">
      <h6 className="fw-bold" id="title">PROJECT</h6>
      <div className="d-flex" id="project">
        <div>
        <img src = "/images/file-icons_microsoft-project.jpg" className="school-image" alt="project" />
        </div>
        <div className="properties">
       <div> <span className="titles">TITLE </span> <input type="text" className="title-input"/></div>
        <div><span className="titles">DESCRIPTION </span> <input type="text" className="description-input"/></div>
       <div> <span className="titles">LINK </span> <input type="text" className="title-input" /></div>
          </div>
        </div>
      </div>
  </div>
})}
    </div>
  );
}
export default DashboardForm;
