// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const rangeItems = document.querySelectorAll('[data-range]');
	if (rangeItems.length) {
		rangeItems.forEach(rangeItem => {
			const fromValue = rangeItem.querySelector('[data-range-from]');
			const toValue = rangeItem.querySelector('[data-range-to]');
			const item = rangeItem.querySelector('[data-range-item]');
			const inputsValues = [fromValue, toValue];

			noUiSlider.create(item, {
				start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
				connect: true,
				tooltips: [true, true],
				range: {
					'min': [+fromValue.dataset.rangeFrom],
					'max': [+toValue.dataset.rangeTo]
				}
			});

			item.noUiSlider.on('update', function (values, handle) {
				inputsValues[handle].value = values[handle];
			});

			inputsValues.forEach(function (input, handle) {

				input.addEventListener('change', function () {
					item.noUiSlider.setHandle(handle, this.value);
				});

				input.addEventListener('keydown', function (e) {

					let values = item.noUiSlider.get();
					let value = Number(values[handle]);

					// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
					let steps = item.noUiSlider.steps();

					// [down, up]
					let step = steps[handle];

					let position;

					// 13 is enter,
					// 38 is key up,
					// 40 is key down.
					switch (e.which) {

						case 13:
							item.noUiSlider.setHandle(handle, this.value);
							break;

						case 38:

							// Get step to go increase slider value (up)
							position = step[1];

							// false = no step is set
							if (position === false) {
								position = 1;
							}

							// null = edge of slider
							if (position !== null) {
								item.noUiSlider.setHandle(handle, value + position);
							}

							break;

						case 40:

							position = step[0];

							if (position === false) {
								position = 1;
							}

							if (position !== null) {
								item.noUiSlider.setHandle(handle, value - position);
							}

							break;
					}
				});
			});

		})

	}

}
rangeInit();
