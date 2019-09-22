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
          <Grid container
                direction="row"
                justify="space-evenly">
              <Grid item xs = {12} md = {3}>
                <GenericBlogCard blogSectionData = {BlogSectionData.fallPractice}/>
              </Grid>
              <Grid item xs = {12} md = {3}>
                <GenericBlogCard blogSectionData = {BlogSectionData.freshmenPractice}/>
              </Grid>
              <Grid item xs = {12} md = {3}>
                <GenericBlogCard blogSectionData = {BlogSectionData.osuTournament}/>
              </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Blog;
