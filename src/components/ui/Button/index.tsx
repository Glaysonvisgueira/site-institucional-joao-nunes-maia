import React from "react";
import styles from "./index.module.scss";

type ButtonVariant = "contained" | "outlined" | "text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contained",
  fullWidth = false,
  loading = false,
  disabled = false,
  icon,
  className = "",
  ...props
}) => {
  let buttonClass = styles.button;

  if (variant && styles[variant]) {
    buttonClass += ` ${styles[variant]}`;
  }

  if (fullWidth) {
    buttonClass += ` ${styles.fullWidth}`;
  }

  if (loading) {
    buttonClass += ` ${styles.loading}`;
  }

  if (disabled) {
    buttonClass += ` ${styles.disabled}`;
  }

  if (className) {
    buttonClass += ` ${className}`;
  }

  return (
    <button
      className={buttonClass}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className={styles.spinner} />
        
      ) : (
        <>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};
