"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectImg from "../components/projectComponent/ProjectImg";
import { projects } from "../data";
import { IconType } from "react-icons";

const ProjectLanguages = ({ languages }: any) => {
  return (
    <div className="flex flex-wrap mt-2">
      {languages.map((i: any, index: number) => {
        const Icon: IconType = i.reactIcon;
        return <Icon className="text-4xl m-2" color={i.color} key={index} />;
      })}
      {/* <Icon /> */}
    </div>
  );
};

const ProjectCard = ({
  name,
  description,
  languages,
  url,
}: {
  name: string;
  url: string;
  description: string;
  languages: any;
}) => {
  return (
    <div className="text-[rgb(88, 96, 105)] bg-[rgb(255, 255, 255)] shadow-projectCard p-5 cursor-pointer rounded-[5px] h-full transition-all duration-200 ease-in-out hover:shadow-light-imageDark dark:hover:shadow-dark-imageDark bg-light-projectCard dark:bg-dark-projectCard">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <p className="leading-[1.1] text-ellipsis text-[rgb(36, 41, 46)] mb-3 text-2xl font-semibold lg:font-bold -tracking-wider">
          {name}
        </p>

        <p className="text-wrap text-left text-light-text dark:text-dark-text">
          {description}
        </p>

        <div className="flex lg:flex-row flex-row-reverse mb-2">
          <ProjectLanguages languages={languages} />
        </div>
      </a>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <Header />

      <div className="w-full mt-10">
        <div className="mx-auto w-[90%] max-w-[1370px]">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="lg:flex mb-12">
              {/* Experience SVG */}
              <div className="flex-1">
                <ProjectImg />
              </div>

              {/* Experience texts */}
              <div className="flex-1 text-center">
                <h1 className="text-5xl lg:text-[56px] font-SansRegular font-semibold lg:font-bold mt-14 lg:mt-20 mb-9 leading-[1.1]">
                  Projects
                </h1>

                <p className="text-base lg:text-lg leading-5 lg:leading-[30px] font-medium text-light-secondaryText dark:text-dark-secondaryText">
                  {
                    "My projects makes use of vast variety of latest technology tools. My best experience is to create E-Commerce projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet."
                  }
                </p>
              </div>
            </div>
          </motion.div>
          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-6  mt-16">
            {projects.data.map((item) => (
              <motion.div
                key={item.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <ProjectCard
                  description={item.description}
                  name={item.name}
                  url={item.url}
                  languages={item.languages}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 py-4">
          <a
            href="https://github.com/ashishb24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-4 rounded bg-light-accentColor dark:bg-dark-accentColor hover:shadow-3xl hover:shadow-light-accentColor dark:shadow-dark-accentColor transition-all duration-200 ease-in-out font-bold text-base cursor-pointer text-white">
              More Projects (Github)
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
