export class Context {
    initialized = false;
    
    init() {
        this.initialized = true;
        console.log('>> Initialized!')
    }
}