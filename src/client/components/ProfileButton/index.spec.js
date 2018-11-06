import React from "react";
import { ProfileButton } from ".";
import { shallow } from "enzyme";

const wrapper = shallow(<ProfileButton />);

it("should render an UncontrolledButtonDropdown", () => {
  expect(wrapper.find("UncontrolledButtonDropdown"));
});

it("should render a DropdownMenu", () => {
  expect(wrapper.find("DropdownMenu"));
});

it("should render a dropdown button with the user settings fontawesome icon", () => {
  expect(
    wrapper
      .find(".toggle")
      .dive()
      .dive()
      .dive()
      .text()
  ).toEqual("<FontAwesomeIcon /> ");
});

it("should render a link for profile settings in first option of two in dropdown", () => {
  expect(
    wrapper
      .find("DropdownItem")
      .at(0)
      .dive()
      .text()
  ).toEqual("Settings");
});

it("should render a link for logout in second option of two in dropdown", () => {
  expect(
    wrapper
      .find("DropdownItem")
      .at(1)
      .dive()
      .text()
  ).toEqual("Logout");
});

it("should render a dropdown menu that has a total of two items", () => {
  expect(wrapper.find("DropdownMenu").children()).toHaveLength(2);
});
