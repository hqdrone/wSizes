window.onload = () => { // Страница загружена включая изображение, стили и тд
	const wSizes = () => { // Объявляем основную функцию wSizes

		const meta = document.createElement('meta') // создаем элемент meta
		meta.setAttribute('name', 'viewport') // добавляем элементу meta атрибут name="viewport"
		meta.setAttribute('content', 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"') // добавляем элементу meta атрибут для корректной работы плагина на мобильных устройствах
		document.getElementsByTagName('head')[0].append(meta); // добавляем созданный элемент meta перед закрывающим тегом </head>

		const wSize = document.createElement('div') // создаем элемент wSize
		wSize.className = 'w-size' // добавляем класс w-size
		wSize.style.cssText = `
			padding: 5px;
			background: #000;
			opacity: .5;
			position: fixed;
			right: 0;
			bottom: 0;
			z-index: 999999;
			color: #fff;
			font-size: 12px;
			border-radius: 3px;
		` // добавляем инлайн стили
		document.body.append(wSize) // добавляем созданный элемент meta перед закрывающим тегом </body>

		const wResize = () => { // объявляем функцию wResize
			windowWidth = window.innerWidth // узнаем ширину окна c полосой прокрутки
			windowHeight = window.innerHeight // узнаем высоту окна c полосой прокрутки
			contentWidth = document.documentElement.clientWidth // узнаем ширину контентной части без полосы прокрутки
			contentHeight = document.documentElement.clientHeight // узнаем высоту контентной части без полосы прокрутки
			wSize.innerText = `Window Width: ${windowWidth}px
				Window Height: ${windowHeight}px
				Content Width: ${contentWidth}px
				Content Height: ${contentHeight}px` // вставляем значения в элемент wSize
		}
		wResize() // вызываем функцию wResize
		window.addEventListener('resize', wResize) // вызывем функцию wResize при изменении размеров окна браузера
	}

	wSizes() // Вызываем основную функцию wSizes
}