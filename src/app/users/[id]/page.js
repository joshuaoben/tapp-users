import { use } from "react";
import UserCard from "@/components/UserCard";
import { fetchUserById } from "@/utils/api";

export default async function User({ params }) {
  const { id } = await params;
  const user = await fetchUserById(id);

  return (
    <div>
      <UserCard user={user} />
    </div>
  );
}
