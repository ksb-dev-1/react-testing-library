"use client";

import { useState } from "react";
import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";

function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div className="p-4">
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default Home;
