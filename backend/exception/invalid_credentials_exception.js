export class InvalidCredenciales extends Error {
    
    constructor(message) {
        super("Argumentos invalidos");
        this.StatusCode = 400;
        
    }
}