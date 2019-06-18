const React = require("react");

export type QAType = {
  question: string,
  answer: React.Node
};

function CustomLink(props: { label: string, link: string }): React.Node {
  return (
    <a
      href={props.link}
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "#B68A62"
      }}
    >
      {props.label}
    </a>
  );
}

export const QAData = {
  data: [
    {
      question: "I would like to learn more about the club. Who can I talk to?",
      answer: (
        <span>
          Contact us via{" "}
          <CustomLink label="email" link="mailto:huskytennis@gmail.com" /> or
          through our Facebook group!
        </span>
      )
    },
    {
      question: "I want to donate to or sponsor the club!",
      answer: (
        <span>
          We are grateful that you want to donate or sponsor our club! Please
          email the club treasurer,{" "}
          <CustomLink label="Matt Cao" link="mailto:huskytennis@gmail.com" />.
        </span>
      )
    },
    {
      question: "I want to play tennis! But I never touched a racquet before!",
      answer: (
        <span>Don't worry! We welcome players from all skill level! </span>
      )
    }
  ]
};
