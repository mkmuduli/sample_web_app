import { ChangeEventHandler } from "react";

interface InputProps {
    value?: string | number,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    label?: string,
    required?: boolean,
}

const Input = ({ value, onChange, label, required }: InputProps) => {

    return (
        <div>
            {label || required && <label data-testid="inputLabel" >{label || ''}{required ? <span data-testid="requiredUI" >*</span> : ''}</label>}
            <input value={value} onChange={onChange} />
        </div>
    )
}

export default Input;