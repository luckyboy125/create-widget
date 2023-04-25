declare interface TaskItem {
  description: string;
  value: number;
  checked: boolean;
}

declare interface GroupItem {
  name: string;
  tasks: TaskItem[];
}
