/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
import { BlogSectionData } from "../components/constants";
import { makeStyles } from "@material-ui/core/styles";
import GenericBlogCard from "../components/blog/GenericBlogSection.react";
import Grid from "@material-ui/core/Grid";
const style = require("../style/blogs.module.css");

const React = require("react");
const GenericHeader = require("../components/GenericHeader.react");

type Props = {};

class Blog extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="blog" />
        <GenericHeader>Blog</GenericHeader>
        <div className={style.flexGrow}>
          <Grid container spacing = {4}>
            <GenericBlogCard blogSectionData = {BlogSectionData.fallPractice}/>
            <GenericBlogCard blogSectionData = {BlogSectionData.freshmenPractice}/>
            <GenericBlogCard blogSectionData = {BlogSectionData.osuTournament}/>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Blog;
