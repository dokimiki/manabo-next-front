import aspida, { type FetchConfig } from "@aspida/fetch";
import { AspidaClient } from "aspida";
import api from "../api/$api";
import consola from "consola";
import { ClassInfo } from "../types/common";

interface ProxyRequest{
    body: {
        path: string;
        method: string;
        authorization?: string | undefined;
        content_type?: string | undefined;
        body?: string | undefined;
    }; config?: FetchConfig | undefined;
}

export async function getClassList(): Promise<ClassInfo[]> {
    const body = (await fetchManabo({
        body: {
            path: "/",
            method: "POST",
            content_type: "application/x-www-form-urlencoded",
            body: "action=glexa_ajax_timetable_view"
        }
    })).body;
    let timeTable: ClassInfo[] = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(body, "text/html");
    const tables = doc.querySelectorAll("tbody");
    const domTimeTable = tables[0];
    const domAnotherClass = tables[1];

    return parseTimeTable(domTimeTable);
}
function parseTimeTable(dom: HTMLTableSectionElement): ClassInfo[] {
    let timeTable: ClassInfo[] = [];
    let period = 0;
    const trs = dom.querySelectorAll("tr");
    for (const tr of trs) {
        const columns = tr.querySelectorAll("td");
        let day = 1;//月曜日
        for (const column of columns) {
            const infoDom = column.querySelector(".student");
            if (infoDom) {
                const teacher = (infoDom.innerHTML + "<").replaceAll(/\t|\s/g, "").match(/<br>(.*?)</)![1];

                timeTable.push({
                    dayOfWeek: day,
                    period: period,
                    teacher: teacher,
                    title: infoDom.querySelector("b")?.textContent!
                });
            }
            day++;
        }
        period++;
    }
    return timeTable;
}

async function fetchManabo(req: ProxyRequest) {
    const COOKIE_KEY = "manato:crumbed_cookie";
    const crumbed_cookie = localStorage.getItem(COOKIE_KEY);
    const request: ProxyRequest & { body: { crumbed_cookie?: string | null } } = req;
    request.body.crumbed_cookie = crumbed_cookie;
    
    const apiClient = api(aspida(fetch, { throwHttpErrors: false, mode: "cors" }) as AspidaClient<FetchConfig>);

    return apiClient.v1.manabo.proxy.$post(req);
    
}



