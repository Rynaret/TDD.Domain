import assert from 'assert'
import {User} from '../src/user'

// администратор может создавать прайс-лист
suite('When in role "Administrator"', ()=> {
    let user;
    setup(()=>{
        user = new User({role: 'Administrator'});
    });

    test('then user can create price list', ()=> {

        let result = user.createPriceList();

        assert.equal(true, result);
    });

    // администратор может удалить прайс-лист
    test('then user can delete price list', ()=>{

        let result = user.deletePriceList();

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

        let result = user.createPriceList();

        assert.equal(false, result);
    });

    // обычный пользователь не может удалить прайс-лист
    test('then user can not delete price list', ()=>{

        let result = user.deletePriceList();

        assert.equal(false, result);
    });
});
// // при создании нового прайс-листа нужно указать дату начала
// suite()
