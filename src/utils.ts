export const StackItems = {
  PHP: "PHP",
  JavaScript: "JavaScript",
  MySQL: "MySQL",
  MaterializeCSS: "Materialize CSS",
  PayPal: "PayPal",
  React: "React",
  AntDesign: "Ant Design",
  TypeScript: "TypeScript",
  Drupal: "Drupal",
  Twig: "Twig",
  Bootstrap: "Bootstrap",
  NextJS: "NextJS",
  Redis: "Redis",
  Firebase: "Firebase",
  GoogleSheets: "Google Sheets",
  NodeJS: "NodeJS",
  SCSS: "SCSS",
  MongoDB: "MongoDB",
};

type StackItem = keyof typeof StackItems;

const icons: Record<StackItem, string> = {
  PHP: "logos:php",
  JavaScript: "vscode-icons:file-type-js-official",
  MySQL: "logos:mysql",
  MaterializeCSS: "logos:materializecss",
  PayPal: "logos:paypal",
  React: "logos:react",
  AntDesign: "devicon:antdesign",
  TypeScript: "vscode-icons:file-type-typescript-official",
  Drupal: "logos:drupal-icon",
  Twig: "vscode-icons:file-type-twig",
  Bootstrap: "skill-icons:bootstrap",
  NextJS: "logos:nextjs-icon",
  Redis: "logos:redis",
  Firebase: "logos:firebase",
  GoogleSheets: "devicon:googlecloud",
  NodeJS: "vscode-icons:file-type-node",
  SCSS: "vscode-icons:file-type-scss2",
  MongoDB: "skill-icons:mongodb",
};

export function slugify(str: string) {
  return str.toLowerCase().replace(/\s/g, "-");
}

export function getStackItem(type: StackItem, explanation: string) {
  return {
    icon: icons[type],
    name: StackItems[type],
    explanation,
  };
}
