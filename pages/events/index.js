import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";

function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
}

export default AllEventsPage;
