import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (9)</h2>
      <hr />

      <div id="wd-dashboard-courses" className="container">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} alt="React JS" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {Array.from({ length: 8 }).map((_, idx) => (
            <div className="wd-dashboard-course col" key={idx} style={{ width: "250px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${idx + 1235}/Home`}
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} alt={`Course ${idx + 1}`} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS12{35 + idx} Course {idx + 1}
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Software Development
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

