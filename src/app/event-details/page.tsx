import EventDetailsMain from "@/components/event-details/EventDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const EventDetailsPage = () => {
  const id = 1;
  return (
    <Wrapper>
      <main>
        <EventDetailsMain id={id} />
      </main>
    </Wrapper>
  );
};

export default EventDetailsPage;
