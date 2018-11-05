import React from "react";
import { HomeScreen } from ".";
import { shallow } from "enzyme";

var wrapper = shallow(<HomeScreen />);

// Test case to ensure that main exists
it("renders", () => {
  expect(wrapper.find("Main"));
});

// Test case to ensure that h1 exists that says "MyPortfolio"
it("renders", () => {
  expect(wrapper.find("h1").text()).toEqual("MyPortfolio");
});

// Test case to ensure that HomepageButtonCluster component exists on page
it("renders", () => {
  expect(wrapper.find("HomepageButtonCluster"));
});

// Test case to ensure that ProfileButton component exists on page
it("renders", () => {
  expect(wrapper.find("ProfileButton"));
});
