export interface WeekDay {
  date: Date;
  isPast: boolean;
  isToday: boolean;
  isFuture: boolean;
  isWeekend: boolean;
}
export interface EventColor {
  primary: string;
  secondary: string;
}
export interface EventAction {
  label: string;
  cssClass?: string;
  onClick({event}: {
    event: CalendarEvent;
  }): any;
}
export interface CalendarEvent {
  start: Date;
  end?: Date;
  title: string;
  color: EventColor;
  actions?: EventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;
}
export interface WeekViewEvent {
  event: CalendarEvent;
  offset: number;
  span: number;
  startsBeforeWeek: boolean;
  endsAfterWeek: boolean;
}
export interface WeekViewEventRow {
  row: WeekViewEvent[];
}
export interface MonthViewDay extends WeekDay {
  inMonth: boolean;
  events: CalendarEvent[];
  backgroundColor?: string;
  cssClass?: string;
  badgeTotal: number;
}
export interface MonthView {
  rowOffsets: number[];
  days: MonthViewDay[];
}
export interface DayViewEvent {
  event: CalendarEvent;
  height: number;
  width: number;
  top: number;
  left: number;
  startsBeforeDay: boolean;
  endsAfterDay: boolean;
}
export interface DayView {
  events: DayViewEvent[];
  width: number;
  allDayEvents: CalendarEvent[];
}
export interface DayViewHourSegment {
  isStart: boolean;
  date: Date;
  cssClass?: string;
}
export interface DayViewHour {
  segments: DayViewHourSegment[];
}
export declare const getWeekViewEventOffset: Function;
export declare const getWeekViewHeader: Function;
export declare const getWeekView: Function;
export declare const getMonthView: Function;
export declare const getDayView: Function;
export declare const getDayViewHourGrid: Function;
