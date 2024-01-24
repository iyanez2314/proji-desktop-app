export interface GroupData {
  id: number;
  groupName: string;
  projects: Array<ProjectData>;
}

interface ProjectData {
  id: number;
  name: string;
  description: string;
  priority: string;
  expectedStartDate: string;
  expectedEndDate: string;
  todos?: Array<Todo>;
}

interface Todo {
  id: number;
  name: string;
  owner: string;
  description: string;
  priority: string;
  status: string;
  expectedStartDate: string;
  expectedEndDate: string;
}

export const groupData: GroupData[] = [
  {
    id: 1,
    groupName: "Group 1",
    projects: [
      {
        id: 1,
        name: "Project 1",
        description: "Project 1 description",
        priority: "High",
        expectedStartDate: "2021-01-01",
        expectedEndDate: "2021-01-31",
        todos: [
          {
            id: 1,
            name: "Todo 1",
            owner: "User 1",
            description: "Todo 1 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
          {
            id: 2,
            name: "Todo 2",
            owner: "User 2",
            description: "Todo 2 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
          {
            id: 3,
            name: "Todo 3",
            owner: "User 3",
            description: "Todo 3 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
        ],
      },
      {
        id: 2,
        name: "Project 2",
        description: "Project 2 description",
        priority: "High",
        expectedStartDate: "2021-01-01",
        expectedEndDate: "2021-01-31",
        todos: [
          {
            id: 1,
            name: "Todo 1",
            owner: "User 1",
            description: "Todo 1 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
          {
            id: 2,
            name: "Todo 2",
            owner: "User 2",
            description: "Todo 2 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    groupName: "Group 2",
    projects: [
      {
        id: 1,
        name: "Project 1",
        description: "Project 1 description",
        priority: "High",
        expectedStartDate: "2021-01-01",
        expectedEndDate: "2021-01-31",
        todos: [
          {
            id: 1,
            name: "Todo 1",
            owner: "User 1",
            description: "Todo 1 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
          {
            id: 2,
            name: "Todo 2",
            owner: "User 2",
            description: "Todo 2 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
        ],
      },
      {
        id: 2,
        name: "Project 2",
        description: "Project 2 description",
        priority: "High",
        expectedStartDate: "2021-01-01",
        expectedEndDate: "2021-01-31",
        todos: [
          {
            id: 1,
            name: "Todo 1",
            owner: "User 1",
            description: "Todo 1 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
          {
            id: 2,
            name: "Todo 2",
            owner: "User 2",
            description: "Todo 2 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    groupName: "Group 3",
    projects: [
      {
        id: 1,
        name: "Project 1",
        description: "Project 1 description",
        priority: "High",
        expectedStartDate: "2021-01-01",
        expectedEndDate: "2021-01-31",
        todos: [
          {
            id: 1,
            name: "Todo 1",
            owner: "User 1",
            description: "Todo 1 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
          {
            id: 2,
            name: "Todo 2",
            owner: "User 2",
            description: "Todo 2 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
        ],
      },
      {
        id: 2,
        name: "Project 2",
        description: "Project 2 description",
        priority: "High",
        expectedStartDate: "2021-01-01",
        expectedEndDate: "2021-01-31",
        todos: [
          {
            id: 1,
            name: "Todo 1",
            owner: "User 1",
            description: "Todo 1 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
          {
            id: 2,
            name: "Todo 2",
            owner: "User 2",
            description: "Todo 2 description",
            priority: "High",
            status: "In Progress",
            expectedStartDate: "2021-01-01",
            expectedEndDate: "2021-01-31",
          },
        ],
      },
    ],
  },
];

export default groupData;
