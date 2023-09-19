import { render, waitFor } from "@testing-library/react";
import Home from "./index";

import * as service from "./api.service";
jest.mock("./api.service");

// ============ Test file passing successfully using npm test but not in Jest extension ===========
describe("index test", () => {
  beforeEach(() => {
    jest.spyOn(service, "getTodos").mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
    ]);
  });

  test("render component",async () => {
    const { container } = render(<Home />);
    await waitFor(() => expect(service.getTodos).toHaveBeenCalledTimes(1))
    expect(container).toMatchSnapshot();
  });
});
