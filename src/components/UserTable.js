"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { fetchUsers } from "@/utils/api";
import Loading from "@/app/users/loading";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message || "Failed to fetch users");
      }
      setLoading(false);
    }
    getUsers();
  }, []);

  if (loading) return <Loading />;

  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div>
      <div className="my-12 flex flex-col items-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold uppercase">Users List</h3>
        </div>
        <div className="bg-gray-100 mx-auto p-8 rounded-xl">
          <table className="table-auto mx-auto w-[90vw] sm:w-xl md:w-3xl xl:w-6xl">
            <thead className="border-b border-gray-600 text-left">
              <tr>
                <th className="px-1 py-2 md:p-4 text-gray-600 font-semibold">
                  Name
                </th>
                <th className="px-1 py-2 md:p-4 text-gray-600 font-semibold">
                  Email
                </th>
                <th className="px-1 py-2 md:p-4 text-gray-600 font-semibold">
                  Phone
                </th>
                <th className="px-1 py-2 md:p-4 text-gray-600 font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className=" border-b even:bg-white last:border-b-0 border-gray-400"
                >
                  <td className="px-1 py-2 md:p-4">{user.name}</td>
                  <td className="px-1 py-2 md:p-4">{user.email}</td>
                  <td className="px-1 py-2 md:p-4">{user.phone}</td>
                  <td className="px-1 py-2 md:p-4">
                    <Link
                      className="flex justify-center bg-blue-100 hover:bg-blue-50 py-2 px-4 md:rounded-2xl text-sm text-center"
                      href={`/users/${user.id}`}
                    >
                      View User
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
