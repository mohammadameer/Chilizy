import Image from "next/image";
import { Roboto } from "next/font/google";
import {
  ConnectWallet,
  darkTheme,
  useAddress,
  useConnect,
  useSDK,
} from "@thirdweb-dev/react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import useMousePosition from "@/hooks/useMousePosition";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const customDarkThem = darkTheme({
  fontFamily: roboto.className,
  colors: {
    accentButtonBg: "#ef4444",
  },
});

// Name	Description
// Vote	Create and vote on proposals.
// Token	Create cryptocurrency compliant with ERC-20 standard.
// Split	Distribute funds among multiple recipients.

type Category = {
  title: string;
  contracts: ContractType[];
};

type ContractType = {
  title: string;
  type?: string;
  description: string;
};

const contractCategories = [
  {
    title: "DAOs & Governance",
    contracts: [
      {
        title: "Vote",
        type: "vote",
        description: "Create and vote on proposals.",
      },
      {
        title: "Token",
        type: "token",
        description: "Create cryptocurrency compliant with ERC-20 standard.",
      },
      {
        title: "Split",
        type: "split",
        description: "Distribute funds among multiple recipients.",
      },
    ],
  },
  {
    title: "NFTs",
    contracts: [
      {
        title: "NFT Drop",
        type: "nft-drop",
        description: "Lazy mint ERC-721 tokens for others to claim.",
      },
      {
        title: "Edition Drop",
        type: "edition-drop",
        description: "Lazy mint ERC-1155 tokens for others to claim.",
      },
      {
        title: "Open Edition ERC721",
        description:
          "An open-to-mint ERC-721 NFT collection where all NFTs have shared metadata",
      },
      {
        title: "Pack",
        type: "pack",
        description:
          "Pack multiple tokens into a ERC1155 NFTs that act as randomized loot boxes.",
      },
      {
        title: "Edition",
        type: "edition",
        description: "Create editions of ERC-1155 tokens.",
      },
      {
        title: "NFT Collection",
        type: "nft-collection",
        description: "Create a collection of unique NFTs.",
      },
      {
        title: "Loyalty Card",
        description: "Issue unique loyalty cards to your customers.",
      },
    ],
  },
  {
    title: "Marketplaces",
    contracts: [
      {
        title: "Marketplace",
        type: "marketplace",
        description: "Buy and sell ERC-721/ERC-1155 tokens.",
      },
      {
        title: "Token",
        type: "token",
        description: "Create a collection of unique NFTs.",
      },
      {
        title: "Split",
        type: "split",
        description: "Distribute funds among multiple recipients.",
      },
    ],
  },
  {
    title: "Drops",
    contracts: [
      {
        title: "NFT Drop",
        type: "nft-drop",
        description: "Lazy mint ERC-721 tokens for others to claim.",
      },
      {
        title: "Edition Drop",
        type: "edition-drop",
        description: "Lazy mint ERC-1155 tokens for others to claim.",
      },
      {
        title: "Signature Drop",
        type: "signature-drop",
        description: "Signature based minting of ERC-721 tokens.",
      },
      {
        title: "Token Drop",
        type: "token-drop",
        description: "Distribute funds among multiple recipients.",
      },
    ],
  },
  {
    title: "AirDrops",
    contracts: [
      {
        title: "Airdrop ERC-20",
        type: "token-drop",
        description:
          "Airdrop ERC-20 tokens or the chain's native token to a list of recipients.",
      },
      {
        title: "Airdrop ERC-721",
        type: "nft-drop",
        description: "Airdrop ERC-721 NFTs to a list of recipients.",
      },
      {
        title: "Airdrop ERC-11556",
        description: "Airdrop ERC-1155 NFTs to a list of recipients.",
      },
    ],
  },
  {
    title: "Staking",
    contracts: [
      {
        title: "Stake ERC-20",
        description:
          "Stake ERC-20 tokens, for another ERC-20 token as rewards.",
      },
      {
        title: "Stake ERC-721",
        description: "Stake ERC-721 NFTs, for ERC-20 tokens as rewards.",
      },
      {
        title: "Stake ERC-1155",
        description: "Stake ERC-1155 NFTs, for ERC-20 tokens as rewards.",
      },
    ],
  },
];

