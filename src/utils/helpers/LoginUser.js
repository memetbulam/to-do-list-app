export function getLoginUser(users, username, password) {
    return users.filter(user => username === user.username && password === user.password);
}