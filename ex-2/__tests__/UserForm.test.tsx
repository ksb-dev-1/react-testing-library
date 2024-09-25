import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

// components
import UserForm from "@/components/UserForm";

test("it shows two inputs and a button", () => {
  const mockOnUserAdd = jest.fn();

  render(<UserForm onUserAdd={mockOnUserAdd} />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when form is submitted", async () => {
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await user.type(nameInput, "John");
  await user.type(emailInput, "johndoe@gmail.com");
  await user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "John",
    email: "johndoe@gmail.com",
  });
});

test("empties the two inputs when form is submitted", async () => {
  const mockOnUserAdd = jest.fn();

  render(<UserForm onUserAdd={mockOnUserAdd} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await user.type(nameInput, "John");
  await user.type(emailInput, "johndoe@gmail.com");
  await user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
