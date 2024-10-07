import { JSX, SVGProps } from "react"
import GenerativeAI from "./IA_gen"

export default function Features() {
    return (
      <section className="w-full dark:bg-muted dark">
        <GenerativeAI />
        <div className="w-full mx-auto container grid gap-3 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          <div className="group relative overflow-hidden rounded-2xl bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,0,85,1),0_0_120px_rgba(112,0,239,1)] dark:bg-card">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#7000ef] to-[#ff0055] opacity-10 transition-opacity group-hover:opacity-20" />
            <div className="flex h-full flex-col justify-between p-8">
              <div className="flex items-center gap-4">
                <div className="flex max-h-12 min-h-12 h-12 max-w-12 min-w-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff0055] to-[#7000ef] transition-transform group-hover:scale-110">
                  <CuboidIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-card-foreground">AI Text-to-3D Conversion</h3>
              </div>
              <p className="text-white mt-5">
                Describe your product, get a 3D model. Bring new items to life before production.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,0,85,1),0_0_120px_rgba(112,0,239,1)] dark:bg-card">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#7000ef] to-[#ff0055] opacity-10 transition-opacity group-hover:opacity-20" />
            <div className="flex h-full flex-col justify-between p-8">
              <div className="flex items-center gap-4">
                <div className="flex max-h-12 min-h-12 h-12 max-w-12 min-w-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff0055] to-[#7000ef] transition-transform group-hover:scale-110">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-card-foreground">Instant Image-to-3D Transformation</h3>
              </div>
              <p className="text-white mt-5">
                Turn product photos into interactive 3D models. Elevate your product showcase.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,0,85,1),0_0_120px_rgba(112,0,239,1)] dark:bg-card">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#7000ef] to-[#ff0055] opacity-10 transition-opacity group-hover:opacity-20" />
            <div className="flex h-full flex-col justify-between p-8">
              <div className="flex items-center gap-4">
                <div className="flex max-h-12 min-h-12 h-12 max-w-12 min-w-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff0055] to-[#7000ef] transition-transform group-hover:scale-110">
                  <VideoIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-card-foreground">
                  Video-to-3D Product Capture
                </h3>
              </div>
              <p className="text-white mt-5">
                Create 3D models of your entire inventory quickly. Just scan with your phone.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,0,85,1),0_0_120px_rgba(112,0,239,1)] dark:bg-card">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#7000ef] to-[#ff0055] opacity-10 transition-opacity group-hover:opacity-20" />
            <div className="flex h-full flex-col justify-between p-8">
              <div className="flex items-center gap-4">
                <div className="flex max-h-12 min-h-12 h-12 max-w-12 min-w-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff0055] to-[#7000ef] transition-transform group-hover:scale-110">
                  <FilePenIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-card-foreground">Intuitive 3D Web Editor</h3>
              </div>
              <p className="text-white mt-5">Design immersive product experiences easily. No 3D expertise required.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,0,85,1),0_0_120px_rgba(112,0,239,1)] dark:bg-card">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#7000ef] to-[#ff0055] opacity-10 transition-opacity group-hover:opacity-20" />
            <div className="flex h-full flex-col justify-between p-8">
              <div className="flex items-center gap-4">
                <div className="flex max-h-12 min-h-12 h-12 max-w-12 min-w-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff0055] to-[#7000ef] transition-transform group-hover:scale-110">
                  <UploadIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-card-foreground">
                  One-Click Website Integration
                </h3>
              </div>
              <p className="text-white mt-5">
                Embed 3D, AR, and VR on your e-commerce site instantly. Wow customers across devices.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,0,85,1),0_0_120px_rgba(112,0,239,1)] dark:bg-card">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#7000ef] to-[#ff0055] opacity-10 transition-opacity group-hover:opacity-20" />
            <div className="flex h-full flex-col justify-between p-8">
              <div className="flex items-center gap-4">
                <div className="flex max-h-12 min-h-12 h-12 max-w-12 min-w-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff0055] to-[#7000ef] transition-transform group-hover:scale-110">
                  <PencilIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-card-foreground">Prompt-Powered Customization</h3>
              </div>
              <p className="text-white mt-5">
                Edit scenes and objects with simple text commands. Streamline your product visualization workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function CuboidIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
        <path d="M10 22v-8L2.25 9.15" />
        <path d="m10 14 11.77-6.87" />
      </svg>
    )
  }
  
  
  function FilePenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
      </svg>
    )
  }
  
  
  function ImageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    )
  }
  
  
  function PencilIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  }
  
  
  function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    )
  }
  
  
  function VideoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    )
  }