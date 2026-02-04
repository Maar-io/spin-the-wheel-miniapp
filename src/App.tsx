import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect, useState } from "react";
import { SpinToWin } from "./components/SpinToWin";
import { WinPage } from "./components/WinPage";
import { LosePage } from "./components/LosePage";
import { ZODIAC_ANIMALS, type ZodiacAnimal } from "./types/types";
import "./index.css";

type View = "spin" | "win" | "lose";

function App() {
  const [view, setView] = useState<View>("spin");
  const [loseAnimal, setLoseAnimal] = useState<ZodiacAnimal>("snake");
  const [lastLandedAnimalIndex, setLastLandedAnimalIndex] = useState<number | undefined>(undefined);

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleSpinResult = (win: boolean, landedAnimalIndex: number) => {
    setLastLandedAnimalIndex(landedAnimalIndex);
    if (win) {
      setView("win");
    } else {
      setLoseAnimal(ZODIAC_ANIMALS[landedAnimalIndex]);
      setView("lose");
    }
  };

  const handleSpinAgain = () => {
    setView("spin");
  };

  if (view === "win") {
    return <WinPage onClose={handleSpinAgain} onSpinAgain={handleSpinAgain} />;
  }
  if (view === "lose") {
    return (
      <LosePage
        animal={loseAnimal}
        onClose={handleSpinAgain}
        onSpinAgain={handleSpinAgain}
      />
    );
  }
  return (
    <SpinToWin
      onSpinResult={handleSpinResult}
      initialLandedAnimalIndex={lastLandedAnimalIndex}
    />
  );
}

export default App;
