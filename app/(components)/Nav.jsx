import Link from "next/link";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        {/* <Link href={"/"}>
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href={"/ticketPage/new"}>
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link> */}
        <h1>Solids Testing</h1>
      </div>
      <div>
        <p className="text-default-text">some email here</p>
      </div>
    </nav>
  );
};

export default Nav;
