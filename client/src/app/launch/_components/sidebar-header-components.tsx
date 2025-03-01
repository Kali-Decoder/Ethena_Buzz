import { IoCaretBackCircleSharp } from "react-icons/io5";

function RewardHeader(props: any) {
  return (
    <div className="flex gap-x-4 text-white justify-center items-center w-full">
      <button className=" text-white text-md p-2 border border-white font-bold rounded-40 px-6  focus:bg-black focus:text-white">
        ⚡️ Ethena Campaign
      </button>
      <button className=" text-white text-md p-2 border border-white font-bold rounded-40 px-6 focus:bg-black focus:text-white">
        ⚡️ More Rewards
      </button>
    </div>
  );
}

function ExploreHeader(props: any) {
  return (
    <div className="flex gap-x-4 text-black">
      <button className=" text-white font-bold text-md p-2 border border-white  rounded-40  focus:bg-black focus:text-white">
        ⚡️ All
      </button>
      <button className=" text-white text-md p-2 border border-white font-bold rounded-40 focus:bg-black focus:text-white">
        ⚡️ OnGoing
      </button>

      <button className=" text-white text-md p-2 border border-white font-bold rounded-40 focus:bg-black focus:text-white">
        💥 Ended
      </button>
      {/* 
      <button className=" text-white text-md p-2 border border-white font-bold rounded-40 focus:bg-black focus:text-white">
        ⏱ Twitter
      </button>
      <button className=" text-white text-md p-2 border border-white font-bold rounded-40 focus:bg-black focus:text-white">
        ⏱️ Instagram
      </button>
      <button className=" text-white text-md p-2 border border-white font-bold rounded-40 focus:bg-black focus:text-white">
        ⏱️ Farcaster
      </button> */}
    </div>
  );
}

function SelectedPostHeader({ selectedPost, setSelectedPost }: any) {
  return (
    <div className="flex gap-x-4 text-white w-full items-center">
      <button
        className="mt-4 text-white mb-4"
        onClick={() => setSelectedPost(null)}
      >
        <IoCaretBackCircleSharp size={25} />
      </button>
      <p className="text-semibold text-xl font-bold">
        {selectedPost?.question}
      </p>
    </div>
  );
}

function CreatePollHeader() {
  return (
    <div className="flex gap-x-4 text-white justify-center w-full">
      <p className="text-semibold text-xl font-bold">Create Poll</p>
    </div>
  );
}

function SettingsHeader() {
  return (
    <div className="flex gap-x-4 text-white justify-center w-full">
      <p className="text-semibold text-xl font-bold">Settings</p>
    </div>
  );
}

function ExchangeHeader() {
  return (
    <div className="flex gap-x-4 text-white justify-center w-full">
      <p className="text-semibold text-xl font-bold">Exchange Your Rewards</p>
    </div>
  );
}

function AssetsHeader() {
  return (
    <div className="flex gap-x-4 text-white justify-center w-full">
      <p className="text-semibold text-xl font-bold">Assets</p>
    </div>
  );
}

function LeaderboardHeader() {
  return (
    <div className="flex gap-x-4 text-white justify-center items-center w-full">
      <button className=" text-white text-md p-2 border border-white font-bold rounded-40 px-6  focus:bg-black focus:text-white">
        ⚡️ Alpha
      </button>
      <button className=" text-white text-md p-2 border border-white font-bold rounded-40 px-6 focus:bg-black focus:text-white">
        ⚡️ Beta-Buzz
      </button>
      <button className=" text-white text-md p-2 border border-white font-bold rounded-40 px-6 focus:bg-black focus:text-white">
        💥 Mainnet
      </button>
    </div>
  );
}

function HistoryHeader() {
  return (
    <div className="flex gap-x-4 text-white justify-center w-full">
      <p className="text-semibold text-xl font-bold">Bet History</p>
    </div>
  );
}

export {
  RewardHeader,
  ExploreHeader,
  SelectedPostHeader,
  CreatePollHeader,
  SettingsHeader,
  ExchangeHeader,
  AssetsHeader,
  LeaderboardHeader,
  HistoryHeader,
};
