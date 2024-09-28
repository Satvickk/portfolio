import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  TwitterIcon,
  GithubIcon,
  Logo,
  LinkedInIcon,
} from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="2xl" position="sticky" className="mt-10 sm:mt-20">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 sm:gap-0"
            href="/"
          >
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="satvickpathak@gmail.com"
              target="_blank"
              type="email"
            >
              satvickpathak@gmail.com
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="center">
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <Socials classes={"hidden sm:flex gap-2"} />
        <NavbarItem className="flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            variant="flat"
          >
            Resume Download
          </Button>
        </NavbarItem>
      </NavbarContent>
      <Socials classes={"sm:hidden flex gap-4"} />
    </NextUINavbar>
  );
};

export const Socials = ({ classes }) => {
  return (
    <NavbarItem className={`${classes}`}>
      <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
        <TwitterIcon className="text-default-500" />
      </Link>
      <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedIn}>
        <LinkedInIcon className="text-default-500" />
      </Link>
      <Link isExternal aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
      </Link>
    </NavbarItem>
  );
};
