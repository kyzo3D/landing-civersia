"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";
import {Tabs, Tab} from "@nextui-org/tabs";

export default function Pricing() {

  const plans = [
    {
      name: "Pro Plan",
      desc: "Enjoy limited access to all our features",
      price: 0,
      isMostPop: false,
      features: ["Access to 900+ objects library", "Up to 10 projects", "AR/VR experiences", "Import GLB, OBJ, FBX objects", "Create interactions", "Add SVG, video, images, iframe or HTML"],
    },
    {
      name: "Premium Plan",
      desc: "Make the best schedule for your team",
      price: 10,
      isMostPop: true,
      features: [
        "All features on Pro Plan plus:", "Total up to 20 projects, without watermarks"
      ],
    },
    {
      name: "Enterprise Plan",
      desc: "Make the best schedule for your team and more",
      price: 20,
      isMostPop: false,
      features: [
        "Al on Premium Plan plus:"
      ],
    },
  ];
  
  const plans2 = [
    {
      name: "Creative",
      desc: "Enjoy limited access to all our features",
      price: 0,
      isMostPop: false,
      features: ["Up to:", "5 videos", "10 Image to 3D", "10 text to 3D"],
    },
    {
      name: "The creator plan",
      desc: "Make the best schedule for your team",
      price: 10,
      isMostPop: true,
      features: [
        "Up to",
        "10 videos",
        "20 Image to 3D",
        "20 text to 3D",
      ],
    },
    {
      name: "Generator beast",
      desc: "Make the best schedule for your team and more",
      price: 20,
      isMostPop: false,
      features: [
        "Up to:",
        "25 videos",
        "50 Image to 3D",
        "50 text to 3D",
      ],
    },
  ];
  
  const plans3 = [
    {
      name: "Pro Plan",
      desc: "Enjoy limited access to all our features",
      price: 0,
      isMostPop: false,
      features: ["Access to 900+ objects library", "Up to 10 projects", "AR/VR experiences", "Import GLB, OBJ, FBX objects", "Create interactions", "Add SVG, video, images, iframe or HTML"],
    },
    {
      name: "Premium Plan",
      desc: "Make the best schedule for your team",
      price: 10,
      isMostPop: true,
      features: [
        "All features on Pro Plan plus:", "Total up to 20 projects, without watermarks"
      ],
    },
    {
      name: "Enterprise Plan",
      desc: "Make the best schedule for your team and more",
      price: 20,
      isMostPop: false,
      features: [
        "Al on Premium Plan plus:"
      ],
    },
  ];
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="max-w-screen-xl w-full mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Pricing Plans for your business
        </h3>
        <p className="max-w-xl text-muted-foreground text-center">
          Select the plan that best suits your needs.
        </p>
      </div>
      <Tabs aria-label="Options">
        <Tab key="photos" title="Easy Editor">
          <div className="my-5 gap-10 grid lg:grid-cols-3 place-content-center">
            {plans.map((item, idx) => (
              <Card
                key={idx}
                shadow="none"
                className={`relative rounded-[20px] p-[2px] will-change-transform ${
                  item.isMostPop ? "sm:scale-110" : ""
                }`}
              >
                {item.isMostPop ? (
                  <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#ff0054_70%,#ff0054_100%)]" />
                ) : (
                  <span className="absolute inset-[-1000%] bg-border" />
                )}
                <div className="z-[2] flex flex-col justify-between w-full h-full bg-card rounded-[18px] p-5">
                  <CardBody className="w-full flex items-start gap-3">
                    <div className="flex flex-col">
                      <h4 className="text-xl font-light">{item.name}</h4>
                      <span className="text-muted-foreground text-sm font-light">
                        {item.desc}
                      </span>
                    </div>
                    <span className="text-2xl font-light">${item.price}</span>

                    <Divider />

                    <div className="flex flex-col gap-5 pb-5">
                      <span className="text-muted-foreground text-sm font-light">
                        Includes
                      </span>
                      <ul className="flex flex-col gap-2">
                        {item.features.map((feature, index) => (
                          <li key={index} className="text-sm font-light">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                  <CardFooter className="p-0">
                    <Button
                      className="w-full"
                      variant="solid"
                      color={item.isMostPop ? "danger" : "default"}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>  
        </Tab>
        <Tab key="music" title="3D Gen AI">
          <div className="my-5 gap-10 grid lg:grid-cols-3 place-content-center">
            {plans2.map((item, idx) => (
              <Card
                key={idx}
                shadow="none"
                className={`relative rounded-[20px] p-[2px] will-change-transform ${
                  item.isMostPop ? "sm:scale-110" : ""
                }`}
              >
                {item.isMostPop ? (
                  <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#ff0054_70%,#ff0054_100%)]" />
                ) : (
                  <span className="absolute inset-[-1000%] bg-border" />
                )}
                <div className="z-[2] flex flex-col justify-between w-full h-full bg-card rounded-[18px] p-5">
                  <CardBody className="w-full flex items-start gap-3">
                    <div className="flex flex-col">
                      <h4 className="text-xl font-light">{item.name}</h4>
                      <span className="text-muted-foreground text-sm font-light">
                        {item.desc}
                      </span>
                    </div>
                    <span className="text-2xl font-light">${item.price}</span>

                    <Divider />

                    <div className="flex flex-col gap-5 pb-5">
                      <span className="text-muted-foreground text-sm font-light">
                        Includes
                      </span>
                      <ul className="flex flex-col gap-2">
                        {item.features.map((feature, index) => (
                          <li key={index} className="text-sm font-light">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                  <CardFooter className="p-0">
                    <Button
                      className="w-full"
                      variant="solid"
                      color={item.isMostPop ? "danger" : "default"}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </Tab>
        <Tab key="videos" title="Easy Editor + 3D Gen AI">
          <div className="my-5 gap-10 grid lg:grid-cols-3 place-content-center">
            {plans3.map((item, idx) => (
              <Card
                key={idx}
                shadow="none"
                className={`relative rounded-[20px] p-[2px] will-change-transform ${
                  item.isMostPop ? "sm:scale-110" : ""
                }`}
              >
                {item.isMostPop ? (
                  <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#ff0054_70%,#ff0054_100%)]" />
                ) : (
                  <span className="absolute inset-[-1000%] bg-border" />
                )}
                <div className="z-[2] flex flex-col justify-between w-full h-full bg-card rounded-[18px] p-5">
                  <CardBody className="w-full flex items-start gap-3">
                    <div className="flex flex-col">
                      <h4 className="text-xl font-light">{item.name}</h4>
                      <span className="text-muted-foreground text-sm font-light">
                        {item.desc}
                      </span>
                    </div>
                    <span className="text-2xl font-light">${item.price}</span>

                    <Divider />

                    <div className="flex flex-col gap-5 pb-5">
                      <span className="text-muted-foreground text-sm font-light">
                        Includes
                      </span>
                      <ul className="flex flex-col gap-2">
                        {item.features.map((feature, index) => (
                          <li key={index} className="text-sm font-light">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                  <CardFooter className="p-0">
                    <Button
                      className="w-full"
                      variant="solid"
                      color={item.isMostPop ? "danger" : "default"}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </Tab>
      </Tabs>
    </motion.section>
  );
}
