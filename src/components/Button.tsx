import { ComponentProps } from "react";

type TVariant = "blue" | "red" | "green";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function Button({ children, variant, style, ...rest }: TButton) {
  return (
    <button
      {...rest}
      style={{
        padding: " 8px 14px",
        borderRadius: "0.25rem",
        ...style,
        ...checkVariant(variant),
      }}
    >
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant?: TVariant) {
  if (variant === "blue") {
    return { backgroundColor: "rgb(23, 23, 245)", color: "rgb(245,245,245)" };
  } else if (variant === "green") {
    return { backgroundColor: "rgb(23, 125, 23)", color: "rgb(245,245,245)" };
  } else if (variant === "red") {
    return { backgroundColor: "rgb(245,23,23)", color: "rgb(245,245,245)" };
  }
}
