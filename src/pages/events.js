
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";

require("../style/event.module.css");
const EventCard = require("../components/event/EventCard.react");
const GenericHeader = require("../components/GenericHeader.react");
const {Link, graphql} = require('gatsby');
const React = require("react");

/*
 * @flow strict-local
 */

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default({data}: any) => {
  const posts = data.allMdx.edges;
  var prevMonth = 0;

  return (
    <div>
      <CustomNavbar selected="events" />
      <GenericHeader>Events</GenericHeader>
      <div style={{ height: 30 }} />
      <div className="container">
        {posts.map(({node}, index)=> {

          console.log(node.frontmatter);
          var diff = prevMonth !== node.frontmatter.dateMonth;
          prevMonth = node.frontmatter.dateMonth;
          return (
              <div>
                {diff
                  ?	<div className="row" style={{ marginBottom: 5 }}>
                      <div
                        className="col"
                        style={{
                          fontWeight:600,
                          fontSize: 22,
                          color: "rgba(116,122,255,0.7)"
                        }}
                      >
                        {months[node.frontmatter.dateMonth - 1] + ', ' + node.frontmatter.dateYear}
                      </div>
                    </div>
                  : ''
                }

                <div className="row">
                  <div
                    className="col-sm-2 col-12"
                    style={{
                      fontWeight: 100,
                      color: "#2E3168",
                      marginBottom: 5
                    }}
                  >
                    {node.frontmatter.dateDayStart} {node.frontmatter.dateDayEnd != node.frontmatter.dateDayStart ? ' - ' + node.frontmatter.dateDayEnd : ''}
                </div>
                <div className="col-sm-10 col-12">
                  <Link to={node.fields.route} style={{textDecoration:'none', color:  'inherit'}} key={index}>
                    <EventCard
                      data={{
                        name: node.frontmatter.title,
                        cityDesc: node.frontmatter.cityDesc,
                        registerBy: node.frontmatter.registerBy,
                        fee: node.frontmatter.fee,
                        dateMonth: node.frontmatter.dateMonth,
                        dateYear: node.frontmatter.dateYear,
                        dateDayStart: node.frontmatter.dateDayStart,
                        dateDayEnd: node.frontmatter.dateDayEnd,
                        isTravel:node.frontmatter.isTravel
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          )})}
      </div>
    </div>
  );
};

export const query = graphql`query PageList{
        allMdx(sort: { fields: [frontmatter___date], order: ASC }){
            edges{
                node{
                    fields {
                        route
                    }
                    frontmatter{
                        title
                        date
                        registerBy
                        cityDesc
                        fee
                        dateMonth
                        dateYear
                        dateDayStart
                        dateDayEnd
                        isTravel
                    }
                    timeToRead
                    excerpt
                }
            }
        }
    }`
