export type Task = {
  id: string;
  title: string;
  tag?: string;
  due?: string;
  stats?: { comments?: number; attachments?: number };
};

export type Column = {
  id: string;
  title: string;
  color: "gray" | "yellow" | "green" | "red";
  tasks: Task[];
};

export const columns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "gray",
    tasks: [
      {
        id: "t1",
        title: "User interview",
        tag: "Research",
        due: "Tomorrow",
        stats: { comments: 2 },
      },
      {
        id: "t2",
        title: "Design System",
        tag: "Design",
        due: "2 Reports",
        stats: { comments: 3 },
      },
    ],
  },
  {
    id: "doing",
    title: "In Progress",
    color: "yellow",
    tasks: [
      {
        id: "t3",
        title: "UI Design",
        tag: "Design",
        due: "Tomorrow",
        stats: { comments: 2, attachments: 2 },
      },
      {
        id: "t4",
        title: "Check Clients Feedback",
        tag: "Feedback",
        due: "22 Apr, 2022",
      },
    ],
  },
  {
    id: "approved",
    title: "Approved",
    color: "green",
    tasks: [
      {
        id: "t5",
        title: "Prototype",
        tag: "Research",
        due: "Tomorrow",
        stats: { comments: 2 },
      },
      {
        id: "t6",
        title: "Design new illustrations",
        tag: "Design",
        due: "2 Reports",
        stats: { comments: 3 },
      },
    ],
  },
  {
    id: "rejected",
    title: "Rejected",
    color: "red",
    tasks: [
      {
        id: "t7",
        title: "Redesign website",
        tag: "Design",
        due: "Tomorrow",
        stats: { comments: 2, attachments: 2 },
      },
      {
        id: "t8",
        title: "Add animations",
        tag: "Animation",
        due: "22 Apr, 2022",
      },
    ],
  },
];
