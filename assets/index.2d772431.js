var e,t,n;import{q as a,R as l,G as r,D as i,S as o,a as c,b as m,c as s,d,e as p,f as u,g,h as f,i as h,j as y,k as E,l as x,m as b,n as v,o as w,p as k,r as $,P as I,s as S,L as R,t as z,u as F,v as N,w as C,A as T,x as P,y as D,I as j,z as L,B as A,C as O,E as M,F as U,H as B,J as Y,K as q,M as W,N as H,O as G,Q as J,T as Z,U as _,V as Q,W as V,X as K,Y as X,Z as ee,_ as te,$ as ne}from"./vendor.48613c9e.js";const ae={background:{primary:"#141414"},text:{primary:"#FFFAFF",information:"#3E92CC",warning:"#F5853F",error:"#7A0E00",success:"rgb(16, 204, 82)"}},le={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1440},re={fontFamily:"Fira Sans",heading:{fontFamily:"Zen Loop"},navigationItem:{fontFamily:"Fira Sans"}},ie=a.div`
  padding: 2rem;
  border-bottom: 1px solid ${ae.text.primary};
`,oe=a.div`
  display: flex;
  flex-direction: column;

  font-family: ${re.fontFamily};
  font-size: 3rem;
  font-weight: 300;
  color: ${ae.text.primary};
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > span {
    font-size: 2rem;
    font-weight: 100;
  }
`,ce=a.div`
  font-family: ${re.fontFamily};
  font-size: 2rem;
  font-weight: 200;
  color: ${ae.text.primary};
  font-style: italic;
`;function me(){return l.createElement(ie,null,l.createElement(oe,null,"About me"),l.createElement(ce,null,"A young but, very ambitious developer, always looking for a new problem to tackle head on. With years of experience under the belt, I can assure you that my skills and expertise will provide you with a great product."))}const se=a.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 168px) !important;
  scrollbar-color: #33333391 transparent;
  scrollbar-width: thin;

  @media (max-width: ${le.sm}px) {
    height: calc(100vh - 212px) !important;
  }
`,de=a.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${ae.background.primary};

  & > :nth-child(2) {
    display: flex;
    flex: 1 auto;
    align-items: center;

    & > :first-child {
      height: 100%;
      width: 100%;
    }
  }

  & #tsparticles {
    display: flex;
    align-items: center;

    height: calc(100vh - 172px);

    @media (max-width: ${le.sm}px) {
      height: calc(100vh - 274px) !important;
    }

    & > canvas {
      height: 100%;
    }
  }

  & > :last-child {
    flex-shrink: 0;
  }
`,pe=a.div`
  padding: 2rem;
  border-bottom: 1px solid ${ae.text.primary};
`,ue=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: ${re.fontFamily};
  font-size: 3rem;
  font-weight: 300;
  color: ${ae.text.primary};
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > span {
    font-size: 1.5rem;
    font-weight: 100;
  }
`,ge=a.div`
  margin-top: 0.5rem;
  color: ${ae.text.primary};
  font-family: ${re.fontFamily};
  font-size: 5rem;
  gap: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
