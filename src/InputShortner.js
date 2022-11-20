import { useState } from "react"

export default function InputShortener({ setInputValue }) {
    const [value, setValue] = useState("")

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }

    return (
        <div className="mt-8">
            <div>
                <input type="url" name="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="https://linktr.ee/reservedsnow" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>

            <div className="mt-6">
                <button onClick={handleClick} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                    Short It!
                </button>
            </div>
        </div>
    )
}