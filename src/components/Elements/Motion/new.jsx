import Marquee from "react-fast-marquee";
import html5Icon from "/public/assets/html5Icon.svg";
import css3Icon from "/public/assets/css3Icon.svg";
import nodejsIcon from "/public/assets/nodejsIcon.svg";
import reactIcon from "/public/assets/react.svg";
import framerMotion from "/public/assets/framerMotion.svg";
import javascriptIcon from "/public/assets/javascriptIcon.svg";
import typescriptIcon from "/public/assets/typescriptIcon.svg";
import bootstrapIcon from "/public/assets/bootstrapIcon.svg";
import tailwindIcon from "/public/assets/tailwindIcon.svg";
import mysqlIcon from "/public/assets/mysqlcon.svg";
import expressjsIcon from "/public/assets/expressjsIcon.svg";

export default function Skills() {
  const icons = [
    { src: html5Icon, alt: "HTML5" },
    { src: css3Icon, alt: "CSS3" },
    { src: javascriptIcon, alt: "Javascript" },
    { src: typescriptIcon, alt: "Typescript" },
    { src: nodejsIcon, alt: "Node.js" },
    { src: reactIcon, alt: "React" },
    { src: framerMotion, alt: "Framer Motion" },
    { src: expressjsIcon, alt: "ExpressJS" },
    { src: bootstrapIcon, alt: "Bootstrap" },
    { src: tailwindIcon, alt: "Tailwind" },
    { src: mysqlIcon, alt: "Mysql Icon" },
    // { src: expressIcon, alt: "Express.js" },
  ];

  return (
    <div className="w-[25rem] lg:w-[85vw] md:w-[80vw] sm:w-[35rem] m-auto mt-8 overflow-hidden">
      <Marquee speed={40}>
        <div className="w-full flex flex-nowrap gap-1 md:gap-2 lg:gap-4 mr-1 md:mr-2 lg:mr-4 overflow-hidden">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="py-4 w-32 aspect-square h-32 flex items-center justify-center ml-20 mr-4 cursor-pointer"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-[6rem] h-[6rem]" // Adjust size as needed
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
