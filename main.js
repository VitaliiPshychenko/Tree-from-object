const data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

const container = document.getElementById('container');

function createTree(id, obj) {
  const ul = document.createElement('ul');

  Object.entries(obj).forEach(([nodeText, innerText]) => {
    const li = document.createElement('li');

    li.textContent = nodeText;
    ul.appendChild(li);
    if (Object.keys(innerText).length) {
      createTree(li, innerText);
    }
  }
)
id.appendChild(ul);
}

createTree(container, data);
 