#!/usr/bin/env node 
const {execSync} = require("child_process")
class Cli {
    public run(cmd:string){
        return execSync(cmd).toString().trim()
    }
}

export const cli = new Cli()