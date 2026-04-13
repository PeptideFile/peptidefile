export type EvidenceLevel = "strong" | "moderate" | "emerging";

export interface ClusterArticle {
  title: string;
  slug: string;
  targetKeyword: string;
}

export interface PillarArticle {
  title: string;
  targetKeyword: string;
  wordCount: number;
}

export interface Compound {
  name: string;
  slug: string;
  category: string;
  evidenceLevel: EvidenceLevel;
  status: string;
  developer: string;
  mechanism: string;
  shortDescription: string;
  keyData: Record<string, string | string[]>;
  pillarArticle?: PillarArticle;
  clusterArticles: ClusterArticle[];
}

import retatrutide from "./retatrutide.json";
import semaglutide from "./semaglutide.json";
import tirzepatide from "./tirzepatide.json";
import bpc157 from "./bpc-157.json";
import tb500 from "./tb-500.json";

export const compounds: Compound[] = [
  retatrutide as Compound,
  semaglutide as Compound,
  tirzepatide as Compound,
  bpc157 as Compound,
  tb500 as Compound,
];

export function getCompoundBySlug(slug: string): Compound | undefined {
  return compounds.find((c) => c.slug === slug);
}
