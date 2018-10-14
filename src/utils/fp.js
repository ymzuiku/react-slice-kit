export default {
  got: function(fn) {
    try {
      return fn();
    } catch (error) {
      // eslint-disable-next-line
      // console.warn('fp-safe:', error);
      return undefined;
    }
  },
  json: function(obj, isCopy) {
    if (typeof obj === 'string') {
      try {
        if (isCopy) {
          return JSON.stringify(JSON.parse(obj));
        }
        return JSON.parse(obj);
      } catch (err) {
        // eslint-disable-next-line
        console.warn('fp-json:', err);
      }
    } else {
      try {
        if (isCopy) {
          return JSON.parse(JSON.stringify(obj));
        }
        return JSON.stringify(obj);
      } catch (err) {
        // eslint-disable-next-line
        console.warn('fp-json:', err);
      }
    }
  },
  timefn: function(fn, k) {
    k = k || 'timefn';
    // eslint-disable-next-line
    console.time(k);
    fn();
    // eslint-disable-next-line
    console.timeEnd(k);
  },
  isMail: function(str) {
    if (typeof str !== 'string') {
      return false;
    }
    const reg = new RegExp(
      '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
    ); //正则表达式
    if (str === '') {
      //输入不能为空
      return false;
    }
    //正则验证通过
    return reg.test(str);
  },
  isPassword: function(str) {
    if (typeof str !== 'string') {
      return false;
    }
    const pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z]).*$/;
    return pPattern.test(str);
  },
  isPasswordHard: function(str) {
    if (typeof str !== 'string') {
      return false;
    }
    const pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
    return pPattern.test(str);
  },
};
