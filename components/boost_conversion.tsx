import { FadeText } from "./fade-text";
import { Iphone15Pro } from "./iphone-15-pro";
import { NumberTicker } from "./number_ticker";
import { RainbowButton } from "./rainbow-button";
import { WordPullUp } from "./word-pull-up";
import { BrowserView, MobileView } from "react-device-detect";

export default function BoostConversion() {
    return (
    <>
        <BrowserView>
            <section className="w-full dark:bg-muted dark">
                <div className="md:px-6">
                    <div className="grid grid-cols-12">
                        <div className="col-span-7 space-y-28 mt-10 p-28">
                            <div>
                                <WordPullUp 
                                    className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white"
                                    words="Boost conversion rates up to"
                                    />
                                <p className="whitespace-pre-wrap font-black text-5xl dark:text-[#ff0054] tracking-tighter">
                                    <NumberTicker value={94} /> %
                                </p>
                            </div>
                            <div>
                                <WordPullUp 
                                    className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white"
                                    words="Reduce returns up to"
                                    />
                                <p className="whitespace-pre-wrap font-black text-5xl dark:text-[#ff0054] tracking-tighter">
                                    <NumberTicker value={40} /> %
                                </p>
                            </div>
                            <div>
                                <WordPullUp 
                                    className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white"
                                    words="Enhance product visualization"
                                    />
                                <div className="flex gap-5">
                                    <FadeText
                                        className="text-3xl font-medium text-black dark:text-white"
                                        direction="up"
                                        framerProps={{
                                            show: { transition: { delay: 0.2 } },
                                        }}
                                        text="Show"
                                        />
                                    <FadeText
                                        className="text-3xl font-medium text-black dark:text-white"
                                        direction="right"
                                        framerProps={{
                                            show: { transition: { delay: 0.4 } },
                                        }}
                                        text="every"
                                        />
                                    <FadeText
                                        className="text-3xl font-medium text-black dark:text-white"
                                        direction="down"
                                        framerProps={{
                                            show: { transition: { delay: 0.6 } },
                                        }}
                                        text="angle"
                                        />
                                    <FadeText
                                        className="text-3xl font-medium text-black dark:text-white"
                                        direction="left"
                                        framerProps={{
                                            show: { transition: { delay: 0.8 } },
                                        }}
                                        text="and feature"
                                        />
                                </div>
                            </div>
                            <div className="p-5 rounded-3xl items-center justify-between flex gap-4 bg-gradient-to-tr from-white/0 to-[#ff0054]/50 border border-white/20">
                                <WordPullUp 
                                    className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white"
                                    words="Join waitlist!"
                                    />
                                <RainbowButton>
                                    <p className="font-bold text-black">
                                        Join
                                    </p>
                                </RainbowButton>
                            </div>
                        </div>
                        <div className="mt-10 col-span-5 h-fit border-1 border-[#ff0054] shadow-2xl shadow-[#ff0054]/50 rounded-[120px] items-center justify-center mx-auto">
                            <div className="m-5 border-3 border-[#ff0054] rounded-[105px]">
                                <div className="m-5 border-5 border-[#ff0054] rounded-[85px]">
                                    <Iphone15Pro className="p-3 h-4/5" src="/Reduce_returns.gif" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BrowserView>
        <MobileView>
            <section className="-mt-20 w-full dark:bg-muted dark">
                <Iphone15Pro className="mx-auto p-3 w-4/5" src="/Reduce_returns.gif" />
                    <div>
                        <div className="space-y-3 mt-3 flex-row">
                            <div className="w-4/5 p-3 bg-gradient-to-tr from-[#0e0e0e] to-[#ff0054]/40 mx-auto text-center border border-white/20 rounded-2xl">
                                <WordPullUp
                                    className="text-lg font-bold tracking-[-0.02em] text-black dark:text-white"
                                    words="Boost conversion rates up to"
                                    />
                                <p className="whitespace-pre-wrap font-black text-xl dark:text-[#ff0054] tracking-tighter">
                                    <NumberTicker value={94} /> %
                                </p>
                            </div>
                            <div className="w-4/5 p-3 bg-gradient-to-tr from-[#0e0e0e] to-[#ff0054]/40 mx-auto text-center border border-white/20 rounded-2xl">
                                <WordPullUp 
                                    className="text-lg font-bold tracking-[-0.02em] text-black dark:text-white"
                                    words="Reduce returns up to"
                                    />
                                <p className="whitespace-pre-wrap font-black text-lg dark:text-[#ff0054] tracking-tighter">
                                    <NumberTicker value={40} /> %
                                </p>
                            </div>
                            <div className="w-4/5 p-3 bg-gradient-to-tr from-[#0e0e0e] to-[#ff0054]/40 mx-auto text-center border border-white/20 rounded-2xl">
                                <WordPullUp 
                                    className="text-lg font-bold tracking-[-0.02em] text-black dark:text-white"
                                    words="Enhance product visualization"
                                />
                                <div className="flex gap-5">
                                    <FadeText
                                        className="text-lg font-medium text-black dark:text-white"
                                        direction="up"
                                        framerProps={{
                                            show: { transition: { delay: 0.2 } },
                                        }}
                                        text="Show"
                                        />
                                    <FadeText
                                        className="text-lg font-medium text-black dark:text-white"
                                        direction="right"
                                        framerProps={{
                                            show: { transition: { delay: 0.4 } },
                                        }}
                                        text="every"
                                        />
                                    <FadeText
                                        className="text-lg font-medium text-black dark:text-white"
                                        direction="down"
                                        framerProps={{
                                            show: { transition: { delay: 0.6 } },
                                        }}
                                        text="angle"
                                        />
                                    <FadeText
                                        className="text-lg font-medium text-black dark:text-white"
                                        direction="left"
                                        framerProps={{
                                            show: { transition: { delay: 0.8 } },
                                        }}
                                        text="and feature"
                                        />
                                </div>
                            </div>
                            <div className="mt-10 w-4/5 mx-auto p-5 rounded-3xl items-center justify-between flex gap-4 bg-gradient-to-tr from-white/0 to-[#ff0054]/50 border border-white/20">
                                <WordPullUp 
                                    className="text-xl font-medium tracking-[-0.02em] text-black dark:text-white"
                                    words="Join waitlist now!"
                                />
                                <RainbowButton>
                                    <p className="text-center font-bold text-black">
                                        Join
                                    </p>
                                </RainbowButton>
                            </div>
                        </div>
                    </div>
            </section>
        </MobileView>
    </>
    )
}