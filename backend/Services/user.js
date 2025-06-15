import { getDependency}  from "../libs/dependecies.js";

export class UserService {
    static async getSingleOrNullByUsername(username) {
        const useModel = getDependency('userModel');
        return await UserService.getSingleOrNullByUsername(username);
    } 
}
