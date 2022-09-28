import "./eduModal.css";
import { userActions } from "../../store/reducer/index";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function Modal() {
  const eduRef = useRef();
  const year = new Date();
  const month = new Date();
  const [yearDate, setYearDate] = useState(year.getYear().toLocaleString());
  const [monthDate, setMonthDate] = useState(month.getMonth().toLocaleString());
  const dispatch = useDispatch();
  const [institution, setInstitution] = useState();
  const [degree, setDegree] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [show, setShow] = useState(true);
  const firstModal = useSelector((state) => state.firstModal);
  const degreeVal = useSelector((state) => state.degrees.educationDegrees);
  function onChangeHandler(event) {
    setInstitution(event.target.value);
  }

  function onChangeDegree(event) {
    setDegree(event.target.value);
  }
  useEffect(()=> {

 
  if(firstModal === true) {
    eduRef.current.scrollIntoView();
    eduRef.current.focus();
  }
}, [])

  function onChangeStartDate(event) {
    setStartDate(event.target.value);
  }
  function onChangeEndDate(event) {
    setEndDate(event.target.value);
  }

  function showEndDate() {
    setShow(!show);
  }
  return (
    <div className="overlay-form">
      <div className="form-pop">
        <div className="formpop-header">
          <div className="edu-form">Edit education</div>
          <div>
            <img
              src="/images/exit icon.jpg"
              onClick={() => {
                dispatch(userActions.closeModal());
              }}
              className="exit-icon"
              alt="exit"
            />
          </div>
        </div>

        <div className="institution-name">
          <label className="institution-label">Name of institution*</label>
          

<Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={onChangeHandler}  ref = {eduRef}  className="institution-text" placeholder="Ladoke Akintola University of Technologies"
      />
       
      
      
        </div>

        <div className="institution-name">
          <label className="institution-label">Degree awarded*</label>
          <select
            className="select-form"
            value={degree}
            onChange={onChangeDegree}
          >
            {degreeVal.map((deg) => {
              return (
                <option className="institution-select" value={deg.value}>
                  {deg.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="institution-name">
          <label className="institution-label">Start date*</label>
          <input
            type="month"
            onChange={onChangeStartDate}
            className="institution-input"
            name="startdate"
          />
        </div>

        {show && (
          <div className="institution-name">
            <label className="institution-label">End date*</label>
            <input
              type="month"
              onChange={onChangeEndDate}
              className="institution-input"
              name="end-date"
            />
          </div>
        )}
        <div className="institution-name">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              onClick={showEndDate}
            />
            <span className="check-text">Till date?</span>
          </div>
        </div>

        <div className="institution-name">
          <button
            type="button"
            className="save-button"
            onClick={() => {
              dispatch(
                userActions.saveEducation({
                  institution,
                  degree,
                  start_date: startDate,
                  end_date: endDate
                })
              );
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
