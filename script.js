(() => {
  document.addEventListener("DOMContentLoaded", () => {

    //============================================================TAB-START
    const modalTab = document.querySelectorAll('.modal__tab')
    const modalBody = document.querySelectorAll('.modal__body')

    modalTab.forEach(tabClick);

    function tabClick(item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('tab-active')) {

          modalTab.forEach(function (item) {
            item.classList.remove('tab-active');
          });

          modalBody.forEach(function (item) {
            item.classList.remove('tab-active');
          });

          currentBtn.classList.add('tab-active');
          currentTab.classList.add('tab-active');
        }
      })
    }
    //============================================================TAB-END

    //============================================================LETTERS-START
    (function () {
      var lettersItem = document.querySelectorAll('.modal__letters-item'),
        lettersActive = document.getElementsByClassName('letters-active');

      Array.from(lettersItem).forEach(function (item, i, lettersItem) {
        item.addEventListener('click', function (e) {
          if (lettersActive.length > 0 && lettersActive[0] !== this)
            lettersActive[0].classList.remove('letters-active');

          this.classList.toggle('letters-active');
        });
      });
    })();
    //============================================================LETTERS-END

    $(function () {
      var $items = $('#myList li').sort((a, b) => $(a).text().localeCompare($(b).text()));
      $('#myList').append($items);

      var a = document.querySelectorAll('.modal__letters-item');
      const str = arr.map((word) => word[0]).join(', ');
      console.log(str);
    });
  });
})();