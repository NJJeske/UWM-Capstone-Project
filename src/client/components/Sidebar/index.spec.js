import React from "react";
import TestUtils from "react-dom/test-utils";
import { Sidebar } from ".";
import { shallow } from "enzyme";

var wrapper = shallow(<Sidebar />);
var item = TestUtils.renderIntoDocument(<Sidebar />);

it("should render a menu element", () => {
  expect(wrapper.find("Menu"));
});

it("should render 8 different child elements for links", () => {
  expect(wrapper.find("Menu").children()).toHaveLength(8);
});

it("should render a first link for home", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(0)
      .text()
  ).toEqual("<FontAwesomeIcon /> Home");
});

it("should render a second link for profile", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(1)
      .text()
  ).toEqual("<FontAwesomeIcon /> Profile");
});

it("should render a third link for documents", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(2)
      .text()
  ).toEqual("<FontAwesomeIcon /> Documents");
});

it("should render a fourth link for experience", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(3)
      .text()
  ).toEqual("<FontAwesomeIcon /> Experience");
});

it("should render a fifth link for education", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(4)
      .text()
  ).toEqual("<FontAwesomeIcon /> Education");
});

it("should render a sixth link for projects", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(5)
      .text()
  ).toEqual("<FontAwesomeIcon /> Projects");
});

it("should render a seventh link for contacts", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(6)
      .text()
  ).toEqual("<FontAwesomeIcon /> Contacts");
});

it("should render an eighth link for timeline", () => {
  expect(
    wrapper
      .find("Menu")
      .childAt(7)
      .text()
  ).toEqual("<FontAwesomeIcon /> Timeline");
});

it("should render a href in the first link for homepage", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[0];
  let href = a.getAttribute("href");
  expect(href).toEqual("/");
});

it("should render an href in second link for profile", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[1];
  let href = a.getAttribute("href");
  expect(href).toEqual("/profile");
});

it("should render an href in third link for documents", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[2];
  let href = a.getAttribute("href");
  expect(href).toEqual("/documents");
});

it("should render an href in fourth link for experience", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[3];
  let href = a.getAttribute("href");
  expect(href).toEqual("/experience");
});

it("should render an href in fifth link for education", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[4];
  let href = a.getAttribute("href");
  expect(href).toEqual("/education");
});

it("should render an href in sixth link for projects", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[5];
  let href = a.getAttribute("href");
  expect(href).toEqual("/projects");
});

it("should render an href in seventh link for contacts", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[6];
  let href = a.getAttribute("href");
  expect(href).toEqual("/contacts");
});

it("should render an href in eighth link for timeline", () => {
  let all = TestUtils.scryRenderedDOMComponentsWithTag(item, "a");
  let a = all[7];
  let href = a.getAttribute("href");
  expect(href).toEqual("/timeline");
});
