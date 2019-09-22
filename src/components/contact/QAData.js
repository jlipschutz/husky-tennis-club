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
      question: "I want to play tennis! But I never have touched a racquet before!",
      answer: (
        <span>Don't worry! We welcome players from all skill levels! </span>
      )
    },
    {
      question: "What happens when it rains?",
      answer: (
        <span>
          Unfortunately if the courts get too wet we cancel practice for that day.
          We update if practice is cancelled regularly through Facebook and our mailing list.
        </span>
      )
    },
    {
      question: "When are practices?",
      answer: (
        <span>
          Practices for Fall 2019 are Monday, Wednesday, Thursday from 5:00pm - 8:00pm
          at the South IMA Courts. You do not need to stay for the entire practice, so
          feel free to drop by any time!
        </span>

      )
    },
    {
      question: "How much does joining the club cost?",
      answer: (
        <span>
          The annual membership fee is $40 if you pay our Treasurer Matt Cao by September 30th via
          cash or Venmo. This membership fee will increase to $50 if not paid by the cutoff.
          You can also just pay a quarterly fee of $15 if you are only sigining up for one quarter.
          This covers court reservations, equipment, and other fees that help
          the club.
        </span>
      )
    },
    {
      question: "Do we get to use indoor courts?",
      answer: (
        <span>
          For Fall quarter we do not use indoor courts, but during Winter Quarter we get a
          weekly practice in the Nordstrom Courts nearby the IMA.
        </span>
      )
    },
    {
      question: "Do we have to miss classes for tournaments?",
      answer: (
        <span>
          Due to the fact that we leave Fridays to carpool to tournaments there is
          a chance you will miss some of your Friday classes. However, we try to accomodate
          for morning classes and we try to maximize how much time you can spend at school
          before leaving that Friday.
        </span>
      )
    }
  ]
};
