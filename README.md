  Simple Calculator

This project is a basic calculator built using HTML, Sass, and JavaScript. 
It includes simple arithmetic operations like addition, subtraction, multiplication, and division. 
The project structure is organized, with the compiled CSS and HTML files inside the dist folder.

  Features
  - Basic arithmetic operations: addition, subtraction, multiplication, and division.
  - Responsive design using Sass for styling.
  - Organized project structure with separate source and distribution folders.
    
   Technologies Used
- HTML: Markup for the calculator layout.
- Sass: Preprocessor for CSS, making it easier to manage and scale styles.
- JavaScript: Logic for performing arithmetic operations.

Project Structure
simple-calculator/
│
├── dist/
│   ├── index.html       # Compiled HTML file
│   ├── index.css       # Compiled CSS file from Sass
│   └── script.js        # JavaScript for calculator functionality
│
├── src/
│   ├── index.html       # Source HTML file
│   ├── index.scss      # Sass styles (source file)
│   └── script.js        # JavaScript for calculator logic
│
└── README.md            # This readme file


Getting Started
To get started with this project, follow these instructions:

1. Clone the Repository
In your git bash
git clone https://github.com/Nkiru-Ujam/dist.git
cd simple-calculator

2. Installing Sass
Make sure you have Sass installed on your system. You can install it globally using npm if it's not already installed:
bash
npm install -g sass

3. Watching Sass Files
Since the compiled CSS is located in the dist folder, and the source Sass files are in the src folder, you will need to configure Sass to watch for changes and compile the .scss files to the dist folder.

To do this, navigate to the root of your project directory and run:

sass --watch src/index.scss:dist/index.css
This command will automatically watch the src/styles.scss file and compile the output to dist/index.css whenever changes are made.

4. Opening the Project
Once Sass is set up, open the dist/index.html file in your browser to view and interact with the calculator.

 Using the Calculator
- Enter numbers by clicking the buttons or using your keyboard.
- Perform basic arithmetic operations like addition, subtraction, multiplication, and division.
- Clear the screen using the "C" button.
- Press the "equals" (=) button to see the result of the calculation.

License
This project is licensed under the MIT License. See the LICENSE file for details.
