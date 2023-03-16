import { fireEvent, render } from "@/utils/testUtils"
import Input from "./input"

describe("Input type check", () => {
    it("should render by label props", () => {
        const { getByText, rerender, queryByTestId } = render(<Input label="First Name" />);
        expect(getByText("First Name")).toBeInTheDocument();

        rerender(<Input />);
        const label = queryByTestId("inputLabel");
        expect(label).not.toBeInTheDocument();
    })

    it("should render by value props",  async() => {
        const changeHandler = jest.fn();

        const { getByDisplayValue } = render(<Input value="Mano" onChange={changeHandler} />);
        expect(getByDisplayValue("Mano")).toBeTruthy();

        fireEvent.change(getByDisplayValue("Mano"), { target: { value: "Manoj" } });
        expect(changeHandler).toHaveBeenCalled();
    })

    it.only("should render `*` as per required props",()=>{
        const {  rerender, queryByTestId } = render(<Input required />);
        expect(queryByTestId("requiredUI")).toBeInTheDocument();

        rerender(<Input />);
        const label = queryByTestId("requiredUI");
        expect(label).not.toBeInTheDocument();
    })
})