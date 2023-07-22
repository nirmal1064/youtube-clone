import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/api";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelInfo = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channelDetail);
  const { id } = useParams();
  console.log(`id ${id}`);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 16%, rgba(166,129,181,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px"
          }}></div>
        <ChannelCard details={channelDetail} marginTop="-110px" />
      </Box>
      <Box display={"flex"} p={"2"}>
        <Box sx={{ mr: { sm: "100px" } }}></Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelInfo;
