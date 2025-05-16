export class InvalidArgumentException extends Error {
    
    constructor(message) {
        super("Argumentos invalidos");
        this.StatusCode = 400;
        
    }
}