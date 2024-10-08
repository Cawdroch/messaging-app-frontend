import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

const SidebarChat = ({messages}) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  return (
    <div className="sidebarChat">
      <Avatar src={`https://api.dicebear.com/9.x/personas/svg?seed=${seed}`} />
      <div className="sidebarChat__info">
        <h2>Jet Wanker Forum</h2>
        <p>{messages[messages.length -1]?.message}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
