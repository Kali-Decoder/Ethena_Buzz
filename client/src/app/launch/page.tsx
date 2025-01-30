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
        name: `Creator Pool #${String(pool?.poolId).padStart(5, "0")}`, // Formatting ID
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

  const [selected, setSelected] = useState("Assets");
  return (
    // <main className="flex justify-center items-center border">
    //   <div className="w-[50%] h-[50%] twitter border">
    //     <div className="twitter__left">
    //       <aside className="twitter-aside" data-aos="fade-right">
    //         <nav className="twitter-nav">
    //           <ul className="twitter-nav__list  mt-4">
    //             <li className="twitter-nav__item">
    //               <span className="uppercase">
    //                 <Link href="/">Buzzify</Link>
    //               </span>
    //             </li>

    //             <li className="twitter-nav__item">
    //               <svg
    //                 viewBox="0 0 24 24"
    //                 className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
    //               >
    //                 <g>
    //                   <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path>
    //                 </g>
    //               </svg>
    //               <span>Explore</span>
    //             </li>
    //             <li className="twitter-nav__item">
    //               <svg
    //                 viewBox="0 0 24 24"
    //                 className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
    //               >
    //                 <g>
    //                   <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
    //                 </g>
    //               </svg>
    //               <span>
    //                 {" "}
    //                 <Link href="/dashboard">Dashbaord</Link>
    //               </span>
    //             </li>
    //           </ul>
    //         </nav>

    //         <div className="twitter-logged">
    //           <div className="twitter-logged-info w-full flex items-center justify-center flex-col">
    //             {address?.slice(0, 10) + "..." + address?.slice(-5)}
    //             <p className="text-xs">{chain?.name}</p>
    //           </div>
    //         </div>
    //       </aside>
    //     </div>
    //     <div className="twitter__middle mt-2">
    //       <div className="flex gap-x-4">
    //         <div className="flex flex-wrap gap-4 p-4 w-[80%]">
    //           {[
    //             { id: "all", label: "All" },
    //             { id: "finance", label: "Finance" },
    //             { id: "crypto", label: "Crypto" },
    //             { id: "stocks", label: "Stocks" },
    //             { id: "forex", label: "Forex" },
    //             { id: "commodities", label: "Commodities" },
    //           ].map((category) => (
    //             <div
    //               key={category.id}
    //               className="relative flex w-[10rem] items-center justify-center rounded-xl bg-transparent px-4 py-3 font-medium text-white"
    //             >
    //               <input
    //                 className="peer hidden"
    //                 type="radio"
    //                 name="category"
    //                 id={category.id}
    //               />
    //               <label
    //                 className="peer-checked:border-blue-400 peer-checked:bg-[#e0245e] absolute top-0 h-full w-full cursor-pointer rounded-xl border"
    //                 htmlFor={category.id}
    //               ></label>
    //               <div className="peer-checked:border-transparent peer-checked:bg-[#e0245e] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-[#e0245e] ring-offset-2"></div>
    //               <span className="pointer-events-none z-10 text-xs">
    //                 {category.label}
    //               </span>
    //             </div>
    //           ))}
    //         </div>
    //         <div className="w-[20%] mt-8">
    //           <Link href="/create">
    //             <button className="twitter-nav__item active">
    //               <svg
    //                 viewBox="0 0 24 24"
    //                 className="r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
    //               >
    //                 <g>
    //                   <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
    //                 </g>
    //               </svg>
    //               <span>Create New</span>
    //             </button>
    //           </Link>
    //         </div>
    //       </div>

    //       <div
    //         className="twitter-feed grid grid-cols-2 gap-6 mt-10"
    //         data-aos="fade-up"
    //       >
    //         {transfomedPoolsData?.length &&
    //           transfomedPoolsData.map((item, i) => {
    //             return (
    //               <>
    //                 <PostComponent item={item} key={i} />{" "}
    //               </>
    //             );
    //           })}
    //       </div>
    //     </div>
    //   </div>
    //   {/* <RightSidebar /> */}
    // </main>

    // <>
    //   <div className="flex items-center justify-center h-[100vh] bg-transparent">
    //     {/* Container */}

    //     <div className="w-[85%] h-[85%] border shadow-lg rounded-lg overflow-hidden flex">
    //       <aside className="w-1/5 text-white p-5 border">
    //         <h2 className="text-lg font-bold text-center mb-4">Sidebar</h2>
    //         <ul className="space-y-3">
    //           <li className="p-2 hover:bg-gray-700 cursor-pointer text-sm">
    //             Dashboard
    //           </li>
    //           <li className="p-2 hover:bg-gray-700 cursor-pointer text-sm">
    //             Profile
    //           </li>
    //           <li className="p-2 hover:bg-gray-700 cursor-pointer text-sm">
    //             Settings
    //           </li>
    //           <li className="p-2 hover:bg-gray-700 cursor-pointer text-sm">
    //             Logout
    //           </li>
    //         </ul>
    //       </aside>

    //       <div className="flex flex-col w-4/5">
    //         <header className="bg-teal-500 border w-full text-white p-4 text-center text-lg font-bold">
    //           Dashboard Header
    //         </header>
    //         {/* Content Section */}
    //         <main className="w-full h-full p-4 border flex justify-center items-center flex-col">
    //         </main>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className="flex items-center justify-center h-[100vh] bg-slate-50">
        <div className="w-[85%] h-[90%] border shadow-lg rounded-lg overflow-hidden flex">
          <aside className="w-64 bg-blue-100 shadow-lg p-4 flex flex-col border-black border">
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

            <button className="mt-4 py-2 px-3 bg-lime-400 text-black font-semibold rounded-lg shadow-md border border-black">
              Prediction Market
            </button>

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
            <header className="flex items-center bg-violet-100 shadow-lg px-4 py-3 border-black border">
              <button className="p-2">⬅️</button>
              <h2 className="text-lg text-black font-semibold mx-auto">
                My Status
              </h2>
            </header>

            {/* Content Section*/}
            <div className="p-6 bg-white shadow-lg h-full border-black border overflow-y-scroll scrollbar-none">
              {selected === "Explore" && (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#F5F3EE] border-2 border-black rounded-lg shadow-md p-4 cursor-pointer flex flex-col gap-4">
                      <h2 className="font-bold text-lg text-black">
                        Will MELANIA’s memecoin outshine TRUMP’s?
                      </h2>

                      <p className="text-sm text-gray-700">
                        MELANIA launched at $6B market cap, overshadowing TRUMP,
                        which plunged 38%. With 90% of MELANIA’s supply in one
                        wallet, can it sustain its hype?
                      </p>

                      <div className="text-blue-500 text-sm font-semibold space-x-2">
                        <span>#Crypto</span>
                        <span>#Politics</span>
                        <span>#Tech</span>
                        <span>#Business</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-800">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://pbs.twimg.com/profile_images/1884937424364851200/VSrPwZa4_400x400.jpg"
                            className="w-8 h-8 rounded-full border border-black"
                          />
                          <span className="font-bold">Nikku.Dev</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>💰 $55.28</span>
                          <span>👍 12,990</span>
                          <span>💬 1</span>
                          <span className="text-gray-500">Ended</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#F5F3EE] border-2 border-black rounded-lg shadow-md p-4 cursor-pointer flex flex-col gap-4">
                      <h2 className="font-bold text-lg text-black">
                        Will MELANIA’s memecoin outshine TRUMP’s?
                      </h2>

                      <p className="text-sm text-gray-700">
                        MELANIA launched at $6B market cap, overshadowing TRUMP,
                        which plunged 38%. With 90% of MELANIA’s supply in one
                        wallet, can it sustain its hype?
                      </p>

                      <div className="text-blue-500 text-sm font-semibold space-x-2">
                        <span>#Crypto</span>
                        <span>#Politics</span>
                        <span>#Tech</span>
                        <span>#Business</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-800">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://pbs.twimg.com/profile_images/1884937424364851200/VSrPwZa4_400x400.jpg"
                            className="w-8 h-8 rounded-full border border-black"
                          />
                          <span className="font-bold">Nikku.Dev</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>💰 $55.28</span>
                          <span>👍 12,990</span>
                          <span>💬 1</span>
                          <span className="text-gray-500">Ended</span>
                        </div>
                      </div>
                    </div> 
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
      className={`flex items-center p-2 rounded-lg ${active ? "bg-gray-200" : "hover:bg-gray-100"}`}
    >
      <span className="text-lg">{icon}</span>
      <span className="ml-3 text-gray-700 font-semibold">{label}</span>
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
