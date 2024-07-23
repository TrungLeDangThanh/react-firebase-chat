import UserDetail from "./userDetail/UserDetail.jsx";
import ChatDetail from "./chatDetail/ChatDetail.jsx";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <UserDetail />
      <ChatDetail />
    </div>
  );
};

export default Detail;
