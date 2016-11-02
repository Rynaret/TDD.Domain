export class User{

    constructor(obj) {
        this._role = obj.role;
    }

    get role(){return this._role;}

    isAdministrator(){
        return this.role === "Administrator";
    }

    createPriceList(){
        return this.isAdministrator();
    }

    deletePriceList(){
        return this.isAdministrator();
    }
}
