import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <div className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Pizza Dash Co.
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
