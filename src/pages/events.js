
/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from '../components/event/layout';
import CustomNavbar from "../components/navbar/navbar.react";

require("../style/event.module.css");
const EventCard = require("../components/event/EventCard.react");
const GenericHeader = require("../components/GenericHeader.react");
const {graphql} = require('gatsby');
const React = require("react");


type Props = {};

class Events extends React.Component<Props> {
  render(): React.Node {
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
                fontWeight: 600,
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
              <EventCard
                data={{
                  name: "2019 PNW Tennis on Campus Alumni Cup",
                  cityDesc: "University of Washington",
                  registerBy: "3/30/2019",
                  fee: "Free",
                  dateMonth: 4,
                  dateYear: 2019,
                  dateDayStart: 27,
                  dateDayEnd: 29,
                  isTravel: true
                }}
              />
            </div>
            <Layout>
              <div>
                <header>
                  <h2>Lets place video memes here!</h2>
                </header>
              </div>
            </Layout>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;

export const query = graphql`query pagelist{
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
