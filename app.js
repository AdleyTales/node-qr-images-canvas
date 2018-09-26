var qr = require('node-qr-image');

var qr_svg = qr.image('I love QR!', { type: 'png' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.png'));
