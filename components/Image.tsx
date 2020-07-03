import React, { ReactElement, ReactChildren } from "react";

interface Props {
  src: string;
  alt: string;
  children: ReactChildren;
}

export default function Image({ src, alt, children }: Props): ReactElement {
  return (
    <figure>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{children}</figcaption>
    </figure>
  );
}
