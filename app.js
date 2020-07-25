function checkValue() {
    var todo_item = document.getElementById("todo");
    if (
        todo_item.value != ""
    ) {

        // Create Text Element
        var todo_text = document.createTextNode(todo_item.value);
        var text_element = document.createElement("div");
        text_element.setAttribute("class", "task h-100");
        text_element.appendChild(todo_text);
        var coldivText = document.createElement("div");
        coldivText.setAttribute("class", "col-sm-12 col-md-6 col-lg-8");
        coldivText.appendChild(text_element);

        // Create Edit Button
        var edit_icon = document.createElement("i");
        edit_icon.setAttribute("class", "fas fa-edit");
        var btn_edit_text = " Edit"
        var edit_text = document.createTextNode(btn_edit_text);
        var btn_edit = document.createElement("button");
        btn_edit.setAttribute("class", "btn btn-outline-primary mt-2 w-100");
        btn_edit.setAttribute("id", "edit");
        btn_edit.setAttribute("onclick", "editTodo(this)")
        btn_edit.appendChild(edit_icon);
        btn_edit.appendChild(edit_text);
        var coldivEdit = document.createElement("div");
        coldivEdit.setAttribute("class", "col-sm-6 col-md-3 col-lg-2");
        coldivEdit.appendChild(btn_edit);

        // Create Edit Button
        var dlt_icon = document.createElement("i");
        dlt_icon.setAttribute("class", "fas fa-trash-alt");
        var btn_dlt_text = " Delete"
        var dlt_text = document.createTextNode(btn_dlt_text);
        var btn_dlt = document.createElement("button");
        btn_dlt.setAttribute("class", "btn btn-outline-danger mt-2 w-100");
        btn_dlt.setAttribute("id", "dlt");
        btn_dlt.setAttribute("onclick", "deleteTodo(this)")
        btn_dlt.appendChild(dlt_icon);
        btn_dlt.appendChild(dlt_text);
        var coldivDlt = document.createElement("div");
        coldivDlt.setAttribute("class", "col-sm-6 col-md-3 col-lg-2");
        coldivDlt.appendChild(btn_dlt);

        // Create Row Element
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        row.appendChild(coldivText);
        row.appendChild(coldivEdit);
        row.appendChild(coldivDlt);

        // Create Li Element
        var li = document.createElement("li");
        li.setAttribute("class", "mt-3 p-3 li");
        li.appendChild(row);

        // Append li Element in ul
        var ul_todo_list = document.getElementById("todoList");
        ul_todo_list.appendChild(li)

        todo_item.value = "";
        todo_item.focus();

    } else {
        alert("Please Enter a todo first");
        todo_item.focus();
    }
}

function deleteTodo(btn) {
    btn.parentNode.parentNode.parentNode.remove();
}

function deleteAll() {
    var todo_list = document.getElementById("todoList");
    todo_list.innerHTML = "";
}

function editTodo(btn) {
    var btnText = btn;
    btnTextLength = btnText.childNodes.length;
    var edit_todo = btn.parentNode.previousSibling;
    var old_todo;

    for (
        var i = 0; i < btnTextLength; i++
    ) {

        if (
            btnText.childNodes[i].nodeType == 3
        ) {
            if (
                btnText.childNodes[i].nodeValue == " Edit"
            ) {
                for (
                    var j = 0; j < edit_todo.childNodes.length; j++
                ) {
                    if (
                        edit_todo.childNodes[j].nodeType == 1
                    ) {
                        old_todo = edit_todo.childNodes[j].innerHTML;
                    }
                }
                edit_todo.innerHTML = "";

                //     // Create Input element
                var todo_input = document.createElement("input");
                todo_input.setAttribute("type", "text");
                todo_input.setAttribute("name", "todo_input");
                todo_input.setAttribute("id", "todo_input");
                todo_input.setAttribute("class", "w-100 h-75 todo");
                todo_input.setAttribute("onblur", "saveValue(this.value)");
                todo_input.setAttribute("value", old_todo);

                // Create Div Element
                var input_parent = document.createElement("div");
                input_parent.setAttribute("class", "task h-100");

                // Append Childs
                input_parent.appendChild(todo_input);
                edit_todo.appendChild(input_parent);
                todo_input.focus();
                todo_input.select();
                btnText.childNodes[i].nodeValue = " Update";
            } else if (
                btnText.childNodes[i].nodeValue == " Update"
            ) {
                edit_todo.innerHTML = "";

                // Create Div Element
                var updated_todo = document.createElement("div");
                updated_todo.setAttribute("class", "task h-100");

                // Create Text Node
                var updated_todo_text = document.createTextNode(updated_input_value);
                updated_todo.appendChild(updated_todo_text);

                // Append Todo
                edit_todo.appendChild(updated_todo);
                btnText.childNodes[i].nodeValue = " Edit";
            }
        }
    }
}
var updated_input_value;

function saveValue(val) {
    updated_input_value = val;
}