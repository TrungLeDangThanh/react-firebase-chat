import Top from "./top/Top.jsx";
import Center from "./center/Center.jsx";
import Bottom from "./bottom/Bottom.jsx";
import "./chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <Top />
      <Center />
      <Bottom />
    </div>
  );
};

export default Chat;
