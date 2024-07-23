import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./bottom.css";

const Bottom = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");

  const AddEmoji = (emoji) => {
    setText((prev) => prev + emoji);
    setOpenEmoji(false);
  };

  return (
    <div className="bottom">
      <div className="icons">
        <img src="/img.png" alt="" className="icon" />
        <img src="/camera.png" alt="" className="icon" />
        <img src="/mic.png" alt="" className="icon" />
      </div>
      <div className="inputBar">
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(text) => setText(text.target.value)}
        />
        <div className="emoji">
          <img
            src="/emoji.png"
            alt=""
            onClick={() => setOpenEmoji((prev) => !prev)}
            className="icon"
          />
          <EmojiPicker
            className="picker"
            open={openEmoji}
            onEmojiClick={(emoji) => AddEmoji(emoji.emoji)}
          />
        </div>
      </div>
      <button className="sendButton">
        <img src="/send.png" alt="" className="icon" />
      </button>
    </div>
  );
};

export default Bottom;
