import React from "react";

const TextArea = ({ id, value, setValue, label, placeholder }) => {
  const onChangeHandler = (e) => {
    setValue(id, e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        name={id}
        rows="7"
        cols="12"
        form="usrform"
        maxLength="650"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default TextArea;
