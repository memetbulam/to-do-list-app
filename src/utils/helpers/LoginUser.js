export function getLoginUser(users, username, password) {
    return users.find(user => username === user.username && password === user.password);
}