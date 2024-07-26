// How to handle this scalable
import Image from "next/image";

import { Button } from "@iyp/components/Button";
import { Typography } from "@iyp/components/Typography";

import quotation from "../../public/quotation.svg";

export function PostContent() {
  return (
    <section className="p-8 max-w-5xl">
      <Typography type="b1" tag="p" className="my-5">
        Being that Salwator has always been Kraków’s most green, ancient and affluent district, it’s a bit of a wonder
        why more people don’t visit.
      </Typography>
      <br />
      <Typography type="b2-inter-regular" tag="p">
        Certainly the area’s main attraction is the stunning Kościuszko Mound and surrounding fortifications, but the
        scenic ascent to the mound is almost as pleasant as the earthwork itself and makes a perfect escape from the
        sometimes frenetic bustle of the city centre. Essentially comprising one long, virtually traffic-less,
        tree-lined avenue flanked by ancient churches, atmospheric cemeteries and grand villas - which begins at the
        city’s largest sacral complex and summits atop the city’s most magnificent overlook - Salwator should hold
        plenty of enchantment for visitors.
      </Typography>
      <br />
      <Image src="/content-demo-image.png" alt="Nice place" height="450" width="750" />
      <hr className="border-beigeDark border-t-2 mt-16 mb-4" />
      <Typography type="h2" className="mb-12">
        What to See on Salwator
      </Typography>
      <Typography type="b2-inter-regular" tag="p">
        Certainly the area’s main attraction is the stunning Kościuszko Mound and surrounding fortifications, but the
        scenic ascent to the mound is almost as pleasant as the earthwork itself and makes a perfect escape from the
        sometimes frenetic bustle of the city centre. Essentially comprising one long, virtually traffic-less,
        tree-lined avenue flanked by ancient churches, atmospheric cemeteries and grand villas - which begins at the
        city’s largest sacral complex and summits atop the city’s most magnificent overlook - Salwator should hold
        plenty of enchantment for visitors.
      </Typography>
      <br />
      <Typography type="b2-inter-regular" className="list-disc ml-4" tag="div">
        <ul>
          <li className="mb-4">
            Certainly the area’s main attraction is the stunning Kościuszko Mound and surrounding fortifications, but
            the scenic ascent to the mound is almost as pleasant as the earthwork itself and makes a perfect escape from
            the sometimes frenetic bustle of the city centre.
          </li>
          <li>
            mound is almost as pleasant as the earthwork itself and makes a perfect escape from the sometimes frenetic
            bustle of the city centre.
          </li>
        </ul>
      </Typography>
      <blockquote className="relative bg-white py-8 px-4 my-12 rounded-md">
        <Image src={quotation} alt="Nice quote" className="mb-4" />
        <Typography type="b2">
          This is a beautiful quote that showcases the large quotation mark. The content of this quote can be customized
          as needed for your specific use case.
        </Typography>
      </blockquote>
      <Button size="normal" text="READ MORE" />
    </section>
  );
}
