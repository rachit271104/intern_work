export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center text-sm font-medium transition";

  const variants = {
    default: "bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800",
    outline:
      "border border-gray-300 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50",
    yellow:
      "bg-yellow-400 text-black rounded-lg px-4 py-2 hover:bg-yellow-500",
    link:
      "bg-transparent px-0 py-0 text-black hover:underline",
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
