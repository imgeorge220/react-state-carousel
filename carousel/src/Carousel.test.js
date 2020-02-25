import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import image3 from "./image3.jpg";

it("renders without crashing", function () {
  render(<Carousel />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

it("hides left arrow at beginning of carousel", function () {
  const { queryByTestId } = render(<Carousel />);


  // expect the left arrow to hide, but not the right arrow
  expect(queryByTestId("left-arrow")).toHaveClass('hidden');
  expect(queryByTestId("right-arrow")).not.toHaveClass('hidden');
});

it("hides right arrow at end of carousel", function () {
  const { queryByTestId } = render(<Carousel cardData={[{
    src: image3,
    caption: "Photo by Josh Post on Unsplash"
  }]}/>);

  // expect the left arrow to hide, but not the right arrow
  expect(queryByTestId("right-arrow")).toHaveClass('hidden');
});

it("shows arrows in middle slides", function () {
  const { queryByTestId } = render(<Carousel />);

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the left arrow to hide, but not the right arrow
  expect(queryByTestId("right-arrow")).not.toHaveClass('hidden');
  expect(queryByTestId("left-arrow")).not.toHaveClass('hidden');
});
