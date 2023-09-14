import fs from 'fs'
import moment from 'moment';

let a = "";

a = await fs.promises.readFile('./README.md', 'utf-8');

for (let i = 0; i < a.split('\n').length; i++) {
    console.log(i, '<', a.split('\n').length, a.split('\n')[i], moment().unix());
}