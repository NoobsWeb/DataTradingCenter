var appModule = angular.module('app', ['ngRoute', 'tm.pagination', 'ui.bootstrap']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/myorder', {
    templateUrl: 'views/order.html',
    controller: 'myorder'
  }).
  when('/mycustom', {
    templateUrl: 'views/custom.html',
    controller: 'custom'
  }).
  when('/personalInfo', {
    templateUrl: 'views/personalInfo.html',
    controller: 'personalInfo'
  }).
  when('/reciveAddress', {
    templateUrl: 'views/reciveAddress.html',
    controller: 'reciveAddress'
  }).
  when('/sellorder', {
    templateUrl: 'views/sellOrder.html',
    controller: 'sellOrder'
  }).
  when('/detail/:ordertype&:orderid', {
    templateUrl: 'views/detail.html',
    controller: 'detail'
  }).
  when('/account', {
    templateUrl: 'views/account.html',
    controller: 'account'
  }).
  otherwise({
    redirectTo: '/myorder'
  })
}]);

//数据类型
appModule.factory('DataType', function() {
  var dataType = {
    "1": "数据包",
    "2": "API",
    "3": "数据分析"
  };
  return dataType;
})

//支付类型
appModule.factory('PayType', function() {
  var payType = {
    "1": "往指定账号转账或汇款"
  };
  return payType;
})

//订单状态
appModule.factory('OrderType', function() {
  var orderType = {
    "1": "待付款",
    "2": "待收货",
    "3": "已完成",
    "4": "已取消",
    "6": "待处理",
    "7": "需求驳回",
    "8": "已完成"
  };
  return orderType;
})

//timeFlag
appModule.factory('TimeFlag', function() {
  var timeFlag = {
    "1": "最近3个月订单",
    "2": "今年内订单",
    "3": "今年以前订单"
  };
  return timeFlag;
})

//cancelType
appModule.factory('CancelType', function() {
  var cancelType = {
    "1": "信息填写错误，重新下单",
    "2": "付款遇到问题（如余额不足，不知道怎样付款）",
    "3": "商品选错了",
    "4": "其他原因"
  };
  return cancelType;
})