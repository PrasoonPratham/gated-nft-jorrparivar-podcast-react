import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { ConnectWallet } from "@3rdweb/react";
import { useWeb3 } from "@3rdweb/hooks";
import Head from "next/head";

import "regenerator-runtime/runtime";



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

          <button className="w-full mt-5">
            <ConnectWallet>Connect Metamask</ConnectWallet>
          </button>

          {address ? (
                      <form className="mt-3 space-y-3" action="#" method="POST">
            <div>
              <div class="flex flex-col items-center justify-center  px-4">
                <div class="flex flex-col space-y-6">
                  <div class="text-center font-bold">Click Below To Watch Podcast!</div>
                  <div class="flex flex-row items-center bg-white border px-4 py-2 rounded-3xl shadow-md">
                    <button class="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
                      <svg
                        class="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                    <div class="flex flex-row items-center space-x-px ml-4">
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-12 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-6 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-5 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-3 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          ) : null}


        </div>
      </div>
      <style />
    </>
  );
}
