type TechStack = {
  id: string;
  icon: string;
  name: string;
  description: string;
  class?: string;
};

type Project = {
  title: string;
  description: string;
  goal: string;
  image: string;
  url: string;
  projectUrl: string;
  date: Date;
  techStack: TechStack[];
};

export const projects: Project[] = [
  {
    title: "Raise Your Division",
    description:
      "A League of Legends boosting calculator which allows users to purchase the boost directly from the website.",
    goal: "The client wanted to have a website where users can calculate the price of a boost and purchase it directly from the website.",
    image: "/images/projects/raise-your-division.png",
    url: "raise-your-division",
    projectUrl: "https://raiseyourdivision.com",
    date: new Date("2017-09-01"),
    techStack: [
      {
        id: "react",
        icon: "logos:react",
        name: "React",
        description:
          "Since the app didn't require any server-side logic, I decided to use React for the frontend.\nIt proved to be a great decision as the app required multiple forms with similar components but different logic.",
      },
      {
        id: "antd",
        icon: "simple-icons:antdesign",
        name: "Ant Design",
        description:
          "As the client didn't provide any design, nor did he have any specific requirements, I decided to use Ant Design for the UI.\nIt allowed me to focus less on the design itself and more on the functionality.",
      },
      {
        id: "paypal",
        icon: "logos:paypal",
        name: "PayPal JS SDK",
        description:
          "The client wanted to use PayPal as the payment gateway, so I used their JS SDK to integrate it with the app.\nIt was recommended by PayPal themselves, and it was easy to integrate.",
      },
    ],
  },
  {
    title: "WhatsApp Link Generator",
    description:
      "A tool to generate WhatsApp links with custom messages and phone numbers.",
    goal: "The client wanted to have a tool where users can generate WhatsApp links with custom messages and phone numbers, which they can then share with their friends.",
    image: "/images/projects/wa-link-generator.png",
    url: "wa-link-generator",
    projectUrl: "https://wa-tip.com",
    date: new Date("2017-12-01"),
    techStack: [
      {
        id: "wordpress",
        name: "WordPress",
        icon: "mdi:wordpress",
        description:
          "The client already had a WordPress website, so I decided to use WordPress for the tool as well.\nI created a custom plugin for the tool, which allowed me to easily integrate it with the website.",
      },
      {
        id: "whatsapp",
        name: "WhatsApp API",
        icon: "dashicons:whatsapp",
        description:
          "WhatsApp has an API that allows you to send messages to a specific number.\nI used this API to generate the links, along with a QR code that users can scan to send the message.",
        class: "text-green-500",
      },
    ],
  },
  {
    title: "PHConvert",
    description:
      "A tool to convert Excel templates to a file format used by the Filipino government for tax purposes",
    goal: "The client had created Excel templates to help companies and individuals to keep track of their sales, purchases and inventory, however, the government required them to be in a specific file format.\nSince no tool existed I was tasked with creating one.",
    image: "/images/projects/phconvert.png",
    url: "phconvert",
    projectUrl: "https://ilovebir.com",
    date: new Date("2020-10-01"),
    techStack: [
      {
        id: "php",
        name: "PHP",
        icon: "logos:php",
        description:
          "The client wanted the tool to be a web app, so it could be used easily by anyone.\nSince the client already had bought hosting with PHP support, I decided to use PHP for the backend.\nSince the app only had few pages, I decided against using a framework.",
      },
      {
        id: "js",
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "JavaScript was used to provide some interactivity to the app, such as showing a loading indicator when the file is being converted and resetting the form after the file is converted.",
      },
      {
        id: "materialize",
        name: "Materialize",
        icon: "logos:materializecss",
        description:
          "Materialize was used for the UI, as it was easy to use and provided a clean look.\nIt allowed me to quickly create a responsive UI, which was important as the app was used by people on their phones.\nBy using Materialize I focused less on CSS and more on the backend logic.",
      },
    ],
  },
  {
    title: "IndieScreening",
    description: "A platform for indie filmmakers to showcase their work.",
    goal: "The client needed a high-quality website to showcase his work and allow users to purchase his films, as well as allow other filmmakers to showcase their work as well.\nThe website needed to handle payments, as well as have multiple user roles.",
    image: "/images/projects/indiescreening.png",
    url: "indiescreening",
    projectUrl: "https://indiescreening.com",
    date: new Date("2020-10-01"),
    techStack: [
      {
        id: "drupal",
        name: "Drupal 9",
        icon: "logos:drupal-icon",
        description:
          "Drupal 9 was chosen as the CMS for the website because of its flexibility and the fact that it has a lot of modules that can be used to extend its functionality.\nDrupal Commerce is the main plugin that powers most of the website along with some custom modules to handle edge-cases and specific requirements.",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Bootstrap was used to create a responsive, mobile-first theme that was easy to maintain and extend.\nA proven framework like Bootstrap allowed me to focus less on the design and more on the functionality.",
      },
      {
        id: "ts",
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "TypeScript was used in the custom modules to provide type safety and make the code easier to maintain.\nIt also allowed me to use the latest JavaScript features.",
      },
      {
        id: "twig",
        name: "Twig",
        icon: "file-icons:twig",
        description:
          "Twig was used to create the theme for the website, as it is the default templating engine for Drupal.\nIt allowed me to create a clean, easy to maintain and highly modular theme which was one of the project requirements.",
        class: "text-green-500",
      },
      {
        id: "paypal",
        name: "PayPal",
        icon: "logos:paypal",
        description:
          "PayPal was used as the payment gateway for the website, as it was the client's preferred payment gateway.\nIt was easy to integrate with Drupal Commerce and a custom module was written for this purpose.",
      },
    ],
  },
  {
    title: "Order Tracker",
    description:
      "An order tracker for a business in Instanbul, Turkey - with an admin dashboard for couriers.",
    goal: "The client needed a website where customers can track their orders, as well as an admin dashboard where couriers can manage their orders.\nThe website needed to be in Turkish and have a clean, easy to use UI.",
    image: "/images/projects/order-tracker.png",
    url: "order-tracker",
    projectUrl: "https://takip.normod.com",
    date: new Date("2021-08-01"),
    techStack: [
      {
        id: "nextjs",
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description:
          "The client was looking for a modern, fast website, so I decided to use Next.js for the frontend.\nIt allowed me to create a fast, SEO-friendly website with a great developer experience.",
      },
      {
        id: "ts",
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "A natural choice for any Next.js project, TypeScript was used to ensure type safety and allow easy refactoring.",
      },
      {
        id: "redis",
        name: "Redis",
        icon: "logos:redis",
        description:
          "Redis was used to cache the data from the Google Sheets API, reducing the number of requests made to the API and improving the performance of the website.",
      },
      {
        id: "firebase",
        name: "Firebase",
        icon: "logos:firebase",
        description:
          "Firebase was used mainly for authentication, as well as for storing the pictures the couriers took when delivering the orders.\nFirebase is also known for it's generous free tier, which made it a perfect choice for this project.",
      },
      {
        id: "sheets",
        name: "Google Sheets API",
        icon: "simple-icons:googlesheets",
        class: "text-green-500",
        description:
          "The client was already using Google Sheets to manage their orders, so I decided to use the Google Sheets API to fetch the data for the website.\nIt allowed me to create a fast, easy to use website without having to migrate the data to a database.",
      },
    ],
  },
];
