import {PriceList} from './price-list'

export class App{

    constructor() {
        this._priceList = {};
    }

    get priceList(){return this._priceList;}
    addPriceList(priceList){this._priceList = new PriceList(priceList);}
}
