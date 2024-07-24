import "./agentInfo.css";

const AgentInfo = () => {
  return (
    <div className="agentInfo">
      <div className="agent">
        <img src="/avatar.png" alt="" className="avatar" />
        <h3>Amber Heard</h3>
      </div>
      <div className="icons">
        <img src="/more.png" alt="" className="icon" />
        <img src="/video.png" alt="" className="icon" />
        <img src="/edit.png" alt="" className="icon" />
      </div>
    </div>
  );
};

export default AgentInfo;
