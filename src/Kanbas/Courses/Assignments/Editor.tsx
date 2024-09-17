export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br/><br/>
      <input id="wd-name" value="A1 - ENV + HTML" /><br/><br/>

      <textarea id="wd-description" rows={9} cols={50}>
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. 
        The landing page should include the following: Your full name and section Links to each of the lab assignments 
        Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should 
        include a link to navigate back to the landing page.
      </textarea>
      <br/><br/>

      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr><br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr><br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="GPA">GPA</option>
            </select>
          </td>
        </tr><br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </td>
        </tr><br/>

        <tr>
          <td></td>
          <td>
            <label>
              <input type="checkbox" id="wd-text-entry" /> Text Entry
            </label><br />
            <label>
              <input type="checkbox" id="wd-website-url" /> Website URL
            </label><br />
            <label>
              <input type="checkbox" id="wd-media-recordings" /> Media Recordings
            </label><br />
            <label>
              <input type="checkbox" id="wd-student-annotation" /> Student Annotation
            </label><br />
            <label>
              <input type="checkbox" id="wd-file-upload" /> File Uploads
            </label>
          </td>
        </tr><br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <div><label htmlFor="wd-assign-to">Assign to</label></div>
            <input id="wd-assign-to" value={"Everyone"} />
          </td>
        </tr><br/>

        <tr>
          <td align="right" valign="top"></td>
          <td>
            <div><label htmlFor="wd-due-date">Due</label></div>
            <input id="wd-due-date" type="date" value="2024-05-13" />
          </td>
        </tr><br/>

        <tr>
          <td align="right" valign="top"></td>
          <td>
            <table><tr>
                <td>
                  <div><label htmlFor="wd-available-from">Available from</label></div>
                  <input id="wd-available-from" type="date" value="2024-05-06" />
                </td>
                <td>
                  <div><label htmlFor="wd-available-until">Until</label></div>
                  <input id="wd-available-until" type="date" value="2024-05-20" />
                </td>
              </tr></table>
          </td>
        </tr>
      </table>

      <br />
      <hr />
      <div style={{ textAlign: 'right' }}>
        <button>Cancel</button>&nbsp;
        <button>Save</button>
      </div>
    </div>
  );
}

  