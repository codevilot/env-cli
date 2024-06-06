import { cli } from "./cli"

const cliArgs = require('get-them-args')(process.argv.slice(2))
const [command, obj] = cliArgs.unknown

const NO_ENV_ERR_MSG = 'There is no .env file'

const set = (state?:string)=>{
  if(!state) return console.log("state is not selected.")
  const envRepository = cli.run("git rev-parse --show-toplevel") +'/.env'
  const envState = obj;
  const hasEnvmsg = cli.run(`if [ ! -e ${envRepository} ]; then \n echo "${NO_ENV_ERR_MSG}" \n fi`)
  if(hasEnvmsg===NO_ENV_ERR_MSG) return console.log(hasEnvmsg)
  cli.run(`sed -i '' '
    /^#env_state=${envState}\(/! {
        /^#env_state=/ {
            :a
            n
            /^#)/!{
                /^[^#]/ s/^/#/
                ba
            }
        }
    } 
    /^#env_state=${envState}/ {
        :c
        n
        /^#)/!{

            /^#[^#]/ { 
                s/#//
            }
            bc
        }
    }
    /^#env_state=/! {}' "${envRepository}"`)
}

switch(command){
    case 'set':
        set(obj)
        break;

    default:
        break;
}

