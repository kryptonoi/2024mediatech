$(document).ready(function(){
    $('.box01').click(function(){
      // 클릭된 박스가 이미 활성화되어 있으면 아무 동작도 하지 않음
      if (!$(this).hasClass('active')) {
        // 모든 박스에서 active 클래스를 제거하고, 내용을 슬라이드 업
        $('.box01').removeClass('active').find('.box_body').slideUp();
  
        // 클릭된 박스에 active 클래스를 추가하고, 내용을 슬라이드 다운
        $(this).addClass('active').find('.box_body').slideDown();
      }
    });
  
    // 페이지 로드 시 모든 박스 내용을 숨김
    $('.box_body').hide();

    // SVG 요소 생성 및 스타일 설정
    const $svg = $('<svg class="connections"></svg>').css({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    });
  
    $('body').append($svg); // SVG를 body에 추가

  });
