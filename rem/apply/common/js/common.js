//HTML5 태그 block 선언
document.createElement('header');
document.createElement('footer');
document.createElement('section');
document.createElement('aside');
document.createElement('nav');
document.createElement('article');

$(document).ready(function(){

	//select ui
	(function($){
		$.fn.extend({
			customStyle : function(options) {
				if(!$.browser.msie || ($.browser.msie&&$.browser.version>6)){
					return this.each(function() {
						var currentSelected = $(this).find(':selected');
							$(this).after('<span class="customStyleSelectBox"><span class="customStyleSelectBoxInner">'+currentSelected.text()+'</span>&nbsp;</span>').css({position:'absolute', opacity:0,fontSize:$(this).next().css('font-size')});
						var selectBoxSpan = $(this).next();
						var selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left')) -parseInt(selectBoxSpan.css('padding-right'));
						var selectBoxSpanInner = selectBoxSpan.find(':first-child');
							selectBoxSpan.css({display:'inline-block'});
							selectBoxSpanInner.css({width:selectBoxWidth, display:'inline-block'});
						var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
							$(this).height(selectBoxHeight).change(function(){
							selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');
						});
					});
				}
			}
		});
	})(jQuery);	

	$('.select_ui').customStyle();

/* faq 아코디언 */
	$('.faq_type_01>ul>li>.q>a').bind('click', function(){
		var myArticle = $(this).parent().parent();
		if(myArticle.hasClass('on')){
			myArticle.removeClass('on');
		} else {
			$('.faq_type_01>ul>li').removeClass('on');
			myArticle.addClass('on');
		}
		return false;
	});

//select_box
	$('.select_box').each(function(){
		if(	$(this).find('select').attr('disabled') == 'disabled'){
			$(this).addClass('disabled')
		}else if($(this).find('select').attr('readonly') == 'readonly'){
			$(this).addClass('readonly')
		}
	});

//file_ui
	var fileTarget = $('.file_ui .file_add');
	fileTarget.on('change', function(){  // 값이 변경되면
	if(window.FileReader){  // modern browser
		var filename = $(this)[0].files[0].name;
	}else{// old IE
		var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
	}
	// 추출한 파일명 삽입
		$(this).siblings('.file_text').val(filename);
	});

// family_site
	var fam_on = false;
	var $family_site = $('#footer').find('.family_site');
	$family_site.find('.btn_family_site').bind('click', function(){
		if (fam_on){
			$family_site.removeClass('on')
			fam_on = false
		}else{
			$family_site.addClass('on')
			fam_on =true
		}
	})
	$family_site.find('.family_list>li:last-child ul li:last-child a').focusout(function(){
			$family_site.removeClass('on')
			fam_on = false
	})
})
