import {
  Web3Button,
  useContract,
  useContractEvents,
  useContractRead,
  useAddress,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { CONTRACT_ADDRESS } from "../../constants/addresses";
import PostCardTest from "../../components/PostCardTest";
import { useState } from "react";
import AccountStats from "../../components/AccountStats";

function AccountFeed() {
  const router = useRouter();
  const { walletAddress } = router.query;
  const { contract } = useContract(CONTRACT_ADDRESS);
  const [username, setUsername] = useState("");
  const address = useAddress();

  const { data: _username, isLoading: usernameLoading } = useContractRead(
    contract,
    "getUsername",
    [walletAddress]
  );

  const { data: userTweets, isLoading: isUserTweetsLoading } =
    useContractEvents(contract, "TweetPosted", {
      subscribe: true,
      queryFilter: {
        filters: {
          user: walletAddress,
        },
        order: "desc",
      },
    });

  return (
    <div>
      {usernameLoading && isUserTweetsLoading ? null : (
        <div className="box-border w-11/12 sm:w-4/5 mx-auto mb-4 mt-24 p-6 rounded-xl bg-fb-dark-gray">
          <div>
            <h1 className="text-xl text-fb-white font-bold mb-2">Profile</h1>
            <p className=" text-fb-white">{`Address: ${walletAddress}`}</p>
            <p className=" text-fb-white">{`Username: ${_username}`}</p>
            {address === walletAddress ? (
              <div>
                <h1 className="text-xl font-bold mb-2 mt-4 ">Settings</h1>
                <div className="flex">
                  <p>Change Username:</p>
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    style={{ paddingLeft: "0.5rem" }}
                    className="ml-1 bg-transparent border-2 border-fb-gray rounded-lg h-7"
                    placeholder={`${_username}`}
                  ></input>
                  <div className="flex justify-end ml-auto">
                    <div className=" bg-blue text-fb-white font-bold py-2 px-4 rounded-full hover:bg-dark-blue focus:bg-dark-blue">
                      <Web3Button
                        contractAddress={CONTRACT_ADDRESS}
                        action={(contract) =>
                          contract.call("setUsername", [username])
                        }
                        onSuccess={() => {
                          setUsername("");
                        }}
                        style={{
                          minWidth: "0px",
                          minHeight: "0px",
                          padding: "0px",
                          margin: "auto",
                          width: "100%",
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                      >
                        Update
                      </Web3Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
      <AccountStats walletAddress={walletAddress} />

      {isUserTweetsLoading
        ? null
        : userTweets
            .slice(0, 30)
            .map((event, index) => (
              <PostCardTest
                key={index}
                walletAddress={event.data.user}
                tweet={event.data.tweet}
                tweetId={event.data.tweetId}
                timestamp={event.data.timestamp}
              />
            ))}
    </div>
  );
}

export default AccountFeed;
