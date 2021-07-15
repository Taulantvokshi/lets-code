// const cp = require('child_process');

// const fs = require('fs');
// const loop = cp.spawn('node', ['loop.js']);

// const writeStream = fs.createWriteStream('new_results.js');

// class Transmition extends require('stream').Transform {
//   constructor(char) {
//     super();
//     this.replaceChar = char;
//   }
//   _transform(chunk, encoding, cb) {
//     const tran = parseInt(chunk.toString());

//     this.push(String(tran - 100));
//     cb();
//   }
// }
// const trans = new Transmition();
// loop.stdout.pipe(trans).pipe(writeStream);

// loop.on('error', (err) => {
//   console.log(err);
// });

// console.log('HELLO');
// const { Readable } = require('stream');
// const peeks = ['Tallac', 'Manuel', 'Jose', 'Aka'];

// class StreamArray extends Readable {
//   constructor(array) {
//     super({ encoding: 'utf-8' });
//     this.array = array;
//     this.index = 0;
//   }
//   _read() {
//     if (this.index <= this.array.length) {
//       const chunk = this.array[this.index];
//       this.push(chunk);
//       this.index += 1;
//     } else {
//       this.push(null);
//     }
//   }
// }

// const peakStream = new StreamArray(peeks);

// peakStream.on('data', (chunk) => {
//   console.log(chunk);
// });
// peakStream.on('end', () => console.log('done'));

// const fs = require('fs');

// const readStream = fs.createReadStream('./server.js', { encoding: 'utf-8' });

// readStream.on('data', (chunk) => {
//   console.log(chunk.length);
// });
// readStream.pause()
// const fs = require('fs');
// const CSS_COLOR_NAMES = [
//   'AliceBlue',
//   'AntiqueWhite',
//   'Aqua',
//   'Aquamarine',
//   'Azure',
//   'Beige',
//   'Bisque',
//   'Black',
//   'BlanchedAlmond',
//   'Blue',
//   'BlueViolet',
//   'Brown',
//   'BurlyWood',
//   'CadetBlue',
//   'Chartreuse',
//   'Chocolate',
//   'Coral',
//   'CornflowerBlue',
//   'Cornsilk',
//   'Crimson',
//   'Cyan',
//   'DarkBlue',
//   'DarkCyan',
//   'DarkGoldenRod',
//   'DarkGray',
//   'DarkGrey',
//   'DarkGreen',
//   'DarkKhaki',
//   'DarkMagenta',
//   'DarkOliveGreen',
//   'DarkOrange',
//   'DarkOrchid',
//   'DarkRed',
//   'DarkSalmon',
//   'DarkSeaGreen',
//   'DarkSlateBlue',
//   'DarkSlateGray',
//   'DarkSlateGrey',
//   'DarkTurquoise',
//   'DarkViolet',
//   'DeepPink',
//   'DeepSkyBlue',
//   'DimGray',
//   'DimGrey',
//   'DodgerBlue',
//   'FireBrick',
//   'FloralWhite',
//   'ForestGreen',
//   'Fuchsia',
//   'Gainsboro',
//   'GhostWhite',
//   'Gold',
//   'GoldenRod',
//   'Gray',
//   'Grey',
//   'Green',
//   'GreenYellow',
//   'HoneyDew',
//   'HotPink',
//   'IndianRed',
//   'Indigo',
//   'Ivory',
//   'Khaki',
//   'Lavender',
//   'LavenderBlush',
//   'LawnGreen',
//   'LemonChiffon',
//   'LightBlue',
//   'LightCoral',
//   'LightCyan',
//   'LightGoldenRodYellow',
//   'LightGray',
//   'LightGrey',
//   'LightGreen',
//   'LightPink',
//   'LightSalmon',
//   'LightSeaGreen',
//   'LightSkyBlue',
//   'LightSlateGray',
//   'LightSlateGrey',
//   'LightSteelBlue',
//   'LightYellow',
//   'Lime',
//   'LimeGreen',
//   'Linen',
//   'Magenta',
//   'Maroon',
//   'MediumAquaMarine',
//   'MediumBlue',
//   'MediumOrchid',
//   'MediumPurple',
//   'MediumSeaGreen',
//   'MediumSlateBlue',
//   'MediumSpringGreen',
//   'MediumTurquoise',
//   'MediumVioletRed',
//   'MidnightBlue',
//   'MintCream',
//   'MistyRose',
//   'Moccasin',
//   'NavajoWhite',
//   'Navy',
//   'OldLace',
//   'Olive',
//   'OliveDrab',
//   'Orange',
//   'OrangeRed',
//   'Orchid',
//   'PaleGoldenRod',
//   'PaleGreen',
//   'PaleTurquoise',
//   'PaleVioletRed',
//   'PapayaWhip',
//   'PeachPuff',
//   'Peru',
//   'Pink',
//   'Plum',
//   'PowderBlue',
//   'Purple',
//   'RebeccaPurple',
//   'Red',
//   'RosyBrown',
//   'RoyalBlue',
//   'SaddleBrown',
//   'Salmon',
//   'SandyBrown',
//   'SeaGreen',
//   'SeaShell',
//   'Sienna',
//   'Silver',
//   'SkyBlue',
//   'SlateBlue',
//   'SlateGray',
//   'SlateGrey',
//   'Snow',
//   'SpringGreen',
//   'SteelBlue',
//   'Tan',
//   'Teal',
//   'Thistle',
//   'Tomato',
//   'Turquoise',
//   'Violet',
//   'Wheat',
//   'White',
//   'WhiteSmoke',
//   'Yellow',
//   'YellowGreen',
// ];

// const { Readable, Transform } = require('stream');
// class Throttle extends Transform {
//   constructor() {
//     super();
//   }
//   _transform(chunk, _, callback) {
//     this.total += chunk.length;

//     setTimeout(() => {
//       this.push(chunk);
//       console.log(chunk);
//       callback();
//     }, 200);
//   }
//   _flush(callback) {
//     console.log(`total bytes: ${this.total}`);
//     callback();
//   }
// }

// class ReadArray extends Readable {
//   constructor(array) {
//     super({ encoding: 'utf-8' });
//     this.array = array;
//     this.index = 0;
//   }
//   _read() {
//     if (this.index <= this.array.length) {
//       this.push(this.array[this.index]);
//       this.index += 1;
//     } else {
//       this.push(null);
//     }
//   }
// }

// const { createReadStream, stat } = require('fs');
// const { promisify } = require('util');
// const fileInfo = promisify(stat);
// const express = require('express');
// const app = express();
// const path = require('path');
// app.get('/', async (req, res) => {
//   const { size } = await fileInfo('./Adele-Hello.mp3');
//   const range = req.headers.range;

//   if (range) {
//     let [start, end] = range.replace(/bytes=/, '').split('-');
//     start = parseInt(start, 10);
//     end = end ? parseInt(end, 10) : size - 1;

//     res.writeHead(206, {
//       'Content-Range': `bytes ${start}-${end}/${size}`,
//       'Accept-Ranges': 'bytes',
//       'Content-Length': end - start + 1,
//       'Content-Type': 'audio/mpeg',
//     });
//     createReadStream('./Adele-Hello.mp3', { start, end }).pipe(res);
//   } else {
//     res.writeHead(200, {
//       'Content-Type': 'audio/mpeg',
//       'Content-Length': size,
//     });
//     createReadStream('./Adele-Hello.mp3').pipe(res);
//   }
// });

// app.use('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// app.listen(4040, console.log('server is running'));
