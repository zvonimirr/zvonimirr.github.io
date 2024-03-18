import { getStackItem } from "./utils";

interface ProjectPeek {
  id: string;
  name: string;
}

interface ProjectReview {
  client: string;
  review: string;
}

export enum StackItem {
  PHP = "PHP",
  JavaScript = "JavaScript",
  MySQL = "MySQL",
  MaterializeCSS = "MaterializeCSS",
  PayPal = "PayPal",
  React = "React",
  AntDesign = "AntDesign",
}

export interface ProjectStackItem {
  icon: string;
  name: string;
  explanation: string;
}

interface Project extends ProjectPeek {
  description: string;
  goal: string;

  startDate: string;
  endDate: string;

  stack: ProjectStackItem[];
  review?: ProjectReview;

  url: string;
}

// Projects. Stack follows the following format:
// - languages
// - frameworks
// - libraries
// - databases
// - tools
// - other
export const projects: Project[] = [
  {
    id: "msp-contest-2017",
    name: "Miami Street Photography Contest 2017",

    description:
      "A web platform dedicated to facilitating a street photography contest based in Miami, Florida.",
    goal: "The website had been previously established to support the contest; however, following an upgrade to PHP 7, it encountered functionality issues.\nMy assignment entailed resolving these issues, as well as implementing additional features as per the client's requirements.",

    startDate: "June 2017",
    endDate: "August 2017",

    stack: [
      getStackItem(
        StackItem.PHP,
        "Given the website's existing PHP foundation, I elected to maintain continuity by retaining PHP as the development language.\nTo address the prevalent issues stemming from deprecated functions and widespread errors due to the upgrade to PHP 7, I performed a comprehensive code revision.\nIn addition, I introduced a newly designed admin dashboard, facilitating effortless voting processes for both the client and judges."
      ),
      getStackItem(
        StackItem.JavaScript,
        "At the outset of my engagement with the website, its JavaScript functionality was minimal.\nI embarked on enhancing the user experience by introducing elements of interactivity, including the incorporation of a countdown timer and the implementation of a gallery feature."
      ),
      getStackItem(
        StackItem.MySQL,
        "While the website had previously employed MySQL, a code upgrade was necessary to incorporate the latest version of the MySQLi extension, as the prior version had become deprecated.\nAdditionally, I conducted database optimization measures by eliminating extraneous tables and enhancing security by transitioning from plaintext password storage to the more secure practice of password hashing."
      ),
      getStackItem(
        StackItem.MaterializeCSS,
        "Materialize was adopted for the admin dashboard's frontend interface due to its user-friendly nature and capacity to deliver a visually streamlined appearance.\nThis choice expedited the creation of a responsive user interface, a critical consideration given that the dashboard was intended for use by individuals on mobile devices."
      ),
      getStackItem(
        StackItem.PayPal,
        "The client had expressed a preference for PayPal as the payment gateway for the website.\nI integrated PayPal's REST API, enabling the website to accept payments for contest submissions."
      ),
    ],
    review: {
      client: "Juan",
      review:
        "I highly recommend Zvonimir.\nHe upgraded our website in a very timely manner and it works great.\nHe is a highly knowledgeable and skilled developer and I would recommend him.",
    },

    url: "https://miamistreetphotographyfestival.org",
  },
  // ----------------------------------------------
  {
    id: "raise-your-division",
    name: "Raise Your Division",

    description:
      "An online League of Legends boosting calculator that empowers users to estimate and facilitate boost purchases directly through the website.",
    goal: "The client's vision was to create a robust online platform that catered to the vibrant League of Legends gaming community. This envisioned website would serve as a multifaceted tool, allowing users to not only calculate the precise price of boosting services tailored to their specific needs but also seamlessly proceed with secure and convenient transactions right on the platform.",

    startDate: "September 2017",
    endDate: "October 2017",

    stack: [
      getStackItem(
        StackItem.React,
        "Given the absence of a need for server-side logic, I opted for React to develop the frontend.\nThis choice proved highly advantageous, particularly because the application entailed the creation of multiple forms, each sharing common components but demanding distinct logic."
      ),
      getStackItem(
        StackItem.AntDesign,
        "In the absence of specific design guidelines or client-provided requirements, I made the deliberate choice to employ Ant Design for the user interface.\nThis strategic decision enabled me to streamline the development process, shifting the emphasis away from design intricacies and towards the implementation of robust functionality."
      ),
      getStackItem(
        StackItem.PayPal,
        "The client expressed a preference for PayPal as the payment gateway, leading me to integrate it using their JavaScript SDK.\nThis choice was endorsed by PayPal themselves, reflecting its reliability and ease of integration, ensuring a seamless payment experience within the application."
      ),
    ],

    url: "https://raiseyourdivision.com",
  },
  // ----------------------------------------------
  {
    id: "ph-convert",
    name: "PH Convert",

    description:
      "An application designed to facilitate the conversion of Excel templates into a file format compliant with the requirements of the Filipino government for tax-related purposes.",
    goal: "The client had previously developed Excel templates aimed at aiding businesses and individuals in monitoring their sales, purchases, and inventory.\nHowever, to align with government regulations, these records needed to be converted into a specific file format mandated by the Filipino government.\nGiven the absence of an existing solution, I was entrusted with the responsibility of creating a custom tool to bridge this crucial compliance gap.",

    startDate: "October 2020",
    endDate: "October 2020",

    stack: [
      getStackItem(
        StackItem.PHP,
        "In response to the client's desire for a user-friendly and accessible tool, I opted to develop it as a web application.\nLeveraging the client's existing hosting infrastructure, which provided support for PHP, I selected PHP as the backend technology.\nGiven the tool's relatively simple structure with only a few pages, I made the decision not to employ a framework, ensuring a streamlined and efficient development process."
      ),
      getStackItem(
        StackItem.JavaScript,
        "JavaScript played a pivotal role in enhancing the user experience of the application.\nIt was employed to introduce interactive elements, including the display of a loading indicator to signify ongoing file conversion processes.\nAdditionally, JavaScript facilitated the seamless resetting of the form after successful file conversion, further optimizing the overall usability of the tool."
      ),
      getStackItem(
        StackItem.MaterializeCSS,
        "Materialize was the UI framework of choice due to its user-friendly nature and capacity to deliver a clean and aesthetically pleasing design.\nThis selection expedited the development process by facilitating the creation of a responsive user interface, a pivotal element given the application's need to cater to users across various devices and screen sizes."
      ),
    ],
    review: {
      client: "Jennifer",
      review:
        "His knowledge and skills are incredibly valuable to any web development team.\nKudos for his hard work and excellent communication.",
    },
    url: "https://phconvert.com",
  },
].reverse(); // reverse to display the most recent project first

export function getProject(id: string): Project {
  const project = projects.find((project) => project.id === id);

  if (!project) {
    throw new Error(`Project with id "${id}" not found`);
  }

  return project;
}
