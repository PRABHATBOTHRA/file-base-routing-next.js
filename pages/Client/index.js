import React from "react";
import Link from "next/Link";
const clientPage = () => {
  /* featch data with the array  */

  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
    { id: "admin", name: "Prabhat" },
  ];
  return (
    <div>
      <h1>Client Page At Start</h1>
      <ul>
        {/* <li>
          <Link href="/Client/max">max</Link>
        </li>
        <li>
          <Link href="/Client/prabhat">prabhat</Link>
        </li>

        <li>
          <Link href="/Client/manu">manu</Link>
        </li> */}
        {/* by array of client */}
        {clients.map((clients) => (
          <li key={clients.id}>
            {/* <Link href={`/Client/${clients.id}`}>{clients.name}</Link> */}

            {/* as object we can pass */}
            <Link
              href={{ pathname: "/Client/[id]", query: { id: clients.id }, }}
            >
              {clients.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default clientPage;
