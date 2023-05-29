import { FiGitlab, FiMail } from "react-icons/fi";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { GrReactjs, GrDocker, GrOracle } from "react-icons/gr";
import { AiFillFileMarkdown } from "react-icons/ai";
import {
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandCss3,
  TbBrandFlutter,
  TbBrandBootstrap,
  TbHtml,
} from "react-icons/tb";
// import { SiNextdotjs } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoDocker, IoLogoPython } from "react-icons/io";
export const contact = [
  { id: 1, icon: <FiGitlab />, link: "https://gitlab.com/tkhe19" },
  { id: 2, icon: <BsGithub />, link: "https://github.com/tahsinkheya" },
  {
    id: 3,
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/tahsinkheya/",
  },

  { id: 4, icon: <FiMail />, link: "mailto:tahsinkheya@gmail.com" },
  {
    id: 5,
    icon: <BsInstagram />,
    link: "https://www.instagram.com/tahsinkheya/?igshid=ZDdkNTZiNTM%3D",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
    link: "#about",
  },
  {
    id: "skill",
    title: "Skill",
    link: "#skill",
  },
  {
    id: "work",
    title: "Work",
    link: "#work",
  },
  {
    id: "experience",
    title: "Experience",
    link: "#experience",
  },
  {
    id: "education",
    title: "Education",
    link: "#education",
  },
  {
    id: "contact",
    title: "Contact",
    link: "#contact",
  },
  {
    id: "resume",
    title: "Resume",
    link: "",
  },
];
export const experience = [
  {
    name: "Intercloud Limited",
    position: "Full-time Software Engineer",
    timeline: "Jan 2023 - Present",
    link: "https://www.intercloud.com.bd/",
    //     technicalSkills: [{name:"React JS"},{name:"Next JS"},{name: "Material UI"}, {name:"Tailwind"},{name: "Docker"}],
    //     softSkills: [{name:"React JS"},{name:"Next JS"},{name: "Material UI"}, {name:"Tailwind"},{name: "Docker"}],
    // • Soft Skills: Problem‑solving, Creativity, Teamwork, Time Management, Communication, Presentation skills
    details: (
      <p>
        {/* • Improved the UI for certain services for Brilliant Cloud Portal by
        following Nielsen’s Heuristics to promote usability <br></br>• For some */}
        {/* of the projects, I implemented the use of ”hydrate” instead of ”render”
        to enhance performance by nearly 40 percent and improve search engine
        optimization. Hydrate uses server side rendering to improve performance.
        <br></br> • I tested various functionalities, identified bugs, and
        rectified them to enhance error prevention. <br></br> */}
        • Reorganized multiple codebases and worked on substantially minimizing
        the occurrence of duplicate code, which contributed to enhancing its
        maintainability. <br></br>• Integrated an animated price calculator into
        the Brilliant Cloud portal. The animation enhances user engagement and
        helps guide their atten‑tion to specific elements.<br></br> • Designed a
        page to display each product offered by InterCloud, using a consistent
        code structure that can be easily modified for each product. <br></br> •
        Was involved in the development of an internal ticketing system where I
        ensured that I followed Nielsen's heuristics to enhance the user
        interface (UI) and user experience (UX).
      </p>
    ),
  },
  {
    name: "Aqualink Bangladesh LTD",
    position: "Part-time Software Engineer",
    timeline: "Feb 2023 - Apr 2023",
    link: "https://aqualinkbangladesh.com/",
    details: (
      <p>
        • Designed the dashboard for the Sensometer web application using Figma,
        ensuring that the design prioritizes user experience (UX) and pro‐ motes
        usability.<br></br> • While developing the Sensometer web application,I
        focused on the user interface (UI) of the application and made sure it
        was responsive and easy to use.<br></br> • To facilitate future
        maintenance and scalability, I made sure to avoid duplicate code and
        promote code reusability.
      </p>
    ),
  },
  {
    name: "Intercloud Limited",
    position: "Intern",
    timeline: "Nov 2021 - Jun 2022",
    link: "https://www.intercloud.com.bd/",
    details: (
      <p>
        • I was able to acquire expertise in software and web development during
        my time as an intern here. <br></br>• I had the opportunity to
        participate in several projects, including the development of an S3
        storage application, a documentation page for Intercloud’s cloud
        services, a leave application system,an admin portal and various other
        smaller projects.
      </p>
    ),
  },
];

