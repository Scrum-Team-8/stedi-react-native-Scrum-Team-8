import sayHello from '../utils/helloworld.Nate.mjs';
import assert from 'assert';

it ('Should return Hello', ()=> {
    const nameString = sayHello();
    assert.equal(nameString, "Hello");
})