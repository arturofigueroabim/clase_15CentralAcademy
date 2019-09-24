const { exec } = require('child_process')

const commant = 'git branch';
const handler = (err, stdout, stderr) => {
	console.log(`stdout: ${stdout}`)
};

exec(commant, handler);