export const projects = [
  {
    id: "1",
    title: "Brilliant Docs Page",
    subtitle: "",
    techUsed: ["React", "Bootstrap"],
    imageUrl: "",
    time: "",
  },
  {
    id: "2",
    title: "Brilliant S3 Connect",
    subtitle: "",
    techUsed: ["React", "Material UI"],
    imageUrl: "",
  },
  {
    id: "2",
    title: "Brilliant Cloud Portal",
    techUsed: ["React", "Material UI"],
    imageUrl: "",
    subtitle: "",
  },
  {
    id: "2",
    title: "Sensometer Web Application",
    techUsed: ["React", "Bootstrap", "Figma"],
    imageUrl: "",
    subtitle: "",
  },
  {
    id: "3",
    title: "Heard Mobile Application",
    techUsed: ["Flutter", "Firebase", "Postgress"],
    imageUrl: "",
    subtitle:
      "For this application I worked on a mobile application that caters for the need of deaf people to communicate with doctors by linking them with appropriate sign language interpreters. For this I worked with 5 other people and used Flutter as our primary developing library.",
  },
  {
    id: "4",
    title: "Prime Dashboard for Caring Pharmacy",
    techUsed: ["HTML", "CSS", "Bootstrap"],
    imageUrl: "",
    subtitle:
      "Along with being a code developer I acted as the PM (project manager) of my agile team (six people). To ensure that the product delivered after every increment is of high performance and quality. I developed and maintained schedules for my team mates to follow. I have used JavaScript and web development framework like Bootstrap to work on the Admin Dashboard web page for Caring pharmacy.",
  },
];

export const education = [
  {
    name: "Monash University Malaysia",
    title: "Bachelor of Software Engineering",
    timeline: "Feb 2019 - Nov 2022",

    link: "https://www.monash.edu.my/",
    imgLink:
      "https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/dffc65394bf389930424613c8c658301.jpg",
    results: (
      <p>
        • Grade: H1 (First‐class Honours)<br></br>• CGPA: 3.84 WAM:80.818
      </p>
    ),
    details: (
      <p>
        • Monash Faculty of Engineering Dean’s Honour List<br></br>• Monash
        Women's Engineers Club Member 2022 <br></br>• Monash Women's Cricket
        Club Member 2019<br></br>• Tech Support for HEARD mobile applcation
        testing conducted by school of Pharmacy in July 2022 <br></br>• USM
        Varsity Hackathon 2022 - Participant <br></br>• Shopee Code League 2022
        - Participant <br></br>• Quick Hack 2022 - Participant
      </p>
    ),
  },
  {
    name: "Delhi Public School Dhaka",
    title: "Highschool",
    timeline: "Aug 2013 - Jun 2018",
    imgLink: "https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/images.jpeg",
    link: "https://dpsstsdhaka.org/",
    results: (
      <p>
        • CAMBRIDGE INTERNATIONAL CERTIFICATE OF EDUCATION O LEVEL : 4A* 4A
        <br></br> • CAMBRIDGE GENERAL CERTIFICATE OF EDUCATION A LEVEL : 1 A* 1A
        1B
      </p>
    ),
    details: (
      <p>
        • The Duke of Edinburgh’s Award
        <br></br> • Daily Star Certificate of Excellence <br></br>• School
        Prefect 2017-2018
      </p>
    ),
  },
];

