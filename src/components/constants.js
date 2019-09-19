/*
 * @flow strict-local
 */
import Brandon from "./images/brandon";
import CompetitiveImg from "./images/nationals";
import CourtImg from "./images/burgers";
const React = require('react');
const recreational = require("../images/recreational.jpg");
export type SiteTab = "goals" | "blog" | "events" | "contact" | "register";

export const SiteTabValue = {
  goals: "Goals",
  blog: "Blog",
  events: "Events",
  contact: "Contact Us",
  register: "Register"
};

export type GoalSection = {
  title: string,
  picture: React.Node,
  description: string,
  titleColor: string
}

export const GoalsSectionData = {
  recreational: {
    title: "recreational",
    picture: CourtImg,
    description: "We always welcome new players to come " +
    "join us and participate in the Husky fun. During the " +
    "beginning of fall quarter we invite all interested tennis " +
    " players to play tennis and meet our current officers to " +
    "learn more about the club.",
    titleColor: "#CA9E86"
  },
  competitive: {
    title: "competitive",
    picture: CompetitiveImg,
    description: "Throughout the last few years, Husky Tennis "
    +" Club has been competitive in the Pacific Northwest " +
    "Section of USTA's Tennis on Campus program." +
    "We have placed as finalists in the Pacific Northwest Sectionals" +
    "tournament and have participated in the USTA Tennis on " +
    "Campus Nationals tournament as well. We continue to strive" +
    "to secure a place on the draw at Nationals.",
    titleColor: "#AEDDFD"
  }

}
