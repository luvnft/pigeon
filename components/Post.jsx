import {
  useAddress,
  useContract,
  useContractRead,
  Web3Button,
} from "@thirdweb-dev/react";
import { useState } from "react";
import { CONTRACT_ADDRESS } from "../constants/addresses";
import Link from "next/link";

function Post() {
  const address = useAddress();

  const [newPost, setNewPost] = useState("");
  const [charactercount, setCharacterCount] = useState(0);
  const { contract } = useContract(CONTRACT_ADDRESS);

  const { data: _username, isLoading: usernameLoading } = useContractRead(
    contract,
    "getUsername",
    [address]
  );

  return (
    <div className="box-border w-11/12 sm:w-4/5 mx-auto mb-4 mt-24 p-6 rounded-xl bg-fb-dark-gray">
      <div>
        <Link href={`/account/${address}`}>
          <div className="flex">
            <p className="text-fb-white font-bold">{_username}</p>
            <p className="text-fb-silver ml-2">{`${address.slice(
              0,
              4
            )}...${address.slice(-4)}`}</p>
          </div>
        </Link>
      </div>
      <div className="mt-4">
        <textarea
          value={newPost}
          onChange={(e) => {
            setNewPost(e.target.value);
            setCharacterCount(e.target.value.length);
          }}
          className=" bg-transparent w-full px-4"
          rows="3"
          cols="50"
          placeholder="What's happening"
        ></textarea>
        <div className="flex justify-between mt-4">
          <p
            className={`flex items-center font-bold ${
              charactercount > 140 ? "text-red-error" : ""
            }`}
          >
            {charactercount}/140
          </p>
          <div className=" bg-blue text-fb-white font-bold py-2 px-4 rounded-full hover:bg-dark-blue focus:bg-dark-blue">
            <Web3Button
              contractAddress={CONTRACT_ADDRESS}
              action={(contract) => contract.call("postTweet", [newPost])}
              isDisabled={newPost.length === 0 || newPost.length > 140}
              onSuccess={() => {
                setNewPost("");
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
              Post
            </Web3Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
