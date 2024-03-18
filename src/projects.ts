interface ProjectPeek {
  id: string;
  name: string;
}

interface ProjectReview {
  client: string;
  review: string;
}

interface ProjectStackItem {
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
      {
        icon: "logos:php",
        name: "PHP",
        explanation:
          "Given the website's existing PHP foundation, I elected to maintain continuity by retaining PHP as the development language.\nTo address the prevalent issues stemming from deprecated functions and widespread errors due to the upgrade to PHP 7, I performed a comprehensive code revision.\nIn addition, I introduced a newly designed admin dashboard, facilitating effortless voting processes for both the client and judges.",
      },
      {
        icon: "vscode-icons:file-type-js-official",
        name: "JavaScript",
        explanation:
          "At the outset of my engagement with the website, its JavaScript functionality was minimal.\nI embarked on enhancing the user experience by introducing elements of interactivity, including the incorporation of a countdown timer and the implementation of a gallery feature.",
      },
      {
        icon: "logos:mysql",
        name: "MySQL",
        explanation:
          "While the website had previously employed MySQL, a code upgrade was necessary to incorporate the latest version of the MySQLi extension, as the prior version had become deprecated.\nAdditionally, I conducted database optimization measures by eliminating extraneous tables and enhancing security by transitioning from plaintext password storage to the more secure practice of password hashing.",
      },
      {
        icon: "logos:materializecss",
        name: "Materialize CSS",
        explanation:
          "Materialize was adopted for the admin dashboard's frontend interface due to its user-friendly nature and capacity to deliver a visually streamlined appearance.\nThis choice expedited the creation of a responsive user interface, a critical consideration given that the dashboard was intended for use by individuals on mobile devices.",
      },
      {
        icon: "logos:paypal",
        name: "PayPal",
        explanation:
          "The preceding developer had implemented a proprietary payment gateway that had ceased functioning.\nIn light of the client's preference and the need for a reliable solution, I opted to integrate PayPal as the chosen payment gateway for the website.",
      },
    ],
    review: {
      client: "Juan",
      review:
        "I highly recommend Zvonimir.\nHe upgraded our website in a very timely manner and it works great.\nHe is a highly knowledgeable and skilled developer and I would recommend him.",
    },
    url: "https://miamistreetphotographyfestival.org",
  },
];

export function getProject(id: string): Project {
  const project = projects.find((project) => project.id === id);

  if (!project) {
    throw new Error(`Project with id "${id}" not found`);
  }

  return project;
}
