import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LastestNewsCard from "./LastestNewsCard";
import { useHomeNews } from "../../data/data.service";

export default function LastestNews() {


  const {data, isLoading} = useHomeNews({limit: 10, offset: 0})

  console.log(data);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url('/img/back.jpg')",
          minHeight: "400px",
          backgroundPosition: "100%",
          mt: 10,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: "250px", sm: "300px", md: "350px", lg: "400px" },
            top: "30%",
            left: "5%",
          }}
          className="globalContainer"
        >
          <Typography sx={{ fontSize: "34px", fontFamily: "Inter" }}>
            Pebble Ottoman
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontFamily: "Inter", mt: 2, color: "gray" }}
          >
            Kiln-dried engineered wood frame with reinforced joinery. webbed
            seat support
          </Typography>
          <Button sx={{ mt: 3 }} variant="outlined">
            Shop Now
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 10 }} className="globalContainer">
        <Typography
          sx={{ fontSize: "34px", textAlign: "center", fontWeight: "600" }}
        >
          Lastest News
        </Typography>
        <LastestNewsCard data={data?.data ?? []} />
      </Box>
    </Box>
  );
}
