import "./top.css";

const Top = () => {
  return (
    <div className="top">
      <div className="user">
        <img src="/avatar.png" alt="" className="avatar" />
        <div className="texts">
          <span>Johnny Depp</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="icons">
        <img src="/phone.png" alt="" className="icon" />
        <img src="/video.png" alt="" className="icon" />
        <img src="/info.png" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Top;
