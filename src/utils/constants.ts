import { Priority, Status, PriorityColorMapping } from "../types";

export const LIST_PRIORITIES = [Priority.High, Priority.Medium, Priority.Low];

export const LIST_STATUSES = [Status.All, Status.Completed, Status.Todo];

export const PRIORITY_COLOR_MAPPING: PriorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};
