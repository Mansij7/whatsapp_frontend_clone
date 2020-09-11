import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name"> your Friends name </span>
          hey, what's up?
          <span className="chat_timestamp"> {new Date().toUTCString()} </span>
        </p>
        <p className="chat_message chat_receiver">
          <span className="chat_name"> your name </span>
          I'm fine , what about you?
          <span className="chat_timestamp"> {new Date().toUTCString()} </span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />

        <form>
          <input type="text" placeholder="type a message" />
          <button type="submit">Send a message</button>
        </form>

        <IconButton>
          <SendIcon />
        </IconButton>
        <MicIcon />
      </div>
    </div>
  );
}
export default Chat;
