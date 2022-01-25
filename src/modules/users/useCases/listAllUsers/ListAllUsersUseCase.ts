import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const userByID = this.usersRepository.findById(user_id);

        if (!userByID) {
            throw new Error("Não existe usuário com essa ID");
        }

        if (!userByID.admin) {
            throw new Error("Esse usuário não tem autorização para essa ação.");
        }

        const listUsers = this.usersRepository.list();
        return listUsers;
    }
}

export { ListAllUsersUseCase };
