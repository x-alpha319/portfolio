import { useState } from "react";

function Task2() {
  const [task, setTask] = useState([]);

  const formDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  return <div></div>;
}

export default Task2;
