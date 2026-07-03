require('./env')
require('./JScode.js')

function get_anti(){
   return new window.rrrr(4)({
            serverTime: new Date().getTime()
        }).messagePack()
}

console.log('anti_content:::',get_anti())
console.log('anti_content.length:::',get_anti().length)
