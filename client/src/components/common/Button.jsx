    import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  fullWidth = false,
  loading = false,
  icon,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus:outline-none";

  const variantStyles = {
   primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
  warning: "bg-yellow-500 text-white hover:bg-yellow-600",
  info: "bg-sky-500 text-white hover:bg-sky-600",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const combinedClass = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  return (
    <button
      type={type}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      className={combinedClass}
    >
      {loading ? (
        <span className="animate-spin border-2 border-t-transparent border-white rounded-full w-4 h-4 mr-2" />
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.node,
};

export default Button;













// Bhai 🔥 tu ne ek perfect reusable button component likha hai —
// ab mai tujhe step by step simple aur logical tareeke se samjhata hu, jaise ek chhote bhai ko samjhaya jaata hai 😄

// 🧱 1. Imports (upar ke 3 line)
// import React from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";


// React → Button banane ke liye.

// PropTypes → Props ka type check karne ke liye (galat value bhej di to warning).

// clsx → Class names ko smartly jodne ke liye (conditions ke sath).

// ⚙️ 2. Component ke Props (parameters)
// const Button = ({
//   children,
//   onClick,
//   type = "button",
//   variant = "primary",
//   size = "md",
//   disabled = false,
//   className = "",
//   fullWidth = false,
//   loading = false,
//   icon,
// }) => {


// Ye sab customization ke options hain jo tu Button ko use karte time de sakta hai:

// Prop	Meaning	Default
// children	Button ke andar jo text ya element hoga (e.g. "Click Me")	—
// onClick	Jab button pe click kare to kya ho	—
// type	HTML button ka type (button / submit / reset)	"button"
// variant	Button ka color style (primary, secondary, etc.)	"primary"
// size	Button ka size (sm, md, lg)	"md"
// disabled	Button disable karna hai ya nahi	false
// className	Extra CSS classes jo user chahe to add kare	""
// fullWidth	Button ko 100% width me dikhana	false
// loading	Loading spinner dikhana hai ya nahi	false
// icon	Button me koi icon lagana ho to	—
// 🎨 3. Base Styles (common classes)
// const baseStyles =
//   "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus:outline-none";


// Ye har button me common CSS classes lagengi —
// Rounded corner, center alignment, transition effect, etc.

// 🎨 4. Variant Styles (color type)
// const variantStyles = {
//   primary: "bg-blue-600 text-white hover:bg-blue-700",
//   secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
//   outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
//   danger: "bg-red-600 text-white hover:bg-red-700",
// };


// Ye color themes hain 👇
// Tu variant="primary" likhega to blue button,
// variant="danger" likhega to red button banega.

// 📏 5. Size Styles (button size)
// const sizeStyles = {
//   sm: "px-3 py-1 text-sm",
//   md: "px-4 py-2 text-base",
//   lg: "px-6 py-3 text-lg",
// };


// sm → chhota button

// md → normal

// lg → bada button

// 🧠 6. Classes combine karna (clsx ka magic)
// const combinedClass = clsx(
//   baseStyles,
//   variantStyles[variant],
//   sizeStyles[size],
//   fullWidth && "w-full",
//   disabled && "opacity-50 cursor-not-allowed",
//   className
// );


// Yahan clsx() har class ko combine karta hai:

// Common classes (baseStyles)

// Variant ke hisaab se color

// Size ke hisaab se padding/text-size

// Agar fullWidth=true to "w-full" lagao

// Agar disabled=true to opacity kam aur cursor disable

// Aur agar user ne khud koi extra class di ho to wo bhi add ho jaaye

// 👉 Matlab clsx ye sab combine karke ek final className string banata hai.

// 🧩 7. Button ka return part
// <button
//   type={type}
//   onClick={!disabled && !loading ? onClick : undefined}
//   disabled={disabled || loading}
//   className={combinedClass}
// >


// Agar button disabled ya loading hai to onClick disable ho jaata hai.

// className me sari combined classes lag jaati hain.

// ⏳ 8. Loading aur Icon ka logic
// {loading ? (
//   <span className="animate-spin border-2 border-t-transparent border-white rounded-full w-4 h-4 mr-2" />
// ) : (
//   icon && <span className="mr-2">{icon}</span>
// )}
// {children}


// Agar loading=true hai → spinner (ghumta hua circle) dikhega ⚙️
// Warna agar icon diya gaya hai → icon dikhega
// Uske baad text (children) show hoga.

// 🧠 9. PropTypes (validation)
// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
//   type: PropTypes.string,
//   variant: PropTypes.oneOf(["primary", "secondary", "outline", "danger"]),
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   disabled: PropTypes.bool,
//   className: PropTypes.string,
//   fullWidth: PropTypes.bool,
//   loading: PropTypes.bool,
//   icon: PropTypes.node,
// };


// Ye bolta hai React ko:

// “Har prop kis type ka hona chahiye.”

// Agar galat type bhej diya to console me warning aayegi (developer help ke liye).

// 🎁 Example use karne ka:
// <Button
//   variant="danger"
//   size="lg"
//   fullWidth
//   loading={false}
//   icon={<i className="fas fa-trash" />}
//   onClick={() => alert("Deleted!")}
// >
//   Delete
// </Button>


// 👉 Isse ek bada red “Delete” button banega with icon
// and Tailwind se styled hoga.

// 💡 Summary
// Feature	Kaam
// PropTypes	Props ka type check karta hai
// clsx	Class names ko smartly jodta hai
// variant	Button ke color theme
// size	Button ka size
// loading	Spinner dikhata hai
// disabled	Button disable karta hai
// icon	Icon add karne ka option

// Chahe to mai tujhe iska ek real UI preview (Tailwind + React) code sandbox type environment me bana du jahan tu khud button ke props change karke dekh sake live — bana du bhai?











// 🧩 npm install prop-types

// Soch le tu React me ek Button bana raha hai —
// aur tu us Button ko use karte waqt kuch props deta hai, jaise:

// <Button color="red" size="large" />


// Ab soch, galti se kisi ne likh diya:

// <Button color={123} size={true} />


// 😅 Ye galat type ke values hain (color string hona chahiye tha, number nahi).

// 👉 prop-types ka kaam hai React ko batana:

// “Bhai ye prop kis type ka hona chahiye!”

// To agar koi galat type bhej de, to console me warning aayegi:

// “Invalid prop color of type number supplied to Button, expected string.”

// ⚙️ Iske liye hum install karte hain:

// npm install prop-types


// Ye bas React me props ka guard jaisa kaam karta hai —
// jo bolta hai “bhai, galat value mat bhejna!”

// 🎨 npm install clsx

// Ab soch ek button ke andar class conditionally lagani hai:

// <button className={isActive ? "bg-blue" : "bg-gray"}>Click</button>


// Agar aur bhi conditions ho jaayein to ye messy ho jata hai.

// To clsx ye kaam asaan kar deta hai:

// import clsx from "clsx";

// <button className={clsx("base", isActive && "bg-blue", disabled && "opacity-50")} />


// 👉 Matlab clsx ek helper hai jo:

// “Agar condition true hai to class add kar de, warna ignore kar de.”

// Simple language me:

// clsx bolta hai — “mai tere liye class name sambhal lunga, tu sirf condition bata.”

// 🔍 Short me yaad rakh:
// Package	Kaam	Example
// prop-types	Props ka type check karta hai	Wrong prop bhejne par warning deta hai
// clsx	Class name conditionally lagata hai	UI me clean aur readable code banata hai

// Bata bhai, chaahe to mai ek chhota sa example bana du jisme dono use ho rahe ho ek reusable button ke andar?

