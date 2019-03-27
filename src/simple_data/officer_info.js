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
    position: "Co-President",
    label: "Senior, Physics Major"
  },
  Brian: {
    name: "Brian Hou",
    position: "Student Advisor",
    label: "Senior, CS Major"
  },
  Kevin: {
    name: "Kevin Kang",
    position: "Treasurer",
    label: "Senior, CS Major"
  },
  Megan: {
    name: "Megan Chow",
    position: "Fundraising Chair",
    label: "Soph, LSJ Major"
  },
  Maddie: {
    name: "Maddie Lu",
    position: "Membership Chair",
    label: "Junior, Biz Major"
  },
  Boris: {
    name: "Boris Baura",
    position: "Photographer",
    label: "Senior, Math Major"
  }
};

module.exports = Object.freeze(OfficerData);
