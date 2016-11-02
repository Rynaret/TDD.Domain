import assert from 'assert'
import {User} from '../src/user'
import {App} from '../src/app'

// администратор может создавать прайс-лист
suite('When in role "Administrator"', ()=> {
    let user;
    setup(()=>{
        user = new User({role: 'Administrator'});
    });

    test('then user can create price list', ()=> {
        let priceList = {};

        let result = user.createPriceList(priceList);

        assert.equal(true, result);
    });

    // администратор может удалить прайс-лист
    test('then user can delete price list', ()=>{
        let priceList = {};

        let result = user.deletePriceList(priceList);

        assert.equal(true, result);
    });
});
// обычный пользователь не может создавать прайс-лист
suite('When in role not "Administrator"', ()=> {
    let user;
    setup(()=>{
        user = new User({role: 'User'});
    });

    test('then user can not create price list', ()=> {
        let priceList = {};

        let result = user.createPriceList(priceList);

        assert.equal(false, result);
    });

    // обычный пользователь не может удалить прайс-лист
    test('then user can not delete price list', ()=>{
        let priceList = {};

        let result = user.deletePriceList(priceList);

        assert.equal(false, result);
    });
});
// при создании нового прайс-листа можно указать дату начала
suite("When price list is created", ()=>{
    let user;
    let app = new App();
    setup(()=>{
        user = new User({role: 'User'},app);
    });

    suite('and set begin date 2.11.2016', ()=>{
        test('then price list created with begin date 2.11.2016', ()=>{
            let beginDate = new Date("11.2.2016");
            let priceList = {beginDate:beginDate};

            user.createPriceList(priceList);

            assert.equal(priceList.beginDate.toDateString(), app.priceList.beginDate.toDateString());
        });
    });
});
