import { setTimeout, setInterval } from 'timers/promises';


for await (const date of setInterval(1000)) {
    console.log('running!!')
}


const a = 1