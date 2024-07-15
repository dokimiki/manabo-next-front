export function isLoggedIn(dom: string): boolean {
    const parser = new DOMParser();
    const doc = parser.parseFromString(dom, "text/html");
    const loginForm = doc.querySelector(".login");
    return loginForm === null;
}
