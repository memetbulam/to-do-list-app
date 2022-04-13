export const getUserFromSession = (users, loginUserId) => {
    return users.filter(user => user.id === loginUserId);
}