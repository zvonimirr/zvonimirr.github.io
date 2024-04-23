import { getStackItem } from "./utils";

interface ProjectPeek {
  id: string;
  name: string;
}

interface ProjectReview {
  client: string;
  review: string;
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

  url?: string;
}

// Projects. Stack follows the following format:
// - cms
// - frameworks
// - languages
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
        "PHP",
        "Given the website's existing PHP foundation, I elected to maintain continuity by retaining PHP as the development language.\nTo address the prevalent issues stemming from deprecated functions and widespread errors due to the upgrade to PHP 7, I performed a comprehensive code revision.\nIn addition, I introduced a newly designed admin dashboard, facilitating effortless voting processes for both the client and judges."
      ),
      getStackItem(
        "JavaScript",
        "At the outset of my engagement with the website, its JavaScript functionality was minimal.\nI embarked on enhancing the user experience by introducing elements of interactivity, including the incorporation of a countdown timer and the implementation of a gallery feature."
      ),
      getStackItem(
        "MySQL",
        "While the website had previously employed MySQL, a code upgrade was necessary to incorporate the latest version of the MySQLi extension, as the prior version had become deprecated.\nAdditionally, I conducted database optimization measures by eliminating extraneous tables and enhancing security by transitioning from plaintext password storage to the more secure practice of password hashing."
      ),
      getStackItem(
        "MaterializeCSS",
        "Materialize was adopted for the admin dashboard's frontend interface due to its user-friendly nature and capacity to deliver a visually streamlined appearance.\nThis choice expedited the creation of a responsive user interface, a critical consideration given that the dashboard was intended for use by individuals on mobile devices."
      ),
      getStackItem(
        "PayPal",
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
        "React",
        "Given the absence of a need for server-side logic, I opted for React to develop the frontend.\nThis choice proved highly advantageous, particularly because the application entailed the creation of multiple forms, each sharing common components but demanding distinct logic."
      ),
      getStackItem(
        "AntDesign",
        "In the absence of specific design guidelines or client-provided requirements, I made the deliberate choice to employ Ant Design for the user interface.\nThis strategic decision enabled me to streamline the development process, shifting the emphasis away from design intricacies and towards the implementation of robust functionality."
      ),
      getStackItem(
        "PayPal",
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
        "PHP",
        "In response to the client's desire for a user-friendly and accessible tool, I opted to develop it as a web application.\nLeveraging the client's existing hosting infrastructure, which provided support for PHP, I selected PHP as the backend technology.\nGiven the tool's relatively simple structure with only a few pages, I made the decision not to employ a framework, ensuring a streamlined and efficient development process."
      ),
      getStackItem(
        "JavaScript",
        "JavaScript played a pivotal role in enhancing the user experience of the application.\nIt was employed to introduce interactive elements, including the display of a loading indicator to signify ongoing file conversion processes.\nAdditionally, JavaScript facilitated the seamless resetting of the form after successful file conversion, further optimizing the overall usability of the tool."
      ),
      getStackItem(
        "MaterializeCSS",
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
        "Drupal",
        "Drupal 9 emerged as the preferred Content Management System (CMS) for the website, primarily owing to its remarkable flexibility and extensive library of modules capable of augmenting its capabilities.\nAt the core of the website's functionality lies Drupal Commerce, a pivotal plugin that underpins the majority of its features.\nAdditionally, custom modules were thoughtfully developed to address unique scenarios and specific demands, ensuring a tailored and comprehensive solution for the platform."
      ),
      getStackItem(
        "Twig",
        "Twig was the natural choice for crafting the website's theme, given its status as the default templating engine for Drupal.\nThis decision facilitated the creation of a theme characterized by its cleanliness, ease of maintenance, and exceptional modularity, aligning seamlessly with one of the project's core requirements."
      ),
      getStackItem(
        "Bootstrap",
        "Bootstrap was instrumental in crafting a responsive, mobile-first theme for the website, characterized by its ease of maintenance and extensibility.\nThe adoption of a well-established framework such as Bootstrap alleviated the need for extensive design considerations, enabling a shift in focus towards the implementation of robust functionality within the website."
      ),
      getStackItem(
        "TypeScript",
        "TypeScript was strategically employed within the custom modules to imbue the codebase with a layer of type safety, enhancing maintainability.\nThis decision not only ensured code robustness but also afforded the flexibility to harness the latest JavaScript features, further enhancing the overall quality and future-proofing of the project."
      ),
      getStackItem(
        "MySQL",
        "MySQL was strategically chosen as the optimal database solution for this project, owing to its widespread acclaim and remarkable proficiency in the management and storage of data.\nThis selection seamlessly harmonized with the project's prerequisites, guaranteeing a resilient infrastructure for data storage and retrieval, thereby fostering scalability and maintainability.\nIt is worth noting that this decision is further bolstered by Drupal's strong compatibility and support for MySQL, reinforcing the synergy between our chosen technology stack and the website's platform."
      ),
      getStackItem(
        "PayPal",
        "PayPal emerged as the preferred payment gateway for the website, in line with the client's preference.\nIts selection was driven by its seamless integration capabilities with Drupal Commerce.\nTo facilitate this integration, a custom module was meticulously developed, ensuring a smooth and secure payment processing experience for users engaging with the platform."
      ),
    ],
    review: {
      client: "Dale Okorodudu, MD",
      review: "Definitely hire Zvonimir! Wonderful. I plan to rehire him!",
    },
    url: "https://indiescreening.com",
  },
  // ----------------------------------------------
  {
    id: "normod-order-tracker",
    name: "Normod Order Tracker",

    description:
      "A comprehensive order tracking system designed for a business operating in Istanbul, Turkey, featuring an administrative dashboard tailored for efficient courier management.",
    goal: "The client's project encompassed the development of a user-friendly website to cater to customers seeking order tracking capabilities, alongside an administrative dashboard tailored for efficient order management by couriers.\nWith a target audience in Turkey, the website was designed to be in the Turkish language, and great emphasis was placed on delivering a clean and intuitive user interface to enhance usability.",

    startDate: "August 2021",
    endDate: "September 2021",

    stack: [
      getStackItem(
        "NextJS",
        "In pursuit of a contemporary and high-performance website, I made the strategic choice to employ Next.js for the frontend development.\nThis framework provided the ideal foundation for crafting a swift, SEO-optimized website while simultaneously enhancing the developer experience, ensuring that the final product met the client's requirements for modernity and speed."
      ),
      getStackItem(
        "TypeScript",
        "Given the inherent advantages of Next.js, TypeScript was a natural and prudent selection to enforce type safety and streamline the refactoring process.\nTo enhance code management and maintain the integration of style and logic, I incorporated Styled Components for styling, facilitating the cohesiveness of both aspects within a single file and ensuring effective code separation."
      ),
      getStackItem(
        "Redis",
        "Redis played a pivotal role in the optimization of the website's performance.\nBy implementing Redis to cache data sourced from the Google Sheets API, the frequency of API requests was significantly reduced.\nThis caching mechanism not only alleviated the strain on external API resources but also led to noticeable improvements in the website's overall responsiveness and speed."
      ),
      getStackItem(
        "Firebase",
        "Firebase was predominantly harnessed for two key functions within the project.\nFirstly, it served as a robust authentication solution, ensuring secure user access to the platform.\nAdditionally, Firebase was employed for the storage of images captured by couriers during the order delivery process.\nThe decision to utilize Firebase was further bolstered by its reputation for offering an expansive and accommodating free tier, aligning perfectly with the project's requirements."
      ),
      getStackItem(
        "GoogleSheets",
        "Building upon the client's existing workflow, I seamlessly integrated the Google Sheets API into the project to fetch order data.\nThis strategic choice not only expedited development but also ensured that the website remained fast and user-friendly.\nImportantly, it obviated the need for data migration to a traditional database, preserving the client's preferred data management system while achieving the desired functionality."
      ),
    ],
    url: "https://takip.normod.com",
  },
  // ----------------------------------------------
  {
    id: "seo-scraper",
    name: "SEO Scraper",

    description:
      "An application designed for the extraction of search results from various search engines and subsequent exportation to a CSV file, featuring a sorting mechanism based on relevance.",
    goal: "The client possessed a list of keywords and expressed the need to determine the ranking of their website for each keyword, as well as the rankings of their competitors.\nGiven the large volume of keywords, the client sought automation for this process.\nInitially, a Python script was used for this purpose, requiring manual execution.\nI improved the workflow by developing a contemporary application that automated the entire process, streamlining all necessary tasks.",

    startDate: "April 2022",
    endDate: "April 2022",

    stack: [
      getStackItem(
        "React",
        "React was employed for the user interface (UI) development.\nIn keeping with the client's satisfaction with the UI from the previous iteration, I retained its design.\nAdditionally, the choice of React was motivated by its inherent reusability, which facilitated the creation of a component for the search results that could be easily reused throughout the application."
      ),
      getStackItem(
        "NodeJS",
        "Node.js was implemented for the backend infrastructure.\nThe rationale behind this choice stemmed from the absence of an API in the previous version, which relied on a Python script requiring manual execution for file processing.\nIn an effort to automate this process, I introduced a Node.js server that handled file processing automatically. Additionally, this decision ensured language consistency between the frontend and backend, promoting code uniformity."
      ),
      getStackItem(
        "TypeScript",
        "The prior iteration was constructed with vanilla JavaScript, presenting challenges in terms of maintainability.\nTo address this, I opted for TypeScript, leveraging its robust type safety features.\nThis choice not only improved code maintainability but also provided the flexibility to undertake refactoring efforts with ease when required."
      ),
      getStackItem(
        "MySQL",
        "The decision to opt for MySQL the database solution was made with careful consideration, taking into account its extensive popularity and its ability to effectively store and manage reusable crawling templates.\nThis choice aligned seamlessly with the project's requirements, ensuring robust data storage and retrieval capabilities while enhancing scalability and maintainability."
      ),
    ],
  },
  // ----------------------------------------------
  {
    id: "quantum",
    name: "Quantum - Job Application & Dashboard",

    description:
      "A web-based employment application platform featuring a user-friendly dashboard for clients to efficiently oversee and manage submitted job applications.",
    goal: "The client sought a website solution enabling job seekers to submit applications seamlessly, complemented by an integrated dashboard for streamlined application management.\nThe initial template selection from ThemeForest was deemed suitable, but adjustments were required to align with the company's branding palette.",

    startDate: "April 2022",
    endDate: "April 2022",

    stack: [
      getStackItem(
        "React",
        "React was employed for the frontend development due to its compatibility with the preexisting template, facilitating efficient color customization and the seamless creation of a versatile multi-step form.\nAdditionally, Clerk was integrated to enable social login functionality, enhancing user convenience by automatically populating certain user data."
      ),
      getStackItem(
        "NextJS",
        "Next.js was employed for the development of the dashboard.\nWhile the client's chosen template was originally built with React, I opted to utilize Next.js, harnessing its server-side rendering capabilities.\nThis choice facilitated efficient retrieval of job applications from the database and the implementation of secure authentication via NextAuth.js."
      ),
      getStackItem(
        "Bootstrap",
        "Both templates were already utilizing Bootstrap, obviating the necessity for alterations in this regard.\nThe process of color customization proved straightforward, as it entailed the modification of variables within the SCSS files."
      ),
      getStackItem(
        "SCSS",
        "While the templates possessed a pre-existing style foundation, certain adjustments were deemed imperative to enhance the overall user experience.\nThe incorporation of animations emerged as a particularly beneficial decision, imbuing the website with a contemporary and engaging ambiance."
      ),
      getStackItem(
        "NodeJS",
        "To maintain consistency in the technology stack between the frontend and backend, I opted for Node.js for the backend development.\nThis choice facilitated the seamless creation of an API for tasks such as file uploads and database interaction, ensuring a harmonious and efficient system."
      ),
      getStackItem(
        "MongoDB",
        "MongoDB was selected as the database solution, primarily due to the form's extensive use of dynamic fields and the client's requirement for the effortless addition of new fields.\nLeveraging MongoDB enabled the consolidation of data within a single collection, alleviating concerns related to dynamic data length, such as previous work experience entries."
      ),
    ],
  },
].reverse(); // reverse to display the most recent project first

export function getProject(id: string): Project {
  const project = projects.find((project) => project.id === id);

  if (!project) {
    throw new Error(`Project with id "${id}" not found`);
  }

  return project;
}
