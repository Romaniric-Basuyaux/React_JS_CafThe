import React from "react";

const Input = ({ label, type = "text", name, value, onChange, placeholder, error }) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-sm font-medium mb-1">{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"}`}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default Input;
