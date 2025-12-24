export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border p-4 ${className}`}>
      {children}
    </div>
  );
}
