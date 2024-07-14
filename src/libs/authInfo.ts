import { createStorage } from "unstorage";
import localStorageDriver from "unstorage/drivers/localstorage";

const storage = createStorage({
    driver: localStorageDriver({ base: "manato: " }),
});

export async function fetchCrumbedCookie(): Promise<string | null> {
    return await storage.getItem("crumbed_cookie");
}

export async function storeCrumbedCookie(c: string): Promise<void> {
    await storage.setItem("crumbed_cookie", c);
}

export async function isLogin(): Promise<boolean> {
    const loginData = await fetchCrumbedCookie();

    let loginState = false;
    if (loginData === "true") {
        loginState = true;
    }

    return loginState;
}

export async function logout(): Promise<void> {
    await storage.removeItem("crumbed_cookie", { removeMeta: true });
    await storage.removeItem("login_state", { removeMeta: true });
}

export async function setLoginState(b: boolean): Promise<void> {
    await storage.setItem("login_state", b);
}
