import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Filter from "@utils/components/Filter";
import userEvent from '@testing-library/user-event'
Object.defineProperty(window, "localStorage", {
  value: {
    getItem: jest.fn(() => null),
    setItem: jest.fn(() => null)
  },
  writable: true
});

describe("Filter", () => {
  test("render Filter", () => {
    render(<Filter />);
    const MainButton = screen.getByTestId('MainButton')
    userEvent.click(MainButton)
    const faSearch = screen.getByTestId('faSearch')
    userEvent.click(faSearch)
    const faFilter = screen.getByTestId('faFilter')
    userEvent.click(faFilter)
    const changeTemplate = screen.getByTestId('changeTemplate')
    userEvent.click(changeTemplate)
    userEvent.click(changeTemplate)
  });
});
