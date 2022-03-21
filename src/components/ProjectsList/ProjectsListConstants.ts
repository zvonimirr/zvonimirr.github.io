import {
  DiCss3,
  DiDrupal,
  DiJavascript1,
  DiMysql,
  DiPhp,
  DiReact,
  DiSass,
} from "react-icons/di";
import { Project } from "./ProjectListTypes";

import RaiseYourDivision from "../../images/raiseyourdivision.png";
import LoLBoostElo from "../../images/lolboostelo.png";
import MSPFContent from "../../images/mspfcontest.png";
import IndieScreening from "../../images/indiescreening.png";
import MedicPolyclinic from "../../images/medic.png";

export const Projects: Project[] = [
  {
    Name: "Polyclinic Medic",
    Client: "Dr Laura Lasinger",
    Description: `Polyclinic Medic is a local polyclinic that has been providing medical services to the community for over a decade.\
       I was hired to completely revamp the design and utilize modern technologies like React. The previous version was using PHP and
       was not responsive. I've added new pages and redesigned the website to be more user friendly.`,
    Year: "Oct. 2021",
    Image: MedicPolyclinic,
    URL: "https://poliklinikamedic.rs/",
    Technologies: [
      {
        Icon: DiReact,
      },
      {
        Icon: DiJavascript1,
      },
    ],
  },
  {
    Name: "IndieScreening",
    Client: "Dr Dale Okorodudu",
    Description: `IndieScreening is an online screening platform built for filmmakers.
    It provides an easy way for filmmakers to sell their movies online.
    Users who want to organize screenings of their favorite movies can do so easily as well.`,
    Year: "Oct. 2020",
    Image: IndieScreening,
    URL: "https://indiescreening.com/",
    Technologies: [
      {
        Icon: DiDrupal,
      },
      {
        Icon: DiJavascript1,
      },
      {
        Icon: DiSass,
      },
    ],
  },
  {
    Name: "Raise Your Division",
    Client: "Cristian-Alexandru Rîpă",
    Description: `RaiseYourDivision is a "boosting" service for an online game called League of Legends.
    It features multiple calculators that are separated by tabs.
    Payment is handled via PayPal and there is even a live chat option.
    Boosting is when you pay someone else to play a game for you in order to increase your in-game rank.`,
    Year: "Sep. 2020",
    Image: RaiseYourDivision,
    Technologies: [
      {
        Icon: DiReact,
      },
      {
        Icon: DiSass,
      },
      {
        Icon: DiPhp,
      },
    ],
    Testimonial: `Zvonimir created a really good looking website for me, although I must admit that I wasn't sure what it should look like.
    He managed to surprise me and I was very happy with his explanations, hence I can say that he is a very skilled developer.`,
  },
  {
    Name: "lolboostelo.net",
    Client: "Nebojša Popović",
    Description: `LoLBoostElo is a website that provides "boosting services" for a popular MOBA game League of Legends.
    Boosting is when you pay someone else to play a game for you in order to increase your in-game rank.`,
    Year: "Oct. 2019",
    Image: LoLBoostElo,
    Technologies: [
      {
        Icon: DiPhp,
      },
      {
        Icon: DiCss3,
      },
      {
        Icon: DiJavascript1,
      },
    ],
    Testimonial: `When I hired Zvonimir I didn't expect him to be that quick.
    He was easy to communicate with and was ready to answer any questions I had.`,
  },
  {
    Name: "Miami Street Photography Contest 2017",
    Client: "Juan Jose Reyes",
    Description: `The Miami Street Photography Festival is an international street photography festival showcasing the best of contemporary street and documentary photography.
    Established in 2012, it is the largest and leading street photography festival in the world.`,
    Year: "Sep. 2017",
    Image: MSPFContent,
    URL: "https://www.miamistreetphotographyfestival.org/",
    Technologies: [
      {
        Icon: DiPhp,
      },
      {
        Icon: DiJavascript1,
      },
      {
        Icon: DiCss3,
      },
      {
        Icon: DiMysql,
      },
    ],
    Testimonial: `I highly recommend Zvonimir. He upgraded our website in a very timely manner and it works great.
    He is a highly knowledgeable and skilled developer and I would recommend him.`,
  },
];
