import { useState } from 'react'
import './chatList.css'

const ChatList = () => {
  const [addMode, setAddMode] = useState(true);

  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img
          src={addMode ? "/plus.png" : "/minus.png"}
          alt=""
          className='addButton'
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="people">
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="person">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatList
