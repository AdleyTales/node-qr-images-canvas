var QRCode = require('qrcode')


// base64
// QRCode.toDataURL('I am a pony!', function (err, url) {
//   console.log(url)
// })

str = `jfksdfkshjfkhsjkdfhsdjkfhsdjkfhsjdkfhskjdhfjksdhfjkdshfjksdhfjksdclea`

QRCode.toFile('abcd.png', str, {
  // color: {
  //   dark: '#00F',  // Blue dots
  //   light: '#0000' // Transparent background
  // }
  width: 600,
  // margin:2
}, function (err) {
  if (err) throw err
  console.log('done')
})