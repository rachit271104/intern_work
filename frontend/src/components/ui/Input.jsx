export function Input({
  type = "text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      className={`w-full h-11 rounded-lg border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
      {...props}
    />
  );
}
