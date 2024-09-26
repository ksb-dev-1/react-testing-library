import { render, screen } from "@testing-library/react";

// components
import RoleExample from "@/components/RoleExample";

test("can find elements by roles", () => {
  render(<RoleExample />);

  const roles = [
    "link",
    "button",
    "contentinfo",
    "heading",
    "banner",
    "img",
    "checkbox",
    "spinbutton",
    "radio",
    "textbox",
    "listitem",
    "list",
  ];

  for (const role of roles) {
    const el = screen.getByRole(role);

    expect(el).toBeInTheDocument();
  }
});
