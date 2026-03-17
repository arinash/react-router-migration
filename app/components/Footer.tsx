import React from 'react'
import GlobalFooter from '@jetbrains/kotlin-web-site-ui/dist/footer.js';
import { ThemeProvider } from '@rescui/ui-contexts';

interface FooterProps {
  [key: string]: any;
}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <ThemeProvider theme="dark">
      <GlobalFooter {...props} />
    </ThemeProvider>
  );
};

export default Footer;