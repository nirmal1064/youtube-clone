import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChannelInfo from "./components/ChannelInfo";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoInfo from "./components/VideoInfo";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoInfo />} />
        <Route path="/channel/:id" element={<ChannelInfo />} />
        <Route path="/search/:q" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
};

export default App;
