import { useState } from "react";
import Login from "./Login";
import Tasks from "./Tasks";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Tasks token={token} logout={logout} />
      )}
    </div>
  );
}

export default App;