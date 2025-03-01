
"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useChain } from "../../context/ChainContext";

export const ConnectButton2 = () => {
  const { chainDetail } = useChain();
  console.log({ chainDetail });
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        const handleConnectClick = async () => {
          try {
            openConnectModal();
          } catch (error) {
            return null;
          }
        };

        // Added check if chainDetail is null/undefined and provide loading state
        if (!chainDetail) {
          return (
            <div className="flex flex-row items-center gap-2">
              <button className="rounded-lg  border border-s5 px-4 py-2 text-xs text-light-1 shadow-sm  hover:bg-dark-s4">Loading...</button>
            </div>
          );
        }

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={handleConnectClick}
                    className="rounded-lg  border border-s5 px-4 py-2 text-xs text-light-1 shadow-sm  hover:bg-dark-s4"
                  >
                    Connect Wallet
                  </button>
                );
              }
              // Check if the connected chain is different from the selected chain
              if (!chain.id) {
                return (
                  <button
                    onClick={openChainModal}
                    className=" rounded-lg  border border-s5 px-4 py-2 text-xs text-light-1 shadow-sm  hover:bg-dark-s4"
                  >
                    Switch network
                  </button>
                );
              }
              return (
                <button
                  onClick={openAccountModal}
                  className="rounded-lg border border-s5 px-4 py-2 text-xs text-light-1 shadow-sm  hover:bg-dark-s4"
                >
                  {account.displayName}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
