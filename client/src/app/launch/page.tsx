"use client";
import React, { useEffect, useState } from "react";
import PostComponent from "./_components/post_component";
import { useAccount } from "wagmi";
import { useDataContext } from "@/context/DataContext";

const LaunchPage: React.FC = () => {
  const { address, chain } = useAccount();
  const { totalPools } = useDataContext();
  
  interface PoolData {
    id: any;
    name: string;
    description: string;
    category: string;
    total_amount: any;
    total_bets: any;
    finalScore: any;
    startTime: any;
    endTime: any;
    resultDeclareTime: any;
    poolEnded: boolean;
  }

  const [transformedPoolsData, setTransformedPoolsData] = useState<PoolData[]>([]);
  const [selected, setSelected] = useState("Explore");
  const [selectedPost, setSelectedPost] = useState<PoolData | null>(null);

  useEffect(() => {
    if (totalPools?.length) {
      setTransformedPoolsData(
        totalPools.map((pool: any) => ({
          id: pool?.poolId,
          name: `#${String(pool?.poolId).padStart(5, "0")}`,
          description: `Will ${pool?.poolName || "this event"} reach its predicted outcome?`,
          category: "Crypto",
          total_amount: pool?.total_amount || 0,
          total_bets: pool?.total_bets || 0,
          finalScore: pool?.finalScore || null,
          startTime: pool?.startTime || Math.floor(Date.now() / 1000),
          endTime: pool?.endTime || 1735689600,
          resultDeclareTime: pool?.resultDeclareTime || 1735776000,
          poolEnded: !!pool?.poolEnded,
        }))
      );
    }
  }, [totalPools]);

  const sidebarItems = ["Explore", "Create", "My Votes", "Assets", "Leaderboard", "Rewards"];

  return (
    <div className="flex items-center justify-center h-[100vh] bg-transparent">
      <div className="w-[85%] h-[90%] border-4 shadow-lg rounded-lg flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-s3 shadow-lg p-4 flex flex-col">
          <h1 className="text-lg font-bold text-black">BUZZIFY</h1>
          <nav className="flex flex-col mt-6 space-y-3">
            {sidebarItems.map((item) => (
              <SidebarItem key={item} label={item} active={selected === item} onClick={() => setSelected(item)} />
            ))}
          </nav>
          {/* User Profile */}
          <div className="mt-auto flex items-center p-3 border-t">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-md">
              😊
            </div>
            <div className="ml-3">
              <p className="text-sm font-semibold text-black">
                {address ? `${address.slice(0, 8)}...${address.slice(-5)}` : "Guest"}
              </p>
              <p className="text-xs text-gray-500">{chain?.name || "Ethereum"}</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center bg-p3 opacity-90 shadow-lg px-4 py-3 justify-center">
            <p className="text-semibold text-xl">{selected}</p>
          </header>

          {/* Content Section */}
          <div className="p-6 bg-white shadow-lg h-full overflow-y-scroll scrollbar-thin">
            {selected === "Explore" && !selectedPost && (
              <div className="grid grid-cols-2 gap-4">
                {transformedPoolsData.map((item, i) => (
                  <PostComponent item={item} key={i} onSelect={() => setSelectedPost(item)} />
                ))}
              </div>
            )}
            {selectedPost && (
              <div className="p-6 bg-white shadow-lg">
                <h2 className="text-2xl font-bold">{selectedPost.name}</h2>
                <p className="mt-2">{selectedPost.description}</p>
                <p className="mt-2">Category: {selectedPost.category}</p>
                <button className="mt-4 p-2 bg-gray-200 text-black rounded" onClick={() => setSelectedPost(null)}>Back to Explore</button>
              </div>
            )}
            {selected === "Rewards" && <RewardsSection />}
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{ label: string; active?: boolean; onClick?: () => void }> = ({ label, active, onClick }) => (
  <button onClick={onClick} className={`flex items-center p-2 rounded-lg ${active ? "bg-gray-200 text-black" : "hover:bg-gray-200 hover:text-black"}`}>
    <span className="ml-3 font-semibold">{label}</span>
  </button>
);

const RewardsSection: React.FC = () => (
  <div>
    <h1 className="text-xl font-bold text-black">Rewards</h1>
    <div className="mt-4 space-y-4">
      {["Total Rewards", "Total Rewards Claimed", "Total Rewards Available"].map((item, i) => (
        <RewardItem key={i} label={item} description="0.00" />
      ))}
    </div>
  </div>
);

const RewardItem: React.FC<{ label: string; description?: string }> = ({ label, description }) => (
  <div className="flex items-start space-x-3">
    <span className="text-xl">🎁</span>
    <div>
      <p className="font-semibold">{label}</p>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  </div>
);

export default LaunchPage;
