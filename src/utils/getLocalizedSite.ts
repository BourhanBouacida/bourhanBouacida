const localizedContent: Record<string, { author: string; description: string }> = {
  en: {
    author: "Bourhan Bouacida",
    description: "A Boy advancing in steady steps toward this world.",
  },
  ar: {
    author: "برهان بوعصيدة",
    description: "شاب يتقدم بخطى ثابتة نحو العالم.",
  },
};

export function getLocalizedSite(locale: string) {
  return localizedContent[locale] ?? localizedContent.en;
}