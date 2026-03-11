import { useState } from "react";

export default function Finances() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    const newExpense = {
      name,
      amount,
    };

    setExpenses([...expenses, newExpense]);

    setName("");
    setAmount("");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Expense Tracker</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex gap-4 mb-4">
          <input
            placeholder="Expense name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <input
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <button
            onClick={addExpense}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {expenses.map((e, i) => (
            <li key={i} className="flex justify-between border-b pb-2">
              {e.name}
              <span>${e.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
