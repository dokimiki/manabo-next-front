import { type DayOfWeek } from "@/src/types/common";

export function DOWtoStr(dow: DayOfWeek): string {
    switch (dow) {
        case "sun":
            return "日";
        case "mon":
            return "月";
        case "tue":
            return "火";
        case "wed":
            return "水";
        case "thu":
            return "木";
        case "fri":
            return "金";
        case "sat":
            return "土";
        default:
            return "謎";
    }
}
