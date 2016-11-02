export class PriceList{

    constructor(obj) {
        this._beginDate = new Date(obj.beginDate);
    }

    get beginDate(){return this._beginDate;}
}