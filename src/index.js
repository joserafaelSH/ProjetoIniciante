
import { ClientController } from "./controllers/ClientController.js"
import { ClientRepository } from "./repository/ClientRepository.js"
import { ClientService } from "./services/ClientService.js"

const main = () => {
    const clientService = new ClientService()
    const clientController = new ClientController(clientService)
    clientController.create("teste")
}

main()
