import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
  const location = useLocation();

  const getLinkClass = (path: string) =>
    location.pathname.startsWith(path)
      ? "list-group-item text-center border-0 bg-white text-danger"
      : "list-group-item text-center border-0 bg-black text-white";

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="NEU" />
      </a>

      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={getLinkClass("/Kanbas/Account")}
      >
        <FaRegCircleUser className="fs-1" style={{ color: "white" }} />
        <br />
        Account
      </Link>

      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={getLinkClass("/Kanbas/Dashboard")}
      >
        <AiOutlineDashboard className="fs-1" style={{ color: "red" }} />
        <br />
        Dashboard
      </Link>

      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={getLinkClass("/Kanbas/Courses")}
      >
        <LiaBookSolid className="fs-1" style={{ color: "red" }} />
        <br />
        Courses
      </Link>

      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={getLinkClass("/Kanbas/Calendar")}
      >
        <IoCalendarOutline className="fs-1" style={{ color: "red" }} />
        <br />
        Calendar
      </Link>

      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={getLinkClass("/Kanbas/Inbox")}
      >
        <FaInbox className="fs-1" style={{ color: "red" }} />
        <br />
        Inbox
      </Link>

      <Link
        to="/Labs"
        id="wd-labs-link"
        className={getLinkClass("/Labs")}
      >
        <LiaCogSolid className="fs-1" style={{ color: "red" }} />
        <br />
        Labs
      </Link>
    </div>
  );
}


