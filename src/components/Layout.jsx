import React from "react";
import Header from "./Header";
import YouTubePlayer from "./YoutubePlayer";
import Modal from "../components/Modal";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Modal>
          <YouTubePlayer/>
        </Modal>
        {children}
      </div>
    </div>
  );
};

export default Layout;
