const os = require("os")

// console.log(os.cpus())
console.log(parseInt((os.freemem()/1024)/1024/1024))
console.log(parseInt((os.totalmem()/1024)/1024/1024))

console.log(os.platform())

console.log(os.uptime()/60/60)

console.log(os.EOL)