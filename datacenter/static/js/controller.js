appModule.controller('myorder', function($scope, $http, DataType, PayType, OrderType,TimeFlag,$modal) {
	$scope.DataType = DataType;
	$scope.PayType = PayType;
	$scope.OrderType = OrderType;
	$scope.TimeFlag = TimeFlag;
	$scope.searchTime = {'timeFlag':''};
	$scope.searchStatus = {'orderType':''};
	//订单数据
	$http({
		method: 'get',
		url: '/datacenter/static/jsons/myorder.json'
	}).success(function(data) {
		$scope.orderData = data;
	})
		//下拉框
	$scope.showList = function(target) {
		bfd.showListCommon(target)
	}
	$scope.selectTimeFlag = function(type,text,target) {
		bfd.choseList(text,target)
	}
	$scope.selectOrderType = function(type,text,target) {
		bfd.choseList(text,target)
	}
	$scope.hideList = function() {
		$('input').siblings('ol').hide();
		$('input').parent().removeClass('active');
	}
	//分页
	$scope.paginationConf = {
		currentPage: 1,
		totalItems: 100,
		itemsPerPage: 1,
		pagesLength: 10,
		onChange: function() {
			console.log($scope.paginationConf.currentPage)
		}
	};
	//加入购物车弹窗
	$scope.addCart = function(orderID, width) {
		var modalInstance = $modal.open({
			templateUrl: 'views/addCart_tpl.html', //指向上面创建的视图
			controller: 'addCart', // 初始化模态范围
			width: width,
			resolve: {
				orderID: function() {
					return orderID
				}
			}
		})
	}
	//确认收货弹窗
	$scope.confirmRecive = function(orderID, width) {
		var modalInstance = $modal.open({
			templateUrl: 'views/confirmRecive_tpl.html', //指向上面创建的视图
			controller: 'addCart', // 初始化模态范围
			width: width,
			resolve: {
				orderID: function() {
					return orderID
				}
			}
		})
	}
	//取消订单弹窗
	$scope.cancelOrder = function(orderID,width){
		var modalInstance = $modal.open({
			templateUrl: 'views/cancelOrder_tpl.html', //指向上面创建的视图
			controller: 'cancelOrder', // 初始化模态范围
			width: width,
			resolve: {
				orderID: function() {
					return orderID
				}
			}
		})
	}
})

/* 我的定制  */
appModule.controller('custom',function($scope,$http,OrderType){
	$scope.OrderType = OrderType;
	/*定制数据 */
	$http({
		method: 'get',
		url: '/datacenter/static/jsons/mycustom.json'
	}).success(function(data) {
		$scope.orderData = data;
	})

	/* 分页 */
	$scope.paginationConf = {
		currentPage: 1,
		totalItems: 100,
		itemsPerPage: 1,
		pagesLength: 10,
		onChange: function() {
			console.log($scope.paginationConf.currentPage)
		}
	};
})

/* 个人信息 */
appModule.controller('personalInfo',function($scope,$http,$modal){
	$scope.type = "basic"
	$http({
		method: 'get',
		url: '/datacenter/static/jsons/'+$scope.type+'Info.json'
	}).success(function(data) {
		$scope.info = data;
	})
	$scope.tab = function(type,target){
		$scope.type = type;
		$http({
			method: 'get',
			url: '/datacenter/static/jsons/'+type+'Info.json'
		}).success(function(data) {
			$scope.info = data;
			$scope.type = type;
		})
	}
	$scope.viewPic = function(imgUrl,width) {
		var modalInstance = $modal.open({
			templateUrl: 'views/viewImg.html', //指向上面创建的视图
			controller: 'viewPic', // 初始化模态范围
			width: width,
			windowClass:'viewPic',
			resolve: {
				imgUrl: function() {
					return imgUrl
				}
			}
		})
	}
	$scope.modifyPwd = function(width) {
		var modalInstance = $modal.open({
			templateUrl: 'views/modifyPwd_tpl.html', //指向上面创建的视图
			controller: 'modify', // 初始化模态范围
			width: width
		})
	}
	$scope.apply = function(width) {
		var modalInstance = $modal.open({
			templateUrl: 'views/applyApi_tpl.html', //指向上面创建的视图
			controller: 'apply', // 初始化模态范围
			width: width
		})
	}
})

/* 收货地址 */
appModule.controller('reciveAddress',function($scope,$http,$modal){
	$scope.isDefault = false;
	$http({
		method: 'get',
		url: '/datacenter/static/jsons/province.json'
	}).success(function(data) {
		$scope.province = data;
	})
	$scope.modify = function(addressID,width) {
		var modalInstance = $modal.open({
			templateUrl: 'views/modifyAddress_tpl.html', //指向上面创建的视图
			controller: 'modifyAddress', // 初始化模态范围
			width: width,
			resolve: {
				addressID: function() {
					return addressID
				}
			}
		})
	}
	$scope.showList = function(target) {
		bfd.showListCommon(target)
	}
	$scope.selectAddress = function(type,text,target) {
		$http({
			method: 'get',
			url: '/datacenter/static/jsons/city.json'
		}).success(function(data) {
			$scope.city = data;
		})
		bfd.choseList(text,target)
	}
	$scope.defautAddress = function(target){
		if (!$scope.isDefault) {
			$scope.isDefault = true;
		}else{
			$scope.isDefault = false;
		}
	}
	document.addEventListener('click', function(){
    $('input').siblings('ol').hide();
    $('input').parent().removeClass('active');
  })
})

