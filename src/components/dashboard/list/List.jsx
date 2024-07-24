import ContactList from "./contactList/ContactList.jsx";
import AgentInfo from "./agentInfo/AgentInfo.jsx";
import "./list.css";

const List = () => {
  return (
    <div className="list">
      <AgentInfo />
      <ContactList />
    </div>
  );
};

export default List;
