import gbese from "./../assets/images/home/gbese.png";
import nowalls from "./../assets/images/home/nowalls.png";
export const projects = [
  {
    id: "01",
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
  {
    id: "02",
    name: "NoWalls",
    about:
      `
      Created an online classroom for teachers and students
      Implemented file upload and download
      Implemented assignment and submission functionality 
      Implemented a feature that allows users to join or create a class
      Technologies used: Graphql, Typescript, Node JS, Express JS, Next JS, Mongodb
      `,
    image: nowalls,
    tools:
      "Typescript, Next.js, Css, TailwindCSS, Swiper.js, Firebase Auth API, Recoil, TMDB(The movie database) API, Git, Vercel.",
    link: "https://nowalls.vercel.app",
    githubLink: "https://github.com/Bolu1/no-walls-server",
  },
];