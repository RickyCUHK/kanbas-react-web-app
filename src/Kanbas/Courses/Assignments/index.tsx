import { FaPlus } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { MdAssignment, MdDoNotDisturbAlt } from "react-icons/md";
import GreenCheckmark from "./GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoCaretDown } from "react-icons/io5";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <div id="wd-assignments-controls" className="d-flex align-items-center mb-3">
        <div className="input-group input-group-lg w-50 me-auto">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search..."
            aria-label="Search..."
          />
        </div>
        <button id="wd-add-assignments-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module</button>
        <button id="wd-add-assignments-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
        </div><br />

        <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoCaretDown className="me-2" />
            ASSIGNMENTS
            <ModuleControlButtons />
            <div className="badge rounded-pill border px-3 py-2 float-end text-dark border-dark">
              40% of Total
            </div>
          </div>

          <ul className="list-group rounded-0">
            <li className="wd-lesson list-group-item d-flex align-items-center justify-content-between  p-3 ps-1">
              <div className="d-flex align-items-center w-75">
                <div className="d-flex align-items-center me-3">
                  <BsGripVertical className="fs-3" />
                  <MdAssignment className="text-success fs-3"/>
                </div>
                
                <div>
                  <a className="fw-bold text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                    A1
                  </a><br />
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
                
              <AssignmentControlButtons />
            </li>

            <li className="wd-lesson list-group-item d-flex align-items-center justify-content-between  p-3 ps-1">
              <div className="d-flex align-items-center w-75">
                <div className="d-flex align-items-center me-3">
                  <BsGripVertical className="fs-3" />
                  <MdAssignment className="text-success fs-3" />
                </div>
                
                <div>
                  <a className="fw-bold text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                    A2
                  </a><br />
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
                
              <AssignmentControlButtons />
            </li>

            <li className="wd-lesson list-group-item d-flex align-items-center justify-content-between  p-3 ps-1">
              <div className="d-flex align-items-center w-75">
                <div className="d-flex align-items-center me-3">
                  <BsGripVertical className="fs-3" />
                  <MdAssignment className="text-success fs-3" />
                </div>
                
                <div>
                  <a className="fw-bold text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                    A3
                  </a><br />
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
                
              <AssignmentControlButtons />
            </li>
          </ul>
        </li>
      </ul>
      </div>
    );
  }