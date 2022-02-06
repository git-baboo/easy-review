import React from "react";

import PullRequestList from "@/components/top/PullRequestList";
import { render, cleanup } from "@/tests/testUtils";
import { TopPullRequestType } from "@/types/PullRequestType";

afterEach(cleanup);

describe("PullRequestList", () => {
  test("プルリクエストが適切な数描画されている", () => {
    const pulls: TopPullRequestType[] = [
      {
        pullNumber: 1,
        ownerName: "owner1",
        repoName: "repo1",
        title: "title1",
      },
      {
        pullNumber: 2,
        ownerName: "owner2",
        repoName: "repo2",
        title: "title2",
      },
      {
        pullNumber: 3,
        ownerName: "owner3",
        repoName: "repo3",
        title: "title3",
      },
    ];

    const { getAllByRole } = render(<PullRequestList pulls={pulls} />);
    const items = getAllByRole("listitem");

    expect(items).toHaveLength(3);
  });
});
