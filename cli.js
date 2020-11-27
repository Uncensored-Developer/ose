const program = require('commander');
const inquirer = require('inquirer');
const opn = require('opn');
const ose = require('./src/ose');

program.version('1.0.0')
    .description('Ose right here on your command-line')
    .parse(process.argv);

console.log(ose.bio);
inquirer.prompt({
    name: 'link',
    type: 'list',
    message: ose.prompt,
    choices: ose.links.concat({
        'name': `...Or send me an email (${ose.email})`,
        'value': 'mailto:' + ose.email
    })
}).then(answers => {
    console.log(`Opening ${answers.link}`);
    opn(answers.link);
});
