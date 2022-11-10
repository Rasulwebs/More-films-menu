import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import "./rating.sass";

export const RatingComponent = () => {
  return (
    <div className="wrapper-rating">
      <h3 className="rate-me">Rate me!</h3>
      <Stack
        spacing={1}
        sx={{
          padding: ".5rem 1rem",
          borderRadius: "5px",
          backgroundColor: "#d80202",
          position: "relative",

          "&::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%) rotate(90deg)",
            left: "-.8rem",
            width: 0,
            height: 0,

            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "10px solid #d80202",
          },
        }}
      >
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
      </Stack>
    </div>
  );
};
