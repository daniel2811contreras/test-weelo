import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loader from "@utils/components/Loader";

describe("Loader", () => {
  test("render Loader", () => {
    render(<Loader />);
    expect(screen).toBeTruthy();
  });
});
