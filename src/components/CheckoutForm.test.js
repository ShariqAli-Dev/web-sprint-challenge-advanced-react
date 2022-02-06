import React from "react";
import CheckoutForm from "./CheckoutForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const fnLabel = screen.getByLabelText(/first name/i);
  const lnLabel = screen.getByLabelText(/first name/i);
  const addressLabel = screen.getByLabelText(/address/i);
  const cityLabel = screen.getByLabelText(/city/i);
  const stateLabel = screen.getByLabelText(/state/i);
  const zipLabel = screen.getByLabelText(/zip/i);
  const submitButton = screen.getByRole("button");

  userEvent.type(fnLabel, "testFirst");
  userEvent.type(lnLabel, "testLast");
  userEvent.type(addressLabel, "testAddress");
  userEvent.type(cityLabel, "testCity");
  userEvent.type(stateLabel, "testState");
  userEvent.type(zipLabel, "12345");
  userEvent.click(submitButton);

  expect(screen.getByTestId("successMessage")).toBeInTheDocument();
});
