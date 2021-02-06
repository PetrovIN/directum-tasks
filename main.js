window.onload = function jsonExample() {
    const EXAMPLE = {
        "form": {

            "name": "Название формы",

            "items": [{

                "type": "filler",

                "attributes": {

                    "message": "Произвольные текста"

                }

            }, {

                "type": "text",

                "attributes": {

                    "name": "text",

                    "placeholder": "Текст для placeholder",

                    "required": true,

                    "value": "",

                    "label": "Описание text",

                    "class": "css-class",

                    "validationRules": [{

                        "type": "text"

                    }],

                    "disabled": false

                }

            }, {

                "type": "textarea",

                "attributes": {

                    "name": "textarea",

                    "placeholder": "Текст для placeholder",

                    "required": true,

                    "value": "",

                    "label": "Описание textarea",

                    "class": "css-class",

                    /*"validationRules": [{

                        "type": "textarea"

                    }],*/

                    "disabled": false

                }
            }, {

                "type": "checkbox",

                "attributes": {

                    "name": "checkbox",

                    "placeholder": "Текст для placeholder",

                    "required": true,

                    "label": "Описание checkbox",

                    "class": "css-class",

                    "validationRules": [{

                        "type": "checkbox"

                    }],

                    "checked": false,

                    "disabled": false

                }

            }, {
                "type": "button",

                "attributes": {

                    "class": "css-class",

                    "value": "Кнопка"

                }
            }, {
                "type": "select",

                "attributes": {

                    "name": "Имя элемента",

                    "placeholder": "Текст для placeholder",

                    "required": true,

                    "value": "",

                    "label": "Описание select",

                    "class": "css-class",

                    "options": [{

                        "value": "",

                        "text": "Текст",

                        "selected": true

                    }, {

                        "value": "",

                        "text": "Текст2",

                        "selected": true

                    }],

                    "disabled": false

                }
            }, {
                "type": "radio",

                "attributes": {

                    "name": "Имя элемента",

                    "placeholder": "Текст для placeholder",

                    "required": true,

                    "value": "",

                    "label": "Описание radio",

                    "class": "css-class",

                    "validationRules": [{

                        "type": "radio"

                    }],

                    "items": [{

                        "value": "",

                        "label": "Текст",

                        "checked": false

                    }],

                    "disabled": false
                },

            }],

            "postmessage": "Сообщение в случае успешного заполнения формы"
        }
    };

    var obj = JSON.parse(JSON.stringify(EXAMPLE));

    var form = document.createElement('form');

    var labelName = document.createElement('label');

    var labelPostmessage = document.createElement('label');

    var br = document.createElement('br');

    var a = [];

    for (var key in obj.form) {

        if(key !== 'items') {

            if (key === 'name') {
                labelName.setAttribute(key, obj.form[key]);
                labelName.textContent = obj.form[key];
                form.appendChild(labelName);
                form.appendChild(br);
            }
        }
    }

    for (var i = 0; i < obj.form.items.length; i++) {

        var input = document.createElement('input');
        var select = document.createElement('select');
        var textarea = document.createElement('textarea');
        var labelTextDescription = document.createElement('label');
        var labelTextareaDescription = document.createElement('label');
        var labelCheckboxDesrciption = document.createElement('label');
        var labelSelectDescription = document.createElement('label');
        var labelRadioDescription = document.createElement('label');
        var labelRadio = document.createElement('label');
        var br1 = document.createElement('br');
        var br2 = document.createElement('br');

        for (var key1 in obj.form.items[i]) {

            if (obj.form.items[i][key1] === 'select') {
                select.setAttribute(key1, obj.form.items[i][key1]);
                a.push(obj.form.items[i][key1]);

            } else if (obj.form.items[i][key1] === 'textarea') {
                textarea.setAttribute(key1, obj.form.items[i][key1]);
                a.push(obj.form.items[i][key1]);

            } else if (key1 !== 'attributes') {
                input.setAttribute(key1, obj.form.items[i][key1]);
                a.push(obj.form.items[i][key1]);
            }
        }

        for (var key2 in obj.form.items[i].attributes) {

            if(key2 !== 'validationRules' && key2 !== 'options' && key2 !== 'items')  {
                select.setAttribute(key2, obj.form.items[i].attributes[key2]);
                textarea.setAttribute(key2, obj.form.items[i].attributes[key2]);
                input.setAttribute(key2, obj.form.items[i].attributes[key2]);
            }

            if (key2 === 'disabled' && obj.form.items[i].attributes[key2] === false) {
                input.setAttribute('enabled', true);
                select.setAttribute('enabled', true);
                textarea.setAttribute('enabled', true);
                input.removeAttribute('disabled');
                select.removeAttribute('disabled');
                textarea.removeAttribute('disabled');
            }

            if (key2 === 'checked' && obj.form.items[i].attributes[key2] === false) {
                input.removeAttribute('checked');
            }

            if (a[i] === 'text' && key2 === 'label') {
                labelTextDescription.textContent = obj.form.items[i].attributes[key2];
                form.appendChild(labelTextDescription);
                form.appendChild(br2);
            }

            if (a[i] === 'textarea' && key2 === 'label') {
                labelTextareaDescription.textContent = obj.form.items[i].attributes[key2];
                form.appendChild(labelTextareaDescription);
                form.appendChild(br2);
                form.appendChild(textarea);
                form.appendChild(br1);
            }

            if (a[i] === 'checkbox' && key2 === 'label') {
                labelCheckboxDesrciption.textContent = obj.form.items[i].attributes[key2];
                form.appendChild(labelCheckboxDesrciption);
                form.appendChild(br2);
            }

            if (a[i] === 'select' && key2 === 'label') {
                labelSelectDescription.textContent = obj.form.items[i].attributes[key2];
                form.appendChild(labelSelectDescription);
                form.appendChild(br2);
                form.appendChild(select);
                form.appendChild(br1);
            }

            if (a[i] === 'radio' && key2 === 'label') {
                labelRadioDescription.textContent = obj.form.items[i].attributes[key2];
                form.appendChild(labelRadioDescription);
                form.appendChild(br2);
            }

            if (key2 === 'message') {
                input.value = obj.form.items[i].attributes[key2];
                form.appendChild(input);
            }

            for (var j = 0; j < obj.form.items[i].attributes[key2].length; j++) {

                for (var key3 in obj.form.items[i].attributes[key2][j]) {

                    if (key2 === 'validationRules' || key2 === 'options' || key2 === 'items') {

                        var option = document.createElement('option');

                        if (key2 === 'options' && key3 === 'text') {
                            option.textContent = obj.form.items[i].attributes[key2][j][key3];
                            select.appendChild(option);
                        }

                        if (key2 === 'items' && key3 === 'label') {
                            labelRadio.textContent = obj.form.items[i].attributes[key2][j][key3];
                        }

                        input.setAttribute(key3, obj.form.items[i].attributes[key2][j][key3]);
                        textarea.setAttribute(key3, obj.form.items[i].attributes[key2][j][key3]);
                        option.setAttribute(key3, obj.form.items[i].attributes[key2][j][key3]);

                        if (key3 === 'checked' && obj.form.items[i].attributes[key2][j][key3] === false) {
                            input.removeAttribute('checked');
                        }
                    }
                }
            }
        }

        if (input.hasAttribute('type')) {
            form.appendChild(input);
            form.appendChild(labelRadio);
            form.appendChild(br1);

        }
    }


    labelPostmessage.setAttribute(key, obj.form[key]);
    labelPostmessage.textContent = obj.form[key];
    form.appendChild(labelPostmessage);

    document.body.appendChild(form);

};