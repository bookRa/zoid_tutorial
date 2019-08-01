# Cross Domain Apps with Create React App and Zoid

This repo is source for a [Youtube](https://youtube.com)
video and [Medium](https://medium.com) article (also 
available on my [Blog](https://bookra.github.io))

## Purpose
The purpose of this repo is demonstrate a practical way of using create-react-app (CRA) with the
Zoid library.

Both libraries are great, but the internet is devoid of good examples using both together!

More info on Zoid: https://github.com/krakenjs/zoid

More info on CRA: https://github.com/facebook/create-react-app

## How to Use this Repo

1) Install the packages in `parent-frame` and `child-frame` using `cd <dir> && npm i`
    * They both have the same dependencies. 
    * Note that `npm start` in `child` sets port to 2000. 
    If you're on UNIX it should be `PORT=2000 react-scripts start`
2) In two seperate terminal windows, run `npm start` in both the child and parent frames
3) Observe that the child frame loads in the parent frame as `<MyReactWidget {...props}>`!

## Key Takeaways

1) `widget.js` must exist in both Apps. If you don't have the source, you can load 
it via a [script load](https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx):
```javascript
import * as zoid from "zoid/dist/zoid.frameworks";

let MyWidget = zoid.create({
    tag: 'my-widget',
    url: 'http://localhost:2000/index.html'
})

console.log('yo! have loaded widget from parent: ')
console.log(MyWidget)

export default MyWidget
```
2) `import * as zoid from "zoid/dist/zoid.frameworks";` **NOT** `from "zoid"`

3) If your child app/frame is a CRA/React, then use the following: 
```javascript
let MyReactWidget = MyWidget.driver('react',{
  React: React,
  ReactDOM: ReactDOM
})
```
whether you define (and export) this react-rendered frame in your child or parent 
is up to you (I think). 