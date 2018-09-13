# Install

open Terminal run this code, You can also copy this code to `~/.bash_profile`

```sh
react-starter-kit(){
  git clone -o react-starter-kit -b master --single-branch https://github.com/ymzuiku/react-slice-kit $1
  cd $1
  yarn install
  yarn dll
  if hash code 2>/dev/null; then
    code .
  fi
  yarn web
}
```

# Create Project

Use

```
react-starter-kit your-project
```
