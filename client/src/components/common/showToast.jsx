

// import toast from 'react-hot-toast';

// // Reusable Toast Function
// const showToast = ({
//   message,
//   type = 'success',
//   duration = 3000,
//   position = 'top-center',
//   variant = 'default',
//   onConfirm = null,
//   customStyle = {},
//   icon = null,
//   className = '',
// }) => {
//   // Base styles
//   const baseStyle = {
//     borderRadius: '12px',
//     padding: '16px 24px',
//     color: '#fff',
//     minWidth: '280px',
//     fontWeight: '500',
//     fontSize: '14px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
//     ...customStyle,
//   };

//   // Variant styles
//   const variantStyles = {
//     default: {},
//     minimal: {
//       padding: '12px 16px',
//       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//     },
//     outlined: {
//       background: 'rgba(255, 255, 255, 0.95)',
//       border: '2px solid',
//       color: '#1f2937',
//       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//     },
//     filled: {
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       border: 'none',
//     },
//     glass: {
//       background: 'rgba(255, 255, 255, 0.1)',
//       backdropFilter: 'blur(20px)',
//       border: '1px solid rgba(255, 255, 255, 0.2)',
//     },
//     solid: {
//       boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//     },
//   };

//   // Type-specific colors and icons
//   const typeColors = {
//     success: {
//       default: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//       outlined: '#10b981',
//       icon: '✓',
//     },
//     error: {
//       default: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
//       outlined: '#ef4444',
//       icon: '✕',
//     },
//     warning: {
//       default: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
//       outlined: '#f59e0b',
//       icon: '⚠',
//     },
//     info: {
//       default: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//       outlined: '#3b82f6',
//       icon: 'ℹ',
//     },
//     loading: {
//       default: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
//       outlined: '#8b5cf6',
//       icon: '⏳',
//     },
//   };

//   // Merge styles
//   let finalStyle = { ...baseStyle, ...variantStyles[variant] };

//   // Apply type-specific styling
//   if (type !== 'confirm' && type !== 'custom' && typeColors[type]) {
//     if (variant === 'outlined') {
//       finalStyle = {
//         ...finalStyle,
//         borderColor: typeColors[type].outlined,
//         color: typeColors[type].outlined,
//       };
//     } else if (variant === 'default' || variant === 'solid') {
//       finalStyle = {
//         ...finalStyle,
//         background: typeColors[type].default,
//       };
//     }
//   }

//   // Toast options
//   const toastOptions = {
//     duration,
//     position,
//     style: finalStyle,
//     className,
//     icon: icon || (typeColors[type]?.icon || null),
//   };

//   // Handle toast types
//   switch (type) {
//     case 'success':
//       return toast.success(message, toastOptions);
//     case 'error':
//       return toast.error(message, toastOptions);
//     case 'loading':
//       return toast.loading(message, toastOptions);
//     case 'warning':
//     case 'info':
//       return toast(message, toastOptions);
//     case 'confirm':
//       return toast(
//         (t) => (
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//             <div style={{ fontSize: '14px', fontWeight: '500' }}>{message}</div>
//             <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
//               <button
//                 onClick={() => {
//                   toast.dismiss(t.id);
//                   if (onConfirm) onConfirm(false);
//                 }}
//                 style={{
//                   background: 'rgba(0, 0, 0, 0.1)',
//                   color: '#64748b',
//                   border: 'none',
//                   padding: '8px 16px',
//                   borderRadius: '6px',
//                   cursor: 'pointer',
//                   fontSize: '13px',
//                   fontWeight: '500',
//                   transition: 'all 0.2s',
//                 }}
//                 onMouseEnter={(e) => (e.target.style.background = 'rgba(0, 0, 0, 0.15)')}
//                 onMouseLeave={(e) => (e.target.style.background = 'rgba(0, 0, 0, 0.1)')}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => {
//                   toast.dismiss(t.id);
//                   if (onConfirm) onConfirm(true);
//                 }}
//                 style={{
//                   background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//                   color: '#fff',
//                   border: 'none',
//                   padding: '8px 16px',
//                   borderRadius: '6px',
//                   cursor: 'pointer',
//                   fontSize: '13px',
//                   fontWeight: '500',
//                   transition: 'all 0.2s',
//                 }}
//                 onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
//                 onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         ),
//         {
//           duration: Infinity,
//           position,
//           style: { ...finalStyle, minWidth: '320px' },
//         }
//       );
//     case 'custom':
//     default:
//       return toast(message, toastOptions);
//   }
// };

// export default showToast;



import toast from 'react-hot-toast';

const showToast = ({
  message,
  type = 'success',
  duration = 3000,
  position = 'top-center',
  variant = 'default',
  onConfirm = null,
  icon = null,
}) => {

  const baseStyle = {
    borderRadius: '12px',
    padding: '16px 24px',
    color: 'var(--text)',
    background: 'var(--card-bg)',
    minWidth: '280px',
    fontWeight: '500',
    fontSize: '14px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'all 0.3s',
  };

  const variantStyles = {
    default: {},
    minimal: {
      padding: '12px 16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    outlined: {
      background: 'var(--card-bg)',
      border: '2px solid var(--primary)',
      color: 'var(--text)',
    },
    filled: {
      background: 'var(--primary)',
      color: 'var(--bg)',
      border: 'none',
    },
    glass: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.2)',
    },
    solid: {
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    },
  };

  const typeColors = {
    success: { background: 'var(--primary)', icon: '✓' },
    error: { background: 'var(--accent)', icon: '✕' },
    warning: { background: 'var(--secondary)', icon: '⚠' },
    info: { background: 'var(--primary)', icon: 'ℹ' },
    loading: { background: 'var(--secondary)', icon: '⏳' },
  };

  let finalStyle = { ...baseStyle, ...variantStyles[variant] };

  if (typeColors[type] && variant !== 'outlined') {
    finalStyle.background = typeColors[type].background;
    finalStyle.color = 'var(--bg)';
  }

  const toastOptions = {
    duration,
    position,
    style: finalStyle,
    icon: icon || typeColors[type]?.icon || null,
  };

  if (type === 'confirm') {
    return toast(
      (t) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>
            {message}
          </div>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <button
              onClick={() => { toast.dismiss(t.id); onConfirm?.(false); }}
              style={{
                background: 'rgba(0,0,0,0.1)',
                color: 'var(--text)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.background = 'rgba(0,0,0,0.15)')}
              onMouseLeave={(e) => (e.target.style.background = 'rgba(0,0,0,0.1)')}
            >
              Cancel
            </button>
            <button
              onClick={() => { toast.dismiss(t.id); onConfirm?.(true); }}
              style={{
                background: 'var(--primary)',
                color: 'var(--bg)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      { duration: Infinity, position, style: { ...finalStyle, minWidth: '320px' } }
    );
  }

  switch (type) {
    case 'success': return toast.success(message, toastOptions);
    case 'error': return toast.error(message, toastOptions);
    case 'loading': return toast.loading(message, toastOptions);
    default: return toast(message, toastOptions);
  }
};

export default showToast;
