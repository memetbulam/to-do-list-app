export const getUserFromSession = (users, loginUserId) => {
    return users.find(user => user.id === loginUserId);
}