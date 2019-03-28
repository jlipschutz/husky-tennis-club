// @flow

export type OfficerId =
  | "Brandon"
  | "Brian"
  | "Kevin"
  | "Megan"
  | "Maddie"
  | "Boris";

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
  }
};

module.exports = Object.freeze(OfficerData);
