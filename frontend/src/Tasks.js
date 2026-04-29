import { useEffect, useState } from "react";

export default function Tasks({ token, logout }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/api/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks();
  };

  // ✅ NEW: Toggle status function
  const toggleStatus = async (task) => {
    const newStatus =
      task.status === "PENDING" ? "COMPLETED" : "PENDING";

    await fetch(`http://localhost:5000/api/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: newStatus }),
    });

    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 p-5 rounded shadow">
      
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">My Tasks</h2>
        <button onClick={logout} className="bg-red-500 text-white px-3 py-1">
          Logout
        </button>
      </div>

      <div className="mt-4">
        <input
          className="border p-2"
          placeholder="New task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-3 ml-2"
        >
          Add
        </button>
      </div>

      <ul className="mt-5">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex justify-between border p-3 mt-2 rounded bg-white shadow"
          >
            {/* strike-through when completed */}
            <span className={t.status === "COMPLETED" ? "line-through text-gray-400" : ""}>
              {t.title}
            </span>

            <div className="flex gap-2">
              {/* ✅ Toggle button */}
              <button
                onClick={() => toggleStatus(t)}
                className="bg-yellow-400 px-2"
              >
                {t.status === "PENDING" ? "Done" : "Undo"}
              </button>

              {/* Delete button */}
              <button
                onClick={() => deleteTask(t.id)}
                className="bg-red-400 text-white px-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}