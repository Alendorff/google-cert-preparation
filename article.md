[учебный гайд](https://developers.google.com/training/certification/mobile-web-specialist/StudyGuide_MobileWebSpecialist.pdf)
который раскрывает темы из содержания более подробно и даёт ссылки на материалы для подготовки.

# Basic Website Layout and Styling

## Основы отзывчивого веб-дизайна

### Теория

https://developers.google.com/web/fundamentals/design-and-ux/responsive/

TL;DR
* Чтобы контролировать масштабирование окна просмотра в браузере, используйте метатег viewport.

* Добавьте width=device-width, чтобы адаптировать ширину окна просмотра к экрану устройства.

* Вставьте initial-scale=1, чтобы обеспечить соотношение 1:1 между пикселями CSS и независимыми пикселями устройства.

* Чтобы страница была доступна, проверьте, не отключено ли пользовательское масштабирование.

* Не используйте крупные элементы с фиксированной шириной.

* Для корректного отображения контента не ограничивайте его определенной шириной области просмотра.

* Используйте медиазапросы CSS, чтобы указать разные стили для больших и маленьких экранов.

* Медиазапросы также позволяют выбрать стиль на основе характеристик устройства.

* Добавьте min-width вместо min-device-width для корректного отображения сайта на большинстве устройств.
(Разница небольшая, но очень важная: min-width исходит из размера окна браузера, а min-device-width - из размера экрана устройства.)

* Чтобы не нарушать структуру макета, используйте элементы относительных размеров.

* Создавайте контрольные точки на основе контента, а не для отдельных устройств, продуктов или брендов.

* Сначала разработайте дизайн для самого маленького мобильного устройства, а затем переходите к версиям для больших экранов.

* Ограничьте длину строк 70-80 символами.

* Не убирайте контент только потому, что не можете разместить его на экране. 

### Практика

Очень простая адаптивная страничка с текстом: $$$ master bd0a085 $$$

## Изображения

* Используйте max-width: 100% для картинок, чтобы они не растягивались
больше натурального размера
* Единица `vmin` устанавливает ширину наименьшей стороны вьюпорта.
Например экран 100 на 300 пикселей. Будет выбрано 100. `vmax` - наоборот
* `vw` - это вся ширина области просмотра `vh` - высота
 
figure and figcaption

```
img src="fallback.jpg"
Для задания DPI
    srcset="image.jpg 1x, img_2x.jpg 2x"
    alt="Куда же без альта"
Просто ширина в px
<!--srcset="image.jpg 1200w, img_small.jpg 640w-->
```

## Touch and click events

`touchstart`
Zero or more `touchmove` events, depending on movement of the finger(s)
`touchend`
`mousemove`
`mousedown`
`mouseup`
`click`

If the `touchstart`, `touchmove` or `touchend` event
is canceled during an interaction, no mouse or click events will be fired,
and the resulting sequence of events would just be:

`touchstart`
Zero or more `touchmove` events, depending on movement of the finger(s)
`touchend`



## Networking

### Fetch

https://developers.google.com/web/updates/2015/03/introduction-to-fetch

### CORS

https://www.html5rocks.com/en/tutorials/cors/

