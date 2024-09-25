import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import Home from "@/app/page";

test("can recieve a new user and show it on a list", async () => {
  render(<Home />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await user.type(nameInput, "John");
  await user.type(emailInput, "johndoe@gmail.com");
  await user.click(button);

  //screen.debug();

  const name = screen.getByRole("cell", { name: "John" });
  const email = screen.getByRole("cell", { name: "johndoe@gmail.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
