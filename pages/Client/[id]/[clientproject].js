import router, { useRouter } from "next/router";
import React from "react";

const selectedClientProjectPage = () => {
  const router = useRouter();
  console.log("Router PathName client project " + router.pathname);
  console.log("Router Query client project" + router.query);

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Specific Client</h1>
    </div>
  );
};

export default selectedClientProjectPage;
