import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import ResponsiveAppBar from "./Navbar";
import FoodList from "./FoodList";
import { FoodProvider } from "./FoodContext";
import Drawer from "@mui/material/Drawer";
import BottomAppBar from "./BottomNav";

function App() {
  return (
    <>
      <FoodProvider>
        <ResponsiveAppBar />
        <FoodList />
        {/* <Drawer></Drawer> */}

        <BottomAppBar></BottomAppBar>
      </FoodProvider>
    </>
  );
}

export default App;
