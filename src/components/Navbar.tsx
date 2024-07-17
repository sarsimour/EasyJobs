import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, AccountCircle, Book } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const Navbar: React.FC = () => {
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" value="/" icon={<Home />} />
      <BottomNavigationAction label="Account" value="/account" icon={<AccountCircle />} />
      <BottomNavigationAction label="Resources" value="/resources" icon={<Book />} />
    </BottomNavigation>
  );
};

export default Navbar;
