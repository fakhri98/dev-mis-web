function Button({ colorVariant = "danger", textVariant='black', widthVariant='full', heightVariant='sm', typeVariant='button', positionVariant='right', onClick, children }) {
  const color = {
    primary: "bg-blue-700",
    secondary: "bg-gray-500",
    success: "bg-green-500",
    info: "bg-sky-500",
    danger: "bg-red-500",
    inactive: 'bg-transparent',
  };

  const text = {
    black: "text-black",
    white: "text-white",
  }

  const width = {
    xsm: "w-11",
    small: "w-24",
    full: "w-full",
  }

  const height = {
    xsm: "h-6",
    sm: "h-10",
    md: "h-16",
    lg: "h-24",
  }

  const type = {
    button: "button",
    submit: "submit",
    reset: "reset",
  }

  const position = {
    right: "absolute right-3",
    left: "absolute left-0",
    bottomRightCorner: "absolute bottom-0 right-0",
  }

  return (
    <button
      className={`${width[widthVariant]} ${height[heightVariant]} ${color[colorVariant]} ${text[textVariant]} ${type[typeVariant]} rounded-md font-bold hover:text-black`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
