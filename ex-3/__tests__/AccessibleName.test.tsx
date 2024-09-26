import { render, screen } from "@testing-library/react";

// components
import AccessibleName from "@/components/AccessibleName";

test("can select by accessible name", () => {
  render(<AccessibleName />);

  const submitButton = screen.getByRole("button", { name: /submit/i });
  const cancelButton = screen.getByRole("button", { name: /cancel/i });

  expect(submitButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
});

test("shows a name and email input", () => {
  render(<AccessibleName />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("find elements based on label", () => {
  render(<AccessibleName />);

  const signinButton = screen.getByRole("button", { name: /sign in/i });
  const signoutButton = screen.getByRole("button", { name: /sign out/i });

  expect(signinButton).toBeInTheDocument();
  expect(signoutButton).toBeInTheDocument();
});
