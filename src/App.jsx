import Login from "./components/login/Login.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";

const App = () => {
  const user = false;

  return <div className="container">{user ? <Dashboard /> : <Login />}</div>;
};

export default App;
