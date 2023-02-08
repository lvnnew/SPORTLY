import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface SocialsLink {
  href: string;
  img: string;
  alt: string
}

const SocialsList: FC<SocialsLink> = ({href, img, alt}) => {
  return(
    <Link href={href}>
      <Image src={img} alt={alt} width="40" height="40" />
    </Link>
  );
}

export default SocialsList;