`,fe=a.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;

  & > span {
    font-size: 0.75rem;
  }
`;function he(){return l.createElement(pe,null,l.createElement(ue,null,l.createElement("div",null,l.createElement(r,null),l.createElement("span",null,"Skills:")),l.createElement("span",null,"My skillset includes but is not limited to:")),l.createElement(ge,null,l.createElement(fe,null,l.createElement(i,null),l.createElement("span",null,"JavaScript")),l.createElement(fe,null,l.createElement(o,null),l.createElement("span",null,"TypeScript")),l.createElement(fe,null,l.createElement(c,null),l.createElement("span",null,"NodeJS")),l.createElement(fe,null,l.createElement(m,null),l.createElement("span",null,"React")),l.createElement(fe,null,l.createElement(s,null),l.createElement("span",null,"Bootstrap"))),l.createElement(ge,null,l.createElement(fe,null,l.createElement(d,null),l.createElement("span",null,"PHP")),l.createElement(fe,null,l.createElement(p,null),l.createElement("span",null,"Drupal")),l.createElement(fe,null,l.createElement(u,null),l.createElement("span",null,"WordPress")),l.createElement(fe,null,l.createElement(g,null),l.createElement("span",null,"Laravel")),l.createElement(fe,null,l.createElement(f,null),l.createElement("span",null,"Symfony"))),l.createElement(ge,null,l.createElement(fe,null,l.createElement(h,null),l.createElement("span",null,"MySQL / MariaDB")),l.createElement(fe,null,l.createElement(y,null),l.createElement("span",null,"PostgreSQL")),l.createElement(fe,null,l.createElement(E,null),l.createElement("span",null,"MongoDB")),l.createElement(fe,null,l.createElement(x,null),l.createElement("span",null,"Neo4J")),l.createElement(fe,null,l.createElement(b,null),l.createElement("span",null,"GraphQL"))),l.createElement(ge,null,l.createElement(fe,null,l.createElement(v,null),l.createElement("span",null,"Git")),l.createElement(fe,null,l.createElement(w,null),l.createElement("span",null,"Docker")),l.createElement(fe,null,l.createElement(k,null),l.createElement("span",null,"CI / CD Pipelines"))))}const ye=a.div`
  padding: 2rem;
  padding-bottom: 0;
`,Ee=a($.VerticalTimelineElement)`
  font-family: ${re.fontFamily};
  & > div > h3 > a {
    transition: all 300ms ease;
    will-change: color, background-color;
    text-decoration: none;
    color: ${ae.text.primary};
    font-weight: 200;
    border: 1px solid ${ae.text.primary};
    display: block;
    padding: 0.25rem;
    width: max-content;
    max-width: 100%;
    margin-bottom: 0.5rem;
    &:hover {
      background-color: ${ae.text.primary};
      color: ${ae.background.primary};
    }
  }
  & > div > p {
    margin-top: 0.5rem;
    font-weight: 400;

    & > img {
      width: 100%;
    }

    & > .technologies {
      display: flex;
      justify-content: center;
      font-size: 3rem;
      border-top: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    & > div:last-child {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid ${ae.text.primary};
      & > span {
        font-style: italic;
        font-weight: 200;
      }
    }
  }
`,xe=a.span`
  & > a {
    will-change: background-color, border-bottom-color, color;
    transition: all 300ms ease;
    background-color: ${ae.text.primary};
    color: ${ae.background.primary};
    border-bottom: 1px solid transparent;
    text-decoration: none;

    &:hover {
      background-color: ${ae.background.primary};
      color: ${ae.text.primary};
      border-bottom: 1px solid ${ae.text.primary};
    }
  }
`,be=a.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: ${ae.text.primary};
  font-family: ${re.fontFamily};
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;

  @media (max-width: 1169px) {
    justify-content: flex-start;
  }
