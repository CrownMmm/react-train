import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers(reducers),
  {
    from: '北京',
    to: '上海',
    isCitySelectorVisible: false,  //城市选择浮层
    currentSelectingLeftCity: false,  //控制城市状态
    cityData: null, //城市数据
    isLoadingCityData: false,  //当前是否正在加载数据
    isDateSelectorVisible: false,  //日期选择开关
    //departDate: Date.now(),  //  
    highSpeed: false,  // 是否选择高铁动车

  },
  applyMiddleware(thunk)
)