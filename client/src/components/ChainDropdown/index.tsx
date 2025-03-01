"use client";
import { useChain } from "@/context/ChainContext";
import React, { useEffect } from "react";
import Dropdown from "../Resusables/Dropdown";
import {chainArray} from "@/constant/chainConstants";
const ChainDropdown = () => {
  const { setChainDetail, chainDetail } = useChain();
  const chains = chainArray;
  const savedChainId = localStorage.getItem("selectedChainId");
  useEffect(() => {
    if (savedChainId) {
      const savedChain = chains.find(
        (chain) => chain.id?.toString() === savedChainId
      );
      if (savedChain) {
        setChainDetail(savedChain);
      }
    }
  }, [savedChainId,setChainDetail]);

  const handleSelectChain = (chain : any) => {
    localStorage.setItem("selectedChainId", chain?.id);
  };

  return (
    <Dropdown
      items={chains}
      label="Supported Chains"
      onSelect={handleSelectChain}
      selectedItem={chainDetail}
    />
  );
};

export default ChainDropdown;
