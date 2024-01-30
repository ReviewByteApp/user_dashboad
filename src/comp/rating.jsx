import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function TextRating({ rating }) {
  const value = rating;
  return (
    <Box
      sx={{
        width: 100,
        display: "flex",
        alignItems: "center",
      }}
    
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        icon={<StarIcon style={{ fontSize: "20px" }} />}
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.55, fontSize: "20px" }}
            fontSize="inherit"
          />
        }
      />
      <Box
        sx={{ ml: 0 }}
        style={{ fontSize: "12px", paddingLeft: "5px" }}
      ></Box>
    </Box>
  );
}