export const work = [
  {
    title: "Brilliant Connect Ticketing System",
    webLink: "https://app-support.brilliant.com.bd/",
    imgLink:
      "https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/work/ticketing-connect.gif",
    subtitle:
      "I worked on the front-end for Brilliant Connect's ticketing system, ensuring that it is fully responsive and features a user-friendly interface with smooth navigation. The user interface (UI) is designed to be easily comprehensible, allowing users to interact with the system effortlessly.The UI design maintains consistency throughout, ensuring that elements are visually coherent and harmonious. A soothing color palette was carefully chosen to create a pleasant and calming visual experience for users.",
  },
  {
    title: "Brilliant Cloud Docs Page",
    webLink: "https://cloud-docs.brilliant.com.bd/",
    imgLink: "https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/work/docs.gif",
    subtitle:
      "A streamlined documentation page developed for the Brilliant Cloud Portal, featuring comprehensive information about the services offered, along with valuable guides and tutorials. This minimalist design ensures easy access to all the necessary resources.",
  },
  {
    title: "Price Estimator",
    webLink: "https://bcp.brilliant.com.bd/pricing",
    imgLink:
      "https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/work/priceEstimator.gif",
    subtitle:
      "I have developed an animated price estimator that calculates the cost of a customized package based on the selected core, RAM and additional storage options. The animation is designed to engage users and maintain their interest throughout the entire interaction.",
  },

  {
    title: "S3 connect Application",
    webLink:
      "https://play.google.com/store/apps/details?id=com.brilliant.connect.com.bd&hl=en&gl=US&pli=1",
    imgLink:
      "https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/work/s3-connect.gif",
    subtitle:
      "Worked on the frontend of a storage application built using React and Material UI, which is tailored for mobile devices and showcases a clean and minimalist user interface. This is rendered in the Brilliant Connect Mobile app as part of their extended services. ",
  },
  {
    title: "Product Page for Brilliant Cloud",
    webLink: "https://staging.brilliant.com.bd/loadbalancer-product",
    imgLink:
      "https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/work/productPage.gif",
    subtitle:
      "The product page has been carefully crafted to display a comprehensive range of products and services offered by the Brilliant Cloud Portal. A uniform layout has been implemented across all products to ensure consistency. The user interface is both straightforward and captivating, striking a balance between simplicity and appeal.  Moreover, the code has been structured neatly and extensively reused to maintain cleanliness and efficiency.This project is still under work, so the product page can only be viewed on the dev page of brilliant cloud.",
  },
  {
    title: "Admin Portal of Brilliant Cloud",
    webLink: "https://ca.brilliant.com.bd/",
    imgLink:
      "https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/work/admin-portal.gif",
    subtitle:
      "I enhanced the user interface (UI) and user experience (UX) of specific sections within the admin portal utilized by Brilliant Cloud. This involved redesigning those areas to make them more visually appealing and user-friendly. Additionally, I restructured the codebase, eliminating instances of duplicated code to improve maintainability and efficiency.",
  },
];

export const skills = [
  {
    name: "JavaScript",
    logo: <IoLogoJavascript className="icon"></IoLogoJavascript>,
  },
  { name: "React.js", logo: <GrReactjs className="icon"></GrReactjs> },

  {
    name: "Docker",
    logo: <GrDocker className="icon"></GrDocker>,
  },
  {
    name: "Python",
    logo: <IoLogoPython className="icon"></IoLogoPython>,
  },
  {
    name: "Tailwind",
    logo: <TbBrandTailwind className="icon"></TbBrandTailwind>,
  },
  {
    name: "Next.js",
    logo: <TbBrandNextjs className="icon text-sm"></TbBrandNextjs>,
  },
  {
    name: "Java",
    logo: <FaJava className="icon"></FaJava>,
  },
  {
    name: "CSS",
    logo: <TbBrandCss3 className="icon"></TbBrandCss3>,
  },
  {
    name: "Flutter",
    logo: <TbBrandFlutter className="icon"></TbBrandFlutter>,
  },
  {
    name: "HTML",
    logo: <TbHtml className="icon"></TbHtml>,
  },
  {
    name: "Oracle SQL",
    logo: <GrOracle className="icon"></GrOracle>,
  },
  {
    name: "Bootstrap",
    logo: <TbBrandBootstrap className="icon"></TbBrandBootstrap>,
  },
  {
    name: "Markdown",
    logo: <AiFillFileMarkdown className="icon"></AiFillFileMarkdown>,
  },
  {
    name: "Material UI",
    logo: <SiMui className="icon"></SiMui>,
  },
];
