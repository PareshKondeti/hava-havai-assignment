import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "checked:border-2",
};

const sizes = {
  xs: "h-7 w-7",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e.target.checked);
    };

    return (
      <div className={`${className} flex items-center gap-5 cursor-pointer`}>
        <input
          className={`${sizes[size]} ${variants[variant]}`}
          ref={ref}
          type="checkbox"
          name={name}
          onChange={handleChange}
          id={id}
          {...restProps}
        />
        {label && <label htmlFor={id}>{label}</label>}
        {children}
      </div>
    );
  }
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["primary"]),
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export { CheckBox };
 
