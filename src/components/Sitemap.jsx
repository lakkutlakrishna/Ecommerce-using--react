import React from "react";
import "../styles/Sitemap.css"
import SubSiteMap from "./sub_site_map";
import Right_Sub_Site_Map from "./Right_Sub_Site_Map";
const SiteMap=()=>{
    return(
        <div className="Sitemap-container">
            <div className="Sitemap-header">
                <h7><a href="/">Home</a> &gt; <a href="/sitemap">Site Map</a></h7>
            </div>
            <div className="Sitemap-content">
                <div className="sitemap-left-side">
                    <SubSiteMap/>
                </div>
                <div className="sitemap-right-side">
                    <Right_Sub_Site_Map/>
                </div>
            </div>
        </div>
    )
};
export default SiteMap;