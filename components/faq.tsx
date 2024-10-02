"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "Do I need 3D expertise to use Civersia?",
      content: (
        <div className="text-muted-foreground">
          Not at all! Our AI-powered tools are designed for everyone in e-commerce and retail, regardless of technical skill.
        </div>
      ),
    },
    {
      title: "How quickly can I create 3D models of my products?",
      content: (
        <div className="text-muted-foreground">
          With our AI tools, you can generate 3D models in minutes. Bulk creation through video scanning is also incredibly fast.
        </div>
      ),
    },
    {
      title: "Can I customize the 3D models easily?",
      content: (
        <div className="text-muted-foreground">
          Absolutely! Our prompt-based editor lets you make changes efficiently. Just type what you want, and watch your product transform.
        </div>
      ),
    },
    {
      title: "How does Civersia integrate with my existing e-commerce platform?",
      content: (
        <div className="text-muted-foreground">
          Seamlessly! We provide easy-to-use embed codes (i-frames) that work with all major e-commerce platforms like Shopify, WooCommerce, and Magento.
        </div>
      ),
    },
    {
      title: "Will 3D models slow down my website?",
      content: (
        <div className="text-muted-foreground">
          No, our technology is optimized for fast loading. We use adaptive streaming to ensure smooth experiences even on mobile devices.
        </div>
      ),
    },
    {
      title: "Can I use Civersia for my entire product catalog?",
      content: (
        <div className="text-muted-foreground">
          Yes! Our bulk processing features make it easy to create 3D models for your entire inventory efficiently.
        </div>
      ),
    },
    {
      title: "How does AR try-on work with Civersia?",
      content: (
        <div className="text-muted-foreground">
          Customers can use their mobile devices to see how products look in their space, increasing engagement and purchase confidence, all from web browsers!
        </div>
      ),
    },
    {
      title: "Is Civersia suitable for small businesses?",
      content: (
        <div className="text-muted-foreground">
          Definitely! Our tools are scalable and affordable, perfect for businesses of all sizes looking to enhance their online presence.
        </div>
      ),
    },
    {
      title: "Can I use Civersia for seasonal or temporary product lines?",
      content: (
        <div className="text-muted-foreground">
          Absolutely! Our quick 3D model generation makes it perfect for showcasing limited-time offerings or testing new product ideas.
        </div>
      ),
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
      className="relative max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <div className="max-w-lg w-full">
        <Accordion
          fullWidth
          selectionMode="multiple"
          variant="splitted"
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
              className="text-muted-foreground"
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