`;function ve({date:e,title:t,subtitle:n,description:a,icon:r}){return l.createElement(Ee,{className:"vertical-timeline-element--work",contentStyle:{background:ae.background.primary,color:ae.text.primary,border:`1px solid ${ae.text.primary}`},contentArrowStyle:{borderRight:`7px solid ${ae.text.primary}`},date:e,icon:r,iconStyle:{background:ae.background.primary,color:ae.text.primary}},l.createElement("h3",{className:"vertical-timeline-element-title"},t),l.createElement("h4",{className:"vertical-timeline-element-subtitle"},n),l.createElement("p",null,a))}function we(){return l.createElement(ye,null,l.createElement(be,null,l.createElement(S,null),l.createElement("span",null,"Timeline:")),l.createElement($.VerticalTimeline,null,l.createElement(ve,{date:"2016 - Present",title:"Freelance Web Developer",description:l.createElement(l.Fragment,null,"Utilizing modern approaches I'm able to increase your web presence efficiently and quickly. If this something you want, don't be afraid to"," ",l.createElement(xe,null,l.createElement(R,{to:"/contact"},"contact me")),"."),icon:l.createElement(z,null)}),l.createElement(ve,{date:"2021 - Present",title:"Software Developer",subtitle:"Noubis d.o.o",description:"I've worked on multiple complex projects which utilized modern techniques and methods to create high-performance applications which scale.",icon:l.createElement(c,null)}),l.createElement(ve,{date:"2019 - 2021",title:"Private Tutor",description:"I've been teaching programming to high school and college students who were struggling with the curriculum which included multiple programming languages like JavaScript, C#, C++ etc.",icon:l.createElement(F,null)}),l.createElement(ve,{date:"2019 - 2020",title:"Backend Web Developer",subtitle:"Studio Present",description:"I was working on multiple Drupal 7 and Drupal 8 projects. My responsibilities included: fixing bugs, developing new complex modules and features as well as site-building.",icon:l.createElement(p,null)}),l.createElement(ve,{date:"2017 - 2019",title:"Software Engineer",subtitle:"Cardio-Phoenix Inc.",description:"I've been tasked with working on a medical software that communicates with a device called Cardio Tri-Test that helps doctors diagnose heart problems. These include both fixing the old version and adding new features so that the software can be approved by the FDA.",icon:l.createElement(N,null)})))}function ke(){return l.createElement(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},l.createElement(se,null,l.createElement(me,null),l.createElement(he,null),l.createElement(we,null)))}ve.propTypes={title:I.string.isRequired,subtitle:I.string,description:I.any.isRequired,date:I.string.isRequired,icon:I.any};const $e=a.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Ie=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${ae.text.primary};
  font-family: ${re.fontFamily};
  font-size: 5rem;
  font-weight: 200;

  @media (max-width: ${le.sm}px) {
    font-size: 2.5rem;
  }

  > span {
    color: transparent;
    -webkit-text-stroke: 1px ${ae.text.primary};
  }

  & > svg {
    stroke-width: 10;
    fill: none;
    stroke: ${ae.text.primary};
  }
`,Se=a.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Re=a.label`
  color: ${ae.text.primary};
  font-family: ${re.fontFamily};
  font-weight: 300;
  font-style: italic;
`,ze=a.input`
  background: transparent;
  border: none;
  font-family: ${re.fontFamily};
  font-size: 1.5rem;
  font-weight: 300;
  color: ${ae.text.primary};
  border-bottom: 1px solid ${ae.text.primary};
`,Fe=a.div`
  margin-top: 2rem;
  width: 90%;
  min-width: 300px;
  display: flex;
  flex-direction: column-reverse;
`,Ne=a.textarea`
  background: transparent;
  border: 1px solid ${ae.text.primary};
  font-family: ${re.fontFamily};
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0.5rem;
  color: ${ae.text.primary};
  resize: none;
`,Ce=a.div`
  ${e=>!e.isSubmitting&&T`
      cursor: pointer;
    `}
  margin-top: 5px;
  transition: all 300ms ease;
  will-change: color, background-color;
  padding: 0.5rem;
  font-weight: 200;
  font-size: 2rem;
  font-family: ${null==(e=re.navigationItem)?void 0:e.fontFamily};

  color: ${ae.text.primary};
  background-color: transparent;
  border: 1px solid ${ae.text.primary};

  &:hover {
    ${e=>!e.isSubmitting&&T`
        color: ${ae.background.primary};
        background-color: ${ae.text.primary};
      `}
  }
`,Te="https://44740a9a3236c9900081281697531250.m.pipedream.net";var Pe,De;function je(){const[e,t]=P.exports.useState(""),[n,a]=P.exports.useState(""),[r,i]=P.exports.useState(""),[o,c]=P.exports.useState(!1),{height:m}=D(),s=m-600,d=(e,t=Pe.INFO)=>{switch(t){case Pe.INFO:O.info(e);break;case Pe.ERROR:O.error(e);break;case Pe.SUCCESS:O.success(e);break;case Pe.WARNING:O.warning(e)}};return l.createElement(se,null,l.createElement($e,null,l.createElement(Ie,null,l.createElement(j,null),l.createElement("span",null,"Contact me")),l.createElement(Se,null,l.createElement(Fe,null,l.createElement(Re,null,"Name"),l.createElement(ze,{type:"text",value:e,onChange:e=>{t(e.target.value)},disabled:o})),l.createElement(Fe,null,l.createElement(Re,null,"E-mail"),l.createElement(ze,{type:"email",value:n,onChange:e=>{a(e.target.value)},disabled:o})),l.createElement(Fe,null,l.createElement(Re,null,"Message"),l.createElement(Ne,{rows:3,value:r,onInput:e=>{e.target.style.height="",e.target.style.height=Math.min(e.target.scrollHeight,s)+"px"},onChange:e=>{i(e.target.value)},disabled:o})),l.createElement(Ce,{onClick:t=>{t.preventDefault(),o||(async()=>{if(e.length<1)d("Please enter your name.",Pe.ERROR);else if(L(n))if(r.length<1)d("Please enter a message.",Pe.ERROR);else{c(!0);try{await A.post(Te,{name:e,email:n,message:r}),d("Your message has been sent.",Pe.SUCCESS)}catch{d("A problem has occurred while sending the message.",Pe.WARNING)}c(!1)}else d("Please a valid e-mail address.",Pe.ERROR)})()},isSubmitting:o},"Send message"))))}function Le(){return l.createElement(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},l.createElement(je,null))}(De=Pe||(Pe={}))[De.INFO=0]="INFO",De[De.SUCCESS=1]="SUCCESS",De[De.WARNING=2]="WARNING",De[De.ERROR=3]="ERROR";const Ae=a.div``,Oe=a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;

  transform: translate(-50%, -10%);
