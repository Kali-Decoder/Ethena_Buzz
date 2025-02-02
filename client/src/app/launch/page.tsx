"use client";
import React, { useEffect, useState } from "react";
import PostComponent from "./_components/post_component";
import { useAccount } from "wagmi";
import { useDataContext } from "@/context/DataContext";
import { LuArrowUpDown } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { FaFaceSmileWink } from "react-icons/fa6";
import LoadingBar from "@/components/LoadingBar";
import { IoCaretBackCircleSharp } from "react-icons/io5";
import { CgDollar } from "react-icons/cg";
import Slider from "react-input-slider";
import { FaUserAlt } from "react-icons/fa";
import { RiRadioButtonLine } from "react-icons/ri";
const LaunchPage: React.FC = () => {
  const { address, chain } = useAccount();
  const {
    totalPools,
    tokenBalance,
    userBetsData,
    placeBet,
    formatTimestamp,
    mintNft,
    nftMintedAllReady,
  } = useDataContext();

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

  const [transformedPoolsData, setTransformedPoolsData] = useState<PoolData[]>(
    []
  );
  const [isBetted, setIsBetted] = useState(false);
  const [investment, setInvestment] = useState(0);
  const [scorePrediction, setScorePrediction] = useState(0);
  const [selected, setSelected] = useState("Explore");
  const [selectedPost, setSelectedPost] = useState<PoolData | null>(null);
  const min = 10;
  const max = 100;
  const step = 2;

  const handleSubmit = async () => {
    console.log(selectedPost?.id, scorePrediction, investment);
    await placeBet(+selectedPost?.id, +investment.toString(), scorePrediction);
  };

  const mintYourNft = async () => {
    await mintNft();
  };

  useEffect(() => {
    if (totalPools?.length) {
      setTransformedPoolsData(
        totalPools.map((pool: any) => ({
          id: pool?.poolId,
          name: `#${String(pool?.poolId).padStart(2, "0")}`,
          question: pool?.question,
          description: pool?.description,
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

  const handleMax = () => {
    setInvestment(tokenBalance);
  };

  useEffect(() => {
    const val =
      userBetsData?.length > 0 &&
      userBetsData?.find((item) => item?.poolId == selectedPost?.id);
    if (val) {
      setIsBetted(true);
    } else {
      setIsBetted(false);
    }
  }, [userBetsData]);

  const sidebarItems = [
    "Explore",
    "Create",
    "My Votes",
    "Assets",
    "Leaderboard",
    "Rewards",
    "Exchange",
  ];

  return (
    <div className="flex items-center justify-center h-[100vh] bg-transparent orbitron-launch">
      <div className="w-[85%] h-[90%] border-4 shadow-lg rounded-lg flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-s3 shadow-lg p-4 flex flex-col">
          <h1 className="text-2xl font-bold text-white"> 💰 BUZZIFY 💸</h1>
          <nav className="flex flex-col mt-6 space-y-3">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item}
                label={item}
                active={selected === item}
                onClick={() => {
                  setSelected(item);
                  setSelectedPost(null);
                }}
              />
            ))}
          </nav>
          {/* User Profile */}
          <div className="mt-auto flex items-center p-3 border-t">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-md">
              <FaFaceSmileWink size={20} />
            </div>
            <div className="ml-3">
              <p className="text-sm font-semibold text-white">
                {address
                  ? `${address.slice(0, 8)}...${address.slice(-5)}`
                  : "Guest"}
              </p>
              <p className="text-xs text-gray-500">
                {chain?.name || "Ethereum"}
              </p>
            </div>
            <div className="ml-3">
              <button onClick={() => setSelected("Settings")}>
                <MdOutlineSettings size={25} />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center bg-p3 opacity-90 shadow-lg px-4 py-3 justify-center">
            {selected === "Explore" && !selectedPost && (
              <>
                <div className="flex gap-x-4 text-black">
                  <button className=" text-black font-bold text-md p-2 border border-black  rounded-40  focus:bg-black focus:text-white">
                    ⚡️ All
                  </button>
                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 focus:bg-black focus:text-white">
                    ⚡️ Featured
                  </button>

                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 focus:bg-black focus:text-white">
                    💥 New
                  </button>

                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 focus:bg-black focus:text-white">
                    ⏱️ Ending Soon
                  </button>

                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 focus:bg-black focus:text-white">
                    ⏱️ Ending Soon
                  </button>

                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 focus:bg-black focus:text-white">
                    ⏱️ Ending Soon
                  </button>
                </div>
              </>
            )}
            {selected === "Explore" && selectedPost && (
              <>
                <div className="flex gap-x-4 text-black w-full items-center">
                  <button
                    className="mt-4 text-black mb-4"
                    onClick={() => setSelectedPost(null)}
                  >
                    <IoCaretBackCircleSharp size={25} />
                  </button>
                  <p className="text-semibold text-xl font-bold">
                    {selectedPost?.question}
                  </p>
                </div>
              </>
            )}
            {selected === "Create" && (
              <>
                <div className="flex gap-x-4 text-black justify-center w-full">
                  <p className="text-semibold text-xl font-bold">Create Poll</p>
                </div>
              </>
            )}
            {selected === "Settings" && (
              <>
                <div className="flex gap-x-4 text-black justify-center w-full">
                  <p className="text-semibold text-xl font-bold">Settings</p>
                </div>
              </>
            )}
            {selected === "Exchange" && (
              <>
                <div className="flex gap-x-4 text-black justify-center w-full">
                  <p className="text-semibold text-xl font-bold">
                    Exchange Your Rewars
                  </p>
                </div>
              </>
            )}
            {selected === "Assets" && (
              <>
                <div className="flex gap-x-4 text-black justify-center w-full">
                  <p className="text-semibold text-xl font-bold">Assets</p>
                </div>
              </>
            )}
            {selected === "Leaderboard" && (
              <>
                <div className="flex gap-x-4 text-black justify-center items-center w-full">
                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 px-6  focus:bg-black focus:text-white">
                    ⚡️ Alpha
                  </button>
                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 px-6 focus:bg-black focus:text-white">
                    ⚡️ Beta-Buzz
                  </button>
                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 px-6 focus:bg-black focus:text-white">
                    💥 Mainnet
                  </button>
                </div>
              </>
            )}{" "}
            {selected === "My Votes" && (
              <>
                <div className="flex gap-x-4 text-black justify-center items-center w-full">
                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 px-10  focus:bg-black focus:text-white">
                    ⚡️ Live Polls
                  </button>
                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 px-10 focus:bg-black focus:text-white">
                    ⚡️ History
                  </button>
                </div>
              </>
            )}
            {selected === "Rewards" && (
              <>
                <div className="flex gap-x-4 text-black justify-center items-center w-full">
                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 px-6  focus:bg-black focus:text-white">
                    ⚡️ Ethena Campaign
                  </button>
                  <button className=" text-black text-md p-2 border border-black font-bold rounded-40 px-6 focus:bg-black focus:text-white">
                    ⚡️ More Rewards
                  </button>
                </div>
              </>
            )}
          </header>

          {/* Content Section */}
          <div className="p-6 bg-white shadow-lg h-full overflow-y-scroll scrollbar-thin">
            {selected === "Explore" && !selectedPost && (
              <>
                {transformedPoolsData.length ? (
                  <div className="grid grid-cols-2 gap-4">
                    {transformedPoolsData.map((item, i) => (
                      <PostComponent
                        item={item}
                        key={i}
                        onSelect={() => setSelectedPost(item)}
                      />
                    ))}
                  </div>
                ) : (
                  <LoadingBar />
                )}
              </>
            )}
            {selected === "Settings" && <SettingsCard />}
            {selectedPost && (
              <>
                {selectedPost?.name ? (
                  <div className="flex w-full gap-x-8 bg-white p-6 rounded  border text-black">
                    <div className="w-2/3 overflow-y-scroll scrollbar-thin">
                      {/* Header Section */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://pbs.twimg.com/profile_images/1884937424364851200/VSrPwZa4_400x400.jpg"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                          />
                          <span className="font-semibold text-gray-900">
                            {selectedPost?.name}
                          </span>
                          <span className="text-blue-500">💎</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <CgDollar size={18} />
                          <span className="text-sm font-medium">
                            {selectedPost?.total_amount}
                          </span>
                          <FaUserAlt size={16} className="ml-2" />
                          <span className="text-sm">
                            {selectedPost?.total_bets}
                          </span>
                          <span className="flex items-center gap-1 ml-2">
                            {selectedPost?.poolEnded ? (
                              <>
                                <RiRadioButtonLine className="text-red text-xs" />
                                <span>ENDED</span>
                              </>
                            ) : (
                              <>
                                <RiRadioButtonLine className="text-green-500 text-xs" />
                                <span>ONGOING</span>
                              </>
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="mt-3">
                        <h2 className="font-bold text-lg text-gray-900">
                          {selectedPost?.question}
                        </h2>
                        <p className="text-gray-700 text-sm mt-1">
                          {selectedPost?.description}
                        </p>
                      </div>

                      {/* Hashtags */}
                      <div className="mt-2 text-blue-500 text-sm font-medium">
                        <span>#Sports</span> <span>#Celebrities</span>{" "}
                        <span>#Pop Culture</span>
                      </div>

                      {/* Image */}
                      <div className="mt-3">
                        <img
                          src="https://images.pond5.com/green-line-graph-white-background-footage-083223115_iconl.jpeg"
                          alt="Kendrick Lamar Performance"
                          className="w-full rounded-lg object-cover"
                        />
                      </div>
                    </div>
                    <div className="bg-[#F5F3ED] w-1/3 rounded py-3 px-2 h-1/2 mt-3">
                      <h2 className="text-sm font-semibold mb-0 px-4 text-black">
                        Place Your Bet
                      </h2>
                      <div className="rounded-lg p-4">
                        {/* From Input */}

                        <div className=" flex px-4 flex-col-reverse bg-white rounded-lg p-4 items-start gap-2">
                          <Slider
                            axis="x"
                            x={scorePrediction}
                            onChange={({ x }) => setScorePrediction(x)}
                            xmin={+min.toString()}
                            xmax={+max.toString()}
                            xstep={+step.toString()}
                            styles={{
                              track: {
                                backgroundColor: "black",
                                width: "100%",
                                height: "4px",
                              },
                              active: {
                                backgroundColor: "#B8D778",
                              },
                              thumb: {
                                width: 15,
                                height: 15,
                                backgroundColor: "white",
                              },
                            }}
                          />
                          <p className="mtext-center  font-semibold text-xl text-p1">
                            {scorePrediction}
                          </p>
                        </div>
                        <div className="mb-4 mt-4">
                          <div className="flex items-center bg-white rounded-lg p-3">
                            <input
                              type="number"
                              value={investment}
                              onChange={(e) => setInvestment(e.target.value)}
                              className="w-full bg-transparent text-black outline-none text-sm"
                              placeholder="0.00"
                            />
                            <button
                              onClick={handleMax}
                              className="text-xs hover:text-blue-400 font-medium px-2 py-1 rounded transition-colors"
                            >
                              MAX
                            </button>
                            <span className="text-black ml-2 text-xs">
                              BUZZ
                            </span>
                          </div>

                          <div className="flex justify-between flex-col text-xs mt-2">
                            <span className="text-black"></span>
                            <span className="text-black text-[10px]">
                              Balance: {tokenBalance ? tokenBalance : 0} BUZZ
                            </span>
                            <span className="text-red text-[10px]">
                              PoolEnded :{" "}
                              {formatTimestamp(selectedPost?.endTime)}
                            </span>
                          </div>
                        </div>
                        {/* Action Button */}
                        {isBetted ? (
                          <button
                            disabled
                            className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-blue-300 
        transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                          >
                            Already Place Bet
                          </button>
                        ) : (
                          <button
                            onClick={handleSubmit}
                            className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-blue-300 
        transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                          >
                            Place Bet
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <LoadingBar />
                )}
              </>
            )}
            {selected === "Rewards" && (
              <RewardsSection
                onClick={mintYourNft}
                nftMintedAllReady={nftMintedAllReady}
              />
            )}

            {selected === "Assets" && (
              <>
                <div className="flex justify-center items-center flex-col">
                  <BalanceScore />
                </div>
              </>
            )}
            {selected === "Exchange" && (
              <>
                <div className="flex justify-center items-center flex-col">
                  <div className="bg-[#F5F3ED] w-1/2 border rounded-lg p-4">
                    <h2 className="text-sm font-semibold mb-4 text-black">
                      Quick Actions
                    </h2>
                    <div className="bg-[var(--card2)] rounded-lg p-4">
                      {/* From Input */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-black">From</span>
                          <span className="text-black">Balance: 400</span>
                        </div>
                        <div className="flex items-center bg-white rounded-lg p-3">
                          <input
                            type="number"
                            value={0}
                            onChange={() => {}}
                            className="w-full bg-transparent text-black outline-none text-sm"
                            placeholder="0.00"
                          />
                          <button className="text-xs text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium px-2 py-1 rounded transition-colors">
                            MAX
                          </button>
                          <span className="text-black ml-2">sUSDC</span>
                        </div>
                      </div>

                      {/* Swap Button */}
                      <button className="w-full flex justify-center p-2 text-black hover:text-[var(--primary)]">
                        <LuArrowUpDown size={20} />
                      </button>

                      {/* To Input */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-black">To (Estimated)</span>
                          <span className="text-black">Balance: 500</span>
                        </div>
                        <div className="flex items-center bg-white rounded-lg p-3">
                          <input
                            type="text"
                            value={0}
                            readOnly
                            className="w-full bg-transparent text-black outline-none text-sm"
                            placeholder="0.00"
                          />
                          <span className="text-black ml-2">BUZZ</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        className="w-full py-3 bg-blue-300 text-black rounded-lg font-medium hover:bg-[var(--primary-hover)] 
        transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Swap
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
            {selected === "Leaderboard" && <LeaderBoardCard />}
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{
  label: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center p-2 rounded-lg ${active ? "bg-gray-200 text-black" : "hover:bg-gray-200 hover:text-black"}`}
  >
    <span className="ml-3 font-semibold">➡ {label}</span>
  </button>
);

interface RewardsSectionProps {
  onClick: () => void;
  nftMintedAllReady: boolean;
}
const RewardsSection: React.FC<RewardsSectionProps> = ({
  onClick,
  nftMintedAllReady,
}) => (
  <div className="flex w-full flex-col items-center bg-white p-6 rounded text-black">
    <div className="w-1/2 p-2 rounded flex flex-col">
      <ol className="relative border-s border-gray-500 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {nftMintedAllReady ? "Your NFT is minted" : "Mint Your NFT"}
          </h3>
          {nftMintedAllReady ? (
            <div className="mt-3">
              <img
                src="https://gateway.pinata.cloud/ipfs/bafybeidubittp6kbuu2cc2yfnhrspqke23gec5jvczzjjs23dhtpvpj3tm/"
                alt="Kendrick Lamar Performance"
                className="w-full rounded-lg object-cover"
              />
            </div>
          ) : (
            <button
              onClick={onClick}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-black text-white font-medium py-2 rounded-md"
            >
              <span>Mint</span>
              <span>Buzzify NFT</span>
            </button>
          )}
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Make one prediction claim 100 BUZZ Tokens
          </h3>
          <button className="w-full mt-4 flex items-center justify-center gap-2 bg-black text-white font-medium py-2 rounded-md">
            <span>Claim</span>
            <span>100 BUZZ</span>
          </button>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Create one prediction claim 100 BUZZ Tokens
          </h3>
          <button className="w-full mt-4 flex items-center justify-center gap-2 bg-black text-white font-medium py-2 rounded-md">
            <span>Claim</span>
            <span>100 BUZZ</span>
          </button>
        </li>
      </ol>
    </div>
  </div>
);

const BalanceScore: React.FC = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center bg-white p-6 rounded text-black">
        <div className="w-full max-w-xl">
          <h2 className="text-lg font-semibold mb-4 ">Balance</h2>
          <div className="bg-amber-50 p-4 rounded-xl mb-6">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/30171.png"
                  alt="BNB"
                  className="w-6 h-6 mr-2"
                />
                <span>ETH</span>
              </div>
              <div className="text-right">
                <p className="font-semibold">0 ETH</p>
                <p className="text-sm text-gray-500">0.00 USD</p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/30171.png"
                  alt="MNT"
                  className="w-6 h-6 mr-2"
                />
                <span>ETHENA</span>
              </div>
              <div className="text-right">
                <p className="font-semibold">0 sUSDE</p>
                <p className="text-sm text-gray-500">0.00 USD</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/30171.png"
                  alt="ETH"
                  className="w-6 h-6 mr-2"
                />
                <span>USDC</span>
              </div>
              <div className="text-right">
                <p className="font-semibold">0 USDC</p>
                <p className="text-sm text-gray-500">0.00 USD</p>
              </div>
            </div>
          </div>
          <button className="w-full py-2 text-blue-600 font-semibold underline mb-8">
            Cash out my balance →
          </button>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">My Score</h2>
            <button className="text-sm text-blue-600">History</button>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl mb-2 flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/30171.png"
                alt="abCHIPS"
                className="w-6 h-6 mr-2"
              />
              <span>BuzzChips</span>
            </div>
            <span className="font-semibold">140.0000</span>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl mb-2 flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/30171.png"
                alt="Alpha"
                className="w-6 h-6 mr-2"
              />
              <span>Alpha</span>
            </div>
            <span className="font-semibold">0.0000</span>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/30171.png"
                alt="Beta"
                className="w-6 h-6 mr-2"
              />
              <span>Beta</span>
            </div>
            <span className="font-semibold">0.0000</span>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Missing some rewards?{" "}
            <a href="#" className="text-blue-600 font-semibold">
              Click to claim them!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

const LeaderBoardCard: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white p-6 rounded text-black">
      <div className="leaderboard-main">
        <div id="leaderboard">
          <div className="leaderboard-ribbon"></div>
          <table className="text-xl">
            <tr>
              <td className="leaderboard-number">1</td>
              <td className="leaderboard-name">Lee Taeyong</td>
              <td className="leaderboard-points">
                258.244{" "}
                <img
                  className="leaderboard-gold-medal"
                  src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                  alt="gold medal"
                />
              </td>
            </tr>
            <tr>
              <td className="leaderboard-number">2</td>
              <td className="leaderboard-name">Mark Lee</td>
              <td className="leaderboard-points">258.242 XP</td>
            </tr>
            <tr>
              <td className="leaderboard-number">2</td>
              <td className="leaderboard-name">Mark Lee</td>
              <td className="leaderboard-points">258.242 XP</td>
            </tr>
            <tr>
              <td className="leaderboard-number">2</td>
              <td className="leaderboard-name">Mark Lee</td>
              <td className="leaderboard-points">258.242 XP</td>
            </tr>
            <tr>
              <td className="leaderboard-number">2</td>
              <td className="leaderboard-name">Mark Lee</td>
              <td className="leaderboard-points">258.242 XP</td>
            </tr>
          
           
          </table>
        </div>
      </div>
    </div>
  );
};

function SettingsCard() {
  return (
    <div className="flex w-full flex-col items-center bg-white p-6 rounded text-black">
      <div className="w-1/2 p-5 bg-[#F5F3ED] rounded">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Twitter Account
        </h2>
        <button className="w-full flex items-center justify-center gap-2 bg-black text-white font-medium py-2 rounded-md">
          <span>Link</span>
          <span className="text-xl">𝕏</span> {/* X logo */}
          <span>Account</span>
        </button>

        <hr className="my-4 border-gray-400" />

        <h2 className="text-lg font-semibold text-gray-700 mb-2">Email</h2>
        <button className="w-full border border-black text-black font-medium py-2 rounded-md hover:bg-gray-100">
          Verify Email
        </button>

        <hr className="my-4 border-gray-400" />

        <div className="flex justify-end">
          <button className="flex items-center gap-2 text-black font-medium hover:underline">
            <span>↪</span> Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default LaunchPage;
