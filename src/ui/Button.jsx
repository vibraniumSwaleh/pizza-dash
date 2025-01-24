import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'focus:ring-offest-2 inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed';

  const style = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
