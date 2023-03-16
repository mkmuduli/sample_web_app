import { render } from "@/utils/testUtils"
import Login from "./login"

describe("check label are exits",()=>{
    it("should have heading label",()=>{
        const {getByText} = render(<Login />)
        expect(getByText("SIGN IN TO YOUR ACCOUNT")).toBeTruthy();
    });

})