`,Me=a.div`
  font-family: ${re.fontFamily};
  font-size: 3rem;
  text-align: center;
  color: ${ae.text.primary};

  @media (max-width: ${le.sm}px) {
    font-size: 2rem;
  }
`,Ue=a.div`
  font-family: ${re.fontFamily};
  text-align: center;
  font-size: 2rem;
  font-weight: 200;
  padding-top: 2rem;

  & > a {
    transition: all 300ms ease;
    will-change: color, background-color;
    padding: 1rem;

    color: ${ae.text.primary};
    background-color: transparent;
    border: 1px solid ${ae.text.primary};

    text-decoration: none;

    &:hover {
      color: ${ae.background.primary};
      background-color: ${ae.text.primary};
    }
  }

  @media (max-width: ${le.sm}px) {
    font-size: 1rem;
  }
`;function Be(){return l.createElement(Ae,null,l.createElement(M,{width:"100%",options:{fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}}),l.createElement(Oe,null,l.createElement(Me,null,"Need to boost your online presence?"),l.createElement(Ue,null,l.createElement(R,{to:"/contact"},"Let's talk."))))}function Ye(){return l.createElement(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},l.createElement(Be,null))}const qe=a.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    text-decoration: none;
  }

  @media (max-width: ${le.sm}px) {
    gap: 1rem;
    flex-direction: column;
  }
`,We=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,He=a.div`
  -webkit-text-stroke: 1px white;
  color: transparent;
  text-align: center;
  font-size: 5rem;
  font-family: ${re.fontFamily};
`,Ge=a.div`
  font-family: ${re.fontFamily};
  color: ${ae.text.primary};
  text-align: center;

  & > a {
    transition: all 300ms ease;
    will-change: color, background-color;
    text-decoration: none;
    background-color: ${ae.text.primary};
    color: ${ae.background.primary};

    &:hover {
      color: ${ae.text.primary};
      background-color: ${U(.1,ae.background.primary)};
    }
  }
`;function Je(){return l.createElement(We,null,l.createElement(He,null,"404"),l.createElement(He,null,"Page Not Found"),l.createElement(Ge,null,"Are you maybe ",l.createElement(R,{to:"/"},"lost?")))}function Ze(){return l.createElement(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},l.createElement(qe,null,l.createElement(Je,null)))}const _e=[{Name:"Polyclinic Medic",Client:"Dr Laura Lasinger",Description:"Polyclinic Medic is a local polyclinic that has been providing medical services to the community for over a decade.       I was hired to completely revamp the design and utilize modern technologies like React. The previous version was using PHP and\n       was not responsive. I've added new pages and redesigned the website to be more user friendly.",Year:"Oct. 2021",Image:"/assets/medic.003b826c.png",URL:"https://poliklinikamedic.rs/",Technologies:[{Icon:m},{Icon:i}]},{Name:"IndieScreening",Client:"Dr Dale Okorodudu",Description:"IndieScreening is an online screening platform built for filmmakers.\n    It provides an easy way for filmmakers to sell their movies online.\n    Users who want to organize screenings of their favorite movies can do so easily as well.",Year:"Oct. 2020",Image:"/assets/indiescreening.525b5ae2.png",URL:"https://indiescreening.com/",Technologies:[{Icon:p},{Icon:i},{Icon:B}]},{Name:"Raise Your Division",Client:"Cristian-Alexandru Rîpă",Description:'RaiseYourDivision is a "boosting" service for an online game called League of Legends.\n    It features multiple calculators that are separated by tabs.\n    Payment is handled via PayPal and there is even a live chat option.\n    Boosting is when you pay someone else to play a game for you in order to increase your in-game rank.',Year:"Sep. 2020",Image:"/assets/raiseyourdivision.7b1c3247.png",URL:"https://raiseyourdivision.com/",Technologies:[{Icon:m},{Icon:B},{Icon:d}],Testimonial:"Zvonimir created a really good looking website for me, although I must admit that I wasn't sure what it should look like.\n    He managed to surprise me and I was very happy with his explanations, hence I can say that he is a very skilled developer."},{Name:"lolboostelo.net",Client:"Nebojša Popović",Description:'LoLBoostElo is a website that provides "boosting services" for a popular MOBA game League of Legends.\n    Boosting is when you pay someone else to play a game for you in order to increase your in-game rank.',Year:"Oct. 2019",Image:"/assets/lolboostelo.ffece79d.png",Technologies:[{Icon:d},{Icon:Y},{Icon:i}],Testimonial:"When I hired Zvonimir I didn't expect him to be that quick.\n    He was easy to communicate with and was ready to answer any questions I had."},{Name:"Miami Street Photography Contest 2017",Client:"Juan Jose Reyes",Description:"The Miami Street Photography Festival is an international street photography festival showcasing the best of contemporary street and documentary photography.\n    Established in 2012, it is the largest and leading street photography festival in the world.",Year:"Sep. 2017",Image:"/assets/mspfcontest.64dfd3c9.png",URL:"https://www.miamistreetphotographyfestival.org/",Technologies:[{Icon:d},{Icon:i},{Icon:Y},{Icon:h}],Testimonial:"I highly recommend Zvonimir. He upgraded our website in a very timely manner and it works great.\n    He is a highly knowledgeable and skilled developer and I would recommend him."}];function Qe({project:e}){return l.createElement(Ee,{key:e.Name,className:"vertical-timeline-element--work",contentStyle:{background:ae.background.primary,color:ae.text.primary,border:`1px solid ${ae.text.primary}`},contentArrowStyle:{borderRight:`7px solid ${ae.text.primary}`},date:e.Year.toString(),icon:l.createElement((e=>{if(e&&e.Technologies){return e.Technologies.filter((e=>void 0!==e.Icon))[0].Icon}return q})(e)),iconStyle:{background:ae.background.primary,color:ae.text.primary}},l.createElement("h3",{className:"vertical-timeline-element-title"},e.URL?l.createElement("a",{href:e.URL,target:"_blank",rel:"noopener noreferrer"},e.Name):e.Name),l.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.Client),l.createElement("p",null,e.Image&&l.createElement("img",{src:e.Image,alt:e.Name}),l.createElement("div",{className:"technologies"},e.Technologies&&e.Technologies.map((e=>l.createElement(e.Icon)))),e.Description,e.Testimonial&&l.createElement("div",null,l.createElement("span",null,'"',e.Testimonial,'"'))))}function Ve(){return l.createElement(se,null,l.createElement($.VerticalTimeline,null,_e.map((e=>l.createElement(Qe,{project:e})))))}function Ke(){return l.createElement(se,null,l.createElement(Ve,null))}Qe.propTypes={project:I.object.isRequired};const Xe=a.div`
  border-top: 1px solid ${ae.text.primary};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    text-decoration: none;
  }

  @media (max-width: ${le.sm}px) {
    gap: 1rem;
    flex-direction: column;
  }
`,et=a.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${ae.text.primary};
  font-family: ${re.fontFamily};
