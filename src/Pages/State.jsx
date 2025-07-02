import { Minus, Plus } from "lucide-react";
import { useState } from "react";
function State() {
  const [count, setCount] = useState(6);
  const [inputValue, setInputValue] = useState("");
  const changeCount = () => {
    console.log("clicked");
    setCount((prev) => prev + 2);
  };
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleClear = () => {
    setInputValue("");
  };
  const [counter, setCounter] = useState(0);
  const startCount = () => {
    setCounter((prev) => prev + 1);
  };
  const subtractCount = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
      return;
    } else counter == 0;
    alert("deduction cannot exceed 0");
  };

  return (
    <>
      <button
        onClick={changeCount}
        className="bg-amber-200 w-[200px] mt-3 ml-3 font-bold text-lg rounded-lg"
      >
        {count}
      </button>
      <br />
      <input
        type="text"
        onChange={handleInput}
        value={inputValue}
        className="w-md p-3.5 border-2 border-amber-300 mt-5 ml-3 rounded-lg"
      />
      <p className="ml-7">{inputValue}</p>
      <button
        className="bg-amber-200 w-[200px] mt-3 font-bold text-lg p-3 ml-3 border-amber-500 rounded-lg"
        onClick={handleClear}
      >
        {" "}
        Clear
      </button>
      <br />
      <div>
        <button
          className="bg-amber-200 w-[80px] mt-3 font-bold text-lg p-3 ml-3 border-amber-500 rounded-lg"
          onClick={startCount}
        >
          <Plus />
        </button>
        <button className="bg-amber-200 w-[200px] mt-3 font-bold text-lg p-3 ml-3 border-amber-500 rounded-lg">
          {counter}
        </button>
        <button
          className="bg-amber-200 w-[80px] mt-3 font-bold text-lg p-3 ml-3 border-amber-500 rounded-lg"
          onClick={subtractCount}
        >
          <Minus />{" "}
        </button>
      </div>
    </>
  );
}
export default State;
