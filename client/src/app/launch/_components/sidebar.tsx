import React, { useState } from "react";
import Slider from "react-input-slider"; // Ensure to install this package or use another slider library
import { useDataContext } from "@/context/DataContext";
import postData from "../post_data.json";
import { FiDollarSign } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import { RiTimerLine } from "react-icons/ri";
import CountdownTimer from "./countdowntimer";
const RightSidebar = () => {
  const min = 10;
  const max = 100;
  const step = 2;
  const [scorePrediction, setScorePrediction] = useState(0); // Default value for the slider
  const [investment, setInvestment] = useState("");
  const [selectedToken, setSelectedToken] = useState("buzzToken");
  const [tenurePeriod, setTenurePeriod] = useState("oneDay");
  const { placeBet, activePoolId, formatTimestamp } = useDataContext();

  const filterData = postData.filter((item) => item.id == activePoolId)[0];
  const handleTokenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedToken(event.target.value);
  };

  const handleTenureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTenurePeriod(event.target.value);
  };

  const handleSubmit = async () => {
    // Handle form submission logic here
    console.log({
      scorePrediction,
      investment,
      selectedToken,
      tenurePeriod,
    });
    await placeBet(+activePoolId, +investment.toString(), scorePrediction);
  };

  const { isOpen, closeSideBar } = useDataContext();
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content bg-transparent">
          {isOpen && (
            <button className="sidebar-toggle" onClick={closeSideBar}>
              ▶
            </button>
          )}

          <div className="mt-20">
            <div className="flex flex-col gap-y-2">
              <p className="text-md font-bold">
                #00{filterData?.id}{" "}
                <span className="text-blue-400">
                  {`{${filterData?.category}}`}{" "}
                </span>{" "}
                <span className="text-green-400">{`@ ${filterData?.name}`}</span>
              </p>
              <p className="font-bold text-xl text-white">
                {filterData?.description}
              </p>
              <div className="flex gap-x-4 mt-2">
                <div className="flex items-center text-gray-300">
                  <FiDollarSign />
                  <span>{filterData?.total_amount} Vol.</span>
                </div>
                <div className="flex items-center text-gray-300 gap-x-1">
                  <HiUsers />
                  <span>{filterData?.total_bets}</span>
                </div>
                <div className="flex items-center text-gray-300 gap-x-1">
                  <RiTimerLine />
                  <span>{formatTimestamp(filterData?.startTime)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 border-4 rounded border-gray-600  p-4 mt-10">
              <label htmlFor="value" className="block text-lg font-medium">
                Predict Value
              </label>
              <div className=" flex px-2 flex-col-reverse max-w-sm items-start gap-2">
                <Slider
                  axis="x"
                  x={scorePrediction}
                  onChange={({ x }) => setScorePrediction(x)}
                  xmin={+min.toString()}
                  xmax={+max.toString()}
                  xstep={+step.toString()}
                  styles={{
                    track: {
                      backgroundColor: "gray",
                      width: "100%",
                    },
                    active: {
                      backgroundColor: "blue",
                    },
                    thumb: {
                      width: 20,
                      height: 20,
                      backgroundColor: "white",
                      border: "2px solid blue",
                    },
                  }}
                />
                <p className="mt-2 text-center  font-semibold text-4xl text-p1">
                  {scorePrediction}
                </p>
              </div>

              <div className="max-w-sm mt-4">
                <label
                  htmlFor="token"
                  className="mb-2 block text-lg font-medium"
                >
                  Enter Amount
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                    id="amount"
                    name="inline-add-on"
                    className="block w-full bg-transparent rounded-md border border-gray-200 py-3 px-4 pl-4 text-lg shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="$ 00"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <label htmlFor="token" className="sr-only">
                      Token
                    </label>
                    <select
                      id="token"
                      name="token"
                      className="block w-full rounded-md p-2 border text-white bg-transparent "
                    >
                      <option>USDC</option>
                      <option>BUZZ</option>
                      <option>USDT</option>
                      <option>DAI</option>
                      <option>sUSDC</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-blue-500 mt-4 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Placed Bet
              </button>
            </div>

            <div className=" mt-10  flex flex-col ">
              <p className="px-4">Remaining Time For Pool Collapsed :</p>
              <div className="countdown-container mt-20">
                <CountdownTimer  endTime={filterData?.endTime} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
