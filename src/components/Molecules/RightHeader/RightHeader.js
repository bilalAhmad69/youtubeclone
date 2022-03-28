import { Link } from "react-router-dom";
import { IconButton, Avatar, TypoGraphy } from "../../Atomic/";
import { RiVideoAddLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import "./rightHeader.css";
import { AVATAR } from "../../../assets/imagesLink";
import { useState } from "react";
import { auth } from "../../../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
const icons = [
  {
    id: 1,
    icon: (
      <Link to="/upload">
        <RiVideoAddLine className="topHeadingIcon" />
      </Link>
    ),
  },
  {
    id: 2,
    icon: (
      <Link to="#">
        <CgMenuGridR className="topHeadingIcon" />
      </Link>
    ),
  },
  {
    id: 3,
    icon: (
      <Link to="#">
        <IoMdNotificationsOutline className="topHeadingIcon" />,
      </Link>
    ),
  },
];
const RightHeader = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser(currentUser);
  });
  const handleAccount = (e) => {
    e.preventDefault();
    setIsShowModal(!isShowModal);
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      alert("log out sucessFully ..");
      window.location.reload(false);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="container">
      {currentUser ? (
        <div>
          <div className="container">
            {icons.map((icon) => {
              return (
                <IconButton key={icon.id} className="bgnone topHeadingBtn">
                  {icon.icon}
                </IconButton>
              );
            })}
            <Avatar image={AVATAR} onCLick={handleAccount} />
            <TypoGraphy
              text={
                <label onClick={handleLogout}> {currentUser.displayName}</label>
              }
            />
          </div>
          {isShowModal && (
            <div className="modal">
              <TypoGraphy
                text={
                  <label onClick={handleLogout} className="modalLabel">
                    Logout
                  </label>
                }
              />
            </div>
          )}
        </div>
      ) : (
        <Link to="/signup">
          <IconButton className="signIn bgnone">
            <FaRegUserCircle className="userIcon" />
            {"Sign in"}
          </IconButton>
        </Link>
      )}
    </div>
  );
};
export default RightHeader;
