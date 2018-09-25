var EventEmitter = require("events").EventEmitter;
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quiting app!');
                process.exit();
                break;
            case 'help':
                console.log('available commands:\n version,\n language,\n /exit,\n help,\n getOSinfo');
                break;
            case 'version':
                console.log(process.versions.node);
                break;
            case 'language':
                console.log(process.env.LANG);
                break;
            case 'getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        };
    }
});