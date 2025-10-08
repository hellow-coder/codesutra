// import React from 'react';
// import { Toaster } from 'react-hot-toast';
// import showToast from '../common/showToast';

// // Button style generator
// const buttonStyle = (color) => ({
//   background: color,
//   color: '#fff',
//   border: 'none',
//   padding: '12px 20px',
//   borderRadius: '8px',
//   fontSize: '14px',
//   fontWeight: '500',
//   cursor: 'pointer',
//   transition: 'all 0.2s',
//   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//   ':hover': {
//     transform: 'scale(1.05)',
//   },
// });

// const ExampleToast = () => {
//   const handleConfirm = (confirmed) => {
//     showToast({
//       message: confirmed ? 'Action confirmed! ✓' : 'Action cancelled!',
//       type: confirmed ? 'success' : 'error',
//       variant: 'default',
//     });
//   };

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         padding: '40px 20px',
//       }}
//     >
//       <Toaster />
//       <div
//         style={{
//           maxWidth: '800px',
//           margin: '0 auto',
//           background: 'rgba(255, 255, 255, 0.95)',
//           borderRadius: '16px',
//           padding: '40px',
//           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <h2
//           style={{
//             fontSize: '28px',
//             fontWeight: '700',
//             marginBottom: '8px',
//             color: '#1f2937',
//           }}
//         >
//           🔔 Toast Notification Demo
//         </h2>
//         <p
//           style={{
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '32px',
//           }}
//         >
//           Click the buttons below to see different toast notifications
//         </p>

//         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//           {/* Default Toast */}
//           <button
//             onClick={() =>
//               showToast({
//                 message: 'This is a default toast!',
//               })
//             }
//             style={buttonStyle('linear-gradient(135deg, #667eea 0%, #764ba2 100%)')}
//           >
//             Show Default Toast
//           </button>

//           {/* Success Toast */}
//           <button
//             onClick={() =>
//               showToast({
//                 message: 'Operation successful!',
//                 type: 'success',
//                 duration: 4000,
//                 position: 'top-right',
//               })
//             }
//             style={buttonStyle('#10b981')}
//           >
//             Show Success Toast (Top Right)
//           </button>

//           {/* Error Toast - Outlined */}
//           <button
//             onClick={() =>
//               showToast({
//                 message: 'Something went wrong!',
//                 type: 'error',
//                 duration: 3000,
//                 position: 'bottom-center',
//                 variant: 'outlined',
//               })
//             }
//             style={buttonStyle('#ef4444')}
//           >
//             Show Error Toast (Outlined, Bottom Center)
//           </button>

//           {/* Warning Toast - Minimal */}
//           <button
//             onClick={() =>
//               showToast({
//                 message: 'Be careful!',
//                 type: 'warning',
//                 duration: 5000,
//                 variant: 'minimal',
//               })
//             }
//             style={buttonStyle('#f59e0b')}
//           >
//             Show Warning Toast (Minimal)
//           </button>

//           {/* Info Toast - Filled */}
//           <button
//             onClick={() =>
//               showToast({
//                 message: 'Just FYI!',
//                 type: 'info',
//                 position: 'bottom-left',
//                 variant: 'filled',
//               })
//             }
//             style={buttonStyle('#3b82f6')}
//           >
//             Show Info Toast (Filled, Bottom Left)
//           </button>

//           {/* Confirm Toast */}
//           <button
//             onClick={() =>
//               showToast({
//                 message: 'Are you sure you want to delete this?',
//                 type: 'confirm',
//                 onConfirm: handleConfirm,
//                 position: 'top-center',
//                 variant: 'default',
//               })
//             }
//             style={buttonStyle('#8b5cf6')}
//           >
//             Show Confirm Toast (Yes/No)
//           </button>

//           {/* Custom Toast - Outlined */}
//           <button
//             onClick={() =>
//               showToast({
//                 message: 'Custom styled toast!',
//                 type: 'custom',
//                 duration: 6000,
//                 position: 'top-left',
//                 variant: 'outlined',
//               })
//             }
//             style={buttonStyle('#ec4899')}
//           >
//             Show Custom Toast (Outlined, Top Left)
//           </button>

//           {/* Glass Effect Toast */}
//           <button
//             onClick={() =>
//               showToast({
//                 message: 'Glass effect toast! ✨',
//                 type: 'success',
//                 variant: 'glass',
//                 position: 'bottom-right',
//               })
//             }
//             style={buttonStyle('linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)')}
//           >
//             Show Glass Effect Toast
//           </button>

//           {/* Custom Style Toast */}
//           <button
//             onClick={() =>
//               showToast({
//                 message: 'Fully customized! 🚀',
//                 type: 'custom',
//                 duration: 5000,
//                 customStyle: {
//                   background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
//                   borderRadius: '24px',
//                   fontSize: '16px',
//                   padding: '20px 28px',
//                 },
//                 icon: '🎉',
//               })
//             }
//             style={buttonStyle('linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)')}
//           >
//             Show Custom Styled Toast
//           </button>

//           {/* Loading Toast */}
//           <button
//             onClick={() =>
//               showToast({
//                 message: 'Loading data...',
//                 type: 'loading',
//                 duration: 2000,
//                 position: 'top-center',
//               })
//             }
//             style={buttonStyle('#8b5cf6')}
//           >
//             Show Loading Toast
//           </button>
//         </div>

