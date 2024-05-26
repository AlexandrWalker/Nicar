(() => {
  document.addEventListener("DOMContentLoaded", () => {

    const addressItem = [
      {
        text: "Бабаевск",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Архангельск",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Новосибирск",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Москва",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Новгород",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Нижний-Новгород",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Владивосток",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Воронеж",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Зеленоград",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Добрянка",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Грозный",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Красноярск",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Краснодар",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Пермь",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Омск",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Ярославль",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Южно-Сахалинск",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Нижний-Новгород",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Владивосток",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Воронеж",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Зеленоград",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Добрянка",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
      {
        text: "Грозный",
        tel: "8(999)9999999",
        address: "ул. Пушкина 5",
      },
    ];

    const createLettersNodes = () => {
      function idsm(origin) {
        return origin.map(item => item.text[0]);
      }
      const arr = idsm(addressItem);
      const uniqueArr = [...new Set(arr)];
      uniqueArr.forEach((uniqueArr, i) => {
        document.getElementById('myList').insertAdjacentHTML(
          "beforeend",
          `<li><button class="modal__letters-item" href="#!" data-letter="${uniqueArr}">
            ${uniqueArr}
          </button></li>`
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
                        <p class="address__item-address">${cityName[i].address}</p>
                        <a class="address__item-link" href="tel:${cityName[i].tel.replace(/[^0-9]/g, "")}">${cityName[i].tel}</a>
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

  });
})();