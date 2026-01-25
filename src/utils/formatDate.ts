import { format } from "date-fns";

export function formatDate(timestemp: number) {
  const date = new Date(timestemp);
  return format(date, "dd/MM/yyyy HH:mm");
}
