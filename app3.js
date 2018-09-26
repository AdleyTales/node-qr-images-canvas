var fs = require('fs');
var gm = require('gm');

// gm('abcd.png')
// .resize(200,240)
// .noProfile()
// .write('resize.png', function(err){
//     if (!err) console.log('done');
// })


// gm("abcd.png").drawText(0, 295, "3675674356735673457643")
//     .write('resize.png', function (err) {
//         if (!err) console.log('done');
//     })


// gm(200, 240, "#fff")
// .drawText(10, 50, "from scratch")
// .write("brandNewImg.jpg", function (err) {
//   // ...
// });

// gm('brandNewImg.jpg')
// // .fill('#000')        //设置白色
// .fontSize(12) 
// .drawText(10, 30, '123223434343434334322332')
// .write("drawing.png", function (err) {
//     console.log(err);
    
//   if (!err) console.log('done');
// });


gm('abcd.png')
// // .fill('#000')        //设置白色
.fontSize(30) 
.drawText(100, 760, '123223434343434334322332')
.write("drawing.png", function (err) {
    console.log(err);
    
  if (!err) console.log('done');
});

// gm('brandNewImg.jpg')
// .stroke("#ffffff")
// // .drawCircle(10, 10, 20, 10)
// // .font("Helvetica.ttf", 12)
// .drawText(30, 20, "GMagick!")
// .write("drawing.png", function (err) {
//   if (!err) console.log('done');
// });