import { render, screen } from "@testing-library/react-native";
import dayjs from "dayjs";

import { StartTime } from "@/components/start-time";

describe("StartTime", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the local start time", async () => {
    const date = new Date();
    const formattedDate = "12:34";
    const dayjsFormat = jest
      .spyOn(dayjs.prototype, "format")
      .mockReturnValue("12:34");

    render(<StartTime date={date} />);

    expect(screen.getByText(formattedDate)).toBeTruthy();
    expect(dayjsFormat).toHaveBeenCalledWith("HH:mm");
  });

  it('should render "--:--" when local start time is not available', async () => {
    const date = new Date();
    const dayjsFormat = jest
      .spyOn(dayjs.prototype, "format")
      .mockReturnValue(undefined);

    render(<StartTime date={date} />);

    expect(await screen.findByText("--:--")).toBeTruthy();
    expect(dayjsFormat).toHaveBeenCalledWith("HH:mm");
  });

  it("should update local start time when date prop changes", async () => {
    const date1 = new Date();
    const date2 = new Date(date1.getTime() + 3600000); // 1 hour later
    const formattedDate1 = "12:34";
    const formattedDate2 = "13:34";
    const dayjsFormat = jest
      .spyOn(dayjs.prototype, "format")
      .mockReturnValueOnce(formattedDate1)
      .mockReturnValueOnce(formattedDate2);

    render(<StartTime date={date1} />);
    expect(await screen.findByText(formattedDate1)).toBeTruthy();

    render(<StartTime date={date2} />);
    expect(await screen.findByText(formattedDate2)).toBeTruthy();

    expect(dayjsFormat).toHaveBeenCalledWith("HH:mm");
  });
});
