(() => {
  document.addEventListener("DOMContentLoaded", () => {

    const addressItem = [
      {
        text: "Бабаевск",
        tel: "8(999)9999999",
      },
      {
        text: "Архангельск",
        tel: "8(999)9999999",
      },
      {
        text: "Новосибирск",
        tel: "8(999)9999999",
      },
      {
        text: "Москва",
        tel: "8(999)9999999",
      },
      {
        text: "Новгород",
        tel: "8(999)9999999",
      },
      {
        text: "Нижний-Новгород",
        tel: "8(999)9999999",
      },
      {
        text: "Владивосток",
        tel: "8(999)9999999",
      },
      {
        text: "Воронеж",
        tel: "8(999)9999999",
      },
      {
        text: "Зеленоград",
        tel: "8(999)9999999",
      },
      {
        text: "Добрянка",
        tel: "8(999)9999999",
      },
      {
        text: "Грозный",
        tel: "8(999)9999999",
      },
      {
        text: "Красноярск",
        tel: "8(999)9999999",
      },
      {
        text: "Краснодар",
        tel: "8(999)9999999",
      },
      {
        text: "Пермь",
        tel: "8(999)9999999",
      },
      {
        text: "Омск",
        tel: "8(999)9999999",
      },
      {
        text: "Ярославль",
        tel: "8(999)9999999",
      },
      {
        text: "Южно-Сахалинск",
        tel: "8(999)9999999",
      },
      {
        text: "Нижний-Новгород",
        tel: "8(999)9999999",
      },
      {
        text: "Владивосток",
        tel: "8(999)9999999",
      },
      {
        text: "Воронеж",
        tel: "8(999)9999999",
      },
      {
        text: "Зеленоград",
        tel: "8(999)9999999",
      },
      {
        text: "Добрянка",
        tel: "8(999)9999999",
      },
      {
        text: "Грозный",
        tel: "8(999)9999999",
      },
    ];

    const modal__window = document.querySelector(".modal__window");
    const address = modal__window.querySelector(".address");
    const addressItemValue = document.querySelectorAll('.address__item');
    const modalLettersItem = document.querySelectorAll('.modal__letters-item');

    const createAddressNodes = () => {
      addressItem.forEach(({ text, tel, reaction }, i) => {
        address.insertAdjacentHTML(
          "beforeend",
          `<li class="address__item" data-tel=${tel.replace(/[^0-9]/g, "")}">
            ${text}
          </li>`
        );
      });
    };

    createAddressNodes();

    const createLettersNodes = () => {
      function idsm(origin) {
        return origin.map(item => item.text[0]);
      }
      const arr = idsm(addressItem);
      const uniqueArr = [...new Set(arr)];
      uniqueArr.forEach((uniqueArr, i) => {
        document.getElementById('myList').insertAdjacentHTML(
          "beforeend",
          `<li class="modal__letters-item">
            ${uniqueArr}
          </li>`
        );
      });
    };

    createLettersNodes();

    $(function () {
      var $items = $('#address li').sort((a, b) => $(a).text().localeCompare($(b).text()));
      $('#address').append($items);

      var $itemsList = $('#myList li').sort((a, b) => $(a).text().localeCompare($(b).text()));
      $('#myList').append($itemsList);
    });

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

          // Выбираем все div-элементы 
          var els = document.querySelectorAll('.address__item');

          var result = "";

          // Итерация по выбранным элементам
          for (var i = 0; i < els.length; i++) {

            // Получаем текстовое значение
            var text = els[i].innerText;

            // Проверяем, начинается ли текст с заданной литеры
            if (text.startsWith(/^[\t\r\n]+$/.this)) {
              result = result + text + " ";
            }
          };
          console.log(result);
          document.getElementsByClassName('result')[0].innerText = result;
        });
      });
    })();
    //============================================================LETTERS-END

  });
})();