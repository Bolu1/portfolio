import gbese from "./../assets/images/home/gbese.png";
import nowalls from "./../assets/images/home/nowalls.png";
import lms from  "./../assets/images/home/lms.jpg";
export const projects = [
  {
    id: "01",
    name: "LMS",
    about:
      `
      Created a learning management system for educators and students
      Implemented an online classroom with realtime feed
      Implemented a system for the creation and submission of tasks
      Implemented a video call feature where users can create video meetings and invite other
      users
      `,
    image: lms,
    tools: "Node Js, Typescript, Express JS, Next JS, Redis, Docker, MySql, SocketIO",
    link: "https://lms-client-eight.vercel.app/",

  },
  {
    id: "02",
    name: "Gbese",
    about:
      `
      Created a savings web app where users can join and keep money in their wallets
      Integrated a payment processor which users can use to deposit money from their banks
      Implemented a system that allows users to send money to one another within the app 
      Implemented a feature the users can use to send money to any bank account in Nigeria
      Implemented a mailing system that sends user's transfer and account information
      Wrote unit testing using pactum JS
      `,
    image: gbese,
    tools: "Node Js, Typescript, Nest JS, Next JS, Kafka, Redis, Docker, MySql, Pactum JS",
    link: "https://gbese-client.vercel.app/",
    githubLink: "https://github.com/Bolu1/gbese-server",

  },
];