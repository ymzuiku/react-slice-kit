## Install

copy this code to Terminal, and change `<your-project>` string

```sh
react-slice-kit(){
  git clone -b master --single-branch https://github.com/ymzuiku/react-slice-kit $1
  cd $1
  yarn install && yarn dll && clear && yarn web
}
react-slice-kit your-project
```

wait done! open http://127.0.0.1:3300

## Use

Run dev serve

```sh
$ yarn web
```

Build Product projcet

```
$ yarn build
```
