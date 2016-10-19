'use strict';

$(function () {

  $('#slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>'
  });

  // таймер обратного отсчета
  var $timer = $('#timer');
  $timer
    .countdown($timer.data('date') || '2016-10-28')
    .on('update.countdown', function (event) {
      var template = `
        <div class="square days">
          <div class="number">%D</div>
          <div class="title">дней</div>
        </div>
        <div class="square hours">
          <div class="number">%H</div>
          <div class="title">часов</div>
        </div>
        <div class="square minutes">
          <div class="number">%M</div>
          <div class="title">минут</div>
        </div>
        <div class="square seconds">
          <div class="number">%S</div>
          <div class="title">секунд</div>
        </div>
        <div class="timer_title title_left">До начала битвы осталось</div>
        <div class="timer_title title_right">Успей получить подарок!</div>`;
      var $this = $(this).html(event.strftime(template));
    });

  // сабмит формы
  $(document).on('submit', '[rel=subscribe-form]', function () {
    var $form = $(this);
    var data = $form.serialize();
    var url = $form.attr('action');
    var $success = $('#success');
    $
      .post(url, data)
      .done(function () {
        $form.find('[name=name]').val('');
        $form.find('[name=email]').val('');
      })
      .always(function() {
        $success.show();
      });
    return false;
  });


});