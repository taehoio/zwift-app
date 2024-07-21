import { useQuery } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react-native";
import React from "react";

import HomeScreen from "@/app/index";

jest.mock("@tanstack/react-query");
jest.mock("@/api/events");

describe("HomeScreen", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading indicator when data is loading", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      isError: false,
      isSuccess: false,
    });

    render(<HomeScreen />);

    expect(screen.getByTestId("LoadingIndicator")).toBeTruthy();
  });

  it("renders error message when data fetching fails", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: "Error message",
    });

    render(<HomeScreen />);

    expect(screen.getByText('Error: "Error message"')).toBeTruthy();
  });

  it("renders event list when data is successfully fetched", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      isSuccess: true,
      data: [
        { id: 1, name: "Event 1", eventSubgroups: [] },
        { id: 2, name: "Event 2", eventSubgroups: [] },
      ],
    });

    render(<HomeScreen />);

    expect(await screen.findByText("Event 1")).toBeTruthy();
    expect(await screen.findByText("Event 2")).toBeTruthy();
  });

  it("refetches data when refresh control is pulled", async () => {
    const refetch = jest.fn(() => Promise.resolve({ finally: jest.fn() }));

    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      isSuccess: true,
      data: [{ id: 1, name: "Event 1", eventSubgroups: [] }],
      refetch,
    });

    render(<HomeScreen />);

    const { refreshControl } = screen.getByTestId("ScrollView").props;
    refreshControl.props.onRefresh();

    await waitFor(() => expect(refetch).toHaveBeenCalled());
  });
});
