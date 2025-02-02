import LoadingBar from "@/components/LoadingBar";
import PostComponent from "./post_component";
import { CgDollar } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import { RiRadioButtonLine } from "react-icons/ri";
import { useDataContext } from "@/context/DataContext";
import Slider from "react-input-slider";
import {LuArrowUpDown} from 'react-icons/lu'
interface RewardsSectionProps {
  onClick: () => void;
  nftMintedAllReady: boolean;
}

interface Token {
  amount: number;
  symbol: string;
}
interface ExchangeComponentProps {
  fromToken: Token;
  toToken: Token;
  handleFromAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSwap: () => void;
  isCalculating: boolean;
  isTransacting: boolean;
  actionButtonText: string;
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

function ExchangeComponent({
  fromToken,
  toToken,
  handleFromAmountChange,
  handleSwap,
  isCalculating,
  isTransacting,
  actionButtonText,
}: ExchangeComponentProps) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-[#F5F3ED] w-1/2 border rounded-lg p-4">
        <h2 className="text-sm font-semibold mb-4 text-black">Quick Actions</h2>
        <div className="bg-[var(--card2)] rounded-lg p-4">
          {/* From Input */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-black">From</span>
              <span className="text-black">Balance: {fromToken?.amount}</span>
            </div>
            <div className="flex items-center bg-white rounded-lg p-3">
              <input
                type="number"
                value={fromToken.amount}
                onChange={handleFromAmountChange}
                className="w-full bg-transparent text-black outline-none text-sm"
                placeholder="0.00"
                disabled={isTransacting}
              />
              <button className="text-xs text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium px-2 py-1 rounded transition-colors">
                MAX
              </button>
              <span className="text-black ml-2">{fromToken.symbol}</span>
            </div>
          </div>

          <button
            onClick={handleSwap}
            className="w-full flex justify-center p-2 text-black hover:text-[var(--primary)]"
          >
            <LuArrowUpDown size={20} />
          </button>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-black">To (Estimated)</span>
              <span className="text-black">Balance: {toToken?.amount}</span>
            </div>
            <div className="flex items-center bg-white rounded-lg p-3">
              <input
                type="text"
                value={isCalculating ? "Calculating..." : toToken.amount}
                readOnly
                className="w-full bg-transparent text-black outline-none text-sm"
                placeholder="0.00"
              />
              <span className="text-black ml-2">{toToken.symbol}</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            // onClick={handleAction}
            // disabled={!fromToken.amount || isCalculating || isTransacting}
            className="w-full py-3 bg-blue-300 text-black rounded-lg font-medium hover:bg-[var(--primary-hover)] 
transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isTransacting ? "Processing..." : actionButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

function ExploreBody({ transformedPoolsData, setSelectedPost }: any) {
  return (
    <>
      {" "}
      {transformedPoolsData.length ? (
        <div className="grid grid-cols-2 gap-4">
          {transformedPoolsData.map((item: any, i: any) => (
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
  );
}

function SelectedPost({
  selectedPost,
  setScorePrediction,
  scorePrediction,
  investment,
  setInvestment,
  tokenBalance,
  isBetted,
  handleSubmit,
  handleMax,
}: any) {
  const { formatTimestamp } = useDataContext();
  const min = 10;
  const max = 100;
  const step = 2;
  return (
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
                <span className="text-sm">{selectedPost?.total_bets}</span>
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
                  <span className="text-black ml-2 text-xs">BUZZ</span>
                </div>

                <div className="flex justify-between flex-col text-xs mt-2">
                  <span className="text-black"></span>
                  <span className="text-black text-[10px]">
                    Balance:{" "}
                    {tokenBalance?.buzzBalance ? tokenBalance?.buzzBalance : 0}{" "}
                    BUZZ
                  </span>
                  <span className="text-red text-[10px]">
                    PoolEnded : {formatTimestamp(selectedPost?.endTime)}
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
  );
}

export {
  RewardsSection,
  BalanceScore,
  LeaderBoardCard,
  SettingsCard,
  ExchangeComponent,
  ExploreBody,
  SelectedPost,
};
