import React from "react";
import { ProfileButton } from ".";
import { shallow } from "enzyme";

const wrapper = shallow(<ProfileButton />);

// Test case that uncontrolled button dropdown exists
it("renders", () => {
  expect(wrapper.find("UncontrolledButtonDropdown"));
});

// Test case that dropdown menu exists
it("renders", () => {
  expect(wrapper.find("DropdownMenu"));
});

// Test case for dropdown button with user settings icon
it("renders", () => {
  expect(
    wrapper
      .find(".toggle")
      .dive()
      .dive()
      .dive()
      .text()
  ).toEqual("<FontAwesomeIcon /> ");
});

// Test case for first occurence in list of links that popup when clicking on user settings button
it("renders", () => {
  expect(
    wrapper
      .find("DropdownItem")
      .at(0)
      .dive()
      .text()
  ).toEqual("Settings");
});

// Test case for second occurence in list of links that popup when clicking on user settings button
it("renders", () => {
  expect(
    wrapper
      .find("DropdownItem")
      .at(1)
      .dive()
      .text()
  ).toEqual("Logout");
});

// Test case that dropdown menu should have a total of two dropdown items
it("renders", () => {
  expect(wrapper.find("DropdownMenu").children()).toHaveLength(2);
});
