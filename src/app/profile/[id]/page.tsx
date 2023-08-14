import React from "react";

function userprofile({ params }: any) {
  return (
    <div>
      <h1>
        userprofile
        <span>{params.id}</span>
      </h1>
    </div>
  );
}

export default userprofile;
