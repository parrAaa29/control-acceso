// button.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Definición de las propiedades del botón
interface ButtonProps {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

// Componente Button
const Button = ({
  variant = "default",
  size = "md",
  className = "",
  asChild = false,
  children,
}: ButtonProps) => {
  // Clases base para el botón
  const baseClasses = "rounded focus:outline-none transition-all duration-300";
  
  // Variantes de estilos
  const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-100",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  // Tamaños del botón
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-md",
    lg: "py-3 px-5 text-lg",
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  // Renderizado del botón, usando un elemento <a> si asChild es true
  if (asChild) {
    return <span className={buttonClasses}>{children}</span>;
  }

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
