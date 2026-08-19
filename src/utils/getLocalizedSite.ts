const localizedContent: Record<string, { author: string; description: string }> = {
  en: {
    author: "Bourhan Bouacida",
    description: "Advancing in steady steps toward the world..",
  },
  ar: {
    author: "برهان بوعصيدة",
    description: "سائر على الدرب، أبحث عن المعنى في كل خطوة.",
  },
};

export function getLocalizedSite(locale: string) {
  return localizedContent[locale] ?? localizedContent.en;
}