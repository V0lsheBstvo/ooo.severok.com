document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('button')
	const notification = document.getElementById('notification')

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			// Показ уведомления с анимацией
			notification.classList.remove('hide')
			notification.classList.add('show')

			// Скрыть уведомление через 3 секунды с анимацией
			setTimeout(() => {
				notification.classList.remove('show')
				notification.classList.add('hide')
			}, 3000)
		})
	})

	// Убедитесь, что уведомление скрыто после завершения анимации
	notification.addEventListener('transitionend', () => {
		if (notification.classList.contains('hide')) {
			notification.style.display = 'none'
		}
	})
})
