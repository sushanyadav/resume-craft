import React from "react";

const Input = ({
  label,
  id,
  placeholder,
  inputClass,
  wrapperClass,
  type,
  value,
  setValue,
  startDate,
  disabled,
}) => {
  const onChangeHandler = (e) => {
    if (type === "checkbox") return setValue(id, !value);
    setValue(id, e.target.value);
  };

  return (
    <div className={wrapperClass ? wrapperClass : ""}>
      {type !== "checkbox" && (
        <label htmlFor={id} className="checkbox-label">
          {label}
        </label>
      )}
      <input
        type={type}
        name={id}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        className={inputClass}
        value={value}
        checked={value}
        min={startDate}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Input;
