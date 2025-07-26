import { Check, Pen, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";

function Task() {
  const [values, setValues] = useState({ name: "", date: "" });
  const [item, setItem] = useState([]);
  const [countdowns, setCountdowns] = useState({});

  const formDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const addItem = () => {
    setItem((prev) => [
      ...prev,
      { ...values, id: Date.now(), completed: false },
    ]);
    setValues({ name: "", date: "" });
  };

  const deleteItem = (itemDelete) => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    const filtered = item.filter((task) => task !== itemDelete);
    setItem(filtered);
  };

  const editItem = (itemEdit) => {
    const filtered = item.filter((task) => task !== itemEdit);
    setItem(filtered);
    setValues({ name: itemEdit.name, date: itemEdit.date });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCountdown = {};
      item.forEach((item) => {
        const now = new Date().getTime();
        const end = new Date(item.date).getTime();
        const diff = end - now;

        if (diff <= 0) {
          newCountdown[item.id] = "done";
          return;
        }

        const Days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const Hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const Mins = Math.floor((diff / (1000 * 60)) % 60);
        const Secs = Math.floor((diff / 1000) % 60);

        newCountdown[item.id] = `${String(Days).padStart(2, "0")} : ${String(
          Hrs
        ).padStart(2, "0")} : ${String(Mins).padStart(2, "0")} : ${String(
          Secs
        ).padStart(2, "0")}`;
      });
      setCountdowns(newCountdown);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [item]);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gradient-to-br from-green-900 via-gray-900 to-black text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-green-400">Task Tracker</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          name="name"
          type="text"
          placeholder="Task name"
          value={values.name}
          onChange={handleInputChange}
          className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          name="date"
          type="datetime-local"
          value={values.date}
          onChange={handleInputChange}
          className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-white border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={addItem}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white flex items-center gap-1"
        >
          <Plus size={18} /> Add
        </button>
      </div>

      {item.length > 0 ? (
        <ul className="space-y-4">
          {item.map((task) => (
            <li
              key={task.id}
              className="flex flex-col md:flex-row md:items-center justify-between bg-gray-800 border border-green-700 rounded-md p-4 shadow-sm"
            >
              <div className="flex-1 mb-2 md:mb-0">
                <p className="text-lg font-medium">{task.name}</p>
                <p className="text-sm text-green-400">
                  Time Left:{" "}
                  {countdowns[task.id] === "done" ? (
                    <Check className="inline text-green-500" />
                  ) : (
                    countdowns[task.id]
                  )}
                </p>
              </div>

              <p className="text-sm text-gray-400 mb-2 md:mb-0">
                Due: {formDate(task.date)}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => editItem(task)}
                  className="text-green-400 hover:text-green-300"
                >
                  <Pen size={18} />
                </button>
                <button
                  onClick={() => deleteItem(task)}
                  className="text-red-500 hover:text-red-400"
                >
                  <Trash size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-400">No tasks yet. Add one!</p>
      )}
    </div>
  );
}

export default Task;
