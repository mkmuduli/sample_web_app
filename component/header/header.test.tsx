import { render } from '@testing-library/react';
import Header from '@/component/header/header';


test("Header has show text", () => {
  const { getByText } = render(<Header />);

  expect(getByText("SHOWS")).toBeTruthy();
});