`,tt=a.div`
  font-size: 1rem;

  @media (max-width: 483px) {
    font-size: 0.75rem;
  }
`,nt=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${le.sm}px) {
    gap: 0;
  }
`,at=a.a`
  color: ${ae.text.primary};

  &:hover {
    color: ${W(.3,ae.text.primary)};
  }

  @media (max-width: ${le.sm}px) {
    & > svg {
      transform: scale(0.85);
    }
  }
`;function lt(){return l.createElement(Xe,null,l.createElement(et,null,l.createElement(tt,null,"Zvonimir Rudinski © ",(new Date).getFullYear()," All rights reserved."),l.createElement(nt,null,l.createElement(at,{href:"https://github.com/sadboyzvone",rel:"noopener nofollow",target:"_blank"},l.createElement(H,{size:"2rem"})),l.createElement(at,{href:"https://www.linkedin.com/in/zvonimirr/",rel:"noopener nofollow",target:"_blank"},l.createElement(G,{size:"2rem"})),l.createElement(at,{href:"https://www.facebook.com/rudinskiz/",rel:"noopener nofollow",target:"_blank"},l.createElement(J,{size:"1.8rem"})),l.createElement(at,{href:"https://www.instagram.com/prasak.za.pecivo/",rel:"noopener nofollow",target:"_blank"},l.createElement(Z,{size:"2.2rem"})))))}const rt=a.div`
  border-bottom: 1px solid ${ae.text.primary};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    text-decoration: none;
  }

  @media (max-width: ${le.sm}px) {
    gap: 1rem;
    flex-direction: column;
  }
`,it=a.div`
  transition: all 300ms ease;
  will-change: color;
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  gap: 1rem;
  color: ${ae.text.primary};

  & > svg {
    stroke-width: 10;
    fill: none;
    stroke: ${ae.text.primary};
    transform: scale(1.5);
  }

  &:hover {
    & > svg {
      fill: ${ae.text.primary};
    }

    & > h1 {
      color: ${ae.text.primary};
    }
  }

  @media (max-width: ${le.md}px) {
    gap: 2rem;
    font-size: 1.5rem;
  }
`,ot=a.h1`
  margin: 0;
  padding: 0;
  color: transparent;
  -webkit-text-stroke: 1px white;
  font-family: ${null==(t=re.heading)?void 0:t.fontFamily};
`,ct=a.div`
  display: flex;
  gap: 1rem;
  & > a {
    text-decoration: none;
  }
`,mt=a.div`
  transition: all 300ms ease;
  will-change: color, background-color;
  padding: 0.5rem;
  font-weight: 200;
  font-size: 1rem;
  font-family: ${null==(n=re.navigationItem)?void 0:n.fontFamily};

  color: ${ae.text.primary};
  background-color: transparent;
  border: 1px solid ${ae.text.primary};

  &:hover {
    color: ${ae.background.primary};
    background-color: ${ae.text.primary};
  }
`;function st(){return l.createElement(rt,null,l.createElement(R,{to:"/"},l.createElement(it,null,l.createElement(_,{size:"2rem"}),l.createElement(ot,null,"Zvonimir Rudinski"))),l.createElement(ct,null,l.createElement(R,{to:"/projects"},l.createElement(mt,null,"Projects")),l.createElement(R,{to:"/about"},l.createElement(mt,null,"About")),l.createElement(R,{to:"/contact"},l.createElement(mt,null,"Contact"))))}function dt(){const e=V();return l.createElement(l.Fragment,null,l.createElement(st,null),l.createElement(K,{exitBeforeEnter:!0},l.createElement(X,{location:e,key:e.pathname},l.createElement(ee,{path:"/projects",exact:!0,component:Ke}),l.createElement(ee,{path:"/about",exact:!0,component:ke}),l.createElement(ee,{path:"/contact",exact:!0,component:Le}),l.createElement(ee,{path:"/",exact:!0,component:Ye}),l.createElement(ee,{component:Ze}))),l.createElement(te,null),l.createElement(lt,null))}function pt(){return l.createElement(de,null,l.createElement(Q,null,l.createElement(dt,null)))}ne.render(l.createElement(l.StrictMode,null,l.createElement(pt,null)),document.getElementById("root"));
