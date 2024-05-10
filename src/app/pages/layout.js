import Navlink, { Nav } from "../components/common/Navbar";

export default function PageLayout({ children }) {
  return (
    <>
      <Nav>
        <Navlink href="/pages/report">Report</Navlink>
        <Navlink href="/pages/article">Articles</Navlink>
        <Navlink href="/pages/video">Videos</Navlink>
        <Navlink href="/pages/podcast">Podcast</Navlink>
      </Nav>
    
      
     <div className="container my-6">{children}</div>
    </>
  );
}
