import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect, useState } from "react";
import { LosePage } from "./components/LosePage";
import { SpinToWin } from "./components/SpinToWin";
import { WinPage } from "./components/WinPage";
import type { ZodiacAnimal } from "./types/types";
import "./index.css";

type View = "spin" | "win" | "lose";

function App() {
  const [view, setView] = useState<View>("spin");
  const [loseAnimal, setLoseAnimal] = useState<ZodiacAnimal | null>(null);
  const [lastLandedAnimalIndex, setLastLandedAnimalIndex] = useState<number | null>(null);

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleSpinResult = (result: "win" | "lose", animal?: ZodiacAnimal, landedAnimalIndex?: number) => {
    const index = landedAnimalIndex ?? 0;
    setLastLandedAnimalIndex(index);
    if (result === "win") {
      setView("win");
      setLoseAnimal(null);
    } else {
      setView("lose");
      setLoseAnimal(animal ?? null);
    }
  };

  const handleSpinAgain = () => {
    setView("spin");
  };

  if (view === "win") {
    return <WinPage onSpinAgain={handleSpinAgain} onClose={handleSpinAgain} />;
  }
  if (view === "lose" && loseAnimal) {
    return <LosePage animal={loseAnimal} onSpinAgain={handleSpinAgain} onClose={handleSpinAgain} />;
  }
  return <SpinToWin onSpinResult={handleSpinResult} initialLandedAnimalIndex={lastLandedAnimalIndex} />;
}

export default App;