//         {/* Usage Instructions */}
//         <div
//           style={{
//             marginTop: '32px',
//             padding: '20px',
//             background: '#f3f4f6',
//             borderRadius: '8px',
//             fontSize: '13px',
//             color: '#374151',
//           }}
//         >
//           <strong>💡 Pro Tip:</strong> Copy the <code>showToast</code> function and use it anywhere in your app!
//           <pre
//             style={{
//               marginTop: '12px',
//               padding: '12px',
//               background: '#1f2937',
//               color: '#fff',
//               borderRadius: '6px',
//               overflow: 'auto',
//             }}
//           >
//             {`showToast({
//   message: 'Your message',
//   type: 'success', // success, error, warning, info, loading, confirm, custom
//   variant: 'default', // default, minimal, outlined, filled, glass, solid
//   position: 'top-center', // top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
//   duration: 3000,
//   customStyle: { /* your custom CSS */ },
//   icon: '🎉',
//   onConfirm: (result) => { /* for confirm type */ }
// })`}
//           </pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExampleToast;



import React from 'react';
import { Toaster } from 'react-hot-toast';
import showToast from '../showToast';

// Button style generator
const buttonStyle = (color) => ({
  background: color,
  color: '#fff',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const ExampleToast = () => {
  const handleConfirm = (confirmed) => {
    showToast({
      message: confirmed ? 'Action successfully confirmed! 🎉' : 'Action cancelled! 😔',
      type: confirmed ? 'success' : 'error',
      variant: 'default',
    });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
       
        padding: '40px 20px',
      }}
    >
      <Toaster />
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
        
          borderRadius: '16px',
          padding: '40px',
          border:'1px solid red'
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#1f2937',
          }}
        >
          🔔 Toast Notification Demo
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '32px',
          }}
        >
          Click the buttons to see custom toast notifications
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Default Toast */}
          <button
            onClick={() =>
              showToast({
                message: 'Welcome to the app! 🚀',
              })
            }
            style={buttonStyle('linear-gradient(135deg, #667eea 0%, #764ba2 100%)')}
          >
            Show Default Toast
          </button>

          {/* Success Toast */}
          <button
            onClick={() =>
              showToast({
                message: 'Your file has been saved successfully! ✅',
                type: 'success',
                duration: 4000,
                position: 'top-center',
              })
            }
            style={buttonStyle('#10b981')}
          >
            Show Success Toast
          </button>

          {/* Error Toast */}
          <button
            onClick={() =>
              showToast({
                message: 'Failed to upload file. Please try again! ❌',
                type: 'error',
                duration: 3000,
                position: 'top-center',
                variant: 'outlined',
              })
            }
            style={buttonStyle('#ef4444')}
          >
            Show Error Toast (Outlined)
          </button>

          {/* Warning Toast */}
          <button
            onClick={() =>
              showToast({
                message: 'Warning: Low disk space! ⚠️',
                type: 'warning',
                duration: 5000,
                variant: 'minimal',
              })
            }
            style={buttonStyle('#f59e0b')}
          >
            Show Warning Toast (Minimal)
          </button>

          {/* Info Toast */}
          <button
            onClick={() =>
              showToast({
                message: 'New update available! Check it out! ℹ️',
                type: 'info',
                position: 'top-center',
                variant: 'filled',
              })
            }
            style={buttonStyle('#3b82f6')}
          >
            Show Info Toast (Filled)
          </button>

          {/* Confirm Toast */}
          <button
            onClick={() =>
              showToast({
                message: 'Are you sure you want to delete this item? 🗑️',
                type: 'confirm',
                onConfirm: handleConfirm,
                position: 'top-center',
                variant: 'default',
              })
            }
            style={buttonStyle('#8b5cf6')}
          >
            Show Confirm Toast
          </button>

          {/* Custom Toast */}
          <button
            onClick={() =>
              showToast({
                message: 'Custom toast with unique style! 🌟',
                type: 'custom',
                duration: 6000,
                position: 'top-center',
                variant: 'outlined',
              })
            }
            style={buttonStyle('#ec4899')}
          >
            Show Custom Toast (Outlined)
          </button>

          {/* Glass Effect Toast */}
          <button
            onClick={() =>
              showToast({
                message: 'Glass effect notification! ✨',
                type: 'success',
                variant: 'glass',
                position: 'top-center',
              })
            }
            style={buttonStyle('linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)')}
          >
            Show Glass Effect Toast
          </button>

          {/* Custom Styled Toast */}
          <button
            onClick={() =>
              showToast({
                message: 'Fully customized notification! 🎉',
                type: 'custom',
                duration: 5000,
                customStyle: {
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                  borderRadius: '24px',
                  fontSize: '16px',
                  padding: '20px 28px',
                },
                icon: '🚀',
              })
            }
            style={buttonStyle('linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)')}
          >
            Show Custom Styled Toast
          </button>

          {/* Loading Toast */}
          <button
            onClick={() =>
              showToast({
                message: 'Processing your request... ⏳',
                type: 'loading',
                duration: 2000,
                position: 'top-center',
              })
            }
            style={buttonStyle('#8b5cf6')}
          >
            Show Loading Toast
          </button>
        </div>

        {/* Usage Instructions */}
        <div
          style={{
            marginTop: '32px',
            padding: '20px',
            background: '#f3f4f6',
            borderRadius: '8px',
            fontSize: '13px',
            color: '#374151',
          }}
        >
          <strong>💡 Pro Tip:</strong> Use <code>showToast</code> anywhere in your app!
          <pre
            style={{
              marginTop: '12px',
              padding: '12px',
              background: '#1f2937',
              color: '#fff',
              borderRadius: '6px',
              overflow: 'auto',
            }}
          >
            {`showToast({
  message: 'Your custom message',
  type: 'success', // success, error, warning, info, loading, confirm, custom
  variant: 'default', // default, minimal, outlined, filled, glass, solid
  position: 'top-center', // top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
  duration: 3000,
  customStyle: { /* custom CSS */ },
  icon: '🎉',
  onConfirm: (result) => { /* for confirm type */ }
})`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ExampleToast;