export async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Error fetching users");
  }

  return await res.json();
}

export async function fetchUserById(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    // if (!res.ok) {
    //   throw new Error(`Error fetching user with id ${id}`);
    // }
    return await res.json();
  } catch (err) {
    console.error("API error", err);
    return null;
  }
}
