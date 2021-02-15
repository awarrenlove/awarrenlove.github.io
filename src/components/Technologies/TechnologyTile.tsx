import { PropsWithChildren } from "react";

interface Props {
  title: string;
  href: string;
}

const TechnologyTile = (props: PropsWithChildren<Props>) => (
  <div
    title={props.title}
    className="mx-auto flex flex-col justify-around md:m-8 w-40 h-40 text-center"
  >
    <div>
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    </div>
  </div>
);

export default TechnologyTile;
