// Next translations
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import React, { useState } from "react";

//  icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaBullseye,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiAdobephotoshop,
  SiMongodb,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiAmazonaws,
  SiExpress,
} from "react-icons/si";

//  components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//  framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          <FaJs key="javascript" />,
          <SiTypescript key="typescript" />,
          <FaJava key="java" />,
        ],
      },
      {
        title: "Frontend Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiTailwindcss key="tailwind" />,
        ],
      },
      {
        title: "Backend Development",
        icons: [
          <FaNodeJs key="nodejs" />,
          <SiNestjs key="nestjs" />,
          <SiMongodb key="mongodb" />,
          <SiPostgresql key="postgresql" />,
          <SiRedis key="redis" />,
          <SiExpress key="express" />,
          <SiMysql key="mysql" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobephotoshop key="photoshop" />],
      },
      {
        title: "DevOps",
        icons: [
          <SiDocker key="docker" />,
          <SiAmazonaws key="aws" />,
          <FaBullseye key="bullmq" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Junior Developer | Freelance",
        stage: "Jan 2022 / Jul 2022",
      },
      {
        title: "Backend Developer | Freelance",
        stage: "Oct 2022 / Feb 2023",
      },
      {
        title: "Full Stack Developer | Contractor",
        stage: "Aug 2023 / Oct 2023",
      },
      {
        title: "Backend Developer | No Country",
        stage: "Mar 2024 / May 2024",
      },
    ],
  },
  {
    title: "key projects",
    info: [
      {
        title: "OpenTasks",
        stage: "Jul 2023 / Sep 2023",
      },
      {
        title: "SmartCommerce",
        stage: "Nov 2023 / Jan 2024",
      },
      {
        title: "QuickWallet",
        stage: "Mar 2024 (Hackathon Proyect)",
      },
      {
        title: "MiCampus",
        stage: "Apr 2024 / Present",
      },
    ],
  },
  {
    title: "certificates",
    info: [
      {
        title: "Ingenieria en Sistemas | Universidad Nacional del Sur",
        stage: "In progress",
      },
      {
        title: "Carrera en Desarrollo Frontend React | Coderhouse",
        stage: "2022",
      },
      {
        title: "Curso de Programación Backend Node | Coderhouse",
        stage: "2023",
      },
      {
        title: "Bootcamp IT | Naranja X",
        stage: "2023",
      },
      {
        title: "Bootcamp de Desarrollo Full Stack | Softtek",
        stage: "2024",
      },
    ],
  },
];

const About = () => {
  const { t } = useTranslation("about");
  const [index, setIndex] = useState(0);

  console.log(index);
  return (
    <div className="h-full py-32 text-center bg-primary/30 xl:text-left">
      <Circles />
      {/* Avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-7">
        {/* text */}
        <div className="flex flex-col justify-center flex-1">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {t("textPart1")}{" "}
            <span className="text-accent">{t("textPart2")}</span>{" "}
            {t("textPart3")}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:m-12 px-2 xl:px-0"
          >
            {t("subtitle")}
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden mx-auto mb-8 md:flex md:max-w-xl xl:max-w-none xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {t("counter1")}
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {t("counter2")}
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {t("counter3")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex mx-auto mb-4 gap-x-4 xl:gap-x-8 xl:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center py-2 xl:py-6 gap-y-2 xl:gap-y-4 xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-col items-center flex-1 md:flex-row max-w-max gap-x-2 text-white/60"
                >
                  {/* title */}
                  <div className="mb-2 font-light md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}
