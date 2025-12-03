import styles from "./Heading.module.css";

interface HeadingProps {
  children: string;
  attr: string;
}

export function Heading(props: HeadingProps) {
  return (
    <h1 className={`${styles.heading} ${styles.cyan}`}>{props.children}</h1>
  );
}
