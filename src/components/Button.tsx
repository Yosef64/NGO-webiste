import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  external?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  onClick,
  disabled = false,
  className = "",
  icon,
  iconPosition = "right",
  fullWidth = false,
  loading = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
    xl: "px-10 py-5 text-xl rounded-2xl",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl focus:ring-orange-500",
    secondary:
      "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl focus:ring-blue-500",
    outline:
      "border-2 border-white/30 text-white hover:bg-white/10 focus:ring-white/50",
    ghost:
      "text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:ring-blue-500",
    gradient:
      "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white hover:from-orange-600 hover:via-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl focus:ring-orange-500",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2"></div>
      )}
      {icon && iconPosition === "left" && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && !loading && (
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          {external ? <ExternalLink className="h-4 w-4" /> : icon}
        </span>
      )}
      {!icon && iconPosition === "right" && !loading && variant !== "ghost" && (
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes} group`}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={`${classes} group`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${classes} group`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
};

export default Button;
