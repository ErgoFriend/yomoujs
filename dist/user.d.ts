export { getUserName, getUser };
declare function getUserName(user: string): string;
declare function getUser(id: string | number): Promise<string>;
