// import React from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";

// const Input = React.forwardRef(
//   (
//     {
//       label,
//       type = "text",
//       placeholder = "",
//       value,
//       onChange,
//       error,
//       helperText,
//       disabled = false,
//       fullWidth = false,
//       icon,
//       rightIcon,
//       className = "",
//       size = "md",
//       variant = "outlined",
//     },
//     ref
//   ) => {
//     const baseStyles =
//       "rounded-2xl transition-all duration-200 focus:outline-none";

//     const variantStyles = {
//       outlined:
//         "border border-gray-300 bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
//       filled:
//         "bg-gray-100 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
//       standard:
//         "border-b-2 border-gray-300 rounded-none focus:border-blue-500 focus:ring-0",
//         glass: "bg-white/30 backdrop-blur-md border border-white/20 text-white placeholder-white/60",
//   dark: "bg-gray-900 text-white border border-gray-700 focus:border-blue-500",
//     };

//     const sizeStyles = {
//       sm: "text-sm py-1.5 px-3",
//       md: "text-base py-2.5 px-4",
//       lg: "text-lg py-3 px-5",
//     };

//     const combinedClass = clsx(
//       baseStyles,
//       variantStyles[variant],
//       sizeStyles[size],
//       error && "border-red-500 focus:ring-red-200 focus:border-red-500",
//       disabled && "bg-gray-100 cursor-not-allowed opacity-70",
//       fullWidth && "w-full",
//       icon && "pl-10",
//       rightIcon && "pr-10",
//       className
//     );

//     return (
//       <div className="flex flex-col gap-1 w-full">
//         {label && (
//           <label className="font-medium text-gray-700">{label}</label>
//         )}
//         <div className="relative flex items-center">
//           {icon && <span className="absolute left-3 text-gray-500">{icon}</span>}

//           <input
//             ref={ref}
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={onChange}
//             disabled={disabled}
//             className={combinedClass}
//           />

//           {rightIcon && (
//             <span className="absolute right-3 text-gray-500">{rightIcon}</span>
//           )}
//         </div>

//         {error ? (
//           <p className="text-sm text-red-500">{error}</p>
//         ) : (
//           helperText && <p className="text-sm text-gray-500">{helperText}</p>
//         )}
//       </div>
//     );
//   }
// );

// Input.displayName = "Input";

// Input.propTypes = {
//   label: PropTypes.string,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
//   error: PropTypes.string,
//   helperText: PropTypes.string,
//   disabled: PropTypes.bool,
//   fullWidth: PropTypes.bool,
//   icon: PropTypes.node,
//   rightIcon: PropTypes.node,
//   className: PropTypes.string,
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
// };

// export default Input;







// import React from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";

// const Input = React.forwardRef(
//   (
//     {
//       label,
//       type = "text",
//       placeholder = "",
//       value,
//       onChange,
//       error,
//       helperText,
//       disabled = false,
//       fullWidth = false,
//       icon,
//       rightIcon,
//       className = "",
//       size = "md",
//       variant = "outlined",
//     },
//     ref
//   ) => {
//     const baseStyles =
//       "rounded-2xl transition-all duration-200 focus:outline-none text-[var(--text)] placeholder:text-[var(--text)] bg-[var(--bg)]";

//     const variantStyles = {
//       outlined:
//         "border border-[var(--primary)] bg-transparent focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--accent)]",
//       filled:
//         "bg-[var(--secondary)]/10 border border-transparent focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--accent)]",
//       standard:
//         "border-b-2 border-[var(--primary)] rounded-none focus:border-[var(--secondary)] focus:ring-0",
//       glass:
//         "bg-[var(--primary)]/10 backdrop-blur-md border border-[var(--accent)] text-[var(--text)] placeholder:text-[var(--text)]/70",
//       dark:
//         "bg-[var(--bg)] text-[var(--text)] border border-[var(--secondary)] focus:border-[var(--accent)]",
//     };

//     const sizeStyles = {
//       sm: "text-sm py-1.5 px-3",
//       md: "text-base py-2.5 px-4",
//       lg: "text-lg py-3 px-5",
//     };

//     const combinedClass = clsx(
//       baseStyles,
//       variantStyles[variant],
//       sizeStyles[size],
//       error && "border-[var(--accent)] focus:ring-[var(--accent)]",
//       disabled && "opacity-70 cursor-not-allowed",
//       fullWidth && "w-full",
//       icon && "pl-10",
//       rightIcon && "pr-10",
//       className
//     );

//     return (
//       <div className="flex flex-col gap-1 w-full">
//         {label && (
//           <label className="font-medium text-[var(--text)]">{label}</label>
//         )}
//         <div className="relative flex items-center">
//           {icon && (
//             <span className="absolute left-3 text-[var(--text)]/60">
//               {icon}
//             </span>
//           )}

//           <input
//             ref={ref}
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={onChange}
//             disabled={disabled}
//             className={combinedClass}
//           />

//           {rightIcon && (
//             <span className="absolute right-3 text-[var(--text)]/60">
//               {rightIcon}
//             </span>
//           )}
//         </div>

