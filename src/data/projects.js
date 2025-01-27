import scapewalkers from "./../assets/images/home/scapewalkers.png";
import lms from "./../assets/images/home/lms.jpg";
export const projects = [
  {
    id: "01",
    name: "Scapewalkers",
    about: `
      Designed and developed modern, sustainable architectural solutions for residential and commercial spaces.
      Implemented 3D visualization tools to provide clients with interactive design previews.
      Developed an automated project management system to streamline architectural workflows.
      Integrated eco-friendly building materials and energy-efficient designs into projects.
      Created a digital portfolio system showcasing completed projects and ongoing developments.
      `,
    image: scapewalkers,
    tools: "Typescript, React JS, Tailwind",
    link: "https://www.scapewalkers.com/",
  },
  {
    id: "02",
    name: "LMS",
    about: `
      Created a learning management system for educators and students
      Implemented an online classroom with realtime feed
      Implemented a system for the creation and submission of tasks
      Implemented a video call feature where users can create video meetings and invite other
      users
      `,
    image: lms,
    tools:
      "Node Js, Typescript, Express JS, Next JS, Redis, Docker, MySql, SocketIO",
    link: "https://lms-client-eight.vercel.app/",
  },
];
