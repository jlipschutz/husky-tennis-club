// @flow

export type OfficerId =
  | "Brandon"
  | "Brian"
  | "Kevin"
  | "Megan"
  | "Maddie"
  | "Boris"
  | "Jeremy"
  | "Kimmy"
  | "Matt"
  | "Samantha"
  | "Chris"
  | "Yodae";

export type Officer = {
  name: String,
  position: String,
  label: String
};

const OfficerData = {
  Brandon: {
    name: "Brandon Nakata",
    position: "President",
    label: "Senior, Physics & Astronomy"
  },
  Brian: {
    name: "Brian Hou",
    position: "Student Advisor",
    label: "Senior, Computer Science"
  },
  Kevin: {
    name: "Kevin Kang",
    position: "Treasurer",
    label: "Senior, Computer Science"
  },
  Megan: {
    name: "Megan Chow",
    position: "Fundraising Chair",
    label: "Soph, Business"
  },
  Maddie: {
    name: "Maddie Lu",
    position: "Membership Chair",
    label: "Junior, Business"
  },
  Boris: {
    name: "Boris Baura",
    position: "Photographer",
    label: "Senior, Math"
  },
  Jeremy: {
    name: "J Lipschutz",
    position: "President",
    label: "Junior, Computer Science"
  },
  Kimmy: {
    name: "Kimmy Lum",
    position: "Vice President",
    label: "Senior, Nutrition"
  },
  Matt: {
    name: "Matt Cao",
    position: "Treasurer",
    label: "Senior, Sociology"
  },
  Samantha: {
    name: "Samantha Merrill",
    position: "Fundraising Chair",
    label: "Sophomore, Mathematics"
  },
  Chris: {
    name: "Chris Wu",
    position: "Photographer",
    label: "Junior, MCD Biology"
  },
  Yodae: {
    name: "Yodae Lim",
    position: "Membership Chair",
    label: "Senior, Informatics"
  }
};

module.exports = Object.freeze(OfficerData);
