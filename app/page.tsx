import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
  GithubIcon,
  LinkedInIcon,
  LinkIcon,
  TwitterIcon,
} from "@/components/icons";

//component
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:pb-10">
      <div className="inline-block w-full text-start justify-center">
        <span className={title()}>Hi, I&apos;m&nbsp;</span>
        <span className={title({ color: "violet" })}>Satvick Pathak&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          I&apos;m an enthusiastic Developer with a passion for exploring and
          discussing everything related to development and technology. Based in
          India, I have <span className="text-blue-500">1 year</span> of
          experience as a{" "}
          <span className="text-blue-500">
            Frontend Developer at CodeAspire
          </span>
          , where I thrive on learning new tech and improving my skills to stay
          at the forefront of innovation.
        </div>
      </div>

      <div className="flex w-full text-start justify-between items-center my-4">
        <div className={subtitle({ class: "mt-4" })}>
          Read my latest post about frontend techniques and share my experience
        </div>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={"https://medium.com/@satvickpathak"}
        >
          medium.com
        </Link>
      </div>

      <div className="inline-block w-full text-start justify-center my-4">
        <span className={title({ size: "sm" })}>Personal Projects</span>
        <br />
        <div className={`${subtitle({ class: "mt-4" })} gap-8 sm:gap-4 grid`}>
          <Card className="p-4 grid sm:grid-cols-2 gap-4 transition-all duration-900 hover:-translate-y-2 hover:shadow-sm hover:shadow-white">
            <CardBody className="py-2 sm:col-span-1 sm:mr-0 flex justify-center items-center">
              <img
                alt="Card background"
                className="object-contain w-full h-full"
                src="/myshop.png"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start sm:col-span-1 sm:mr-0">
              <h4 className="font-bold text-large cursor-default">
                MyShop (Ecommerce-Website)
              </h4>
              <div className="text-tiny uppercase font-bold flex gap-2 py-2 flex-wrap cursor-default">
                <Chip size="sm" variant="bordered">
                  React
                </Chip>
                <Chip size="sm" variant="bordered">
                  Firebase
                </Chip>
                <Chip size="sm" variant="bordered">
                  Redux
                </Chip>
                <Chip size="sm" variant="bordered">
                  Stripe
                </Chip>
                <Chip size="sm" variant="bordered">
                  Tailwind
                </Chip>
              </div>
              <small className="text-default-500 cursor-default">
                MyShop is a full eCommerce website with an Admin Dashboard for
                small businesses, featuring Stripe integration for seamless
                payments and Firebase for backend operations. It ensures
                optimized performance through lazy loading and code splitting.
              </small>
              <div className="flex gap-3 mt-3">
                <Button
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600 bg-black"
                  href={"https://github.com/Satvickk/ecommerce-firebase"}
                  variant="flat"
                >
                  Github
                  <GithubIcon size={20} />
                </Button>
                <Button
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600"
                  href={"https://ecommerce-app-708fc.web.app"}
                  variant="flat"
                  color="success"
                >
                  Live
                  <LinkIcon />
                </Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4 grid sm:grid-cols-2 gap-4 transition-all duration-900 hover:-translate-y-2 hover:shadow-sm hover:shadow-white">
            <CardBody className="py-2 sm:col-span-1 sm:mr-0 flex justify-center items-center">
              <img
                alt="Card background"
                className="object-cover h-full w-full"
                src="/fullstack-blog.png"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start sm:col-span-1 sm:mr-0">
              <h4 className="font-bold text-large cursor-default">
                FullStack Blog Website
              </h4>
              <div className="text-tiny uppercase font-bold flex gap-2 py-2 flex-wrap cursor-default">
                <Chip size="sm" variant="bordered">
                  React
                </Chip>
                <Chip size="sm" variant="bordered">
                  Appwrite
                </Chip>
                <Chip size="sm" variant="bordered">
                  Redux
                </Chip>
                <Chip size="sm" variant="bordered">
                  Tailwind
                </Chip>
              </div>
              <small className="text-default-500 cursor-default">
                This project is a scalable blog website built with ReactJS and
                Appwrite, featuring secure user management with role-based
                authentication and full CRUD functionality for blog posts and
                user data. It&apos;s designed for production-grade performance.
              </small>
              <div className="flex gap-3 mt-3">
                <Button
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600 bg-black"
                  href={
                    "https://github.com/Satvickk/beyond-fullstack-blog-website"
                  }
                  variant="flat"
                >
                  Github
                  <GithubIcon size={20} />
                </Button>
                <Button
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600"
                  href={"https://beyond-fullstack-blog-website.vercel.app"}
                  variant="flat"
                  color="success"
                >
                  Live
                  <LinkIcon />
                </Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4 grid sm:grid-cols-2 gap-4 transition-all duration-900 hover:-translate-y-2 hover:shadow-sm hover:shadow-white">
            <CardBody className="py-2 sm:col-span-1 sm:mr-0 flex justify-center items-center">
              <img
                alt="Card background"
                className="object-cover h-full w-full"
                src="/todo.png"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start sm:col-span-1 sm:mr-0">
              <h4 className="font-bold text-large cursor-default">
                Todo Firebase
              </h4>
              <div className="text-tiny uppercase font-bold flex gap-2 py-2 flex-wrap cursor-default">
                <Chip size="sm" variant="bordered">
                  React
                </Chip>
                <Chip size="sm" variant="bordered">
                  Typescript
                </Chip>
                <Chip size="sm" variant="bordered">
                  Firebase
                </Chip>
                <Chip size="sm" variant="bordered">
                  Redux
                </Chip>
                <Chip size="sm" variant="bordered">
                  Tailwind
                </Chip>
              </div>
              <small className="text-default-500 cursor-default">
                Todo-Firebase is a responsive React web app built with
                TypeScript, offering task management with full CRUD
                functionality and user authentication via Firebase. It ensures
                scalability and high performance.
              </small>
              <div className="flex gap-3 mt-3">
                <Button
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600 bg-black"
                  href={"https://github.com/Satvickk/Todo-firebase"}
                  variant="flat"
                >
                  Github
                  <GithubIcon size={20} />
                </Button>
                <Button
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600"
                  href={"https://todo-firebase-alpha-one.vercel.app"}
                  variant="flat"
                  color="success"
                >
                  Live
                  <LinkIcon />
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="inline-block w-full text-start justify-center my-4">
        <span className={title({ size: "sm" })}>Professional Projects</span>
        <br />
        <div className={`${subtitle({ class: "mt-4" })} gap-8 sm:gap-4 grid`}>
          <Card className="p-4 grid sm:grid-cols-2 gap-4 transition-all duration-900 hover:-translate-y-2 hover:shadow-sm hover:shadow-white">
            <CardBody className="py-2 sm:col-span-1 sm:mr-0 flex justify-center items-center">
              <img
                alt="Card background"
                className="object-contain w-full h-full"
                src="/gate-promotional.png"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start sm:col-span-1 sm:mr-0">
              <h4 className="font-bold text-large cursor-default">
                Prsim Gate (Promotional-Website)
              </h4>
              <div className="text-tiny uppercase font-bold flex gap-2 py-2 flex-wrap cursor-default">
                <Chip size="sm" variant="bordered">
                  Next
                </Chip>
                <Chip size="sm" variant="bordered">
                  Tailwind
                </Chip>
              </div>
              <small className="text-default-500 cursor-default">
                Prism Gate is a Next.js and Tailwind-powered app for streamlined
                security and community management in gated premises. It enhances
                efficiency, security, and user experience for residents and
                management.
              </small>
              <div className="flex gap-3 mt-3">
                <Button
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600"
                  href={"https://promotional-gate-prism.vercel.app/"}
                  variant="flat"
                  color="success"
                >
                  Live
                  <LinkIcon />
                </Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4 grid sm:grid-cols-2 gap-4 transition-all duration-900 hover:-translate-y-2 hover:shadow-sm hover:shadow-white">
            <CardBody className="py-2 sm:col-span-1 sm:mr-0 flex justify-center items-center">
              <img
                alt="Card background"
                className="object-cover h-full w-full"
                src="/sfa-prism.png"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start sm:col-span-1 sm:mr-0">
              <h4 className="font-bold text-large cursor-default">Prism SFA</h4>
              <div className="text-tiny uppercase font-bold flex gap-2 py-2 flex-wrap cursor-default">
                <Chip size="sm" variant="bordered">
                  React
                </Chip>
                <Chip size="sm" variant="bordered">
                  Redux Toolkit
                </Chip>
                <Chip size="sm" variant="bordered">
                  Axios
                </Chip>
                <Chip size="sm" variant="bordered">
                  Bootstrap
                </Chip>
              </div>
              <small className="text-default-500 cursor-default">
                This Salesforce project streamlines sales processes by managing
                customer data, tracking leads, and automating workflows. It
                enhances sales efficiency and boosts business productivity with
                real-time insights.
              </small>
            </CardHeader>
          </Card>

          <Card className="p-4 grid sm:grid-cols-2 gap-4 transition-all duration-900 hover:-translate-y-2 hover:shadow-sm hover:shadow-white">
            <CardBody className="py-2 sm:col-span-1 sm:mr-0 flex justify-center items-center">
              <img
                alt="Card background"
                className="object-cover h-full w-full"
                src="/smartsalonbot.png"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start sm:col-span-1 sm:mr-0">
              <h4 className="font-bold text-large cursor-default">
                SmartSalonBot
              </h4>
              <div className="text-tiny uppercase font-bold flex gap-2 py-2 flex-wrap cursor-default">
                <Chip size="sm" variant="bordered">
                  React
                </Chip>
                <Chip size="sm" variant="bordered">
                  Typescript
                </Chip>
                <Chip size="sm" variant="bordered">
                  Redux
                </Chip>
                <Chip size="sm" variant="bordered">
                  Material UI
                </Chip>
                <Chip size="sm" variant="bordered">
                  Tailwind
                </Chip>
              </div>
              <small className="text-default-500 cursor-default">
                Smart Salon Bot is an automated salon management system that
                streamlines tasks like bookings, staff management, and sales,
                boosting profitability by 25-35%. It allows salons to operate
                efficiently without the need for a traditional manager.
              </small>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="inline-block w-full text-start justify-center my-4">
        <span className={title({ size: "sm" })}>React Native</span>
        <br />
        <div className={`${subtitle({ class: "mt-4" })} gap-8 sm:gap-4 grid`}>
          <Card className="p-4 gap-4 transition-all duration-900 hover:-translate-y-2 hover:shadow-sm hover:shadow-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start sm:mr-0">
              <h4 className="font-bold text-large cursor-default">
                Password Generator
              </h4>
              <div className="text-tiny uppercase font-bold flex gap-2 py-2 flex-wrap cursor-default">
                <Chip size="sm" variant="bordered">
                  React Native
                </Chip>
              </div>
              <small className="text-default-500 cursor-default">
                Password Generator is a React Native app that helps users create
                strong, secure passwords with customizable length and
                complexity. This project highlights my skills in mobile
                development while promoting cybersecurity best practices.
              </small>
            </CardHeader>
          </Card>

          <Card className="p-4 grid gap-4 transition-all duration-900 hover:-translate-y-2 hover:shadow-sm hover:shadow-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start sm:mr-0">
              <h4 className="font-bold text-large cursor-default">Todo App</h4>
              <div className="text-tiny uppercase font-bold flex gap-2 py-2 flex-wrap cursor-default">
                <Chip size="sm" variant="bordered">
                  React Native
                </Chip>
                <Chip size="sm" variant="bordered">
                  Firebase
                </Chip>
                <Chip size="sm" variant="bordered">
                  Redux
                </Chip>
              </div>
              <small className="text-default-500 cursor-default">
                Smart SalonThe Todo App is a React Native project that leverages
                Firebase for backend services and Redux for state management. It
                enables users to effortlessly manage tasks with features like
                real-time syncing and a seamless user experience.
              </small>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="inline-block w-full text-start justify-center my-4">
        <span className={title({ size: "sm" })}>Get in Touch</span>
        <br />
        <div
          className={`${subtitle({ class: "mt-4" })} gap-8 sm:gap-4 sm:flex`}
        >
          <div className={"flex gap-4"}>
            <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
            >
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="LinkedIn"
              href={siteConfig.links.linkedIn}
            >
              <LinkedInIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
          </div>
          |<div className={"flex gap-4"}>satvickpathak@gmail.com</div>
        </div>
      </div>
    </section>
  );
}
