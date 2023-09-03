export type TechStack = {
  id: string;
  icon: string;
  name: string;
  description: string;
  class?: string;
};

export type Project = {
  title: string;
  description: string;
  goal: string;
  image: string;
  url: string;
  startDate: Date;
  endDate: Date;
  techStack: TechStack[];
  projectUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Quantum - Job Application & Dashboard",
    description:
      "A web-based employment application platform featuring a user-friendly dashboard for clients to efficiently oversee and manage submitted job applications.",
    goal: "The client sought a website solution enabling job seekers to submit applications seamlessly, complemented by an integrated dashboard for streamlined application management. The initial template selection from ThemeForest was deemed suitable, but adjustments were required to align with the company's branding palette.",
    image: "/images/projects/quantum.png",
    url: "quantum",
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-08-01"),
    techStack: [
      {
        id: "react",
        icon: "logos:react",
        name: "React",
        description:
          "React was employed for the frontend development due to its compatibility with the preexisting template, facilitating efficient color customization and the seamless creation of a versatile multi-step form. Additionally, Clerk was integrated to enable social login functionality, enhancing user convenience by automatically populating certain user data.",
      },
      {
        id: "nextjs",
        icon: "logos:nextjs-icon",
        name: "Next.js",
        description:
          "Next.js was employed for the development of the dashboard. While the client's chosen template was originally built with React, I opted to utilize Next.js, harnessing its server-side rendering capabilities. This choice facilitated efficient retrieval of job applications from the database and the implementation of secure authentication via NextAuth.js.",
      },
      {
        id: "bootstrap",
        icon: "logos:bootstrap",
        name: "Bootstrap",
        description:
          "Both templates were already utilizing Bootstrap, obviating the necessity for alterations in this regard. The process of color customization proved straightforward, as it entailed the modification of variables within the SCSS files.",
      },
      {
        id: "scss",
        icon: "vscode-icons:file-type-scss",
        name: "SCSS",
        description:
          "While the templates possessed a pre-existing style foundation, certain adjustments were deemed imperative to enhance the overall user experience. The incorporation of animations emerged as a particularly beneficial decision, imbuing the website with a contemporary and engaging ambiance.",
      },
      {
        id: "nodejs",
        icon: "logos:nodejs-icon",
        name: "Node.js",
        description:
          "To maintain consistency in the technology stack between the frontend and backend, I opted for Node.js for the backend development. This choice facilitated the seamless creation of an API for tasks such as file uploads and database interaction, ensuring a harmonious and efficient system.",
      },
      {
        id: "mongodb",
        icon: "vscode-icons:file-type-mongo",
        name: "MongoDB",
        description:
          "MongoDB was selected as the database solution, primarily due to the form's extensive use of dynamic fields and the client's requirement for the effortless addition of new fields. Leveraging MongoDB enabled the consolidation of data within a single collection, alleviating concerns related to dynamic data length, such as previous work experience entries.",
      },
    ],
  },
  {
    title: "SEO Scraper Tool",
    description:
      "An application designed for the extraction of search results from various search engines and subsequent exportation to a CSV file, featuring a sorting mechanism based on relevance.",
    goal: "The client possessed a list of keywords and expressed the need to determine the ranking of their website for each keyword, as well as the rankings of their competitors. Given the large volume of keywords, the client sought automation for this process. Initially, a Python script was used for this purpose, requiring manual execution. I improved the workflow by developing a contemporary application that automated the entire process, streamlining all necessary tasks.",
    image: "/images/projects/seo-scraper.png",
    url: "seo-scraper",
    startDate: new Date("2022-04-01"),
    endDate: new Date("2022-04-01"),
    techStack: [
      {
        id: "react",
        icon: "logos:react",
        name: "React",
        description:
          "React was employed for the user interface (UI) development. In keeping with the client's satisfaction with the UI from the previous iteration, I retained its design. Additionally, the choice of React was motivated by its inherent reusability, which facilitated the creation of a component for the search results that could be easily reused throughout the application.",
      },
      {
        id: "nodejs",
        icon: "logos:nodejs-icon",
        name: "Node.js",
        description:
          "Node.js was implemented for the backend infrastructure. The rationale behind this choice stemmed from the absence of an API in the previous version, which relied on a Python script requiring manual execution for file processing. In an effort to automate this process, I introduced a Node.js server that handled file processing automatically. Additionally, this decision ensured language consistency between the frontend and backend, promoting code uniformity.",
      },
      {
        id: "mysql",
        icon: "logos:mysql-icon",
        name: "MySQL",
        description:
          "The decision to opt for MySQL the database solution was made with careful consideration, taking into account its extensive popularity and its ability to effectively store and manage reusable crawling templates. This choice aligned seamlessly with the project's requirements, ensuring robust data storage and retrieval capabilities while enhancing scalability and maintainability.",
      },
      {
        id: "typescript",
        icon: "logos:typescript-icon",
        name: "TypeScript",
        description:
          "The prior iteration was constructed with vanilla JavaScript, presenting challenges in terms of maintainability. To address this, I opted for TypeScript, leveraging its robust type safety features. This choice not only improved code maintainability but also provided the flexibility to undertake refactoring efforts with ease when required.",
      },
    ],
  },
  {
    title: "Miami Street Photography Contest 2017",
    description:
      "A web platform dedicated to facilitating a street photography contest based in Miami, Florida.",
    goal: "The website had been previously established to support the contest; however, following an upgrade to PHP 7, it encountered functionality issues. My assignment entailed resolving these issues, as well as implementing additional features as per the client's requirements.",
    image: "/images/projects/mspf.png",
    url: "mspf",
    projectUrl: "https://miamistreetphotographyfestival.org",
    startDate: new Date("2017-06-01"),
    endDate: new Date("2017-08-01"),
    techStack: [
      {
        id: "php",
        icon: "logos:php",
        name: "PHP",
        description:
          "Given the website's existing PHP foundation, I elected to maintain continuity by retaining PHP as the development language. To address the prevalent issues stemming from deprecated functions and widespread errors due to the upgrade to PHP 7, I performed a comprehensive code revision. In addition, I introduced a newly designed admin dashboard, facilitating effortless voting processes for both the client and judges.",
      },
      {
        id: "materialize",
        icon: "logos:materializecss",
        name: "Materialize",
        description:
          "Materialize was adopted for the admin dashboard's frontend interface due to its user-friendly nature and capacity to deliver a visually streamlined appearance. This choice expedited the creation of a responsive user interface, a critical consideration given that the dashboard was intended for use by individuals on mobile devices.",
      },
      {
        id: "mysql",
        icon: "logos:mysql-icon",
        name: "MySQL",
        description:
          "While the website had previously employed MySQL, a code upgrade was necessary to incorporate the latest version of the MySQLi extension, as the prior version had become deprecated. Additionally, I conducted database optimization measures by eliminating extraneous tables and enhancing security by transitioning from plaintext password storage to the more secure practice of password hashing.",
      },
      {
        id: "js",
        icon: "logos:javascript",
        name: "JavaScript",
        description:
          "At the outset of my engagement with the website, its JavaScript functionality was minimal. I embarked on enhancing the user experience by introducing elements of interactivity, including the incorporation of a countdown timer and the implementation of a gallery feature.",
      },
      {
        id: "paypal",
        icon: "logos:paypal",
        name: "PayPal",
        description:
          "The preceding developer had implemented a proprietary payment gateway that had ceased functioning. In light of the client's preference and the need for a reliable solution, I opted to integrate PayPal as the chosen payment gateway for the website.",
      },
    ],
  },
  {
    title: "Dynamic Swipeable Cards",
    description:
      "A multilingual testimonial website featuring a user-friendly interface with swipeable card components.",
    goal: "The client had an existing testimonial website with static content that lacked interactivity. Her request was to implement swipeable card elements that supported multiple languages, with user-selectable language options.",
    image: "/images/projects/stacked-cards.png",
    url: "dynamic-swipeable-cards",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2020-12-01"),
    techStack: [
      {
        id: "react",
        icon: "logos:react",
        name: "React",
        description:
          "React was chosen for the frontend development due to the consistent visual design of the cards, despite variations in their content. This choice facilitated the creation of a reusable card component, streamlining the implementation of all card instances.",
      },
      {
        id: "semantic",
        icon: "logos:semantic-ui",
        name: "Semantic UI",
        description:
          "Semantic UI was the selected framework due to its visually appealing and well-structured design, which also featured readily available React components. This expedited the development process, resulting in a clean and efficient user interface, ultimately saving time for both myself and the client.",
      },
      {
        id: "php",
        icon: "logos:php",
        name: "PHP",
        description:
          "PHP was employed for backend development in alignment with the client's existing PHP-based website infrastructure. The testimonial cards were stored in a CSV file, categorized into Dutch and French language sections for efficient management.",
      },
    ],
  },
  {
    title: "Raise Your Division",
    description:
      "An online League of Legends boosting calculator that empowers users to estimate and facilitate boost purchases directly through the website.",
    goal: "The client's vision was to create a robust online platform that catered to the vibrant League of Legends gaming community. This envisioned website would serve as a multifaceted tool, allowing users to not only calculate the precise price of boosting services tailored to their specific needs but also seamlessly proceed with secure and convenient transactions right on the platform.",
    image: "/images/projects/raise-your-division.png",
    url: "raise-your-division",
    projectUrl: "https://raiseyourdivision.com",
    startDate: new Date("2017-09-01"),
    endDate: new Date("2017-10-01"),
    techStack: [
      {
        id: "react",
        icon: "logos:react",
        name: "React",
        description:
          "Given the absence of a need for server-side logic, I opted for React to develop the frontend. This choice proved highly advantageous, particularly because the application entailed the creation of multiple forms, each sharing common components but demanding distinct logic.",
      },
      {
        id: "antd",
        icon: "simple-icons:antdesign",
        name: "Ant Design",
        description:
          "In the absence of specific design guidelines or client-provided requirements, I made the deliberate choice to employ Ant Design for the user interface. This strategic decision enabled me to streamline the development process, shifting the emphasis away from design intricacies and towards the implementation of robust functionality.",
      },
      {
        id: "paypal",
        icon: "logos:paypal",
        name: "PayPal JS SDK",
        description:
          "The client expressed a preference for PayPal as the payment gateway, leading me to integrate it using their JavaScript SDK. This choice was endorsed by PayPal themselves, reflecting its reliability and ease of integration, ensuring a seamless payment experience within the application.",
      },
    ],
  },
  {
    title: "WhatsApp Link Generator",
    description:
      "A utility designed for the generation of WhatsApp links featuring personalized messages and specified phone numbers.",
    goal: "The client's vision centered around the creation of a user-friendly tool that would empower individuals to generate WhatsApp links embedded with personalized messages and designated phone numbers. This tool would facilitate easy sharing of these custom links among friends and contacts.",
    image: "/images/projects/wa-link-generator.png",
    url: "wa-link-generator",
    projectUrl: "https://wa-tip.com",
    startDate: new Date("2017-12-01"),
    endDate: new Date("2017-12-01"),
    techStack: [
      {
        id: "wordpress",
        name: "WordPress",
        icon: "mdi:wordpress",
        description:
          "Given the client's existing WordPress website, I made the strategic decision to align the tool with the same platform. To achieve this, I developed a custom WordPress plugin tailored specifically for the tool's functionality. This approach streamlined the integration process, seamlessly incorporating the tool within the website's ecosystem.",
      },
      {
        id: "whatsapp",
        name: "WhatsApp API",
        icon: "dashicons:whatsapp",
        description:
          "To facilitate the generation of WhatsApp links and enhance user interaction, I harnessed the WhatsApp API, which enables the transmission of messages to designated phone numbers. By leveraging this API, I not only created the links but also generated corresponding QR codes. These QR codes offered users a convenient means to initiate message sending by simply scanning the code.",
        class: "text-green-500",
      },
    ],
  },
  {
    title: "PHConvert",
    description:
      "An application designed to facilitate the conversion of Excel templates into a file format compliant with the requirements of the Filipino government for tax-related purposes.",
    goal: "The client had previously developed Excel templates aimed at aiding businesses and individuals in monitoring their sales, purchases, and inventory. However, to align with government regulations, these records needed to be converted into a specific file format mandated by the Filipino government. Given the absence of an existing solution, I was entrusted with the responsibility of creating a custom tool to bridge this crucial compliance gap.",
    image: "/images/projects/phconvert.png",
    url: "phconvert",
    projectUrl: "https://ilovebir.com",
    startDate: new Date("2020-10-01"),
    endDate: new Date("2020-10-01"),
    techStack: [
      {
        id: "php",
        name: "PHP",
        icon: "logos:php",
        description:
          "In response to the client's desire for a user-friendly and accessible tool, I opted to develop it as a web application. Leveraging the client's existing hosting infrastructure, which provided support for PHP, I selected PHP as the backend technology. Given the tool's relatively simple structure with only a few pages, I made the decision not to employ a framework, ensuring a streamlined and efficient development process.",
      },
      {
        id: "js",
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "JavaScript played a pivotal role in enhancing the user experience of the application. It was employed to introduce interactive elements, including the display of a loading indicator to signify ongoing file conversion processes. Additionally, JavaScript facilitated the seamless resetting of the form after successful file conversion, further optimizing the overall usability of the tool.",
      },
      {
        id: "materialize",
        name: "Materialize",
        icon: "logos:materializecss",
        description:
          "Materialize was the UI framework of choice due to its user-friendly nature and capacity to deliver a clean and aesthetically pleasing design. This selection expedited the development process by facilitating the creation of a responsive user interface, a pivotal element given the application's need to cater to users across various devices and screen sizes.",
      },
    ],
  },
  {
    title: "IndieScreening",
    description:
      "A dedicated platform designed to provide independent filmmakers with a stage to exhibit and share their creative works.",
    goal: "The client's imperative was the creation of a top-tier website that would serve as both a showcase for their own cinematic endeavors and a collaborative platform for fellow filmmakers. The website's multifaceted functionality encompassed not only the exhibition of the client's work and enabling user purchases but also providing a space for other filmmakers to spotlight their creations.\nKey functionalities included robust payment processing capabilities to facilitate film sales and the incorporation of a multi-role user system to accommodate various user categories, ensuring a seamless and inclusive platform experience for both filmmakers and film enthusiasts alike.",
    image: "/images/projects/indiescreening.png",
    url: "indiescreening",
    projectUrl: "https://indiescreening.com",
    startDate: new Date("2020-10-01"),
    endDate: new Date("2021-08-01"),
    techStack: [
      {
        id: "drupal",
        name: "Drupal 9",
        icon: "logos:drupal-icon",
        description:
          "Drupal 9 emerged as the preferred Content Management System (CMS) for the website, primarily owing to its remarkable flexibility and extensive library of modules capable of augmenting its capabilities. At the core of the website's functionality lies Drupal Commerce, a pivotal plugin that underpins the majority of its features. Additionally, custom modules were thoughtfully developed to address unique scenarios and specific demands, ensuring a tailored and comprehensive solution for the platform.",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Bootstrap was instrumental in crafting a responsive, mobile-first theme for the website, characterized by its ease of maintenance and extensibility. The adoption of a well-established framework such as Bootstrap alleviated the need for extensive design considerations, enabling a shift in focus towards the implementation of robust functionality within the website.",
      },
      {
        id: "ts",
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "TypeScript was strategically employed within the custom modules to imbue the codebase with a layer of type safety, enhancing maintainability. This decision not only ensured code robustness but also afforded the flexibility to harness the latest JavaScript features, further enhancing the overall quality and future-proofing of the project.",
      },
      {
        id: "twig",
        name: "Twig",
        icon: "file-icons:twig",
        description:
          "Twig was the natural choice for crafting the website's theme, given its status as the default templating engine for Drupal. This decision facilitated the creation of a theme characterized by its cleanliness, ease of maintenance, and exceptional modularity, aligning seamlessly with one of the project's core requirements.",
        class: "text-green-500",
      },
      {
        id: "mysql",
        name: "MySQL",
        icon: "logos:mysql-icon",
        description:
          "MySQL was strategically chosen as the optimal database solution for this project, owing to its widespread acclaim and remarkable proficiency in the management and storage of data. This selection seamlessly harmonized with the project's prerequisites, guaranteeing a resilient infrastructure for data storage and retrieval, thereby fostering scalability and maintainability. It is worth noting that this decision is further bolstered by Drupal's strong compatibility and support for MySQL, reinforcing the synergy between our chosen technology stack and the website's platform.",
      },
      {
        id: "paypal",
        name: "PayPal",
        icon: "logos:paypal",
        description:
          "PayPal emerged as the preferred payment gateway for the website, in line with the client's preference. Its selection was driven by its seamless integration capabilities with Drupal Commerce. To facilitate this integration, a custom module was meticulously developed, ensuring a smooth and secure payment processing experience for users engaging with the platform.",
      },
    ],
  },
  {
    title: "Order Tracker",
    description:
      "A comprehensive order tracking system designed for a business operating in Istanbul, Turkey, featuring an administrative dashboard tailored for efficient courier management.",
    goal: "The client's project encompassed the development of a user-friendly website to cater to customers seeking order tracking capabilities, alongside an administrative dashboard tailored for efficient order management by couriers. With a target audience in Turkey, the website was designed to be in the Turkish language, and great emphasis was placed on delivering a clean and intuitive user interface to enhance usability.",
    image: "/images/projects/order-tracker.png",
    url: "order-tracker",
    projectUrl: "https://takip.normod.com",
    startDate: new Date("2021-08-01"),
    endDate: new Date("2021-09-01"),
    techStack: [
      {
        id: "nextjs",
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description:
          "In pursuit of a contemporary and high-performance website, I made the strategic choice to employ Next.js for the frontend development. This framework provided the ideal foundation for crafting a swift, SEO-optimized website while simultaneously enhancing the developer experience, ensuring that the final product met the client's requirements for modernity and speed.",
      },
      {
        id: "ts",
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Given the inherent advantages of Next.js, TypeScript was a natural and prudent selection to enforce type safety and streamline the refactoring process. To enhance code management and maintain the integration of style and logic, I incorporated Styled Components for styling, facilitating the cohesiveness of both aspects within a single file and ensuring effective code separation.",
      },
      {
        id: "redis",
        name: "Redis",
        icon: "logos:redis",
        description:
          "Redis played a pivotal role in the optimization of the website's performance. By implementing Redis to cache data sourced from the Google Sheets API, the frequency of API requests was significantly reduced. This caching mechanism not only alleviated the strain on external API resources but also led to noticeable improvements in the website's overall responsiveness and speed.",
      },
      {
        id: "firebase",
        name: "Firebase",
        icon: "logos:firebase",
        description:
          "Firebase was predominantly harnessed for two key functions within the project. Firstly, it served as a robust authentication solution, ensuring secure user access to the platform. Additionally, Firebase was employed for the storage of images captured by couriers during the order delivery process. The decision to utilize Firebase was further bolstered by its reputation for offering an expansive and accommodating free tier, aligning perfectly with the project's requirements.",
      },
      {
        id: "sheets",
        name: "Google Sheets API",
        icon: "simple-icons:googlesheets",
        class: "text-green-500",
        description:
          "Building upon the client's existing workflow, I seamlessly integrated the Google Sheets API into the project to fetch order data. This strategic choice not only expedited development but also ensured that the website remained fast and user-friendly. Importantly, it obviated the need for data migration to a traditional database, preserving the client's preferred data management system while achieving the desired functionality.",
      },
    ],
  },
];
