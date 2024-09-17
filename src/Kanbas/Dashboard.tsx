import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
            
        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1001/Home">
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5>
                    CS1001 Basics of CS
                </h5>
                <p className="wd-dashboard-course-title">
                    Basics of CS
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>

        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1002/Home">
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5>
                    CS1002 Data structure
                </h5>
                <p className="wd-dashboard-course-title">
                Basics of CS
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>

        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1003/Home">
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5>
                    CS1003 Operating System
                </h5>
                <p className="wd-dashboard-course-title">
                Basics of CS
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>

        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1004/Home">
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5>
                    CS1004 Computer Architecture
                </h5>
                <p className="wd-dashboard-course-title">
                Basics of CS
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>

        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1005/Home">
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5>
                    CS1005 Computer Algorithms
                </h5>
                <p className="wd-dashboard-course-title">
                Basics of CS
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>

        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1006/Home">
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5>
                    CS1006 Artificial Intelligence 
                </h5>
                <p className="wd-dashboard-course-title">
                Basics of CS
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>

        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1007/Home">
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5>
                    CS1007 Cloud Computing
                </h5>
                <p className="wd-dashboard-course-title">
                Basics of CS
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
