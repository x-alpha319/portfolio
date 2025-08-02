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
    if (!values.name || !values.date) return alert("Please fill all fields");
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

        newCountdown[item.id] = `${String(Days).padStart(2, "0")}d : ${String(
          Hrs
        ).padStart(2, "0")}h : ${String(Mins).padStart(2, "0")}m : ${String(
          Secs
        ).padStart(2, "0")}s`;
      });
      setCountdowns(newCountdown);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [item]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white bg-gradient-to-br from-black via-gray-900 to-black rounded-xl shadow-xl items-center mt-20 mb-52">
      <h2 className="text-3xl font-bold mb-8 text-lime-400 tracking-tight text-center">
        Task Manager
      </h2>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          name="name"
          type="text"
          placeholder="Task name"
          value={values.name}
          onChange={handleInputChange}
          className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-lime-500 placeholder-gray-400 focus:ring-2 focus:ring-lime-400"
        />

        <input
          name="date"
          type="datetime-local"
          value={values.date}
          onChange={handleInputChange}
          className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-lime-500 focus:ring-2 focus:ring-lime-400"
        />

        <button
          onClick={addItem}
          className="flex items-center justify-center gap-1 px-5 py-3 bg-lime-500 text-black font-semibold rounded-lg hover:bg-lime-400 transition"
        >
          <Plus size={18} /> Add
        </button>
      </div>

      {item.length > 0 ? (
        <ul className="space-y-5">
          {item.map((task) => (
            <li
              key={task.id}
              className="bg-gray-800 border border-lime-600 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm hover:shadow-lime-500/30 transition-all"
            >
              <div className="flex-1">
                <p className="text-xl font-semibold text-white mb-1">
                  {task.name}
                </p>
                <p className="text-sm text-lime-400">
                  Time Left:{" "}
                  {countdowns[task.id] === "done" ? (
                    <Check className="inline text-green-500" />
                  ) : (
                    countdowns[task.id]
                  )}
                </p>
              </div>

              <div className="text-sm text-gray-400">
                Due: {formDate(task.date)}
              </div>

              <div className="flex items-center gap-4 text-lg">
                <button
                  onClick={() => editItem(task)}
                  className="text-lime-400 hover:text-lime-300"
                  title="Edit"
                >
                  <Pen size={20} />
                </button>
                <button
                  onClick={() => deleteItem(task)}
                  className="text-red-500 hover:text-red-400"
                  title="Delete"
                >
                  <Trash size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400 mt-10">
          No tasks yet. Add one!
        </p>
      )}
    </div>
  );
}

export default Task;
