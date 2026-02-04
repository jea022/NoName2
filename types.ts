import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  result: string;
  image: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ComparisonItem {
  title: string;
  description: string;
}