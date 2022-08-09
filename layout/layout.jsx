import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Background from "../conponents/Background/Background";
const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Background />
      <Footer />
    </div>
  );
}

export default Layout;