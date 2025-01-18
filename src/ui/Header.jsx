import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <div>
      <Link to='/'>Pizza Dash Co.</Link>
      <SearchOrder />
      <p>User</p>
    </div>
  );
}

export default Header;
