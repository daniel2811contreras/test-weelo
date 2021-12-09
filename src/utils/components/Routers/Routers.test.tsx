import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Routers from "@utils/components/Routers";

describe("Routers", () => {
  test("render Routers", () => {
    render(<Routers />);
    expect(screen).toBeTruthy();
  });
});
