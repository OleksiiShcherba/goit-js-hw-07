const input_element = document.querySelector('input#name-input');
const output_element = document.querySelector('span#name-output');
input_element.addEventListener('input', (eventObject) => {
    output_element.textContent = eventObject.currentTarget.value.trim().length > 0 ? eventObject.currentTarget.value.trim() : 'Anonymous';
});