export class ClientController {
    
    constructor(clientService){
        this.clientService = clientService;
    }

    create(data){
        return this.clientService.create(data);
    }

    findOne(id){}

    findAll(){}

    update(id, data){}

    remove(id){}


}
