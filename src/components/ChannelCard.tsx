import CheckCircle from "@mui/icons-material/CheckCircle";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

type ChannelType = { details: any; marginTop?: string };

const ChannelCard: FC<ChannelType> = ({ details, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop
      }}>
      <Link to={`/channel/${details?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff"
          }}>
          <CardMedia
            image={
              details?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3"
            }}
          />
          <Typography variant="h6">
            {details?.snippet?.title.slice(0, 20)}{" "}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {details?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
              {parseInt(details?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
