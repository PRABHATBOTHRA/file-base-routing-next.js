import React from "react";
import { useRouter } from "next/router";

const portfolioProjectPage = () => {
  const router = useRouter();
  console.log(
    "Router PathName inside projectid   " + router.pathname
  );
  console.log("Router Query projectid  " + router.query);
  return (
    <div>
      <h1>Hello from Portfolio Project Page</h1>
    </div>
  );
};

export default portfolioProjectPage;
