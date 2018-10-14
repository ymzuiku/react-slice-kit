import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { Map, fromJS } from 'immutable';

function rootReducer(state = Map({}), action) {
  if(!action.type) {
    action.type = 'NOTYPE';
  }
  if (action.reducer) {
    return action.reducer(state) || state;
  }
  return state;
}

let store;
if (
  !(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)
) {
  store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
} else {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
}

const storage = {
  localName: 'defaultIOKey',
  save: (v, theKey = storage.localName) => {
    const theType = Object.prototype.toString.call(v);
    if (theType === '[object Object]') {
      localStorage.setItem(theKey, JSON.stringify(v));
    } else if (theType === '[object String]') {
      localStorage.setItem(theKey, v);
    } else {
      console.warn('Warn: storage.save() param is no a Object');
    }
  },
  load: (theKey = storage.localName) => {
    try {
      const data = localStorage.getItem(theKey);
      if (data) {
        if (typeof data === 'string') {
          return JSON.parse(data);
        }
        return data;
      }
    } catch (err) {
      console.warn('load last localSate error');
    }
  },
  clear: (theKey = storage.localName) => {
    localStorage.setItem(theKey, {});
  },
};

// 这里做自动保存的监听
const autoStorageSave = (localName, needSaveKeys) => {
  if (localName) {
    storage.localName = localName;
  }
  if (Object.prototype.toString.call(needSaveKeys) !== '[object Array]') {
    // eslint-disable-next-line
    console.warn('autoSaveStorageKeys: params is no a Array');
  }
  // 只有Auth和DataCenter的修改会激发IO, lastDats保存之前的记录
  const lastDatas = {};
  needSaveKeys.forEach(v => {
    lastDatas[v] = undefined;
  });
  store.subscribe(() => {
    const state = store.getState();
    const nowDatas = {};
    let isNeedSave = false;
    needSaveKeys.forEach(v => {
      // 监听数据和 Immutable 配合做低开销校验
      if (Object.prototype.toString.call(v) === '[object Array]') {
        nowDatas[v] = state.getIn(v);
      }
      nowDatas[v] = state.get(v);
      if (lastDatas[v] !== nowDatas[v]) {
        isNeedSave = true;
      }
    });
    if (isNeedSave) {
      storage.save(nowDatas);
      needSaveKeys.forEach(v => {
        lastDatas[v] = nowDatas[v];
      });
    }
  });
  //首次读取
  const lastLocalData = storage.load(storage.localName);
  if (Object.prototype.toString.call(lastLocalData) === '[object Object]') {
    store.dispatch({
      type: 'localStorageLoad: IO',
      reducer: state => {
        return fromJS({
          ...state.toJS(),
          ...lastLocalData,
        });
      },
    });
  }
};

export { Provider, storage, store, autoStorageSave, connect };
