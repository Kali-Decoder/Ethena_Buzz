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
  const { setActivePoolId, formatTimestamp} =
    useDataContext();
  return (
    <>
      <div
        onClick={() => {
          setActivePoolId(+item?.id);
        }}
        className="bg-[#F5F3EE] border-2 border-gray-300 rounded-lg shadow-md p-4 cursor-pointer flex flex-col gap-4"
      >
        <h2 className="font-bold text-lg text-black">{item?.description}</h2>
        <p className="text-sm text-gray-700">
          MELANIA launched at $6B market cap, overshadowing TRUMP, which plunged
          38%. With 90% of MELANIA’s supply in one wallet, can it sustain its
          hype?
        </p>

        <div className="text-blue-500 text-sm font-semibold space-x-2 uppercase">
          <span># {item?.category}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <img
              src="https://pbs.twimg.com/profile_images/1884937424364851200/VSrPwZa4_400x400.jpg"
              className="w-8 h-8 rounded-full border border-gray-300"
            />
            <span className="font-semibold">{item?.name}</span>
          </div>
          <div className="flex items-center gap-3 text-md">
            <span>💰 ${item?.total_amount}</span>
            <span>⏱️ {formatTimestamp(item?.startTime)}</span>
            <span>👥 {item?.total_bets}</span>
            <span className="flex items-center gap-1">
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
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostComponent;
