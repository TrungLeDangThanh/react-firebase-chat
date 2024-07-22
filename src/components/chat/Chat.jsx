import { useState } from "react"
import EmojiPicker from "emoji-picker-react"
import "./chat.css"

const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false)
  const [text, setText] = useState("")

  const AddEmoji = (emoji) => {
    setText((prev) => prev + emoji)
    setOpenEmoji(false)
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="" />
          <img src="/video.png" alt="" />
          <img src="/info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione animi beatae, repellat cum impedit, sequi, quis enim ipsa sint quidem accusamus quas nihil inventore quia quos obcaecati sit similique.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione animi beatae, repellat cum impedit, sequi, quis enim ipsa sint quidem accusamus quas nihil inventore quia quos obcaecati sit similique.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione animi beatae, repellat cum impedit, sequi, quis enim ipsa sint quidem accusamus quas nihil inventore quia quos obcaecati sit similique.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione animi beatae, repellat cum impedit, sequi, quis enim ipsa sint quidem accusamus quas nihil inventore quia quos obcaecati sit similique.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="content">
            <img src="https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione animi beatae, repellat cum impedit, sequi, quis enim ipsa sint quidem accusamus quas nihil inventore quia quos obcaecati sit similique.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="content">
            <img src="https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione animi beatae, repellat cum impedit, sequi, quis enim ipsa sint quidem accusamus quas nihil inventore quia quos obcaecati sit similique.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/img.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/mic.png" alt="" />
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
            />
            <EmojiPicker
              className="picker"
              open={openEmoji}
              onEmojiClick={(emoji) => AddEmoji(emoji.emoji)}
            />
          </div>
        </div>
        <button className="sendButton">
          <img src="/send.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Chat
