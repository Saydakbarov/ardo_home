import { Box } from "@mui/material";
import React from "react";

import { SingleProductImageData } from "../../data";

export default function SingleImageBox({ img, title }) {
  return (
    <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 3 }}>
      {SingleProductImageData.map((v, i) => (
        <Box sx={{ width: "90px" }}>
          <img
            style={{ width: "100%", borderRadius: "10px" }}
            src={v.img}
            alt=""
          />
        </Box>
      ))}
    </Box>
  );
}