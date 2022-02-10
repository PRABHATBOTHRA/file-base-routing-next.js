import React from "react";
import Link from "next/Link";
const HomePage = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/Client">Client</Link>
        </li>
        {/* not working here   */}

        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
