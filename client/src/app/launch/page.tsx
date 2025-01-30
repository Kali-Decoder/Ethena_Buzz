"use client";
import React, { useEffect, useState } from "react";
import PostComponent from "./_components/post_component";
import postData from "./post_data.json";
import RightSidebar from "./_components/sidebar";
import { useAccount } from "wagmi";
import Link from "next/link";
import { useDataContext } from "@/context/DataContext";

const LaunchPage: React.FC = () => {
  const { address, chain } = useAccount();
  const { totalPools } = useDataContext();
  const [transfomedPoolsData, setTransfomedPoolsData] = useState([]);
  const getTransformedPools = () => {
    const transformedPools =
      totalPools?.length &&
      totalPools.map((pool) => ({
        id: pool?.poolId,
        name: `#${String(pool?.poolId).padStart(5, "0")}`, // Formatting ID
        description: `Will ${pool?.poolName || "this event"} reach its predicted outcome?`,
        category: "Crypto", // You might need to dynamically set this
        total_amount: pool?.total_amount || 0,
        total_bets: pool?.total_bets || 0,
        finalScore: pool?.finalScore || null, // If finalScore is present
        startTime: pool?.startTime || Math.floor(Date.now() / 1000), // Default to current timestamp if missing
        endTime: pool?.endTime || 1735689600, // Default to provided timestamp
        resultDeclareTime: pool?.resultDeclareTime || 1735776000, // Default value if missing
        poolEnded: !!pool?.poolEnded, // Ensuring boolean type
      }));

    setTransfomedPoolsData(transformedPools);
  };
  useEffect(() => {
    getTransformedPools();
  }, [totalPools]);

  const [selected, setSelected] = useState("Explore");
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] bg-transparent">
        <div className="w-[85%] h-[90%] border border-4  shadow-lg rounded-lg overflow-hidden flex">
          <aside className="w-64 bg-s3 shadow-lg p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold text-black">BUZZIFY</h1>
            </div>

            <nav className="flex flex-col mt-6 space-y-3">
              <SidebarItem
                icon="🏠"
                label="Explore"
                active={selected === "Explore"}
                onClick={() => setSelected("Explore")}
              />
              <SidebarItem
                icon="📚"
                label="Create"
                active={selected === "Create"}
                onClick={() => setSelected("Create")}
              />
              <SidebarItem
                icon="👤"
                label="My Votes"
                active={selected === "My Votes"}
                onClick={() => setSelected("My Votes")}
              />
              <SidebarItem
                icon="🏆"
                label="Assets"
                active={selected === "Assets"}
                onClick={() => setSelected("Assets")}
              />
              <SidebarItem
                icon="📊"
                label="Leaderboard"
                active={selected === "Leaderboard"}
                onClick={() => setSelected("Leaderboard")}
              />
              <SidebarItem
                icon="🎁"
                label="Rewards"
                active={selected === "Rewards"}
                onClick={() => setSelected("Rewards")}
              />
            </nav>

            {/* <button className="mt-4 py-2 px-3 bg-lime-400 text-black font-semibold rounded-lg shadow-md border border-black">
              Prediction Market
            </button> */}

            {/* User Profile */}
            <div className="mt-auto flex items-center p-3 border-t">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-md">
                😊
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-black">
                  {address?.slice(0, 8) + "..." + address?.slice(-5)}
                </p>
                <p className="text-xs text-gray-500">{chain?.name}</p>
              </div>
              <button className="ml-auto text-gray-600 text-xl">⚙️</button>
            </div>
          </aside>

          <div className="flex-1 flex flex-col">
            {/* Header  Section*/}
            <header className="flex items-center bg-p3 opacity-90 shadow-lg px-4 py-3">
              {selected === "Explore" && (
                <>
                  <div className="flex gap-x-4 text-black">
                    <button className=" text-black text-md p-2 border border-black rounded-40  focus:bg-black focus:text-white">
                      ⚡️ All
                    </button>
                    <button className=" text-black text-md p-2 border border-black rounded-40 focus:bg-black focus:text-white">
                      ⚡️ Featured
                    </button>

                    <button className=" text-black text-md p-2 border border-black rounded-40 focus:bg-black focus:text-white">
                      💥 New
                    </button>

                    <button className=" text-black text-md p-2 border border-black rounded-40 focus:bg-black focus:text-white">
                      ⏱️ Ending Soon
                    </button>

                    <button className=" text-black text-md p-2 border border-black rounded-40 focus:bg-black focus:text-white">
                      ⏱️ Ending Soon
                    </button>

                    <button className=" text-black text-md p-2 border border-black rounded-40 focus:bg-black focus:text-white">
                      ⏱️ Ending Soon
                    </button>
                  </div>
                </>
              )}
            </header>

            {/* Content Section*/}
            <div className="p-6 bg-white shadow-lg h-full overflow-y-scroll scrollbar-thin">
              {selected === "Explore" && (
                <>
                  <div className="grid grid-cols-2 gap-2 gap-y-4">
                    {transfomedPoolsData?.length &&
                      transfomedPoolsData.map((item, i) => {
                        return (
                          <>
                            <PostComponent item={item} key={i} />{" "}
                          </>
                        );
                      })}
                  </div>
                </>
              )}
              {selected === "Create" && (
                <>
                  <div>Create</div>
                </>
              )}
              {selected === "My Votes" && (
                <>
                  <div>My Votes</div>
                </>
              )}
              {selected === "Assets" && (
                <>
                  <div>Assets</div>
                </>
              )}
              {selected === "Leaderboard" && (
                <>
                  <div>Leaderboard</div>
                </>
              )}
              {selected === "Rewards" && (
                <>
                  <div>
                    <h1 className="text-xl font-bold text-black">Rewards</h1>
                    <div className="mt-4 space-y-4">
                      <RewardItem
                        icon="🎁"
                        label="Total Rewards"
                        description="0.00"
                      />
                      <RewardItem
                        icon="🎁"
                        label="Total Rewards Claimed"
                        description="0.00"
                      />
                      <RewardItem
                        icon="🎁"
                        label="Total Rewards Available"
                        description="0.00"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface SidebarItemProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}
function SidebarItem({
  icon,
  label,
  active = false,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center  p-2 rounded-lg  ${active ? "bg-gray-200" : "hover:bg-gray-200 hover:text-black"}`}
    >
      <span className="text-lg">{icon}</span>
      <span
        className={`ml-3 ${active ? "text-black" : "text-white"} font-semibold`}
      >
        {label}
      </span>
    </button>
  );
}

interface RewardItemProps {
  icon: string;
  label: string;
  description?: string;
}
function RewardItem({ icon, label, description }: RewardItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="font-semibold">{label}</p>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </div>
  );
}
export default LaunchPage;
