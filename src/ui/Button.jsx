function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="focus:ring-offest-2 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}

export default Button;
