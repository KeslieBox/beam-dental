import React from "react";
import {unmountComponentAtNode, render as renderDom } from "react-dom";
import { render as render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from './App';
import { expect } from "@jest/globals";

// This is too much for me to figure out in a timely fashion for this particular kata, 
// but I am actively learning how to implement TDD, so I thought I would show my thought process a bit here.
// I am quite unfamiliar with JS testing unfortunately

test('renders summary on page load', () => {
  render(<App />);
  const text = screen.getByText(/Summary/);
  expect(text).toBeInTheDocument();
});

// would like to make this a more accurate mock fetch request, 
// but I'm not familiar with this specific type of test
// I think it could go something like this:
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
  // this is not really doing much right now, but I would like to use this data
  // to test the fetch request:
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
    renderDom(<App/>, container);
  });

  // need to figure out how to test the results of the fetch after I have manipulated the data
  // as well as how to navigate the asynchronous nature of the Promise to test the actual total of Starter Boxes 
  expect(container.querySelector('#starter').textContent).toEqual('Starter Boxes: 0');
  // if I was displaying the raw data of the Promise object, I would test it somewhat like this:
  // expect(container.querySelector('#brush-color').textContent).toEqual(fakeUser.brush_color);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore(); 
});

// These are the tests I would have liked to write:
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




