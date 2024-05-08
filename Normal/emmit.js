const EventEmitter = require('node:events')

const eventEmitter = new EventEmitter()

eventEmitter.on('start', (start, end) => {
    for(let i=start; i<=end; i++){
      console.log(i)
    }
})

eventEmitter.emit('start', 0, 100)