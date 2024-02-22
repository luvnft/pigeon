import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Splash() {
  return (
    <>
      <Head>
        <title>W3BARS</title>
        <meta name="description" content="Decentralized social media app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex items-center justify-center">
        <div className=" rounded-xl py-8 px-16 bg-fb-dark-gray">
          <div className="flex justify-center m-auto mb-4">
            <Image
              className="w-6 h-6"
              src="/images/pigeonpost.png"
              width={250}
              height={250}
              alt="coins"
            />
          </div>
          <h1 className="text-center text-4xl font-bold text-fb-white mb-8">
            W3BARS
          </h1>
          <div className="flex justify-center mb-8">
            <ConnectWallet
              theme={darkTheme({
                colors: {
                  borderColor: "#3a3b3c",
                  danger: "#dc2626",
                  separatorLine: "#3a3b3c",
                  modalBg: "#242526",
                  dropdownBg: "#242526",
                  accentText: "#628CD6",
                  accentButtonBg: "#628CD6",
                  primaryText: "#ffffff",
                  secondaryText: "#b0b3b8",
                  primaryButtonBg: "#628CD6",
                  primaryButtonText: "#ffffff",
                  connectedButtonBg: "#18191a",
                },
              })}
              modalTitle={"PigeonPost."}
              modalSize={"wide"}
              welcomeScreen={{
                title: "W3BARS",
                subtitle: "Promote the LNE [LUV NFT ESTATE] 10x10m block you own on our blockchain social media platform with a What3bars address and connect with potential customers and businesses in a new way.",
              }}
              modalTitleIconUrl={""}
            />
          </div>
          <div className="text-center text-fb-silver border-t-2 border-fb-gray py-4">
            <p>{"Don't have a wallet installed?"}</p>
            <Link
              href="https://metamask.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className=" hover:text-fb-white">
                Click here to install Metamask🦊
              </p>
            </Link>
          </div>
          <div className="text-center text-fb-silver border-t-2 border-fb-gray pt-4">
            <p>
              W3BARS is a digital real estate social media platform on the Polygon 
              (Mumbai testnet) blockchain. Stand on your 10M x 10M ///WHAT.3.BARS LNE 
              (LUV NFT ESTATE) business that you own. Free $MATIC
            </p>
            <Link
              href="https://mumbaifaucet.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className=" hover:text-fb-white"><b>$MATIC here</b></p>.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
