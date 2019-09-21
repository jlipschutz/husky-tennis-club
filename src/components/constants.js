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
};

export type BlogSection = {
  title: string,
  description: string,
  image: string,
  imageTitle: string
};

export const BlogSectionData = {
  fallPractice: {
    title: "HTC Fall Practice 2019",
    description: "We will be running practice Monday, Wednesday, and Thursday " +
                  "from 5:00pm-8:00pm at the South IMA Courts.",
    image: "../../images/tenniscourt.jpg",
    imageTitle: "IMA Courts",
    date: "September 25th - December 5th",
    link: "n/a",
    linkAvailable: false
  },

  freshmenPractice: {
    title: "New Member Practice",
    description: "We run one practice before school starts to let new members " +
                  "learn more about the club and meet new friends to hit with." +
                  "This practice will be from 4:00pm-7:00pm.",
    image: "../../images/tenniscourt.jpg",
    imageTitle: "IMA Courts",
    date: "September 23rd",
    link: "n/a",
    linkAvailable: false
  },

  osuTournament: {
    title: "OSU Fall Invitational",
    description: "Tryout for our competitive team that travels across the PNW " +
                  "and play against other college club teams!",
    image: "../../images/tenniscourt.jpg",
    imageTitle: "IMA Courts",
    date: "October 18th - 20th",
    link: "http://bit.ly/OSUFallTournament",
    linkAvailable: true
  }

}
