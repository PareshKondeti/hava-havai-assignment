import React from "react";
import { Link } from "react-router-don";
const Home = () => {
    return (
    <div style={{ height: "100vh", padding: "26px", backgroundColor: "#232323", color: "white" }}>
        <h1 style={{ fontSize: "43px", marginBottom: "26px" }}>Homepage</h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
This project was generated By{" Paresh"}
<a href="https://wa.dniuise.com" style={{ color: "#8/CEFA", textDecoration: "none"}}>
PAresh
</a>
. Quickly use below links to navigate through all pages.
</p>
<ul style={{ listStyle: "none", padding: "0" }}>
<li style={{ marginBottom: "10px" }}>
<Link to="/desktopone" style={{ color: "#87CEFA", textDecoration: "none" }}>
Desktopone
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/desktoptwo" style={{ color: "#87CEFA", textDecoration: "none" }}>
DesktopTuo
</Link>
</li>
</ul>
</div>
);
};
export default Home;