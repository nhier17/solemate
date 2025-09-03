export type BadgeTone = "red" | "green" | "orange";

export interface CardProps {
    title: string;
    description?: string;
    subtitle?: string;
    meta?: string | string[];
    imageSrc: string;
    imageAlt?: string;
    price?: string | number;
    href?: string;
    badge?: { label: string; tone?: BadgeTone };
    className?: string;
  }