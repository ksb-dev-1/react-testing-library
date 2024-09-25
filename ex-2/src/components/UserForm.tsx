"use client";

import { FormEvent, useState } from "react";

interface UserFormProps {
  onUserAdd: (user: { name: string; email: string }) => void;
}

function UserForm({ onUserAdd }: UserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onUserAdd({ name, email });

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4 flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="border w-[250px] px-4 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="border w-[250px] px-4 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="bg-black text-white rounded px-4 py-2 hover:bg-slate-800 w-[250px]">
        Add User
      </button>
    </form>
  );
}

export default UserForm;
