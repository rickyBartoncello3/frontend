type User = {
  id: number;
  name: string;
  isActive: boolean;
};

function getUserName(user: User): string {
  return user.name;
}

const user: User = {
  id: 1,
  name: 'Ricky',
  isActive: true,
};

console.log(getUserName(user));
