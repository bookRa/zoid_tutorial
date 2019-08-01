import * as zoid from "zoid/dist/zoid.frameworks";

let MyWidget = zoid.create({
    tag: 'my-widget',
    url: 'http://localhost:2000/index.html'
})

console.log('yo! have loaded mywidget from child: ')
console.log(MyWidget)

export default MyWidget