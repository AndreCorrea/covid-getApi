import React from "react";

const InputField = (props) => {
    return (
        <input
            className="bg-neutral-100 w-full h-12 pl-6 rounded-full border border-slate-400 focus:outline-none focus:border-purple-500"
            onChange={props.onChange}
            placeholder={props.placeholder} />
    )
}

export default InputField