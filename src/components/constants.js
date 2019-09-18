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
  description: string
}

export const BlogSectionData = {
  fallPractice: {
    title: "HTC Fall Practice 2019",
    description: "We will be running practice Monday, Wednesday, and Thursday " +
                  "from 5:00pm-8:00pm at the South IMA Courts."
  }


}
