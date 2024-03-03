const form_element = document.querySelector('form.login-form');
const submit_action = event => {
    event.preventDefault();
    
    const result = {};
    let successfully = true;
    for (let form_data_element of event.target.elements) {
        if (form_data_element.value.trim().length > 0) {
            result[form_data_element.name] = form_data_element.value.trim();
        } else if (['password', 'email'].includes(form_data_element.name)) {
            alert('All form fields must be filled in');
            successfully = false;
            break;
        }
    }
    
    if (successfully) {
        event.target.reset();
        console.log(result);
    }
};

form_element.addEventListener('submit', submit_action);
