import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary";

  IconStart?: React.ReactNode;
  IconEnd?: React.ReactNode;
  borderRounded?: string;
  backgroundColor?: string;
  loaderIcon?: React.ReactNode;
  outlineBG?: string;
}
interface CustomCSSProperties extends React.CSSProperties {
  "--border-rounded": string;
  "--background-color": string;
}
export const CustomButton: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  className,
  IconStart,
  IconEnd,
  loaderIcon,
  borderRounded = "14px",
  backgroundColor = "#BCE300",
  outlineBG = "primary-dark",
  ...props
}) => {
  const customStyles: CustomCSSProperties = {
    "--border-rounded": borderRounded,
    "--background-color": backgroundColor,
  };

  return (
    <button
      className={cn(
        "relative flex min-w-max cursor-pointer items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-[0.625rem] uppercase transition duration-200 ease-in-out md:px-4 md:py-3",
        variant === "primary" && "bg-gradient-pattern",
        className && className,
        props.disabled && "cursor-not-allowed opacity-50",
      )}
      {...props}
      style={variant === "primary" ? customStyles : undefined}
      disabled={props.disabled}
    >
      <span className="relative z-10">
        {IconStart && IconStart}
        <span
          className={cn(
            "font-nexaheavy font-black leading-[normal]",
            variant === "primary" && "text-primary",
          )}
        >
          {loaderIcon || title}
        </span>
        {IconEnd && IconEnd}
      </span>
    </button>
  );
};
