export function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 rounded bg-[#8b5e3c] text-white hover:bg-[#a66e4a]" {...props}>
      {children}
    </button>
  );
}
