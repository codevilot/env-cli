# env-cli
env-cli is a simple tool for managing environment variables. It allows you to edit .env files with different configurations for each environment.

## Installation
You can install env-cli via npm:

```bash
npm install -g env-cli
```

To use env-cli, run the following command:


```bash
npx env-cli [state] [env-state]
```
Where state represents the state to be set in the .env file, and environment specifies the environment to be edited.

For example, running the following command:

```bash
npx env-cli state dev
```
Will edit a .env file with settings for the dev state. If a .env file already exists, the settings for the specified state will be updated in the existing file.

## Example
Consider the following .env file:

```
#.env file
#env_state=dev(
##THIS IS DEV ENV
#DATA_URL = google.com
DATA_URL2 = naver.com
#)

#env_state=local(
##THIS IS LOCAL ENV
#DATA_URL = naver.com
DATA_URL2 = google.com
#)
APP_URL = android.com
#CUSTOM_URL = daum.net
```

Executing the above command will activate only the settings for the dev state, commenting out settings for other states:

```
#.env file
#env_state=dev(
##THIS IS DEV ENV
DATA_URL = google.com
DATA_URL2 = naver.com
#)

#env_state=local(
##THIS IS LOCAL ENV
#DATA_URL = naver.com
#DATA_URL2 = google.com
#)
APP_URL = android.com
#CUSTOM_URL = daum.net
```