/*  卖家订单 */
appModule.controller('sellOrder', function($scope, $location, $http, DataType, PayType, OrderType,TimeFlag,$modal) {
	$scope.DataType = DataType;
	$scope.PayType = PayType;
	$scope.OrderType = OrderType;
	$scope.TimeFlag = TimeFlag;
	$scope.searchTime = {'timeFlag':''};
	$scope.searchStatus = {'orderType':''};
	$scope.detailHref = '/datacenter/views/detail.html';
	console.log($scope.detailHref)
	//订单数据
	$http({
		method: 'get',
		url: '/datacenter/static/jsons/sellorder.json'
	}).success(function(data) {
		$scope.orderData = data;
	})
		//下拉框
	$scope.showList = function(target) {
		bfd.showListCommon(target)
	}
	$scope.selectTimeFlag = function(type,text,target) {
		bfd.choseList(text,target)
	}
	$scope.selectOrderType = function(type,text,target) {
		bfd.choseList(text,target)
	}
	$scope.hideList = function() {
		$('input').siblings('ol').hide();
		$('input').parent().removeClass('active');
	}
	//分页
	$scope.paginationConf = {
		currentPage: 1,
		totalItems: 100,
		itemsPerPage: 1,
		pagesLength: 10,
		onChange: function() {
			console.log($scope.paginationConf.currentPage)
		}
	};
	//加入购物车弹窗
	$scope.addCart = function(orderID, width) {
		var modalInstance = $modal.open({
			templateUrl: 'views/addCart_tpl.html', //指向上面创建的视图
			controller: 'addCart', // 初始化模态范围
			width: width,
			resolve: {
				orderID: function() {
					return orderID
				}
			}
		})
	}
	//确认收货弹窗
	$scope.confirmRecive = function(orderID, width) {
		var modalInstance = $modal.open({
			templateUrl: 'views/confirmRecive_tpl.html', //指向上面创建的视图
			controller: 'addCart', // 初始化模态范围
			width: width,
			resolve: {
				orderID: function() {
					return orderID
				}
			}
		})
	}
	//取消订单弹窗
	$scope.cancelOrder = function(orderID,width){
		var modalInstance = $modal.open({
			templateUrl: 'views/cancelOrder_tpl.html', //指向上面创建的视图
			controller: 'cancelOrder', // 初始化模态范围
			width: width,
			resolve: {
				orderID: function() {
					return orderID
				}
			}
		})
	}
})

/* 对账单 */
appModule.controller('account',function($scope,$http,OrderType,TimeFlag){
	$scope.OrderType = OrderType;
	$scope.TimeFlag = TimeFlag;
	/*定制数据 */
	$http({
		method: 'get',
		url: '/datacenter/static/jsons/mycustom.json'
	}).success(function(data) {
		$scope.orderData = data;
	})

	$scope.showList = function(target) {
		bfd.showListCommon(target)
	}
	$scope.choseList = function(type,text,target) {
		bfd.choseList(text,target)
	}
	document.addEventListener('click', function(){
    $('input').siblings('ol').hide();
    $('input').parent().removeClass('active');
  })

	/* 分页 */
	$scope.paginationConf = {
		currentPage: 1,
		totalItems: 100,
		itemsPerPage: 1,
		pagesLength: 10,
		onChange: function() {
			console.log($scope.paginationConf.currentPage)
		}
	};
})

/* 弹窗ctrl */
appModule.controller('addCart', function($scope, $modalInstance, orderID) {
	$scope.cancel = function() {
		$modalInstance.close();
	}
})
appModule.controller('modify', function($scope, $modalInstance) {
	$scope.nextStep = 1;
	$scope.cancel = function() {
		$modalInstance.close();
	}
	$scope.next2 = function(){
		$scope.nextStep = 2;
	}
	$scope.next3 = function(){
		$scope.nextStep = 3;
	}
})
appModule.controller('apply', function($scope, $modalInstance) {
	$scope.nextStep = 1;
	$scope.cancel = function() {
		$modalInstance.close();
	}
	$scope.next2 = function(){
		$scope.nextStep = 2;
	}
})
appModule.controller('cancelOrder', function($scope, $modalInstance, orderID,CancelType) {
	$scope.cancelType = CancelType;
	$scope.cancel = function() {
		$modalInstance.close();
	}
	$scope.showList = function(target) {
		bfd.showListCommon(target)
	}
	$scope.choseList = function(type,text,target) {
		bfd.choseList(text,target)
	}
	document.addEventListener('click', function(){
    $('input').siblings('ol').hide();
    $('input').parent().removeClass('active');
  })
})
appModule.controller('modifyAddress', function($scope, $modalInstance, $http) {
	$scope.isDefault = false;
	$scope.cancel = function() {
		$modalInstance.close();
	}
	$http({
		method: 'get',
		url: '/datacenter/static/jsons/province.json'
	}).success(function(data) {
		$scope.province = data;
	})
	$scope.defautAddress = function(target){
		if (!$scope.isDefault) {
			$scope.isDefault = true;
		}else{
			$scope.isDefault = false;
		}
	}
	$scope.showList = function(target) {
		bfd.showListCommon(target)
	}
	$scope.selectAddress = function(type,text,target) {
		$http({
			method: 'get',
			url: '/datacenter/static/jsons/city.json'
		}).success(function(data) {
			$scope.city = data;
		})
		bfd.choseList(text,target)
	}
})
/* 查看大图 */
appModule.controller('viewPic',function($scope,$modalInstance,imgUrl){
	$scope.imgUrl = imgUrl;
	$scope.cancel = function() {
		$modalInstance.close();
	}
})