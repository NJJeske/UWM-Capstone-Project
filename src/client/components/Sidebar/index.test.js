import React from "react";
import TestUtils from "react-dom/test-utils";
import { Sidebar } from ".";
import { shallow } from "enzyme";

var wrapper = shallow(<Sidebar />);
var item = TestUtils.renderIntoDocument(<Sidebar />);

// Test case that menu exists
it("renders", () => {
  expect(wrapper.find("Menu"));
});

// Test case that sidebar has 8 different links
it("renders", () => {
  expect(wrapper.find("Menu").children()).toHaveLength(8);
});

// Test case that first link of sidebar is for home
it("renders", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(0)
      .text()
  ).toEqual("<FontAwesomeIcon /> Home");
});

// Test case that second link of sidebar is for profile
it("renders", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(1)
      .text()
  ).toEqual("<FontAwesomeIcon /> Profile");
});

// Test case that third link of sidebar is for documents
it("renders", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(2)
      .text()
  ).toEqual("<FontAwesomeIcon /> Documents");
});

// Test case that fourth link of sidebar is for experience
it("renders", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(3)
      .text()
  ).toEqual("<FontAwesomeIcon /> Experience");
});

// Test case that fifth link of sidebar is for education
it("renders", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(4)
      .text()
  ).toEqual("<FontAwesomeIcon /> Education");
});

// Test case that sixth link of sidebar is for projects
it("renders", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(5)
      .text()
  ).toEqual("<FontAwesomeIcon /> Projects");
});

// Test case that seventh link of sidebar is for contacts
it("renders", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(6)
      .text()
  ).toEqual("<FontAwesomeIcon /> Contacts");
});

// Test case that eigth link of sidebar is for timeline
it("renders", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(7)
      .text()
  ).toEqual("<FontAwesomeIcon /> Timeline");
});

// Test case that first link of sidebar has href for homepage
it("renders", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[0];
  let href = a.getAttribute("href");
  expect(href).toEqual("/");
});

// Test case that second link of sidebar has href for profile
it("renders", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[1];
  let href = a.getAttribute("href");
  expect(href).toEqual("/profile");
});

// Test case that third link of sidebar has href for documents
it("renders", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[2];
  let href = a.getAttribute("href");
  expect(href).toEqual("/documents");
});

// Test case that fourth link of sidebar has href for experience
it("renders", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[3];
  let href = a.getAttribute("href");
  expect(href).toEqual("/experience");
});

// Test case that fifth link of sidebar has href for education
it("renders", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[4];
  let href = a.getAttribute("href");
  expect(href).toEqual("/education");
});

// Test case that sixth link of sidebar has href for projects
it("renders", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[5];
  let href = a.getAttribute("href");
  expect(href).toEqual("/projects");
});

// Test case that seventh link of sidebar has href for contacts
it("renders", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[6];
  let href = a.getAttribute("href");
  expect(href).toEqual("/contacts");
});

// Test case that eigth link of sidebar has href for timeline
it("renders", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[7];
  let href = a.getAttribute("href");
  expect(href).toEqual("/timeline");
});
