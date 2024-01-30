import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const Loading = () => {
  return (
    <div>
      <Skeleton
        animation="wave"
        className="list-none relative pb-10 w-[280px] mt-3 border-2 h-fit shadow-md rounded-lg bg-white p-5"
        variant="rectangular"
        height={300}
      />
    </div>
  );
};

export const Loading2 = () => {
  return (
    <div>
      <Skeleton
        animation="wave"
        className={
          "list-none flex py-4 pl-5 flex-row gap-3 border bg-white rounded-xl"
        }
        variant="rectangular"
        height={100}
      />
    </div>
  );
};
