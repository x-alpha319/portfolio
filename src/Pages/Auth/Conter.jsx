import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);

  const timerUp = () => setCounter((prev) => prev * 2);
  const timerDown = () => {
    if (counter <= 0) {
      alert("Counter cannot exceed zero");
      return;
    }
    setCounter((prev) => Math.floor(prev / 2));
  };
  const reset = () => setCounter(1);

  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold mb-6">React Counter App</h1>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={timerDown}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          <MinusCircle />
        </button>
        <h2 className="text-2xl font-semibold min-w-[50px]">{counter}</h2>

        <button
          onClick={timerUp}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          <PlusCircle />
        </button>
      </div>

      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
