import {App} from './app'

export class User{

    constructor(obj, app = null) {
        this._role = obj.role;
        this._app = app;
    }

    get role(){return this._role;}
    get app(){return !!this._app ? this._app : new App();}

    isAdministrator(){
        return this.role === "Administrator";
    }

    createPriceList(obj){
        this.app.addPriceList(obj);
        return this.isAdministrator();
    }

    deletePriceList(){
        return this.isAdministrator();
    }
}
