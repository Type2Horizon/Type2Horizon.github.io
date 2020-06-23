const menu = {
  _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
  },
  get appetizers() {
      return this._courses.appetizers;
  },
  get mains() {
  return this._courses.mains;
  },
  get desserts() {
  return this._courses.desserts;
  },
  set appetizers(appetizers) {
      this.courses.appetizers = appetizers;
  },
  set mains(mains) {
      return this.courses.mains = mains;
  },
  set desserts(desserts) {
      return this.courses.desserts = desserts;
  },
  get courses() {
      return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
      };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
          name: dishName,
          price: dishPrice,
      };
      return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
  },
  generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      document.getElementById('appetizer_text').innerHTML = `Appetizer | ${appetizer.name} | £${appetizer.price}`;
      document.getElementById('main_text').innerHTML = `Main | ${main.name} | £${main.price}`;
      document.getElementById('dessert_text').innerHTML = `Dessert | ${dessert.name} | £${dessert.price}`;
      document.getElementById('price_text').innerHTML = `Total Price | £${totalPrice}`;
  },
};

function meal() {
  const appetizerName1 = document.getElementById('appetizer_1_name').value;
  const appetizerName2 = document.getElementById('appetizer_2_name').value;
  const mainName1 = document.getElementById('main_1_name').value;
  const mainName2 = document.getElementById('main_2_name').value;
  const dessertName1 = document.getElementById('dessert_1_name').value;
  const dessertName2 = document.getElementById('dessert_2_name').value;
  const appetizerPrice1 = parseFloat(document.getElementById('appetizer_1_price').value,10) || 0;
  const appetizerPrice2 = parseFloat(document.getElementById('appetizer_2_price').value,10) || 0;
  const mainPrice1 = parseFloat(document.getElementById('main_1_price').value,10) || 0;
  const mainPrice2 = parseFloat(document.getElementById('main_2_price').value,10) || 0;
  const dessertPrice1 = parseFloat(document.getElementById('dessert_1_price').value,10) || 0;
  const dessertPrice2 = parseFloat(document.getElementById('dessert_2_price').value,10) || 0;
  menu.addDishToCourse('appetizers', appetizerName1, appetizerPrice1);
  menu.addDishToCourse('appetizers', appetizerName2, appetizerPrice2);
  menu.addDishToCourse('mains', mainName1, mainPrice1);
  menu.addDishToCourse('mains', mainName2, mainPrice2);
  menu.addDishToCourse('desserts', dessertName1, dessertPrice1);
  menu.addDishToCourse('desserts', dessertName2, dessertPrice2);
  const meal = menu.generateRandomMeal();
};

document.getElementById('create_random_meal').addEventListener('click', meal);