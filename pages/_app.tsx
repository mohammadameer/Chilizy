import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";

import {
  magicLink,
  metamaskWallet,
  ThirdwebProvider,
  walletConnect,
} from "@thirdweb-dev/react";
import { SpicyChain } from "@thirdweb-dev/chains";
import { Toaster } from "react-hot-toast";
// secret key
// 6l3x1PwcLy1OmbdDTVBDuVYFYYUDT_spGUmw8jxkrb7FgMHcvuIdOPRBtp-i5f5CzeObXN1PTzyqvHUDYDa_TA

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={{
        chainId: SpicyChain.chainId,
        rpc: SpicyChain.rpc,
        nativeCurrency: SpicyChain.nativeCurrency,
        shortName: SpicyChain.shortName,
        slug: SpicyChain.slug,
        testnet: SpicyChain.testnet,
        chain: SpicyChain.chain,
        name: SpicyChain.name,
      }}
      clientId="22b61714ff4b4b9e1674b98f37f2baec"
      supportedWallets={[
        metamaskWallet(),
        walletConnect(),
        magicLink({
          apiKey: "pk_live_F0A8A4E1AB18092B",
          type: "connect",
          oauthOptions: {
            providers: ["google", "facebook", "twitter", "apple"],
          },
        }),
      ]}
      autoConnect={true}
      dAppMeta={{
        name: "Chilizy",
        description: "Build fastere on Chiliz",
        logoUrl: "https://chilizy.vercel.app/logo.png",
        url: "https://chilizy.vercel.app",
        isDarkMode: true,
      }}
      // authConfig={{

      //   authUrl: "/api/auth",
      //   domain: "https://example.com",
      // }}
    >
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </ThirdwebProvider>
  );
}
