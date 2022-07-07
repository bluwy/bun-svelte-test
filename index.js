import fs from 'fs/promises'
import { compile } from 'svelte/compiler'

// bun doesn't have self
globalThis.self = globalThis

const svelteCode = await fs.readFile('./Test.svelte', 'utf-8')

console.time('compile')
const result = compile(svelteCode)
console.timeEnd('compile')

// console.log(result.js.code)
