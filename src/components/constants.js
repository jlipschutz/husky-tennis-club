/*
 * @flow strict-local
 */

export type SiteTab = "goals" | "blog" | "events" | "contact" | "register";

export const SiteTabValue = {
  goals: "Goals",
  blog: "Blog",
  events: "Events",
  contact: "Contact Us",
  register: "Register"
};

export type BlogSection = {
  title: string,
  description: string,
  image: string,
  imageTitle: string
}

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
