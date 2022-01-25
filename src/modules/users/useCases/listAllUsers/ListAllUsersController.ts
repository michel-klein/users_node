import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
    user_id?: string;
}

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = <IRequest>request.headers;
        let userList: User[];

        try {
            userList = this.listAllUsersUseCase.execute({ user_id });
        } catch (error) {
            return response.status(400).json({ "error": error.message });
        }

        return response.status(200).json(userList);
    }
}

export { ListAllUsersController };
