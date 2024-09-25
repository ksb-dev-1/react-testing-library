import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Home from "@/app/page"; // Ensure this path is correct

test("shows 6 products by default", async () => {
  render(<Home />); // Render the Home component

  const headings = await screen.findAllByRole("heading"); // Use findAllByRole to get all headings
  expect(headings).toHaveLength(6); // Check the number of headings
});

test("clicking on the button shows 6 more products", async () => {
  render(<Home />); // Render the Home component

  const button = await screen.findByRole("button", {
    name: /load more/i,
  });
  await user.click(button);

  await waitFor(async () => {
    const headings = await screen.findAllByRole("heading"); // Use findAllByRole to get all headings
    expect(headings).toHaveLength(12); // Check the number of headings
  });
});
