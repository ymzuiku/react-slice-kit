import {
  Route,
  Router,
  Prompt,
  Redirect,
  Switch,
  withRouter,
} from 'react-router';
import React from 'react';

export { Route, Router, Prompt, Redirect, Switch, withRouter };

interface IHistory {
  index?: number;
  goBack?: Function;
  goHome?: Function;
  push?: (url: string, params?: any) => void;
  entries?: Array<any>;
}

interface INowHistory {
  index?: number;
  length?: number;
  pathname?: string;
  search?: string;
  hash?: string;
  state: any;
  key?: any;
}

interface INaviBarProps {
  style?: React.CSSProperties;
  leftTitle?: string;
  title?: string;
  middleButton?: Function;
  leftButton?: Function;
  rightButton?: Function;
  isIPhoneX?: boolean;
  root?: boolean;
  children: any;
}

interface INaviRouteProps {
  exact?: boolean;
  always?: boolean;
  path: string;
  component?: any;
  render?: any;
  children?: any;
  backgroundColor?: string;
  animed?: boolean;
  root?: boolean;
}

export const hashChange: () => void;
export const history: IHistory;
export const nowHistory: INowHistory;
export const position: string;
export const historyAddListen: (func: Function) => number;
export const historyRemoveListen: (historyAddListenID: number) => void;
export const goToHome: Function;
export const isIphoneX: boolean;
export const NaviBar: (props: INaviBarProps) => any;
export const NaviRoute: (props: INaviRouteProps) => any;
