import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect } from "react";
import { SpinToWin } from "./components/SpinToWin";
import "./index.css";

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return <SpinToWin />;
}

export default App;
