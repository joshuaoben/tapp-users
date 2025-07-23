import { use } from "react";
import UserCard from "@/components/UserCard";
import { fetchUserById } from "@/utils/api";

export default function User({ params }) {
  const { id } = use(params);
  const user = use(fetchUserById(id));

  return (
    <div>
      <UserCard user={user} />
    </div>
  );
}
