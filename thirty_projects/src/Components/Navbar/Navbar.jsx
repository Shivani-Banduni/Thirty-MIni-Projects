import React from 'react';

const Navbar = () => {
  const menuitems = ['Home', 'Products', 'Clothing', 'Accessories'];

  return (
    <div className='big'>

      {/* Desktop navigation */}
      <div className='nav'>
        <div className='nav-menu'>
          {menuitems.map((item, index) => (
            <h4 key={index}>{item}</h4>
          ))}
        </div>
        <div>
          <h3>SignUp</h3>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="mobile-menu">
        <select>
          {menuitems.map((item, index) => (
            <option key={index} value={`/${item.toLowerCase()}`}>
              {item}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}

export default Navbar;
