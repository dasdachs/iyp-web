// TODO: resolve flags
import React from "react";
import { Typography } from "@iyp/components/Typography";
import Image from "next/image";

import hour from "../../../public/clock.svg";
import profile from "../../../public/profile.svg";
import facebook from "../../../public/facebook.svg";
import mail from "../../../public/mail.svg";
import x from "../../../public/x.svg";

interface ContentSectionProps {
  navigationBreadCrumbs: string | string[];
  title: string;
  readingTime: number;
  author: string;
  authorImage?: string;
}

export function ContentSection({
  navigationBreadCrumbs,
  title,
  readingTime,
  authorImage,
  author,
}: ContentSectionProps) {
  return (
    <section className="relative bg-beigeMediumWarm p-8 shadow-lg rounded-lg -mt-32 mx-4">
      <div className="mb-8 flex flex-row justify-between items-start">
        <section>
          <Typography type="button-link" tag="div" className="mb-3">
            <span role="img" aria-label="flag" className="mr-2">
              🇵🇱
            </span>
            <span>
              {Array.isArray(navigationBreadCrumbs) ? navigationBreadCrumbs.join(" / ") : navigationBreadCrumbs}
            </span>
          </Typography>

          <Typography type="h1">{title}</Typography>
        </section>

        <section className="mt-4 flex items-center">
          <Image src={authorImage ?? profile} alt="Author" className="mr-2" />
          <div className="ml-2">
            <Typography type="button-link-small" className="text-textGrey">
              Curated by
            </Typography>
            <Typography type="b3" className="font-semibold">
              {author}
            </Typography>
          </div>
        </section>
      </div>

      <div className="flex flex-row justify-between items-start">
        <section className="inline-flex flex-row justify-between items-center">
          <Image src={hour} alt="Time" className="mr-2" />
          <Typography type="button-link-small" tag="div">
            {new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(readingTime, "minute")}
          </Typography>
        </section>
        <section className="flex flex-row">
          <a href="#">
            <Image src={facebook} alt="Facebook" className="mr-6" />
          </a>
          <a href="#">
            <Image src={mail} alt="Mail" className="mr-6" />
          </a>
          <a href="#">
            <Image src={x} alt="X" />
          </a>
        </section>
      </div>
    </section>
  );
}
