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
  TypeScript = "TypeScript",
  Drupal = "Drupal",
  Twig = "Twig",
  Bootstrap = "Bootstrap",
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
    name: "PHConvert",

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
  // ----------------------------------------------
  {
    id: "indiescreening",
    name: "IndieScreening",

    description:
      "A dedicated platform designed to provide independent filmmakers with a stage to exhibit and share their creative works.",
    goal: "The client's imperative was the creation of a top-tier website that would serve as both a showcase for their own cinematic endeavors and a collaborative platform for fellow filmmakers.\nThe website's multifaceted functionality encompassed not only the exhibition of the client's work and enabling user purchases but also providing a space for other filmmakers to spotlight their creations.\nKey functionalities included robust payment processing capabilities to facilitate film sales and the incorporation of a multi-role user system to accommodate various user categories, ensuring a seamless and inclusive platform experience for both filmmakers and film enthusiasts alike.",

    startDate: "October 2020",
    endDate: "August 2021",

    stack: [
      getStackItem(
        StackItem.Drupal,
        "Drupal 9 emerged as the preferred Content Management System (CMS) for the website, primarily owing to its remarkable flexibility and extensive library of modules capable of augmenting its capabilities.\nAt the core of the website's functionality lies Drupal Commerce, a pivotal plugin that underpins the majority of its features.\nAdditionally, custom modules were thoughtfully developed to address unique scenarios and specific demands, ensuring a tailored and comprehensive solution for the platform."
      ),
      getStackItem(
        StackItem.Twig,
        "Twig was the natural choice for crafting the website's theme, given its status as the default templating engine for Drupal.\nThis decision facilitated the creation of a theme characterized by its cleanliness, ease of maintenance, and exceptional modularity, aligning seamlessly with one of the project's core requirements."
      ),
      getStackItem(
        StackItem.Bootstrap,
        "Bootstrap was instrumental in crafting a responsive, mobile-first theme for the website, characterized by its ease of maintenance and extensibility.\nThe adoption of a well-established framework such as Bootstrap alleviated the need for extensive design considerations, enabling a shift in focus towards the implementation of robust functionality within the website."
      ),
      getStackItem(
        StackItem.TypeScript,
        "TypeScript was strategically employed within the custom modules to imbue the codebase with a layer of type safety, enhancing maintainability.\nThis decision not only ensured code robustness but also afforded the flexibility to harness the latest JavaScript features, further enhancing the overall quality and future-proofing of the project."
      ),
      getStackItem(
        StackItem.MySQL,
        "MySQL was strategically chosen as the optimal database solution for this project, owing to its widespread acclaim and remarkable proficiency in the management and storage of data.\nThis selection seamlessly harmonized with the project's prerequisites, guaranteeing a resilient infrastructure for data storage and retrieval, thereby fostering scalability and maintainability.\nIt is worth noting that this decision is further bolstered by Drupal's strong compatibility and support for MySQL, reinforcing the synergy between our chosen technology stack and the website's platform."
      ),
      getStackItem(
        StackItem.PayPal,
        "PayPal emerged as the preferred payment gateway for the website, in line with the client's preference.\nIts selection was driven by its seamless integration capabilities with Drupal Commerce.\nTo facilitate this integration, a custom module was meticulously developed, ensuring a smooth and secure payment processing experience for users engaging with the platform."
      ),
    ],
    review: {
      client: "Dale Okorodudu, MD",
      review: "Definitely hire Zvonimir! Wonderful. I plan to rehire him!",
    },
    url: "https://indiescreening.com",
  },
].reverse(); // reverse to display the most recent project first

export function getProject(id: string): Project {
  const project = projects.find((project) => project.id === id);

  if (!project) {
    throw new Error(`Project with id "${id}" not found`);
  }

  return project;
}
