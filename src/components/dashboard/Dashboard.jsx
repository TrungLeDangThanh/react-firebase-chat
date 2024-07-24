import List from "./list/List.jsx";
import Chat from "./chat/Chat.jsx";
import Detail from "./detail/Detail.jsx";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default Dashboard;
