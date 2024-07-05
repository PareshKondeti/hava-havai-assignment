import React from 'react';
import PropTypes from 'prop-types';

const shapes = {
  round: 'rounded-[16px]',
  // add other shapes here
};

const variants = {
  outline: {
    light_gray_gray_800: 'border-light-gray-gray_86 border-2 border-solid text-light-gray-gray_see',
    // add other outline variants here
  },
  FIL: {
    black_transparent_black_860: 'bg-black-transparent_black_860 text-light-gray-gray_se',
    light_gray_gray_2e0: 'bg-light-gray-gray_20 text-light-gray-gray_see',
    // add other FIL variants here
  },
  // add other variant types here
};

const sizes = {
  xs: 'h-[32px] px-4 text-sm',
  // add other sizes here
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "black_transparent_black_806",
    ...restProps
  }) => {
    return (
      <button
        className={`${className} flex flex-row items-center justify-center text-center cursor-pointer text-sm font-semibold ${shapes[shape]} ${variants[variant][color]} ${sizes[size]}`}
        {...restProps}
      >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </button>
    );
  };
  Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["outline", "fill"]),
    color: PropTypes.oneOf([
      "light_gray_gray_800",
      "black_transparent_black_860",
      "light_gray_gray_260"
    ])
  };
  
  export { Button };
  