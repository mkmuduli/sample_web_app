import { render } from '@/utils/testUtils';
import Header from '@/component/header/header';

describe("Static Item check", () => {
  it("should have `SHOWS` Item", () => {
    const { getByText } = render(<Header />);
    expect(getByText("SHOWS")).toBeTruthy();
  });

  it("should have `MY ACCOUNT` Item", () => {
    const { getByText } = render(<Header />);
    expect(getByText("SHOWS")).toBeTruthy();
  });

  it("should have `SIGN IN` Item", () => {
    const { getByText } = render(<Header />);
    expect(getByText("SHOWS")).toBeTruthy();
  });

  it("should have `LOGO` SVG", () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText("venue logo")).toBeTruthy();
  });
})

