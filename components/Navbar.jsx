import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const address = useAddress();

  const { walletAddress } = router.query;
  const isOwnProfile = address === walletAddress;

  return (
    <nav className="flex justify-between items-center py-2 bg-fb-dark-gray px-20 border-b-2 border-fb-gray fixed top-0 w-full">
      <button className="text-2xl font-bold" onClick={() => router.push("/")}>
        ///
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 text-xl font-bold text-fb-white">
        <button
          className={`border-b-4 p-4 hover:bg-fb-gray focus:border-b-4 ${
            router.pathname === "/" ? " border-blue" : " border-fb-dark-gray"
          }`}
          onClick={() => router.push("/")}
        >
          HOME
        </button>
        <button
          className={`border-b-4 p-4 hover:bg-fb-gray focus:border-b-4 ${
            isOwnProfile ? "border-blue" : "border-fb-dark-gray"
          }`}
          onClick={() => router.push(`/account/${address}`)}
        >
          IAM
        </button>
      </div>

      <div className="flex items-center">
        <ConnectWallet />
      </div>
    </nav>
  );
}

export default Navbar;
