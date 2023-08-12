# Coffee Shop Inventory Management

A React-based web application designed to manage the inventory of different coffee types in a coffee shop. The application provides CRUD (Create, Read, Update, Delete) operations for managing coffee types and a Bag feature for users to add their favorite coffees.

## Features

- Coffee List: Displays a list of available coffees with details such as name, origin, price, roast, and quantity.

- Add Coffee: Users can add a new type of coffee to the inventory.

- Edit Coffee: Allows modification of existing coffee details.

- Delete Coffee: Remove a coffee type from the inventory.

- Bag Feature: Users can add coffees to their bag, adjust quantities, and place orders.

- Responsive Design: Styled with a modern Navy Blue and Bone White color palette and a consistent Box Model design.

## Technology

- React: Used for building the user interface components.

- Node: The application runs on Node version v19.8.1.

- CSS: Styling and layout.

## Installation

1. Clone the repository:

```
git clone https://github.com/JBShaffer91/coffee-inventory-tracker.git
```

2. Navigate to the project directory:
```
cd coffee-shop-inventory-management
```

3. Install the required dependencies:
```
npm install
```
4. Start the development server:
```
npm start
```
The application will open in your default web browser at http://localhost:3000/.

## Usage
1. Viewing Coffees: Simply scroll through the Coffee List to see all available coffees.
2. Adding a New Coffee: Use the "Add New Coffee Type" form to input details and click "Add New Coffee Type".
3. Editing a Coffee: Click on a coffee from the list to open the edit modal. Modify the details and click "Save".
4. Deleting a Coffee: In the edit modal, click "Delete" to remove the coffee from the list.
5. Using the Bag:
- Click "Add to Bag" next to a coffee to add it to your bag.
- In the Bag section, adjust quantities using the "+" and "-" buttons.
- Click "Order" to place your order. If there's insufficient stock, you'll be notified.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License

Copyright (c) 2023 Justin Shaffer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.