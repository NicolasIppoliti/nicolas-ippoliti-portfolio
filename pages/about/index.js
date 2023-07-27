// Next translations
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import React, { useState } from 'react';

//  icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiAdobephotoshop,
  SiMongodb,
  SiNestjs,
  SiTypescript,
} from 'react-icons/si';

//  components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//  framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 key={FaHtml5}/>,
          <FaCss3 key={FaCss3}/>,
          <FaJs key={FaJs}/>,
          <SiNextdotjs key={SiNextdotjs}/>,
          <FaReact key={FaReact}/>,
          <SiTailwindcss key={SiTailwindcss}/>,
        ],
      },
      {
        title: 'Backend Development',
        icons: [
          <FaNodeJs key={FaNodeJs}/>,
          <SiNestjs key={SiNestjs}/>,
          <SiTypescript key={SiTypescript}/>,
          <SiMongodb key={SiMongodb}/>,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key={FaFigma}/>,
          <SiAdobephotoshop key={SiAdobephotoshop}/>,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Intern - Universidad Nacional del Sur',
        stage: '2019 - 2021',
      },
      {
        title: 'Fullstack Developer - Freelance Work',
        stage: '2021 - 2023',
      },
    ],
  },
  {
    title: 'certificates',
    info: [
      {
        title: 'Ingenieria en Sistemas - Universidad Nacional del Sur',
        stage: 'In progress',
      },
      {
        title: 'Carrera en Desarrollo Frontend React - Coderhouse',
        stage: '2022',
      },
      {
        title: 'Curso de Programación Backend Node - Coderhouse',
        stage: '2023',
      },
    ],
  },
];

const About = () => {
  const { t } = useTranslation('about');
  const [index, setIndex] = useState(0);

  console.log(index);
  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles/>
    {/* Avatar image */}
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[370px]'
    >
      <Avatar/>
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-7'>
      {/* text */}
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2'
        >
          {t('textPart1')} <span className='text-accent'>{t('textPart2')}</span> {t('textPart3')}
        </motion.h2>
        <motion.p
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:m-12 px-2 xl:px-0'
        >
          {t('subtitle')}
        </motion.p>
        {/* counters */}
        <motion.div 
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
        >
          <div className='flex flex-1 xl:gap-x-6'>
            {/* experience */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={2} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>{t('counter1')}</div>
            </div>
            {/* clients */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={10} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>{t('counter2')}</div>
            </div>
            {/* projects */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={20} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>{t('counter3')}</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
      >
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
        {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                {/* title */}
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                {/* icons */}
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, iconIndex) => {
                    return <div key={iconIndex} className='text-2xl text-white'>{icon}</div>
                  })}
                </div>
              </div>
            )
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
      ...(await serverSideTranslations(locale, ['about']))
    }
  };
}
