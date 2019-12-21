/*
 * @flow strict-local
 */
import CompetitiveImg from "./images/nationals";
import CourtImg from "./images/burgers";
const React = require('react');
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
    "Section of USTA's Tennis on Campus program. " +
    "We have placed as finalists in the Pacific Northwest Sectionals " +
    "tournament and have participated in the USTA Tennis on " +
    "Campus Nationals tournament as well. We continue to strive " +
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
  },

  winterPractice: {
    title: "HTC Winter Practice 2020",
    description: "Practices will be held Monday, Wednesday, and Thursday. Monday " +
                 "practices will be held at the Nordstrom Tennis Center from 8:30pm-10:00pm. " +
                 "Wednesday and Thursday practices will be held from 5:00pm-8:00pm " +
                 "at the South IMA Courts.",
    image: "../../images/tenniscourt.jpg",
    imageTitle: "IMA Courts",
    date: "January 6th - March 13th",
    link: "n/a",
    linkAvailable: false
  },

  womenTennisTeam: {
    title: "Women's Club Team Clinic",
    description: "Come meet the Women's D1 Tennis Team at the Nordstrom Tennis Center " +
                  "and learn about opportunites to support the Women's team! See their " +
                  "schedule in the link below.",
    image: "../../images/tenniscourt.jpg",
    imageTitle: "IMA Courts",
    date: "January 8th",
    link: "https://gohuskies.com/schedule.aspx?path=wten",
    linkAvailable: true
  },

  uvicTournament: {
    title: "UVIC Winter Invitational",
    description: "Tryout for our competitive team that travels across the PNW " +
                  "and play against other college club teams!",
    image: "../../images/canada.jpg",
    imageTitle: "Canada",
    date: "January 17th - 19th",
    link: "http://bit.ly/UVICTournament",
    linkAvailable: true
  },

  yakimaTournament: {
    title: "Yakima Winter Tournament",
    description: "Tryout to participate in Gonzaga's hosted Winter Tournament " +
                 " in Yakima and play against other college club teams!",
    image: "../../images/tenniscourt.jpg",
    imageTitle: "Gonzaga",
    date: "Date TBD",
    link: "put link once date confirmed",
    linkAvailable: false,
  }


}
