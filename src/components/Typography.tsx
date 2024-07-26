import React from "react";

export type TypographyType =
  | "h1"
  | "h2"
  | "h3"
  | "h4-regular"
  | "h4"
  | "b1"
  | "b2"
  | "b2-medium"
  | "b2-light"
  | "b2-regular"
  | "b2-inter-regular"
  | "b3"
  | "b4"
  | "button-link"
  | "button-link-small";

type TagType = "h1" | "h2" | "h3" | "h4" | "p" | "div";

interface TypographyProps {
  children: React.ReactNode;
  type: TypographyType;
  tag?: TagType;
  className?: string;
}

export function Typography({ children, type, tag, className = "" }: TypographyProps) {
  let Tag: TagType = tag ?? composeTag(type);

  return <Tag className={`bg-inherit ${TypographyStyles[type]} ${className}`}> {children} </Tag>;
}

export const TypographyStyles: Record<TypographyType, string> = {
  "h1": "text-h1 font-semibold font-sans text-black",
  "h2": "text-h2 font-semibold font-sans text-black",
  "h3": "text-h3 font-semibold font-sans text-black",
  "h4": "text-h4 font-semibold font-sans text-black",
  "h4-regular": "text-h4 font-regular font-sans text-black",
  "b1": "text-b1 font-regular font-sans text-black",
  "b2": "text-b2 font-regular font-sans tracking-tightest text-black",
  "b2-medium": "text-b2-medium font-medium font-sans tracking-tight text-black",
  "b2-light": "text-b2-light font-light font-body tracking-tightest text-black",
  "b2-regular": "text-b2-regular font-regular font-body tracking-tightest text-black",
  "b2-inter-regular": "text-b2-regular font-regular font-body tracking-tightest text-black",
  "b3": "text-b3 font-regular font-body tracking-tighter text-black",
  "b4": "text-b4 font-regular font-body tracking-tighter text-black",
  "button-link": "text-button-link font-regular font-mono text-black",
  "button-link-small": "text-button-link-small font-regular font-mono tracking-tighter text-black",
};

function composeTag(tag: TypographyType): TagType {
  switch (tag) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
    case "h4-regular":
      return "h4";
    case "b1":
    case "b2":
    case "b2-medium":
    case "b2-light":
    case "b2-regular":
    case "b2-inter-regular":
    case "b3":
    case "b4":
      return "p";
    case "button-link":
    case "button-link-small":
    default:
      return "div";
  }
}
