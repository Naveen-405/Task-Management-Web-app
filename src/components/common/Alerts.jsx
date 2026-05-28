import { useState } from "react";

const icons = {
  success: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path fill="white" d="M12 7a1 1 0 110 2 1 1 0 010-2zm-1 4h2v6h-2z" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path fill="white" d="M11 8h2v5h-2zm0 7h2v2h-2z" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path
        fill="white"
        d="M15.536 8.464a1 1 0 010 1.414L13.414 12l2.122 2.122a1 1 0 01-1.414 1.414L12 13.414l-2.122 2.122a1 1 0 01-1.414-1.414L10.586 12 8.464 9.878a1 1 0 011.414-1.414L12 10.586l2.122-2.122a1 1 0 011.414 0z"
      />
    </svg>
  ),
};

const variantClasses = {
  success: {
    wrapper: "bg-green-50 border border-green-200",
    icon: "bg-green-500 text-white",
  },
  info: {
    wrapper: "bg-blue-50 border border-blue-200",
    icon: "bg-blue-500 text-white",
  },
  warning: {
    wrapper: "bg-amber-50 border border-amber-200",
    icon: "bg-amber-400 text-white",
  },
  error: {
    wrapper: "bg-red-50 border border-red-200",
    icon: "bg-red-500 text-white",
  },
};

/**
 * Alert Component
 *
 * Props:
 * @param {string}        type        - "success" | "info" | "warning" | "error"
 * @param {string}        title       - Bold heading text
 * @param {string|ReactNode} message  - Body text (can include JSX links)
 * @param {boolean}       dismissible - Show the × close button (default: true)
 * @param {function}      onDismiss   - Callback when close button clicked
 * @param {string}        className   - Extra Tailwind classes for the wrapper
 */
export function Alert({
  type = "info",
  title,
  message,
  dismissible = true,
  onDismiss,
  className = "",
}) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const v = variantClasses[type] || variantClasses.info;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <>
      <div
        role="alert"
        aria-live="polite"
        className={`flex items-start gap-3.5 rounded-2xl px-4 py-4 ${v.wrapper} ${className}`}
      >
        {/* Icon */}
        <span
          aria-hidden="true"
          className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full p-2 ${v.icon}`}
        >
          {icons[type]}
        </span>

        {/* Text */}
        <div className="flex-1 min-w-0 pt-0.5">
          {title && (
            <p className="m-0 font-bold text-[15px] text-gray-900 leading-snug">
              {title}
            </p>
          )}
          {message && (
            <p
              className={`m-0 text-sm text-gray-500 leading-relaxed ${title ? "mt-0.5" : ""}`}
            >
              {message}
            </p>
          )}
        </div>

        {/* Close button */}
        {dismissible && (
          <button
            onClick={handleDismiss}
            aria-label="Dismiss alert"
            className="flex-shrink-0 flex items-center justify-center w-7 h-7 mt-0.5 rounded-lg bg-black/5 hover:bg-black/10 text-gray-400 hover:text-gray-600 text-lg leading-none cursor-pointer transition-colors duration-150 border-0"
          >
            ×
          </button>
        )}
      </div>
    </>
  );
}

// ── Demo ──────────────────────────────────────────────────────────────────────

// export default function App() {
//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center px-5 py-10">
//       <div className="w-full max-w-[560px] flex flex-col gap-3.5">
//         <Alert
//           type="success"
//           title="Congratulations!"
//           message="Your OS has been updated to the latest version."
//         />

//         <Alert
//           type="info"
//           title="Did you know?"
//           message={
//             <>
//               You can switch between artboards using{" "}
//               <kbd className="bg-slate-200 border border-slate-300 rounded px-1.5 py-0.5 text-xs font-mono">
//                 ⌘ + T
//               </kbd>
//             </>
//           }
//         />

//         <Alert
//           type="warning"
//           title="Warning"
//           message="Your password strength is low."
//         />

//         <Alert
//           type="error"
//           title="Something went wrong!"
//           message={
//             <>
//               The program has turned off unexpectedly.{" "}
//               <a href="#" className="text-red-500 underline font-medium">
//                 Send report
//               </a>
//             </>
//           }
//         />
//       </div>
//     </div>
//   );
// }
