import * as zoid from "zoid";

let MyWidget = zoid.create({
    tag: 'my-widget',
    url: 'localhost:2000'
})

console.log('have loaded mywidget: ')
console.log(MyWidget)

export default MyWidget