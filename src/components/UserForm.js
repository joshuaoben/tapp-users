"use client";

import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error("Failed to submit user");
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="my-12 flex flex-col items-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold uppercase">Create User</h3>
        </div>
        <div className=" bg-gray-100 p-8">
          {success && (
            <p className=" bg-green-200 p-3 w-full text-center mb-4">
              User created (simulated).
            </p>
          )}
          {error && <p className="text-red-600">{error}</p>}
          <form onSubmit={handleSubmit} className="w-sm sm:w-lg mx-auto">
            <div className="mb-4 flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="border-2 border-gray-400 p-2 rounded"
              />
            </div>
            <div className="flex mt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mx-auto bg-blue-200 hover:bg-blue-400 rounded-full hover:cursor-pointer"
              >
                {loading ? "Creating..." : "Create User"}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
