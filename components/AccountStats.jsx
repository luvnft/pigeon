import { useContract, useContractRead, useAddress } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../constants/addresses";

function AccountStats({ walletAddress }) {
  const { contract } = useContract(CONTRACT_ADDRESS);

  console.log("from stats " + walletAddress);

  const { data: totalPosts, isLoading: isTotalPostsLoading } = useContractRead(
    contract,
    "getTotalTweets",
    [walletAddress]
  );

  const { data: totalLikes, isTotalLikesLoading } = useContractRead(
    contract,
    "getTotalLikesReceived",
    [walletAddress]
  );

  const { data: totalTips, isTotalTipsLoading } = useContractRead(
    contract,
    "getTotalTipsReceived",
    [walletAddress]
  );

  const matic = totalTips / 10 ** 18;

  console.log("from stats posts: " + totalPosts);

  return (
    <div className=" box-border w-11/12 sm:w-4/5 mx-auto mb-4 p-6 rounded-xl bg-fb-dark-gray">
      {isTotalPostsLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="flex justify-between mx-20">
          <div className="text-xl text-fb-white">
            POSTS
            <p className="flex justify-center mt-4 text-2xl font-bold">
              {totalPosts.toNumber()}
            </p>
          </div>
          <div className="text-xl text-fb-white">
            LUVS
            <p className="flex justify-center mt-4 text-2xl font-bold">
              {totalLikes.toNumber()}
            </p>
          </div>
          <div className="text-xl text-fb-white">
            TIP
            <p className="flex justify-center mt-4 text-2xl font-bold">
              {matic.toString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountStats;
