import {PriceList} from './price-list'

export class App{

    constructor() {
        this._priceList = {};
    }

    get priceList(){return this._priceList;}
    addPriceList(priceList){
        if(priceList.beginDate === null || priceList.beginDate === undefined){
            throw new Error('Point Begin Date!');
        }

        this._priceList = new PriceList(priceList);
    }
}
