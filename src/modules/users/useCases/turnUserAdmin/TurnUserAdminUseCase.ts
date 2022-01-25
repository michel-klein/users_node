import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class TurnUserAdminUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User {
        const userNewAdmin = this.usersRepository.findById(user_id);

        if (!userNewAdmin) {
            throw new Error("Não existe usuário com esse ID");
        }

        const userTurnedAdmin = this.usersRepository.turnAdmin(userNewAdmin);
        return userTurnedAdmin;
    }
}

export { TurnUserAdminUseCase };
