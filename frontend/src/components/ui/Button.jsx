export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition";

  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    yellow: "bg-yellow-400 text-black hover:bg-yellow-500",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
