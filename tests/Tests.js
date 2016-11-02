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
    // пользователь может удалить прайс-лист
    test('then user can delete price list', ()=>{

        let result = user.deletePriceList();

        assert.equal(true, result);
    });
});
