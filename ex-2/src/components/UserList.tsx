function UserList({ users }: Users) {
  const renderedUsers = users.map((user) => {
    return (
      <tr key={user.name} className="bg-white border-b hover:bg-gray-100">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {user.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user.email}
        </td>
      </tr>
    );
  });

  return (
    <div className="flex flex-col mt-8">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border rounded">
            <table className="min-w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Email
                  </th>
                </tr>
              </thead>
              <tbody data-testid="users">
                {/* Rendered Users */}
                {renderedUsers}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
