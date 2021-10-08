import { useState } from "react";

export function useTextField(init, name) {
    const [value, setValue] = useState(init);
    return {
        value: value,
        name: name,
        onChange: (e) => setValue(e.target.value)
    };
}