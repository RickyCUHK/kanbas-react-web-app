import { FaRegCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container">
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" value="A1" className="form-control" />
        </div>
      </div>

      <div className="row mb-3 py-3">
        <div className="col-12">
          <textarea id="wd-description" rows={5} className="form-control">
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments. Link to the Kanbas application Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
          </textarea>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-8">
          <input id="wd-points" value="100" className="form-control" />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-8">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="PROJECTS">PROJECTS</option>
            <option value="EXAMS">EXAMS</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 d-flex align-items-center justify-content-end">
        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        </div>
        <div className="col-md-8">
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
            <option value="GPA">GPA</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 d-flex justify-content-end">
        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-8">
          <div className="border p-3 rounded">
            <select id="wd-submission-type" className="form-select mb-2">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <label className="form-label fw-bold py-3">Online Entry Options</label>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="wd-text-entry" />
              <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="wd-website-url"/>
              <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
              <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
              <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="wd-file-upload" />
              <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-4 d-flex justify-content-end">
          <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
        </div>
        <div className="col-md-8">
        <div className="border p-3 rounded mb-3">
          <div className="mb-3">
            <label className="form-label fw-bold">Assign to</label>
            <input type="text" className="form-control" value="Everyone" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Due</label>
            <div className="input-group">
              <input type="text" className="form-control" value="May 13, 2024, 11:59 PM" />
              <span className="input-group-text">
                <FaRegCalendarAlt />
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Available from</label>
              <div className="input-group">
                <input type="text" className="form-control" value="May 6, 2024, 12:00 AM" />
                <span className="input-group-text">
                  <FaRegCalendarAlt /> 
                </span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Until</label>
              <div className="input-group">
                <input type="text" className="form-control" value="" placeholder="No due date" />
                <span className="input-group-text">
                  <FaRegCalendarAlt />
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}

  