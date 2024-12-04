import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { lightBlue } from "../../constants/color";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";
import { motion } from "framer-motion";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "#4A90E2" : "#E0E0E0", 
        color: sameSender ? "white" : "black", 
        borderRadius: "12px",
        padding: "0.8rem 1rem",
        width: "fit-content",
        maxWidth: "80%",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "relative",
        margin: "0.5rem 0",
      }}
    >
      {/* Triangle tip */}
      <div
        style={{
          position: "absolute",
          bottom: "-5px", 
          left: sameSender ? "auto" : "15px",
          right: sameSender ? "15px" : "auto",
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "5px 5px 0 5px",
          borderColor: `${
            sameSender ? "#4A90E2" : "#E0E0E0"
          } transparent transparent transparent`,
        }}
      ></div>

      {/* Sender name (if not the same sender) */}
      {!sameSender && (
        <Typography color={"#1976D2"} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}

      {/* Message content */}
      {content && (
        <Typography
          style={{
            wordWrap: "break-word", // Ensure long text wraps
            marginTop: !sameSender ? "0.4rem" : "0", // Add spacing if name is displayed
          }}
        >
          {content}
        </Typography>
      )}

      {/* Attachments */}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index} sx={{ marginTop: "0.5rem" }}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: sameSender ? "white" : "black",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      {/* Timestamp */}
      <Typography
        variant="caption"
        color={sameSender ? "rgba(255, 255, 255, 0.7)" : "text.secondary"}
        style={{
          marginTop: "0.5rem",
          textAlign: "right",
          display: "block",
        }}
      >
        {timeAgo}
      </Typography>
    </motion.div>
  );
};

export default memo(MessageComponent);
