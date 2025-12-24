export function Link({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`text-sm font-medium text-black hover:underline ${className}`}
    >
      {children}
    </a>
  );
}
