import {
  Links,
  Meta,
  Outlet,
  Scripts
} from "react-router";

import type { Route } from "./+types/root";

import './app.css';

export const links: Route.LinksFunction = () => {
  return [
    { rel: "preload", 
      href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",
      as: "font"
    },
    { rel: "preload", 
      href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",
      as: "font"
    },
    { rel: "preload", 
      href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2",
      as: "font"
    },
  ];
};

export function Layout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}