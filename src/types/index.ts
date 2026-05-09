export interface Metric {
  label: string;
  value: string;
  progress: number;
}

export interface Skill {
  name: string;
  promise: string;
  status: string;
  sources: number;
  lastReviewed: string;
}

export interface FeedItem {
  time: string;
  action: string;
  detail: string;
  highlight?: boolean;
}

export interface FieldNote {
  title: string;
  date: string;
}

export interface GlossaryTerm {
  term: string;
  def: string;
}
