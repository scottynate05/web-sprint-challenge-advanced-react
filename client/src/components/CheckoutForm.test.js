import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />)
    const firstName = getByTestId("firstName")
    const lastName = getByTestId("lastName")
    const address = getByTestId("address")
    const city = getByTestId("city")
    const state = getByTestId("state")
    const zipCode = getByTestId("zipCode")
    const checkoutButton = getByTestId("checkoutButton")

    const expectedFirstName = 'Nate'
    const expectedLastName = 'Brown'
    const expectedAddress = '101 My House'
    const expectedCity = 'Indamiddleuvdastreet'
    const expectedState = 'Brick House'
    const expectedZipCode = '90210'

    fireEvent.change(firstName, { target: { value: 'Nate'}})
    fireEvent.change(lastName, { target: { value: 'Brown'}})
    fireEvent.change(address, { target: { value: '101 My House'}})
    fireEvent.change(city, { target: { value: 'Indamiddleuvdastreet'}})
    fireEvent.change(state, { target: { value: 'Brick House'}})
    fireEvent.change(zipCode, { target: { value: '90210'}})
    fireEvent.click(checkoutButton);
    getByTestId("successMessage")

    expect(firstName.value).toBe(expectedFirstName)
    expect(lastName.value).toBe(expectedLastName)
    expect(address.value).toBe(expectedAddress)
    expect(city.value).toBe(expectedCity)
    expect(state.value).toBe(expectedState)
    expect(zipCode.value).toBe(expectedZipCode)    
});
