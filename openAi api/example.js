import fetch from 'node-fetch'; // If running in Node.js, you need to use a library like 'node-fetch'
import axios from 'axios';

const apiUrl = 'https://api.openai.com/v1/chat/completions';
const apiKey = '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';

const requestData = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'user', content: 'what are fundamental particles subatomic particles are made of?' },
  ],
  temperature: 0.7,
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
  body: JSON.stringify(requestData),
};

/*
fetch(apiUrl, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.choices[0].message.content);
  })
  .catch((error) => {
    console.error(error);
  });

*/

const config = {
	headers: {
		//'Content-Type': 'application/json',
		Authorization: `Bearer ${apiKey}`,	
	}
}

axios.post(apiUrl, requestData, config)
	.then(res => console.log(JSON.stringify(res.data.choices, null, 2)))
	.catch(err => console.log(err.message))












