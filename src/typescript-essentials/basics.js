"use strict";
function getUserName(user) {
    return user.name;
}
const user = {
    id: 1,
    name: 'Ricky',
    isActive: true,
};
console.log(getUserName(user));
