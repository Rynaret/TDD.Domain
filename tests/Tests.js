import assert from 'assert'
import {User} from '../src/user'

// администратор может создавать прайс-лист
suite('When in role "Administrator"', ()=>{
   test('then user can create price list', ()=>{
       let user = new User({role:'Administrator'});

       let result = user.createPriceList();

       assert.equal(true, result);
   });
});