export default function Home() {
  const address = useAddress();
  const [text, setText] = useState("Sports");
  const [selectedContractType, setSelectedContractType] =
    useState<ContractType | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((lastText) => {
        const texts = ["Sports", "Fun", "Games", "Entertainment"];

        const nextText = texts?.findIndex((t) => t === lastText);
        if (nextText >= texts.length) {
          return texts[0];
        }
        return (texts[nextText + 1] || texts[0]) as string;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        className={clsx(
          "relative bg-gradient-to-br from-[-160%] via-15% from-red-500 via-gray-950 to-gray-950 transition-all",
          selectedContractType ? "blur-sm" : ""
        )}
      >
        <div className={"grow flex flex-col"}>
          <div className="flex justify-between p-6 items-center">
            <p className="text-2xl sm:text-4xl lg:text-5xl text-red-500 font-bold">
              🌶️ Chilizy
            </p>
            <div className="flex gap-4 text-2xl underline">
              <a
                href="https://spicy-faucet.chiliz.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facuet{" "}
              </a>
              <a
                href="https://docs.chiliz.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docs{" "}
              </a>
            </div>
            <ConnectWallet
              theme={customDarkThem}
              className="!bg-red-500 !text-white"
              btnTitle="Chilies?"
              modalTitle="Chilies?"
              modalTitleIconUrl="http://localhost:3000/logo.png"
              auth={{ loginOptional: false }}
              switchToActiveChain={true}
              modalSize={"compact"}
            />
          </div>
          <div className=" grid grid-cols-12 p-4 items-center mt-0 xl:mt-40">
            <div className="col-span-full xl:col-span-6 min-h-[20vh] xl:min-h-0">
              <p className="text-4xl lg:text-6xl mt-40 xl:mt-0 text-center xl:text-left">
                Build Faster on the largest <br />
                <span className="text-red-500 font-bold">{text}</span> Chain
              </p>
            </div>
            <div className="col-span-full xl:col-span-6 grid grid-cols-12 gap-4 mt-20 xl:mt-0">
              <div className="col-span-6 p-4 flex justify-center items-center flex-col">
                <p className="text-2xl lg:text-6xl font-bold">1000 M+</p>
                <p className="text-lg lg:text-2xl">Market Cap</p>
              </div>
              <div className="col-span-6 p-4 flex justify-center items-center flex-col">
                <p className="text-2xl lg:text-6xl font-bold">2M+</p>
                <p className="text-lg lg:text-2xl">Ecosystem Users</p>
              </div>
              <div className="col-span-6 p-4 flex justify-center items-center flex-col">
                <p className="text-2xl lg:text-6xl font-bold">150 +</p>
                <p className="text-lg lg:text-2xl">Global Sports Partners</p>
              </div>
              <div className="col-span-6 p-4 flex justify-center items-center flex-col">
                <p className="text-2xl lg:text-6xl font-bold">150 +</p>
                <p className="text-lg lg:text-2xl">Global Sports Partners</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-4xl lg:text-5xl p-4 mt-20 font-bold">
          Configure, Build and Deploy
        </p>
        <div className="w-full flex flex-col gap-8 items-start p-8 pb-20">
          {contractCategories.map((category) => (
            <div
              key={category.title}
              className="w-full flex flex-col items-start"
            >
              <p className="text-4xl font-bold text-center">{category.title}</p>
              <div className="grid grid-cols-12 gap-4 mt-4 w-full">
                {category.contracts.map((contract) => (
                  <div
                    key={contract.title}
                    className={clsx(
                      "col-span-full md:col-span-6 lg:col-span-4 p-4 flex items-start flex-col bg-gray-800 rounded-md hover:cursor-pointer hover:scale-105 transition-all hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700 ",
                      contract.type
                        ? "active:scale-95"
                        : "opacity-50 hover:cursor-not-allowed"
                    )}
                    onClick={() => {
                      if (!address) {
                        toast.error("Please connect your wallet");
                        return;
                      }

                      if (contract.type) {
                        setSelectedContractType(contract);
                      } else {
                        toast.error("Coming Soon");
                      }
                    }}
                  >
                    <p className="text-2xl font-bold">{contract.title}</p>
                    <p className="text-xl text-gray-500">
                      {contract.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CategorytManager
        selectedContractType={selectedContractType}
        setSelectedContractType={setSelectedContractType}
      />
    </div>
  );
}

const CategorytManager = ({
  selectedContractType,
  setSelectedContractType,
}: {
  selectedContractType: ContractType | null;
  setSelectedContractType: (category: ContractType | null) => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const address = useAddress();
  const sdk = useSDK();
  const [isLoading, setIsLoading] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [existingContracts, setExistingContracts] = useState([]);

  useEffect(() => {
    if (!sdk) {
      return;
    }
  }, [sdk]);

  useEffect(() => {
    setExistingContracts([]);
    reset({
      name: "",
    });
    setRandomNumber(Math.ceil(Math.random() * 5));
  }, [selectedContractType]);

  const deployContract = async ({ name }: { name: string }) => {
    if (isLoading) {
      return;
    }

    console.log("name", name);

    setIsLoading(true);
    try {
      const contract = await sdk?.deployer?.deployBuiltInContract(
        selectedContractType?.type,
        {
          name,
          primary_sale_recipient: address,
          voting_token_address: address,
        }
      );

      toast.success("Contract Deployed Successfully");
      toast.success("Contract Address: " + contract);
      console.log("deployed contract", contract);
    } catch (e) {
      toast.error("Error in deploying contract");
      console.log("error in deploy", e);
    }
    setIsLoading(false);
  };

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 flex justify-center items-center w-full h-full",
        selectedContractType ? "" : "hidden"
      )}
      onClick={() => setSelectedContractType(null)}
    >
      <div
        className="bg-gray-700 rounded-lg w-11/12 flex flex-col gap-8"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className="text-3xl p-4 ">{selectedContractType?.title} Contracts</p>

        <form
          onSubmit={handleSubmit(deployContract)}
          className="flex flex-col items-start gap-2 p-4 "
        >
          <label htmlFor="name" className="text-xl">
            Contract Name
          </label>
          <input
            id="name"
            placeholder="Contract Name"
            {...register("name", {
              required: true,
            })}
            className={clsx("p-4 rounded-md text-black/90")}
          />
          {/* errors will return when field validation fails  */}
          {errors.name && <span>This field is required</span>}

          <button
            type="submit"
            className={clsx(
              "bg-gray-800 p-4 mt-4 px-10 rounded-md",
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            )}
            disabled={isLoading}
          >
            Deploy
          </button>
        </form>

        <div className="">
          <p className="text-2xl mt-4 p-4 ">
            {" "}
            Old {selectedContractType?.title} Contracts
          </p>

          <div className="bg-gray-800 p-4 rounded-md flex justify-between items-center m-4 ">
            <p className="text-xl">Contract Name</p>
            <p className="text-xl">Contract Address</p>
          </div>
          {Array.from({ length: randomNumber }).map((_, index) => (
            <div
              key={index}
              className="hover:bg-gray-800/40 bg-gray-800/20 p-4 rounded-md flex justify-between items-center m-4 cursor-pointer"
            >
              <p className="text-xl">
                {selectedContractType?.title} Contract {index + 1}
              </p>
              <div className="flex gap-2 text-2xl">
                <p className="hover:scale-105 transition-all cursor-pointer active:scale-95">
                  🔗
                </p>
                <p className="hover:scale-105 transition-all cursor-pointer active:scale-95">
                  ⚙️
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
