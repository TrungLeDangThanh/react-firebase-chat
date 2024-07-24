import "./chatDetail.css";

const ChatDetail = () => {
  return (
    <div className="chatDetail">
      <div className="option">
        <div className="title">
          <span>Chat Settings</span>
          <img src="/arrowDown.png" alt="" className="icon" />
        </div>
        <div className="dropDown"></div>
      </div>
      <div className="option">
        <div className="title">
          <span>Privacy & Help</span>
          <img src="/arrowDown.png" alt="" className="icon" />
        </div>
        <div className="dropDown"></div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Photos</span>
          <img src="/arrowUp.png" alt="" className="icon" />
        </div>
        <div className="photos">
          <img
            src="https://images.pexels.com/photos/2816903/pexels-photo-2816903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="photo"
          />
          <img
            src="https://images.pexels.com/photos/1597347/pexels-photo-1597347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="photo"
          />
          <img
            src="https://images.pexels.com/photos/2378464/pexels-photo-2378464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="photo"
          />
          <img
            src="https://images.pexels.com/photos/2199486/pexels-photo-2199486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="photo"
          />
          <img
            src="https://images.pexels.com/photos/7375094/pexels-photo-7375094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="photo"
          />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Files</span>
          <img src="/arrowDown.png" alt="" className="icon" />
        </div>
        <div className="files"></div>
      </div>
      <button>Block User</button>
      <button className="logOut">Log Out</button>
    </div>
  );
};

export default ChatDetail;
