import {Link} from 'react-router-dom';
import React from 'react';
function Nav(){
    return(<div>
        <ul>
            <Link to="/shop">
            <li>Shop</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
        </ul>
    </div>);
}
export default Nav;