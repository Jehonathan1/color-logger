
let log = (text, style, ...args) => {
    console.log(`%c ${text} `, style, ...args);
}
log('hi', 'background: magenta; color: HoneyDew','arrrrg!');

const p ={
    magenta: function(text, ...args){
        console.log(`%c ${text} `,'background: magenta; color: HoneyDew', ...args);
    },
    indigo: function(text, ...args){
        console.log(`%c ${text} `,'background: indigo; color: HoneyDew', ...args);
    },
    yellow: function(text, ...args){
        console.log(`%c ${text} `,'background: yellow; color: black', ...args);
    },
    green: function(text, ...args){
        console.log(`%c ${text} `,'background: green; color: HoneyDew', ...args);
    },
    blue: function(text, ...args){
        console.log(`%c ${text} `,'background: blue; color: HoneyDew', ...args);
    },
    // yellow, red, green, blue.
};

p.magenta('potatos', 'potatos')
p.indigo('potatos', 'potatos')
p.yellow('potatos', 'potatos')
p.green('potatos', 'potatos')
p.blue('potatos', ['potatos', 'yamms', 2])