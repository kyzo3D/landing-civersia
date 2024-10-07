import BlurIn from "./blur-in";
import { Iphone15ProV2 } from "./iphone-15-v2";
import { RainbowButton } from "./rainbow-button";
import { WordPullUp } from "./word-pull-up";

export default function GenerativeAI() {
    return (
      <section className="mb-28 w-full dark:bg-muted dark">
        <div className="md:px-6">
            <div className="grid grid-cols-12">
                <div className="mt-10 col-span-5 h-fit border-1 border-[#ff0054] shadow-2xl shadow-[#ff0054]/50 rounded-[120px] items-center justify-center mx-auto">
                    <div className="m-5 border-3 border-[#ff0054] rounded-[105px]">
                        <div className="m-5 border-5 border-[#ff0054] rounded-[85px]">
                            <Iphone15ProV2 className="p-3 h-4/5" src="/img_to_3d.mp4" />
                        </div>
                    </div>
                </div>
                <div className="col-span-7 space-y-28 mt-28 p-28">
                    <div>
                        <div className="relative">
                            <div className="absolute opacity-70 inset-0 flex items-center justify-center text-4xl font-bold text-gray-600 blur-sm">
                                <WordPullUp 
                                className="-z-1 text-4xl font-bold tracking-[-0.02em] text-black dark:text-white mb-10"
                                words="Image, text and video to 3D with AI"
                                />
                            </div>
                            <div className="absolute z-10 inset-0 flex items-center justify-center text-4xl font-bold text-gray-500 blur-md">
                                <WordPullUp 
                                className="-z-1 text-4xl font-bold tracking-[-0.02em] text-black dark:text-white mb-10"
                                words="Image, text and video to 3D with AI"
                                />
                            </div>
                            <div className="absolute z-20 inset-0 flex items-center justify-center text-4xl font-bold text-gray-400 blur-xl">
                                <WordPullUp 
                                className="-z-1 text-4xl font-bold tracking-[-0.02em] text-black dark:text-white mb-10"
                                words="Image, text and video to 3D with AI"
                                />
                            </div>
                            <div className="absolute z-30 inset-0 flex items-center justify-center text-4xl font-bold text-gray-300 blur-2xl">
                                <WordPullUp 
                                className="-z-1 text-4xl font-bold tracking-[-0.02em] text-black dark:text-white mb-10"
                                words="Image, text and video to 3D with AI"
                                />
                            </div>
                            <div className="relative z-40 flex items-center justify-center text-4xl font-bold text-gray-800">                                
                                <WordPullUp 
                                className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white mb-10"
                                words="Image, text and video to 3D with AI"
                                />
                            </div>
                        </div>
                        <BlurIn className="text-3xl font-bold" word="Transform days in seconds" />
                        <BlurIn className="text-3xl font-bold" word="and boost engagement!" />
                    </div>
                    <div>
                        <WordPullUp 
                            className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white"
                            words="Save days and money with automated generation"
                        />
                    </div>
                    <div className="p-5 rounded-3xl items-center justify-between flex gap-4 bg-gradient-to-tr from-white/0 to-[#ff0054]/50 border border-white/20">
                        <WordPullUp 
                            className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white"
                            words="View demo now!"
                        />
                        <RainbowButton>
                            <p className="font-bold text-black">
                                Try 3D view
                            </p>
                        </RainbowButton>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }