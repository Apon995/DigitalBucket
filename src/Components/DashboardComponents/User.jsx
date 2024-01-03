import React from "react";

function User() {
  
  const obj = {
    _id: 134837434374343379343943988,
    user: "anynomous",
    BoardName: "programming concept",
    Columns: [
      {
        id: 1,
        columnName: "now",
        Task: [
          {
            title: "eating pizza",
            description: "hello",
            status: "now",
          },
        ],
      },
      {
        id: 2,
        columnName: "running",
        Task: [
          {
            title: "running work",
            description: "hello",
            status: "running",
          },
        ],
      },
      {
        id: 3,
        columnName: "done",
        Task: [
          {
            title: "home work",
            description: "hello",
            status: "done",
          },
        ],
      },
    ],
  };
  return <div>User</div>;
}

export default User;
