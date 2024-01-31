import Link from "next/link";
import moment from "moment";
import { Web3Button, useContractRead, useContract } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../constants/addresses";
import Image from "next/image";
import { useState } from "react";

function PostCardTest({ walletAddress, tweet, tweetId, timestamp }) {
  const date = new Date(timestamp.toNumber() * 1000);
  const now = new Date();
  const timeAgo = moment(date).fromNow();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const [isModalOpen, setModalOpen] = useState(false);
  const [maticAmount, setMaticAmount] = useState();

  const { data: tips, isLoading: tipsLoading } = useContractRead(
    contract,
    "getTips",
    [walletAddress, tweetId]
  );

  const matic = tips / 10 ** 18;

  const { data: likes, isLoading: likesLoading } = useContractRead(
    contract,
    "getLikesCount",
    [tweetId]
  );

  const { data: _username, isLoading: usernameLoading } = useContractRead(
    contract,
    "getUsername",
    [walletAddress]
  );

  const weiEquivalent = maticAmount * 10 ** 18;

  return (
    <div className="box-border w-11/12 sm:w-4/5 mx-auto mb-4 p-6 rounded-xl bg-fb-dark-gray">
      <div className="flex justify-between">
        <Link href={`/account/${walletAddress}`}>
          <div className="flex">
            <p className="text-fb-white font-bold">{_username}</p>
            <p className="text-fb-silver ml-2">{`${walletAddress.slice(
              0,
              4
            )}...${walletAddress.slice(-4)}`}</p>
          </div>
        </Link>
        <p className="text-fb-silver">{timeAgo}</p>
      </div>
      <p className="mt-4 mx-4 text-fb-white">{tweet}</p>

      <div className="mt-8 border-b-2 border-fb-gray">
        {likesLoading && tipsLoading ? (
          <p className="mb-2">0</p>
        ) : (
          <div className="flex justify-between mx-4 gap-12 mb-2">
            <div className="flex">
              <Image
                className="w-4 h-4 mr-2 my-auto"
                src="/images/heart-3.png"
                width={20}
                height={20}
                alt="heart"
              />
              <p className=" text-base text-fb-silver">{likes.toNumber()}</p>
            </div>
            <div className="flex">
              <Image
                className="w-4 h-4 mr-2 my-auto"
                src="/images/coins-1.png"
                width={20}
                height={20}
                alt="coins"
              />
              <p className="text-base text-fb-silver">
                {matic.toString()} MATIC
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between gap-8 px-4">
        <div className="m-auto w-full hover:bg-fb-gray rounded-lg">
          <Web3Button
            contractAddress={CONTRACT_ADDRESS}
            action={(contract) =>
              contract.call("likeTweet", [walletAddress, tweetId])
            }
            style={{
              margin: "auto",
              width: "100%",
              backgroundColor: "transparent",
              color: "white",
            }}
          >
            Like
          </Web3Button>
        </div>
        <div className="m-auto w-full hover:bg-fb-gray rounded-lg ">
          <button
            className="m-auto w-full p-3 text-white"
            onClick={() => setModalOpen(true)}
          >
            Tip
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="absolute inset-0 bg-fb-black opacity-80"></div>
              <div className="relative w-auto max-w-2xl mx-auto my-6">
                <div className="relative p-4 bg-fb-dark-gray shadow-md rounded-xl min-w-96 min-h-60">
                  <button
                    className="absolute top-0 right-0 mt-2 mr-4 text-fb-silver cursor-pointer"
                    onClick={() => setModalOpen(false)}
                  >
                    <span className="text-2xl">&times;</span>
                  </button>
                  <div className="mt-4">
                    <p className=" text-center text-lg text-fb-white px-4 pt-2">
                      How much would you like to tip in MATIC?
                    </p>
                    <div className="flex justify-center my-6">
                      <Image
                        className="w-16 h-16"
                        src="/images/coins-1.png"
                        width={250}
                        height={250}
                        alt="coins"
                      />
                    </div>
                    <div className="flex justify-between gap-4 mb-8">
                      <button
                        className=" bg-blue text-fb-white font-bold rounded-xl m-auto px-4 py-2 w-full hover:bg-dark-blue focus:bg-dark-blue"
                        onClick={() => setMaticAmount(0.2)}
                      >
                        0.2
                      </button>
                      <button
                        className=" bg-blue text-fb-white font-bold rounded-xl m-auto px-4 py-2 w-full hover:bg-dark-blue focus:bg-dark-blue"
                        onClick={() => setMaticAmount(0.5)}
                      >
                        0.5
                      </button>
                      <button
                        className=" bg-blue text-fb-white font-bold rounded-xl m-auto px-4 py-2 w-full hover:bg-dark-blue focus:bg-dark-blue"
                        onClick={() => setMaticAmount(1)}
                      >
                        1
                      </button>
                    </div>
                    <div className="m-auto w-full bg-purple hover:bg-purple-dark rounded-xl mb-2">
                      <Web3Button
                        contractAddress={CONTRACT_ADDRESS}
                        action={(contract) =>
                          contract.call("tipTweet", [walletAddress, tweetId], {
                            value: weiEquivalent.toString(),
                          })
                        }
                        onSuccess={() => setModalOpen(false)}
                        style={{
                          margin: "auto",
                          width: "100%",
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                      >
                        Tip
                      </Web3Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostCardTest;
