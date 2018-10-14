// 这里用来做一些对象读区的预处理，理念参考 vue
// 这里会对对象做一个缓存，以解决不能直接从immutab中读取的对象的更新性能
// 从而也可以使得 mapStateToProps 函数保持简洁

import fp from '../utils/fp';

export const getUserData = state => {
  let userData = state.getIn(['test', 'userData']);
  if (userData && userData.token) {
    userData.isLogin = true;
  }
  return fp.cache('getUserData', userData);
};
