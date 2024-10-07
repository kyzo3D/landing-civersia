"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import React from "react";
import Image from "next/image"

export default function NavBar() {
  const menuItems = ["docs", "features", "pricing", "blog"];

  return (
    <Navbar isBlurred maxWidth="full">
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <a
            href="/"
            className="font-light tracking-tighter text-2xl flex gap-3 justify-center items-center"
          >
            <Image
              alt="logo"
              src="/logo.png"
              width={120}
              height={0}
              sizes="100vw"
            />
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <a
            href="/"
            className="font-light tracking-tighter text-2xl flex gap-3 justify-center items-center"
          >
            <Image
              alt="logo"
              src="/logo.png"
              width={120}
              height={0}
              sizes="100vw"
            />
          </a>
        </NavbarBrand>
        {/* <NavbarItem>
          <Button as={Link} variant="light" size="sm">
            Home
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href="https://x.com/gonzalochale"
            variant="solid"
            className=" backdrop-blur-lg bg-transparent border border-[#5900ff] shadow-xl shadow-[#5900ff]/40 text-white text-md hidden sm:flex"
            size="sm"
          >
            Sign in
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href="https://x.com/gonzalochale"
            variant="solid"
            className="bg-gradient-to-tr from-[#280b15] via-[#691d36] to-[#ff0054] shadow-xl shadow-[#ff0054]/50 text-white text-md hidden sm:flex"
            size="sm"
          >
            Sign up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg" color="foreground">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
