import { fireEvent } from "../../common/dom/fire_event";
import type {
  CalendarEventData,
  CalendarEventMutableParams,
} from "../../data/calendar";

export interface CalendarEventEditDialogParams {
  calendarId?: string;
  selectedDate?: Date; // When provided is used as the pre-filled date for the event creation dialog
  entry?: CalendarEventData;
  // When provided, the dialog creates a new event prefilled with these values
  duplicate?: CalendarEventMutableParams;
  canDelete?: boolean;
  updated: () => void;
}

export const loadCalendarEventEditDialog = () =>
  import("./dialog-calendar-event-editor");

export const showCalendarEventEditDialog = (
  element: HTMLElement,
  detailParams: CalendarEventEditDialogParams
): void => {
  fireEvent(element, "show-dialog", {
    dialogTag: "dialog-calendar-event-editor",
    dialogImport: loadCalendarEventEditDialog,
    dialogParams: detailParams,
  });
};
