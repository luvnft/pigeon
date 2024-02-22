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
              1️⃣ Setup Metamask🦊 wallet
              </p>
              </Link>
              <p style={{ paddingTop: '10px' }}>Connect your Metamask🦊 to the Mumbai Testnet network <a href="https://chainlist.org/chain/80001?testnets=true" target="_blank" rel="noopener noreferrer" className="hover:text-fb-white"><b>here</b></a></p>
              <p style={{ paddingTop: '10px' }}>Fund your wallet with 🆓 <a href="https://mumbaifaucet.com/" target="_blank" rel="noopener noreferrer" className="hover:text-fb-white"><b>$MATIC</b></a></p>
              </div>
          <div className="text-center text-fb-silver border-t-2 border-fb-gray pt-4">
              <p>
                Explore and post tokenized <a href="https://what3words.com/" target="_blank"><strong>What3words</strong></a> 
                locations on What3bars social media platform built on the Polygon testnet Mumbai blockchain. The new worldwide 
                blockchain address system you own is ///WHAT.3.BARS LNE (LUV NFT ESTATE). Tokenize a LNE <a href="https://linkr.ee/maticluv" target="_blank"><strong>here</strong></a> 
           </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
