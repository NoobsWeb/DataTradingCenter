var bfd={}
//下拉菜单
bfd.showListCommon = function(target) {
	target.stopPropagation();
 	$('input').siblings('ol').hide();
 	if($(target.target).parent().hasClass('active')){
 		$(target.target).siblings('ol').hide();
  	$(target.target).parent().removeClass('active');
 	}else{
	 	$(target.target).siblings('ol').show();
  	$(target.target).parent().addClass('active');
 	} 
}
//下拉选择列表
bfd.choseList = function(name,target) {
	$(target.target).parents('ol').siblings('input').val(name);
	$(target.target).parents('ol').hide();
	$(target.target).parents('div').removeClass('active');
}