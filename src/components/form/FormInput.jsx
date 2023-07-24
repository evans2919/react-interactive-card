/* eslint-disable react/prop-types */
const FormInput = ({
    label,
    type,
    placeholder,
    value,
    handleChange,
    name,
    maxLength,
    className,
}) => {
    return (
        <>
            <label className="tracking-widest">{label}</label>
            <input
                className={`transition-all duration-500 outline-none p-3 rounded-md w-full mt-2 border  ${className}`}
                type={type}
                placeholder={placeholder}
                value={value.toUpperCase()}
                onChange={handleChange}
                name={name}
                maxLength={maxLength}
            />
        </>
    );
};

export default FormInput;
