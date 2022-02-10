import React from "react";
import { useRouter } from "next/router";
const clientPageProject = () => {
  const router = useRouter();
  console.log("Router PathName client id   " + router.pathname);
  console.log("Router Query   client id " + router.query);

  const loadProgrammiticy = () => {
    //for just onlu max it will load
    // path.push("/Client/max/projectA");
    router.push({
      /* the name of [clientproject]  and we pass
            query clientproject is must be same*/
      pathname: "/Client/[id]/[clientproject]",
      query: { id: "max", clientproject: "projecta" },
    });
  };
  return (
    <div>
      <h1>The Projcet of a Given Client</h1>
      <button onClick={loadProgrammiticy}>Load Project A</button>
    </div>
  );
};

export default clientPageProject;
