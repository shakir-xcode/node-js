import { translate } from '@vitalets/google-translate-api';
import fs from 'fs';

const { text } = await translate('i am fine', { to: 'zh-TW' });

fs.writeFileSync('./file.txt', text)
console.log(text) // => 'Hello World! How are you?'

