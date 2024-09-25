import { render, screen, within } from "@testing-library/react";

// components
import UserList from "@/components/UserList";

function renderComponent() {
  const users = [
    {
      name: "John",
      email: "johndoe@gmail.com",
    },
    {
      name: "jane",
      email: "janedoe@gmail.com",
    },
  ];

  render(<UserList users={users} />);

  return { users };
}

test("render one row per user", () => {
  renderComponent();

  //screen.logTestingPlaygroundURL();

  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(2);
});

test("render name and email of each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
