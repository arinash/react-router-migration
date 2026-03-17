import React from 'react'
import GlobalHeader from '@jetbrains/kotlin-web-site-ui/dist/header.js';

interface HeaderProps {
  onSearchClick?: () => void;
  [key: string]: any;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <GlobalHeader {...props} />
  );
};

export default Header;
