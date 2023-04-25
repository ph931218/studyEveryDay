import add from './index copy'
import {testMock} from './mock'
import axios from './axios'
import $ from 'jquery';
require('./index.css');

console.log(111)
let a = 1;

console.log(add(1,2));
axios.request({
    method: 'get',
    url: 'http://www.ph.com/mock'
}).then(Response => {
    console.log(Response.data, 'then')
    $(document).ready(() => {
        $('body').append(
            Response.data.list.reduce((rel, item) => {
                return rel + '<div>aaaa</div>'
            }, '')
        )
    })
}).catch(err => {
    console.log(err, 'err')
})
console.log(testMock, '>>>')