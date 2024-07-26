import { useQuery } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react-native";
import { useLocalSearchParams } from "expo-router";

import { fetchEvent } from "@/api/events";
import EventScreen from "@/app/events/[eventId]/index";

jest.mock("@tanstack/react-query");
jest.mock("expo-router");
jest.mock("@/api/events");

describe("EventScreen", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading indicator when data is loading", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      isError: false,
      isSuccess: false,
    });
    (useLocalSearchParams as jest.Mock).mockReturnValue({ eventId: "1" });

    render(<EventScreen />);

    expect(screen.getByTestId("LoadingIndicator")).toBeTruthy();
  });

  it("renders error message when data fetching fails", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: "Error message",
    });
    (useLocalSearchParams as jest.Mock).mockReturnValue({ eventId: "1" });

    render(<EventScreen />);

    expect(screen.getByText('Error: "Error message"')).toBeTruthy();
  });

  it("renders event data when data fetching is successful", () => {
    const mockEvent = {
      id: "1",
      imageUrl: "https://example.com/image.jpg",
      eventSubgroups: [
        { id: "1", label: 1, totalSignedUpCount: 10 },
        { id: "2", label: 2, totalSignedUpCount: 20 },
      ],
    };
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      isSuccess: true,
      data: mockEvent,
    });
    (useLocalSearchParams as jest.Mock).mockReturnValue({ eventId: "1" });
    (fetchEvent as jest.Mock).mockResolvedValue(mockEvent);

    render(<EventScreen />);

    expect(screen.getByTestId("SubgroupList")).toBeTruthy();
  });
});
