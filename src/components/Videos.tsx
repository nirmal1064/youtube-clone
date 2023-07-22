import { FC } from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

type PropsType = {
  videos: any[];
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
};

const Videos: FC<PropsType> = ({ videos, direction = "row" }) => {
  console.log(videos);
  return (
    <Stack
      direction={direction}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.channelId && <ChannelCard details={item} />}
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
