import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { ConnectWallet } from "@3rdweb/react";
import { useWeb3 } from "@3rdweb/hooks";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import "regenerator-runtime/runtime";
import Link from "next/link";



export default function App() {
  const { address } = useWeb3();

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrasoonPratham" />
        <meta name="twitter:title" content="Pratham's NFT giveaway" />
        <meta
          name="twitter:description"
          content="You mint NFTs, I pay for the gas"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/PrasoonPratham/nft-nextjs/main/public/bg.png"
        />
      </Head>

      <div
        className="relative flex items-center justify-center min-h-screen px-4 py-12 bg-no-repeat bg-cover bg-gray-50 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url(bg.png)",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black opacity-60 " />
        <div className="z-10 w-full p-10 bg-white sm:max-w-lg rounded-xl">
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              Digital Pratik NFT Giveaway
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Digital Pratik x Thirdweb Podcast #1
            </p>
          </div>

          

          {address ? (
                      // <form className="mt-3 space-y-3" action="#" method="POST">
            <div>
              <div class="flex flex-col items-center justify-center  px-4">
                <div class="flex flex-col space-y-6">
                  <span class="text-center py-3 px-6 text-white rounded bg-green-400 shadow-lg block md:inline-block font-medium">Wallet Connected! Click below to watch the podcast</span>
                                             <button
                                type="submit"
                                className="flex justify-center w-full px-4 py-3 font-semibold text-white transition-transform transform bg-blue-600 rounded-md shadow-lg outline-none focus:ring-4 active:scale-x-75"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                </svg>
                      
                      <Link href="/video"><span className="ml-2">Play Podcast</span></Link>
                            </button>
                </div>
              </div>
            </div>
          // </form>
          ) : <button className="w-full mt-5">
            <ConnectWallet>Connect Metamask</ConnectWallet>
          </button>}


        </div>
      </div>
      <style />
    </>
  );
}
