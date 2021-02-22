import { PropsWithChildren } from "react";

const Title = (props: PropsWithChildren<{}>) => (
  <h1 className="text-center text-2xl font-bold mb-2">{props.children}</h1>
);

export default Title;
