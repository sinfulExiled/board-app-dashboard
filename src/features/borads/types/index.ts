export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Task {
  id: string;
  title: string;
  status: "todo" | "inprogress" | "approved" | "reject";
  category: string;
  priority?: string;
  dueDate?: string;
  reports?: number;
  comments?: number;
  attachments?: number;
  assigned?: User[];
}

export interface SwimlaneProps {
  status: string;
  tasks: Task[];
  isOver?: boolean;
  activeTaskId?: string;
}

export interface TaskCardProps {
  task: Task;
  showDropIndicator?: boolean;
  isDragging?: boolean;
  isActive?: boolean;
  isOver?: boolean;
}