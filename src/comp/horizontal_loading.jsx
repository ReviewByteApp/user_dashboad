import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function CustomizedProgressBars(value) {
  value = value.value * 100;
  return (
    <div className="flex flex-row gap-3">
      <Box sx={{ flexGrow: 1 }} className={"w-[200px] my-auto"}>
        <BorderLinearProgress variant="determinate" value={value} />
      </Box>
      <span className={"text-sm"}>{value.toFixed(0)}%</span>
    </div>
  );
}
