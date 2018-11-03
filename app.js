'use strict';

// FileSystem : ファイルを扱うモジュール
const fs = require('fs');

// ファイルを1行ずつ読み込むモジュール
const readline = require('readline');

/*
以上の部分は popu-pref.csv ファイルから、ファイルを読み込みを行う Stream を生成し、さらにそれを readline オブジェクトの input として設定し、 rl オブジェクトを作成しています。
*/

// Stream とは、非同期で情報を取り扱うための概念で、情報自体ではなく情報の流れに注目します。
const rs = fs.ReadStream('./popu-pref.csv');
const rl = readline.createInterface({'input':rs,'output':{}});
rl.on('line',(lineString) => {
	const columns = lineString.split(',');
	const prefecture = columns[2];
	const year = parseInt(columns[0]);
	console.log(lineString);
	const popu = parseInt(columns[7]);
	if (year === 2010 || year === 2015) {
		console.log(year);
		console.log(prefecture);
		console.log(popu);
	}
});

// ストリームに情報を流し始める処理
rl.resume();
