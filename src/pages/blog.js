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
const GenericFooter = require("../components/GenericFooter.react");

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
              <Grid item xs = {12} sm = {6} md = {3}>
                <GenericBlogCard blogSectionData = {BlogSectionData.winterPractice}/>
              </Grid>
              <Grid item xs = {12} sm = {6} md = {3}>
                <GenericBlogCard blogSectionData = {BlogSectionData.womenTennisTeam}/>
              </Grid>
              <Grid item xs = {12} sm = {6} md = {3}>
                <GenericBlogCard blogSectionData = {BlogSectionData.uvicTournament}/>
              </Grid>
          </Grid>
        </div>
        <GenericFooter color="#144788" />
      </div>
    );
  }
}

export default Blog;