//         {error ? (
//           <p className="text-sm text-[var(--accent)]">{error}</p>
//         ) : (
//           helperText && (
//             <p className="text-sm text-[var(--text)]/60">{helperText}</p>
//           )
//         )}
//       </div>
//     );
//   }
// );

// Input.displayName = "Input";

// Input.propTypes = {
//   label: PropTypes.string,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
//   error: PropTypes.string,
//   helperText: PropTypes.string,
//   disabled: PropTypes.bool,
//   fullWidth: PropTypes.bool,
//   icon: PropTypes.node,
//   rightIcon: PropTypes.node,
//   className: PropTypes.string,
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   variant: PropTypes.oneOf(["outlined", "filled", "standard", "glass", "dark"]),
// };

// export default Input;




import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Input = React.forwardRef(
  (
    {
      label,
      type = "text",
      placeholder = "",
      value,
      onChange,
      error,
      helperText,
      disabled = false,
      fullWidth = false,
      icon,
      rightIcon,
      className = "",
      size = "md",
      variant = "outlined",
      id, // Added for accessibility (label association)
      required = false, // Added for form validation
      ...props // Allow additional input props like name, aria-label, etc.
    },
    ref
  ) => {
    // Generate a unique ID if not provided for accessibility
    const inputId = id || `input-${React.useId()}`;

    // Base styles using theme variables from the provided themes object
    const baseStyles = clsx(
      "rounded-2xl transition-all duration-200 focus:outline-none",
      "text-[var(--inputText)]", // Use --inputText for input text color
      "placeholder:text-[var(--inputPlaceholder)]", // Use --inputPlaceholder for placeholder
      "bg-[var(--inputBg)]" // Use --inputBg for input background
    );

    // Variant styles leveraging theme variables
    const variantStyles = {
      outlined: clsx(
        "border",
        "border-[var(--inputBorder)]", // Use --inputBorder for border
        "bg-transparent",
        "focus:border-[var(--inputFocus)]", // Use --inputFocus for focus border
        "focus:ring-2 focus:ring-[var(--inputFocus)]" // Focus ring with theme color
      ),
      filled: clsx(
        "bg-[var(--secondary)]/10", // Use --secondary with opacity for filled background
        "border border-transparent",
        "focus:border-[var(--inputFocus)]", // Use --inputFocus for focus border
        "focus:ring-2 focus:ring-[var(--inputFocus)]"
      ),
      standard: clsx(
        "border-b-2",
        "border-[var(--inputBorder)]", // Use --inputBorder for border
        "rounded-none",
        "focus:border-[var(--inputFocus)]", // Use --inputFocus for focus border
        "focus:ring-0"
      ),
      glass: clsx(
        "bg-[var(--primary)]/10", // Use --primary with opacity for glass effect
        "backdrop-blur-md",
        "border border-[var(--accent)]", // Use --accent for glass border
        "text-[var(--inputText)]",
        "placeholder:text-[var(--inputPlaceholder)]/70"
      ),
      dark: clsx(
        "bg-[var(--inputBg)]", // Use --inputBg for dark variant background
        "text-[var(--inputText)]", // Use --inputText for text
        "border border-[var(--inputBorder)]", // Use --inputBorder for border
        "focus:border-[var(--inputFocus)]" // Use --inputFocus for focus border
      ),
    };

    // Size styles for different input sizes
    const sizeStyles = {
      sm: "text-sm py-1.5 px-3",
      md: "text-base py-2.5 px-4",
      lg: "text-lg py-3 px-5",
    };

    // Combine all classes conditionally
    const combinedClass = clsx(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      error && "border-[var(--error)] focus:ring-[var(--error)]", // Use --error for error state
      disabled && "opacity-70 cursor-not-allowed bg-[var(--disabled)]", // Use --disabled for disabled state
      fullWidth && "w-full",
      icon && "pl-10",
      rightIcon && "pr-10",
      className
    );

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={inputId} // Associate label with input for accessibility
            className="font-medium text-[var(--textSecondary)]" // Use --textSecondary for label
          >
            {label}
            {required && <span className="text-[var(--error)]"> *</span>} {/* Indicate required field */}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && (
            <span className="absolute left-3 text-[var(--textMuted)]">
              {icon} {/* Use --textMuted for icon color */}
            </span>
          )}

          <input
            ref={ref}
            id={inputId} // Set input ID for accessibility
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={combinedClass}
            aria-invalid={error ? "true" : "false"} // Accessibility for error state
            aria-describedby={error || helperText ? `${inputId}-helper` : undefined} // Link to helper text
            required={required} // Add required attribute
            {...props} // Spread additional props
          />

          {rightIcon && (
            <span className="absolute right-3 text-[var(--textMuted)]">
              {rightIcon} {/* Use --textMuted for right icon color */}
            </span>
          )}
        </div>

        {(error || helperText) && (
          <p
            id={`${inputId}-helper`} // ID for accessibility
            className={clsx(
              "text-sm",
              error ? "text-[var(--error)]" : "text-[var(--textMuted)]" // Use --error or --textMuted
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outlined", "filled", "standard", "glass", "dark"]),
  id: PropTypes.string, // Added for accessibility
  required: PropTypes.bool, // Added for form validation
};

export default Input;