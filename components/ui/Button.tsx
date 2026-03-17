"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] text-white hover:shadow-lg hover:shadow-[rgba(41,171,226,0.3)] border-0",
  secondary:
    "bg-transparent border-2 border-[#29ABE2] text-[#29ABE2] hover:bg-[rgba(41,171,226,0.1)]",
  ghost:
    "bg-transparent border-0 text-[#29ABE2] hover:underline underline-offset-4",
  danger:
    "bg-red-600 text-white hover:bg-red-700 border-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, disabled, children, href, className = "", ...props }, ref) => {
    const classes = `inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${
      disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    } ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        {...(props as Record<string, unknown>)}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
