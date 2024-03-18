import type { ProjectStackItem, StackItem } from "./projects";

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
};

export function slugify(str: string) {
  return str.toLowerCase().replace(/\s/g, "-");
}

export function getStackItem(
  type: StackItem,
  explanation: string
): ProjectStackItem {
  return {
    icon: icons[type],
    name: type,
    explanation,
  };
}
