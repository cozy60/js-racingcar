export default class Form {
	constructor({ $inputEl, $triggerEl }) {
		if (!$inputEl) throw Error();

		this.$inputEl = $inputEl;
		this.$triggerEl = $triggerEl;
	}

	getValue() {
		return this.$inputEl.value;
	}

	disableForm() {
		this.$inputEl.disabled = true;
		this.$triggerEl.disabled = true;
	}

	setFormDisplay(target, display = 'block') {
		target.style.display = display;
	}

	setEvent(eventType, callback) {
		this.$triggerEl.addEventListener(eventType, () => {
			try {
				callback();
				this.disableForm();
			} catch (error) {
				alert(error.message);
			}
		});
	}
}
