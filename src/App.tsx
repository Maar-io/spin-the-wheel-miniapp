import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect } from "react";
import { WinPage } from "./components/WinPage";
import "./index.css";

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  // Temporary: Win page as landing for testing. Switch back to <SpinToWin /> for normal flow.
  return <WinPage />;
}

export default App;
