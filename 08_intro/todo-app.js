

(function() {
    function saveData(id, objects) {
        data = JSON.stringify(objects);
        localStorage.setItem(id, data);
    }

    function getData(id) {
        return localStorage.getItem(id) ? JSON.parse(localStorage.getItem(id)) : [];
    }

    function generateID(objects) {
        if (objects.length === 0 || objects.length === 1) {
            return objects.length + 1
        }
        objects.sort(function(a, b){return b.id - a.id});
        return objects[0].id + 1;
    }

    function addButtons(todoItem, objects, listName) {
        todoItem.doneButton.addEventListener('click', function(){
            todoItem.object.done = true;
            todoItem.item.classList.toggle('list-group-item-success')
            saveData(listName, objects);
        });
        todoItem.deleteButton.addEventListener('click', function() {
            if(confirm('Вы уверены?')) {
                objects.splice(objects.findIndex(n => n.id === todoItem.id), 1);
                todoItem.item.remove();
                saveData(listName, objects);
            }
        });
    }
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTofoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');
        button.disabled = true;

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {form, input, button};
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(object) {
        let item = document.createElement('li');

        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'akign-items-center');
        item.textContent = object.name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        if (object.done) {
            item.classList.add('list-group-item-success');
        } 
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {item, object, doneButton, deleteButton}
    }
   
    function createTodoApp(container, title, listName) {
        let objects = getData(listName).sort((a, b) => a.id - b.id);

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTofoItemForm();
        let todoList = createTodoList();
        for (let object of objects) {
            let todoItem = createTodoItem(object);
            addButtons(todoItem, objects, listName);
            todoList.append(todoItem.item);
        }

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        
        todoItemForm.form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!todoItemForm.input.value) {
                return;
            }
            
            let todoItem = createTodoItem({id: generateID(objects), name: todoItemForm.input.value, done: false});

            addButtons(todoItem, objects, listName);

            objects.push(todoItem.object)
            saveData(listName, objects);
            todoList.append(todoItem.item);
            
            todoItemForm.button.disabled = true;
            todoItemForm.input.value = '';
        });

        todoItemForm.input.addEventListener('input', function() {
            todoItemForm.button.disabled = todoItemForm.input.value === '' ? true : false;
        });
    }

  window.createTodoApp = createTodoApp;
})()
