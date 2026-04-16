export interface ArticleSchemaInput {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl: string;
  publisherName: string;
  image?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

/** Normalises a date string to ISO 8601 with UTC offset.
 *  Accepts "YYYY-MM-DD" or any string already containing "T". */
function toIso8601Utc(date: string): string {
  if (date.includes("T")) return date;
  return `${date}T00:00:00+00:00`;
}

export function articleSchema(article: ArticleSchemaInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    datePublished: toIso8601Utc(article.datePublished),
    dateModified: toIso8601Utc(article.dateModified),
    author: {
      "@type": "Person",
      name: article.authorName,
      url: article.authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: article.publisherName,
    },
  };
  if (article.image) schema.image = article.image;
  return schema;
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.item,
    })),
  };
}
