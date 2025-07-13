import React from "react";
import "../styles/Typography.css";
import Headings_Leadings from "./Headings_Leadings";
import Alignment from "./Alignment";
import Lists from "./Lists";
import BlockQuotes from "./BlockQuotes";
import BrandColors from "./BrandColors";
import Grayscale from "./Grayscale";
import Button from "./Button";
import Navigation from "./Navigation";
import AlertsandNotifications from "./AlertsandNotifications";
import Misc from "./Misc";
import Wells from "./Wells";
import GridColumns from "./GridColumns";

const Typography = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="typography-header">
        <h7>
          <a href="/">Home</a> &gt; <a href="/typography">Typography</a>
        </h7>
        <h1>Core Typography</h1>
      </div>
      <hr />
      <div className="typography-content">
        <Headings_Leadings />
        <Alignment />
        <Lists />
        <BlockQuotes />
        <BrandColors />
        <Grayscale />
        <Button />
        <Navigation />
        <AlertsandNotifications />
        <Misc />
        <Wells />
        <GridColumns />
      </div>
    </div>
  );
};

export default Typography;