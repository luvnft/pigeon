import { useContractEvents, useContract } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../constants/addresses";
import PostCardTest from "./PostCardTest";

function PostFeed() {
  const { contract } = useContract(CONTRACT_ADDRESS);

  const { data: userTweets, isLoading: isUserTweetsLoading } =
    useContractEvents(contract, "TweetPosted", { subscribe: true });

  return (
    <div>
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

export default PostFeed;
