"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row items-center sticky top-0 mt-8">
        <ul className="flex gap-4 md:gap-12 mx-auto bg-gray-100 py-5 border border-gray-100 justify-center rounded-full w-[90vw] sm:w-xl px-8 shadow-l font-bold uppercase text-gray-600">
          <li>
            <Link
              className="px-6 py-3 rounded-full hover:bg-blue-200"
              href="/users"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              className="px-6 py-3 rounded-full bg-blue-100 hover:bg-blue-200"
              href="/create-user"
            >
              Create User
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
