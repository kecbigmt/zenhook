type ZenHubEventType = "issue_transfer" | "estimate_set" | "estimate_cleared" | "issue_reprioritized";

interface ZenHubEvent {
  type: ZenHubEventType;
  githubUrl: string;
  organization: string;
  repo: string;
  userName: string;
  issueNumber: number;
  issueTitle: string;
}

type ZenHubIssueTransferEvent = ZenHubEvent & {
  toPipelineName: string;
  fromPipelineName: string;
  workspaceId: string;
  workspaceName: string;
}

type ZenHubEstimateSetEvent = ZenHubEvent & {
  estimate: number;
}

type ZenHubEstimateClearedEvent = ZenHubEvent;

type ZenHubIssueReprioritizedEvent = ZenHubEvent & {
  toPipelineName: string;
  fromPosition: number;
  toPosition: number;
  workspaceId: string;
  workspaceName: string;
};

function Main(): void {
  Logger.log(HelloWorld());
}

export function HelloWorld(): string {
  return "hello world";
}