export function setSession(value) {
    sessionStorage.setItem("sessionInfo", JSON.stringify(value));
}

export function getSession() {
    return JSON.parse(sessionStorage.getItem("sessionInfo"));
}

export function removeSession() {
    sessionStorage.removeItem("sessionInfo");
}