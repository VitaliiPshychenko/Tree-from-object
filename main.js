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
  for (const tree in obj) {
    const li = document.createElement('li');
    li.innerHTML = tree;
    ul.appendChild(li);
    if(Object.keys(obj[tree]).length) {
      createTree(li, obj[tree])
    }
  }
  id.appendChild(ul);
}


createTree(container, data); 