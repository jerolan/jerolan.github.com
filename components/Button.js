export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`transition-opacity duration-300 hover:bg-transparent bg-opacity-5 dark:bg-opacity-5 border border-opacity-50 rounded p-2 font-medium ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
