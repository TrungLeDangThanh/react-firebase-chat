import { useState } from "react";
import "./contactList.css";

const ContactList = () => {
  const [addMode, setAddMode] = useState(true);

  return (
    <div className="contactList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" className="icon" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "/plus.png" : "/minus.png"}
          alt=""
          className="addButton"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="userList">
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="user">
          <img src="/avatar.png" alt="" className="avatar" />
          <div className="texts">
            <span>Johnny Depp</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
