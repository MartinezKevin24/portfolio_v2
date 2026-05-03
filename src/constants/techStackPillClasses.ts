export const TECH_STACK_PILL_CLASSES: Record<string, string> = {
  "Next.js": "tech-nextjs",
  React: "tech-react",
  TypeScript: "tech-typescript",
  "Tailwind CSS": "tech-tailwind",
  Jotai: "tech-jotai",
  Redis: "tech-redis",
  Angular: "tech-angular",
  RxJS: "tech-rxjs",
  MQTT: "tech-default",
  "Node.js": "tech-node",
  Recoil: "tech-recoil",
  CSS: "tech-css",
};

export function getTechPillClass(tech: string): string {
  return TECH_STACK_PILL_CLASSES[tech] ?? "tech-default";
}
