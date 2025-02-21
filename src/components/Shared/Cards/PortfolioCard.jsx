import React from "react";
import { motion } from "framer-motion";

const PortfolioCard = ({ portfolio }) => {
  const handleGoProjectUrl = () => {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = portfolio?.project_url;
    a.click();
  };

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
    >
      <div className="container">
        <motion.img
          viewport={{ once: true }}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
          className="content-image w-full h-[280px] object-center object-cover shadow-md border border-slate-200 cursor-pointer "
          onClick={handleGoProjectUrl}
          src={portfolio?.image_url}
          alt=""
        />
        <div className="mt-3 flex flex-col gap-2">
          <div className=" font-bold text-xl ">{portfolio?.title}</div>
          <div className=" text-gray-600 ">{portfolio?.description}</div>
          <div
            onClick={handleGoProjectUrl}
            className=" text-blue-500 hover:underline decoration-wavy cursor-pointer "
          >
            Link Here
          </div>
          <div className=" flex gap-2 flex-wrap ">
            {portfolio?.technologies.map((tech, index) => (
              <div
                key={index}
                variant="secondary"
                className="bg-gray-200 py-1 px-3 rounded-lg text-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
