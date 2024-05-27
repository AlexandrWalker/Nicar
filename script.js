(() => {
  document.addEventListener("DOMContentLoaded", () => {

    const addressItem = [
      {
        id: 155566637,
        text: "Отрадный",
        tel: "+7(927)260-37-37",
        address: "ул. Промзона -1, сто &quot;Ангар&quot;",
        email: "Nikar.otradniy@yandex.ru",
      },
      {
        id: 155501177,
        text: "Кемерово",
        tel: "+7(933)300-45-54",
        address: "ул. Лермонтова дом 68",
        email: "Nicar@store42.ru",
      },
      {
        id: 155459738,
        text: "Ижевск",
        tel: "+7(995)554-06-15",
        address: "Пушкинская 116",
        email: "nicarstore18@mail.ru",
      },
      {
        id: 155453441,
        text: "Чита",
        tel: "+7(914)432-28-21",
        address: "ул. Журавлева, 2 (бутик 16)",
        email: "Nikar.store.chita@yandex.ru",
      },
      {
        id: 155432496,
        text: "Архангельск",
        tel: "+7(991)052-73-90",
        address: "Московский проспект 27, тц &quot;Азимут&quot;, 2 этаж",
        email: "Nicar.store29@yandex.ru",
      },
      {
        id: 155412821,
        text: "Альметьевск",
        tel: "+7(917)235-55-83",
        address: "ул.Ленина 201",
        email: "nicar.store16@mail.ru",
      },
      {
        id: 155260971,
        text: "Самара",
        tel: "+7(995)131-75-64",
        address: "ул.Пензенская 66а, оф.9",
        email: "nicar.store63@mail.ru",
      },
      {
        id: 155232022,
        text: "Реутов",
        tel: "+7(999)880-88-90",
        address: "ул.Комсомольская, дом 25",
        email: "nicar.reutov@mail.ru",
      },
      {
        id: 155149024,
        text: "Уфа",
        tel: "+7(906)100-00-58",
        address: "улица Менделеева д. 217а",
        email: "nicar.store02@mail.ru",
      },
      {
        id: 155147783,
        text: "Калининград",
        tel: "+7(911)464-65-51",
        address: "СНТ Колосок, ул. Луговая, дом 3",
        email: "Nicarstorkld@gmail.com",
      },
      {
        id: 155082591,
        text: "Сорочинск",
        tel: "+7(929)284-17-88",
        address: "ул. Ворошилова 5",
        email: "ip.ivannikovasa@gmail.com",
      },
      {
        id: 10443826,
        text: "Сочи",
        tel: "+7(988)506-69-25",
        address: "ул. Транспортная дом 5",
        email: "nicar.store09@gmail.com",
      },
      {
        id: 10374459,
        text: "Обнинск",
        tel: "+7(930)843-22-22",
        address: "ул. Железнодорожная ГПСК, светофор 2",
        email: "nicar.store09@gmail.com",
      },
      {
        id: 10006856,
        text: "Санкт-Петербург",
        tel: "+7(966)921-24-40",
        address: "Планерная улица, д.15 Б, офис 34",
        email: "nicarstorespb@yandex.ru",
      },
      {
        id: 10005694,
        text: "Воскресенск",
        tel: "+7(999)576-14-29",
        address: "р-н Митино, Новотушинский проезд, 8ст.1",
        email: "13.equipment@bk.ru",
      },
      {
        id: 9977570,
        text: "Энгельс",
        tel: "+7(965)882-65-21",
        address: "улица Маяковского, дом 43",
        email: "nicar.store64@yandex.ru",
      },
      {
        id: 9916606,
        text: "Саранск",
        tel: "+7(995)359-84-35",
        address: "улица Строительная, 30А",
        email: "nicarstore13@yandex.ru",
      },
      {
        id: 9828319,
        text: "Красноярск",
        tel: "+7(933)998-01-00",
        address: "пр. Красноярский рабочий дом. 58",
        email: "autoshop24@yandex.ru",
      },
      {
        id: 9825510,
        text: "Санкт-Петербург",
        tel: "+7(995)235-16-15",
        address: "ул.Маршала Блюхера д. 1 к1",
        email: "nicar.store.spb@mail.ru",
      },
      {
        id: 9797899,
        text: "Анапская",
        tel: "+7(928)292-54-05",
        address: "ул.Набережная, д.154",
        email: "nicarstoreanapa@mail.ru",
      },
      {
        id: 9601268,
        text: "Стерлитамак",
        tel: "+7(937)471-77-54",
        address: "ул.Дружбы 12, цокольный этаж, офис №20",
        email: "nicar_str@mail.ru",
      },
      {
        id: 9532586,
        text: "Коломна",
        tel: "+7(926)313-13-15",
        address: "ул. Астахова, дом 6с3",
        email: "parsingde@bk.ru",
      },
      {
        id: 8979756,
        text: "Нижневартовск",
        tel: "+7(993)573-10-01",
        address: "ул. Индустриальная 24В",
        email: "nizhnevartovsk@lab-td.ru",
      },
      {
        id: 8491999,
        text: "Тюмень",
        tel: "+7(950)485-79-98",
        address: "ул. Прокопия Артамонова дом. 8",
        email: "maslo.car@mail.ru",
      },
    ];

    const addressItem_abkhazia = [
      {
        id: 155453135,
        text: "Сухум",
        tel: "+7(940)976-06-06",
        address: "Бзыбское Шоссе, 209",
        email: "nicarstfr@mail.ru",
      },
    ];

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

    //============================================================CREATE-LETTERS-START
    const createLettersNodes = () => {
      function idsm(origin) {
        return origin.map(item => item.text[0]);
      }
      const arr = idsm(addressItem);
      const uniqueArr = [...new Set(arr)];
      uniqueArr.forEach((uniqueArr, i) => {
        document.getElementById('myList_rus').insertAdjacentHTML(
          "beforeend",
          `<li><button class="modal__letters-item" href="#!" data-letter="${uniqueArr}">
            ${uniqueArr}
          </button></li>`
        );
      });
    };

    createLettersNodes();
    //============================================================CREATE-LETTERS-END

    //============================================================LETTERS-START
    (function () {
      var lettersItem = document.querySelectorAll('.modal__letters-item'),
        lettersActive = document.getElementsByClassName('letters-active');

      Array.from(lettersItem).forEach(function (item, i, lettersItem) {
        item.addEventListener('click', function (e) {
          if (lettersActive.length > 0 && lettersActive[0] !== this) {
            lettersActive[0].classList.remove('letters-active');
          }

          let lettersСitiesItems = document.querySelectorAll('.letters__cities');

          for (let i = 0; i < lettersСitiesItems.length; i++) {
            lettersСitiesItems[i].outerHTML = "";
          }

          this.classList.add('letters-active');

          var lettersFirstItem = this.getAttribute('data-letter');

          function uniCities(origins) {
            return origins.map(item => item.text);
          }
          const citiesArr = uniCities(addressItem);
          const uniqueCities = [...new Set(citiesArr)];

          let cityId = uniqueCities.filter(r => r[0] == lettersFirstItem)

          const createCitiesList = () => {
            addressItem.forEach(({ text, tel }, i) => {
              if (typeof cityId[i] === "undefined") {
                return
              } else {
                this.parentNode.insertAdjacentHTML(
                  "beforeend",
                  `<a class="letters__cities" href="#!" name=${cityId[i]} data-tel=${tel.replace(/[^0-9]/g, "")}>
                    ${cityId[i]}
                  </a>`
                );
              }
            });
          };

          createCitiesList();

          var citiesItem = document.querySelectorAll('.letters__cities'),
            citiesActive = document.getElementsByClassName('cities-active');

          Array.from(citiesItem).forEach(function (item, i, citiesItem) {
            item.addEventListener('click', function (e) {

              if (citiesActive.length > 0 && citiesActive[0] !== this)
                citiesActive[0].classList.remove('cities-active');

              let addressCitiesItem = document.querySelectorAll('.address__item');

              for (let i = 0; i < addressCitiesItem.length; i++) {
                addressCitiesItem[i].outerHTML = "";
              }

              this.classList.add('cities-active');

              let cityName = addressItem.filter(n => n.text == this.getAttribute('name'))

              const address = document.getElementById("address");
              const createAddressNodes = () => {
                addressItem.forEach(({ text, tel }, i) => {
                  if (typeof cityName[i] === "undefined") {
                    return
                  } else {
                    address.insertAdjacentHTML(
                      "beforeend",
                      `<li class="address__item">
                        <p class="address__item-city">${cityName[i].text}</p>
                        <p class="address__item-address">
                          <span>
                            <svg class="icon__pin" width="15" height="20"><use xlink:href="#pin"></use></svg>
                            ${cityName[i].address}
                          </span>
                          <a class="address__item-btn" href="https://nicar.store/?FranchiseeId=${cityName[i].id}">Выбрать</a>
                        </p>
                        <a class="address__item-link" href="tel:${cityName[i].tel.replace(/[^0-9,+]/g, "")}">${cityName[i].tel}</a>
                        <a class="address__item-link" href="mailto:${cityName[i].email}">${cityName[i].email}</a>
                      </li>`
                    );
                  }
                });
              };
              createAddressNodes();

            });
          });

        });
      });
    })();
    //============================================================LETTERS-END

    // ABKHAZIA

    $(function () {
      var $items = $('#address li').sort((a, b) => $(a).text().localeCompare($(b).text()));
      $('#address').append($items);

      var $itemsList = $('#myList_rus li').sort((a, b) => $(a).text().localeCompare($(b).text()));
      $('#myList_rus').append($itemsList);
    });

  });
})();