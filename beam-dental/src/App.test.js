// import {screen } from '@testing-library/react';
import App from './App';

// test('renders hello', () => {
//   render(<App />);
//   const text = screen.getByText(/hello/);
//   expect(text).toBeInTheDocument();
// });


import React from "react";
import { render, screen, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


// create some fake cases
// if i have an input with one user does it populate correctly, multiple users?, no users?
// for app component, what happens with dif data being passed in
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data on successful fetch", async () => {
  const fakeUser = {
    "id": 2,
    "name": "Anakin",
    "brush_color": "blue",
    "primary_insured_id": null,
    "contract_effective_date": "2018-01-01"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<App/>, container);
  });

  // expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector('#starter').textContent).toEqual('Starter Boxes: 3');
  // expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});


// Tests to write:
  // upon entering shipping screen, starting box summary displayed

  // shipping screen has two tabs on it: 
    // one for generating and displaying starter boxes
    // one for generating and displaying refill boxes
  
  // user can toggle between starter and refill boxes

  // if endpoint fails, display error message: 'Error: Could not receive family preferences.'

  // only one family per call

  // boxes should be grouped by matching color, ie 2 blue brushes grouped together with blue replacement head
    // they should not be grouped w/ other colors

  // replacement heads can be grouped 4 to a box and should be grouped by color




