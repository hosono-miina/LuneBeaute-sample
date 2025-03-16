$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle_btn").on("click", function () {
    if ($("header").hasClass("open")) {
      $("header").removeClass("open");
    } else {
      $("header").addClass("open");
    }
  });

  $('a[href*="#"]').on('click', function() {  
    $("header").removeClass('open');
  });

  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top-100;
    $('body,html').animate({scrollTop: pos}, 600); 
    return false;
  });

  /*=================================================
  別ページ遷移後のスムーススクロール
  =================================================*/
  const urlHash = location.hash;
  if (urlHash) {
  const target = jQuery(urlHash);
  if (target.length) {
    history.replaceState(null, '', window.location.pathname);
    jQuery("html,body").stop().scrollTop(0);

    jQuery(window).on("load", function () {
      const headerHeight = jQuery("header").outerHeight();
      const position = target.offset().top - headerHeight;
      jQuery("html, body").animate({ scrollTop: position }, 600, "swing");
      history.replaceState(null, '', window.location.pathname + urlHash);
    });
  }}
  
  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  $(window).scroll(function () {
    $(".fadein").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  $(window).on("scroll", function () {
    $(".fadein-left, .fadein-right").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateX(0)");
      }
    });
  });

  /*=================================================
  スライド
  ===================================================*/
  $(document).ready(function(){
    $('.slider-right').slick({
      arrows: false,
      autoplay: true,//自動的に動き出すか。初期値はfalse。
      autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
      speed: 6900,//スライドのスピード。初期値は300。
      infinite: true,//スライドをループさせるかどうか。初期値はtrue。
      pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
      pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
      cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
      slidesToShow: 4,//スライドを画面に4枚見せる
      slidesToScroll: 1,//1回のスライドで動かす要素数
      mobileFirst: true,
      responsive: [
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
        },
        {
        breakpoint: 768,//モニターの横幅が769px以下の見せ方
        settings: {
          slidesToShow: 4,//スライドを画面に2枚見せる
        }
      },
      {
        breakpoint: 375,//モニターの横幅が426px以下の見せ方
        settings: {
          slidesToShow: 4,//スライドを画面に1.5枚見せる
        }
      }
    ]
    });

    $('.slider-left').slick({
      arrows: false,
      autoplay: true,//自動的に動き出すか。初期値はfalse。
      autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
      speed: 6900,//スライドのスピード。初期値は300。
      infinite: true,//スライドをループさせるかどうか。初期値はtrue。
      pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
      pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
      cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
      slidesToShow: 4,//スライドを画面に4枚見せる
      slidesToScroll: 1,//1回のスライドで動かす要素数
      mobileFirst: true,
      rtl: true, // 逆方向にスライド
      responsive: [
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
        },
        {
        breakpoint: 768,//モニターの横幅が769px以下の見せ方
        settings: {
          slidesToShow: 4,//スライドを画面に2枚見せる
        }
      },
      {
        breakpoint: 375,//モニターの横幅が426px以下の見せ方
        settings: {
          slidesToShow: 4,//スライドを画面に1.5枚見せる
        }
      }
    ]
    });

    $('.program-list').slick({
      autoplay: false,        // 自動再生
      dots: false,            // ドットナビゲーションを表示
      arrows: true,          // 矢印ナビゲーションを表示
      slidesToShow: 1,       // 一度に表示するスライド数
      slidesToScroll: 1,      // スクロールするスライド数
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-caret-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-caret-right"></i></button>'
    });
  });

  // テキストのアニメーション

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.tagline').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".tagline");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '' + t + '';
				} else {
					var n = i / 10;
					textbox += '' + t + '';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

	EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

});

/*=================================================
スクロールダウン
==================================================*/
document.addEventListener("DOMContentLoaded", () => {
  const text = "SCROLL DOWN ";
  const repeatedText = text.repeat(2);
  const circleText = document.querySelector(".circle-text");
  const totalChars = repeatedText.length;
  const anglePerChar = 360 / totalChars;

  for (let i = 0; i < totalChars; i++) {
    const span = document.createElement("span");
    span.textContent = repeatedText[i];
    span.style.transform = `rotate(${i * anglePerChar}deg)`;
    circleText.appendChild(span);
  }
});

/*=================================================
ローディング画面
==================================================*/
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});



