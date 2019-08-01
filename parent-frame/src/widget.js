import * as zoid from "zoid/dist/zoid.frameworks";

let MyWidget = zoid.create({
    tag: 'my-widget',
    url: 'localhost:2000'
})

console.log('yo! have loaded mywidget: ')
console.log(MyWidget)

export default MyWidget