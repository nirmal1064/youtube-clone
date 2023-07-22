import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/api";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { q } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${q}`).then((data) =>
      setVideos(data.items)
    );
  }, [q]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}>
        Search Results for <span style={{ color: "#F31503" }}>{q}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
