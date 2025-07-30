import React from "react";
import useTimer from "../hooks/useTimer";

const TimerComponent: React.FC = () => {
  const { seconds, start, pause, reset, isRunning } = useTimer();

  return (
    <div className="flex flex-col gap-4 items-center mt-10 text-xl">
      <h1 className="text-3xl"> Timer: {seconds}s</h1>

      <div className="flex gap-3">
        <button onClick={start} className="bg-green-500 p-2 rounded text-white">
          Start
        </button>
        <button onClick={pause} className="bg-yellow-500 p-2 rounded text-white">
          Pause
        </button>
        <button onClick={reset} className="bg-red-500 p-2 rounded text-white">
          Reset
        </button>
      </div>

      <p>Status: {isRunning ? "Running" : "Paused"}</p>
    </div>
  );
};

export default TimerComponent;
