// import React from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";
// import { motion } from "framer-motion";

// const Card = ({
//   image,
//   title,
//   description,
//   buttonText,
//   onButtonClick,
//   className = "",
//   variant = "light", // "light", "dark", "gradient" (future themes)
//   hoverEffect = true,
//   animate = true,
//   children,
// }) => {
//   const baseStyle =
//     "rounded-2xl shadow-md overflow-hidden transition-all duration-300";

//   const themeStyles = {
//     light: "bg-white text-gray-800 border border-gray-200",
//     dark: "bg-gray-900 text-white border border-gray-700",
//     gradient: "bg-gradient-to-br from-blue-500 to-purple-600 text-white",
//   };

//   const hoverStyles = hoverEffect
//     ? "hover:scale-105 hover:shadow-xl"
//     : "";

//   const combinedClass = clsx(
//     baseStyle,
//     themeStyles[variant],
//     hoverStyles,
//     className
//   );

//   const CardContent = (
//     <div className={combinedClass}>
//       {image && (
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-48 object-cover rounded-t-2xl"
//         />
//       )}

//       <div className="p-4 flex flex-col gap-2">
//         {title && <h3 className="text-xl font-semibold">{title}</h3>}
//         {description && <p className="text-sm opacity-80">{description}</p>}
//         {children}
//         {buttonText && (
//           <button
//             onClick={onButtonClick}
//             className="mt-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
//           >
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return animate ? (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       {CardContent}
//     </motion.div>
//   ) : (
//     CardContent
//   );
// };

// Card.propTypes = {
//   image: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   buttonText: PropTypes.string,
//   onButtonClick: PropTypes.func,
//   className: PropTypes.string,
//   variant: PropTypes.oneOf(["light", "dark", "gradient"]),
//   hoverEffect: PropTypes.bool,
//   animate: PropTypes.bool,
//   children: PropTypes.node,
// };

// export default Card;




// import React from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";
// import { motion } from "framer-motion";

// const Card = ({
//   image,
//   title,
//   rating,
//   reviews,
//   discount,
//   price,
//   mrp,
//   offerText,
//   deliveryDate,
//   onAddToCart,
//   className = "",
//   variant = "light", // future themes: light, dark, gradient
//   hoverEffect = true,
// }) => {
//   const baseStyle =
//     "rounded-2xl shadow-md overflow-hidden transition-all duration-300 flex flex-col";

//   const themeStyles = {
//     light: "bg-white text-gray-800 border border-gray-200",
//     dark: "bg-gray-900 text-white border border-gray-700",
//     gradient: "bg-gradient-to-br from-blue-500 to-purple-600 text-white",
//   };

//   const hoverStyles = hoverEffect ? "hover:scale-105 hover:shadow-xl" : "";

//   const combinedClass = clsx(baseStyle, themeStyles[variant], hoverStyles, className);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className={combinedClass}
//     >
//       {image && (
//         <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-2xl" />
//       )}

//       <div className="p-4 flex flex-col gap-2">
//         {title && <h3 className="font-semibold text-base">{title}</h3>}

//         {rating && (
//           <div className="flex items-center gap-1 text-sm text-yellow-500">
//             ⭐ {rating} <span className="text-gray-500">({reviews} reviews)</span>
//           </div>
//         )}

//         {discount && (
//           <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-md w-max">
//             {discount}% OFF
//           </span>
//         )}

//         <div className="flex items-baseline gap-2">
//           {price && <span className="font-semibold text-lg">₹{price}</span>}
//           {mrp && <span className="text-gray-400 line-through text-sm">₹{mrp}</span>}
//         </div>

//         {offerText && <p className="text-sm text-gray-500">{offerText}</p>}
//         {deliveryDate && <p className="text-sm text-gray-500">FREE delivery {deliveryDate}</p>}

//         <button
//           onClick={onAddToCart}
//           className="mt-2 px-4 py-2 rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// Card.propTypes = {
//   image: PropTypes.string,
//   title: PropTypes.string,
//   rating: PropTypes.number,
//   reviews: PropTypes.number,
//   discount: PropTypes.number,
//   price: PropTypes.number,
//   mrp: PropTypes.number,
//   offerText: PropTypes.string,
//   deliveryDate: PropTypes.string,
//   onAddToCart: PropTypes.func,
//   className: PropTypes.string,
//   variant: PropTypes.oneOf(["light", "dark", "gradient"]),
//   hoverEffect: PropTypes.bool,
// };

// export default Card;



import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { motion } from "framer-motion";

const Card = ({
  image,
  title,
  rating,
  reviews,
  discount,
  price,
  mrp,
  offerText,
  deliveryDate,
  onAddToCart,
  className = "",
  variant = "default", // theme-based styling
  hoverEffect = true,
}) => {
  const baseStyle =
    "rounded-2xl shadow-md overflow-hidden transition-all duration-300 flex flex-col border";

  const variantStyles = {
    default:
      "bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]",
    glass:
      "bg-[var(--primary)]/10 backdrop-blur-md text-[var(--text)] border border-[var(--accent)]",
    accent:
      "bg-[var(--primary)] text-[var(--bg)] border-[var(--secondary)]",
  };

  const hoverStyles = hoverEffect
    ? "hover:scale-105 hover:shadow-xl hover:border-[var(--accent)]"
    : "";

  const combinedClass = clsx(baseStyle, variantStyles[variant], hoverStyles, className);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={combinedClass}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
      )}

      <div className="p-4 flex flex-col gap-2">
        {title && <h3 className="font-semibold text-base text-[var(--text)]">{title}</h3>}

        {rating && (
          <div className="flex items-center gap-1 text-sm text-[var(--accent)]">
            ⭐ {rating}{" "}
            <span className="text-[var(--text)]/70">({reviews} reviews)</span>
          </div>
        )}

        {discount && (
          <span className="bg-[var(--accent)] text-[var(--bg)] text-xs px-2 py-1 rounded-md w-max">
            {discount}% OFF
          </span>
        )}

        <div className="flex items-baseline gap-2">
          {price && (
            <span className="font-semibold text-lg text-[var(--primary)]">
              ₹{price}
            </span>
          )}
          {mrp && (
            <span className="text-[var(--text)]/60 line-through text-sm">
              ₹{mrp}
            </span>
          )}
        </div>

        {offerText && (
          <p className="text-sm text-[var(--text)]/80">{offerText}</p>
        )}
        {deliveryDate && (
          <p className="text-sm text-[var(--text)]/80">
            FREE delivery {deliveryDate}
          </p>
        )}

        <button
          onClick={onAddToCart}
          className="mt-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--secondary)] transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  discount: PropTypes.number,
  price: PropTypes.number,
  mrp: PropTypes.number,
  offerText: PropTypes.string,
  deliveryDate: PropTypes.string,
  onAddToCart: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "glass", "accent"]),
  hoverEffect: PropTypes.bool,
};

export default Card;
