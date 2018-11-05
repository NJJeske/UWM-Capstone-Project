import React from "react";
import { HomepageButtonCluster } from ".";
import { shallow } from "enzyme";

var wrapper = shallow(<HomepageButtonCluster />);

// Test case that there exists two rows of buttons
it("renders", () => {
  expect(wrapper.find("Row")).toHaveLength(2);
});

// Test case that first row contains 3 child elements for 3 different buttons
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(0)
      .children()
  ).toHaveLength(3);
});

// Test case that second row contains 3 child elements for 3 different buttons
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(1)
      .children()
  ).toHaveLength(3);
});

// Testing that 1st child element in first row is a column
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(0)
      .childAt(0)
      .hasClass("Col")
  );
});

// Testing that 2nd child element in first row is a column
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(0)
      .childAt(1)
      .hasClass("Col")
  );
});

// Testing that 3rd child element in first row is a column
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(0)
      .childAt(2)
      .hasClass("Col")
  );
});

// Testing that 1st child element in second row is a column
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(1)
      .childAt(0)
      .hasClass("Col")
  );
});

// Testing that 2nd child element in second row is a column
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(1)
      .childAt(1)
      .hasClass("Col")
  );
});

// Testing that 2nd child element in 2nd row is a column
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(1)
      .childAt(2)
      .hasClass("Col")
  );
});

// Testing that 1st child element in first row contains a button
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(0)
      .childAt(0)
      .childAt(0)
      .hasClass("Button")
  );
});

// Testing that 2nd child element in first row contains a button
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(0)
      .childAt(1)
      .childAt(0)
      .hasClass("Button")
  );
});

// Testing that 3rd child element in first row contains a button
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(0)
      .childAt(2)
      .childAt(0)
      .hasClass("Button")
  );
});

// Testing that 1st child element in second row contains a button
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(1)
      .childAt(0)
      .childAt(0)
      .hasClass("Button")
  );
});

// Testing that 2nd child element in second row contains a button
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(1)
      .childAt(1)
      .childAt(0)
      .hasClass("Button")
  );
});

// Testing that 3rd child element in second row contains a button
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(1)
      .childAt(2)
      .childAt(0)
      .hasClass("Button")
  );
});

// Test case that 1st button in 1st row is button for documents
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(0)
      .children()
      .at(0)
      .childAt(0)
      .dive()
      .text()
  ).toEqual("<FontAwesomeIcon />Documents");
});

// Test case that 2nd button in 1st row is button for experience
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(0)
      .children()
      .at(1)
      .childAt(0)
      .dive()
      .text()
  ).toEqual("<FontAwesomeIcon />Experience");
});

// Test case that 3rd button in 1st row is button for education
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(0)
      .children()
      .at(2)
      .childAt(0)
      .dive()
      .text()
  ).toEqual("<FontAwesomeIcon />Education");
});

// Test case that 1st button in 2nd row is button for projects
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(1)
      .children()
      .at(0)
      .childAt(0)
      .dive()
      .text()
  ).toEqual("<FontAwesomeIcon />Projects");
});

// Test case that 2nd button in 2nd row is button for contacts
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(1)
      .children()
      .at(1)
      .childAt(0)
      .dive()
      .text()
  ).toEqual("<FontAwesomeIcon />Contacts");
});

// Test case that 3rd button in 2nd row is button for timeline
it("renders", () => {
  expect(
    wrapper
      .find("Row")
      .at(1)
      .children()
      .at(2)
      .childAt(0)
      .dive()
      .text()
  ).toEqual("<FontAwesomeIcon />Timeline");
});
