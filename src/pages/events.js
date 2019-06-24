/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const React = require("react");
require("../style/event.module.css");
const GenericHeader = require("../components/GenericHeader.react");
const EventCard = require("../components/event/EventCard.react");

type Props = {};

class Events extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="events" />
        <GenericHeader>Events</GenericHeader>
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
    );
  }
}

export default Events;
