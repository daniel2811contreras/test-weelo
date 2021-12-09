import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CryptoCurrency from "@views/CryptoCurrency";
import { CriptoProvider, CriptoContext } from "@context/cripto";
import { useContext } from "react";

describe("CryptoCurrency testing", () => {
  const MockComponen = () => {
    const { setIsDark } = useContext(CriptoContext);
    return (
      <>
        <button onClick={() => setIsDark(true)}>testButtonTrue</button>
        <button onClick={() => setIsDark(false)}>testButtonFalse</button>
        <CryptoCurrency />
      </>
    );
  };
  test("change isDark true", () => {
    render(<CriptoProvider><MockComponen /></CriptoProvider>);
    const testButtonTrue = screen.getByText("testButtonTrue");
    expect(testButtonTrue).toBeTruthy();
  });
  test("change isDark false", () => {
    render(<CriptoProvider><MockComponen /></CriptoProvider>);
    const testButtonFalse = screen.getByText("testButtonFalse");
    fireEvent.click(testButtonFalse);
    expect(testButtonFalse).toBeTruthy();
  });
});
