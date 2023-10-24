import { Chain } from "@rainbow-me/rainbowkit";

const chilizTestnetChain: Chain = {
  id: 88882,
  name: "Chiliz Spicy Testnet",
  network: "Chiliz Spicy Testnet",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Chiliz",
    symbol: "CHZ",
  },
  rpcUrls: {
    public: { http: ["https://spicy-rpc.chiliz.com/"] },
    default: { http: ["https://spicy-rpc.chiliz.com/"] },
  },
  blockExplorers: {
    default: {
      name: "Chiliz Testnet Explorer",
      url: "http://spicy-explorer.chiliz.com/",
    },
  },
  testnet: true,
};

export default chilizTestnetChain;
