import { useEffect, useState } from "react";
import CustomizedProgressBars from "./horizontal_loading";

const StarCount = ({ startvalue }) => {
  const value = startvalue;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = value?.reduce((a, b) => a + b);
    setTotal(total);
  }, [value]);
  return (
    <div className={"flex flex-col gap-2"}>
      {value?.map((item, index) => (
        <div key={index} className={"flex flex-row gap-2"}>
          <div className={"w-[20px] h-[20px] bg-slate-400"}></div>
          <p className={"text-sm"}>{item}-star</p>
          <CustomizedProgressBars value={item / total} />
        </div>
      ))}
    </div>
  );
};

export default StarCount;
