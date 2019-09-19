/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
import { BlogSectionData } from "../components/constants";
import GenericBlogCard from "../components/blog/GenericBlogSection.react";

const React = require("react");
const GenericHeader = require("../components/GenericHeader.react");

type Props = {};

class Blog extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="blog" />
        <GenericHeader>Blog</GenericHeader>
        <div className = "row d-flex justify-content-start">
          <div className="col-4 col-mid-3">
            <GenericBlogCard blogSectionData = {BlogSectionData.fallPractice}/>
          </div>
          <div className="col-4 col-mid-3">
            <GenericBlogCard blogSectionData = {BlogSectionData.freshmenPractice}/>
          </div>
          <div className="col-4 col-mid-3">
            <GenericBlogCard blogSectionData = {BlogSectionData.osuTournament}/>
          </div>
        </div>


      </div>
    );
  }
}

export default Blog;
