import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
const App = () => {
  // const [isUser, setIsUser] = useState(false);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
