import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("render App", () => {
    render(<App />);
    expect(screen).toBeTruthy();
  });
});
