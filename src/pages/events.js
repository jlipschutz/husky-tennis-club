
/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";

require("../style/event.module.css");
const EventCard = require("../components/event/EventCard.react");
const GenericHeader = require("../components/GenericHeader.react");
const {Link, graphql} = require('gatsby');
const React = require("react");


export default({data}: any) => {
  const posts = data.allMdx.edges;
  return (
    <div>
      <CustomNavbar selected="events" />
      <GenericHeader>Events</GenericHeader>
      <div style={{ height: 30 }} />
      <div class="container">
        <div class="row" style={{ marginBottom: 5 }}>
          <div
            class="col"
            style={{
              fontWeight:600,
              fontSize: 22,
              color: "rgba(116,122,255,0.7)"
            }}
          >
            January
          </div>
        </div>
        <div class="row">
          <div
            class="col-sm-2 col-12"
            style={{
              fontWeight: 100,
              color: "#2E3168",
              marginBottom: 5
            }}
          >
            25 - 28
          </div>
          <div class="col-sm-10 col-12">
            {posts.map(({node}, index)=> (
              <Link to={node.fields.route} style={{textDecoration:'none', color:  'inherit'}} key={index}>
                <EventCard
                  data={{
                    name: node.frontmatter.title,
                    cityDesc: "University of Washington",
                    registerBy: node.frontmatter.date,
                    fee: "Free",
                    dateMonth: 4,
                    dateYear: 2019,
                    dateDayStart: 27,
                    dateDayEnd: 29,
                    isTravel: true
                  }}
                />
              </Link>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`query PageList{
        allMdx(sort: { fields: [frontmatter___date], order: DESC }){
            edges{
                node{
                    fields {
                        route
                    }
                    frontmatter{
                        title
                        date
                    }
                    timeToRead
                    excerpt
                }
            }
        }
    }`
