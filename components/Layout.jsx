import Navbar from "./Navbar";
import { useAddress, ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import Splash from "./Splash";

function Layout({ children }) {
  const address = useAddress();

  if (!address) {
    return (
      <div>
        <Splash />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="mx-0 md:max-w-4xl md:mx-auto">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
