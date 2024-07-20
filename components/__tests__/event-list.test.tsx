import { render, screen } from "@testing-library/react-native";
import { Link } from "expo-router";
import React from "react";

import { EventList } from "@/components/event-list";
import { EventWithRoute } from "@/types/zwift.type";

jest.mock("expo-router", () => ({
  Link: jest.fn(({ children }) => children),
}));

describe("EventList", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    const events: EventWithRoute[] = [];

    render(<EventList eventsWithRoute={events} />);
  });

  it("renders the correct number of events", () => {
    const events: EventWithRoute[] = [
      {
        id: 1,
        name: "Test Event 1",
        eventType: "RACE",
        laps: 1,
        eventSubgroups: [],
        routeId: 1,
        route: {
          name: "R.G.V.",
        },
      },
      { id: 2, name: "Test Event 2", eventSubgroups: [] },
    ] as unknown as EventWithRoute[];

    render(<EventList eventsWithRoute={events} />);

    expect(screen.getAllByTestId("Event")).toHaveLength(2);
  });

  it("applies background color to even events", () => {
    const events: EventWithRoute[] = [
      { id: 1, name: "Test Event 1", eventSubgroups: [] },
      { id: 2, name: "Test Event 2", eventSubgroups: [] },
    ] as unknown as EventWithRoute[];

    render(<EventList eventsWithRoute={events} />);

    const eventComponents = screen.getAllByTestId("Event");
    expect(
      eventComponents[0].props.className.split(" ").includes("bg-default-200"),
    ).toBe(true);
    expect(
      eventComponents[1].props.className.split(" ").includes("bg-default-200"),
    ).toBe(false);
  });

  it("renders Link with correct href", () => {
    const events: EventWithRoute[] = [
      { id: 1, name: "Test Event 1", eventSubgroups: [] },
    ] as unknown as EventWithRoute[];

    render(<EventList eventsWithRoute={events} />);

    expect(Link).toHaveBeenCalledWith(
      expect.objectContaining({ href: "/events/1" }),
      {},
    );
  });
});
