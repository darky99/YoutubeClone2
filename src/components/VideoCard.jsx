import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import HoverVideoPlayer from "react-hover-video-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function VideoCard(video) {
  const [dimensions, setDimensions] = useState({
    xs: "100%",
    sm: "400px",
    md: "350px"
  });
  const { thumbnail_url, url } = video.video;

  return (
    <div>
      <Card
        sx={{
          width: { xs: dimensions.xs, sm: dimensions.sm, md: dimensions.md },
          border: "solid 1px grey",
          boxShadow:
            "rgba(1, 1, 1, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(1, 1, 1, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        }}
      >
        <CardContent
          sx={{ padding: "0px !important", backgroundColor: "#0f0f0f" }}
        >
          <HoverVideoPlayer
            videoSrc={url}
            volume={1}
            muted={false}
            controls
            onHoverStart={() => {
              let temp = {
                xs: "100%",
                sm: "450px",
                md: "400px"
              };
              setDimensions(temp);
            }}
            onHoverEnd={() => {
              let temp = {
                xs: "100%",
                sm: "400px",
                md: "350px"
              };
              setDimensions(temp);
            }}
            pausedOverlay={
              <img
                src={thumbnail_url}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />

          <div className="videoDetails">
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              Your video Title
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Your Channel name
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
