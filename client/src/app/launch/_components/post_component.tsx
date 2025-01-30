import { useDataContext } from "@/context/DataContext";
import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import { RiTimerLine } from "react-icons/ri";
import { RiRadioButtonLine } from "react-icons/ri";
interface Post {
  id: number;
  name: string;
  description: string;
  category: string;
  total_amount: number;
  total_bets: number;
  finalScore: number;
  startTime: number;
  endTime: number;
  resultDeclareTime: number;
  poolEnded: boolean;
}
const PostComponent = ({ item }: { item: Post }) => {
  const { openSideBar, setActivePoolId, formatTimestamp } = useDataContext();
  return (
    <>
      <div
        className="twitter-post"
        onClick={() => {
          setActivePoolId(+item?.id);
          openSideBar();
        }}
      >
        <div className="twitter-post__retweeted">
          <svg
            viewBox="0 0 24 24"
            className="r-9ilb82 r-4qtqp9 r-yyyyoo r-1yevf0r r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-meisx5"
          >
            <g>
              <path d="M18.265 3.314c-3.45-3.45-9.07-3.45-12.52 0-3.45 3.44-3.45 9.06 0 12.51 1.5 1.49 3.43 2.38 5.51 2.56v4.14c0 .31.2.6.5.7.08.03.17.05.25.05.22 0 .44-.1.59-.29l6.49-8.11c2.63-3.49 2.27-8.47-.82-11.56zm-10.56 7.87c0-.41.33-.75.75-.75h4.05c.41 0 .75.34.75.75s-.34.75-.75.75h-4.05c-.42 0-.75-.34-.75-.75zm8.6-3.24c0 .42-.34.75-.75.75h-7.1c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h7.1c.41 0 .75.34.75.75z"></path>
            </g>
          </svg>
          <span className="uppercase text-blue-400">{item?.category}</span>
        </div>
        <div className="twitter-post__bottom mt-4">
          <div className="twitter-post__content">
            <div className="twitter-post__title mb-2">
              <span className="name">@ {item?.name} </span>
                <span className="handle">#{item?.id} - </span>
                <span> {formatTimestamp(item?.startTime)}</span>
            </div>
            <p className="twitter-post__paragraph">{item?.description}</p>
            <ul className="twitter-post__interactions">
              <li className="comments">
                <FiDollarSign />
                <span> {item?.total_amount}</span>
              </li>
              <li className="retweets">
                <HiUsers />
                <span>{item?.total_bets}</span>
              </li>
              <li className="likes">
                <RiTimerLine />
                <span>{formatTimestamp(item?.endTime)}</span>
              </li>

              <li className="retweets">
                {item?.poolEnded ? (
                  <>
                    <RiRadioButtonLine className="text-red" />
                    <span>ENDED</span>
                  </>
                ) : (
                  <>
                    <RiRadioButtonLine className="text-green-500" />
                    <span>ONGOING</span>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostComponent;
