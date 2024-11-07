
# Portfolio Template

This guide will walk you through how to set up and run a simple Gulp project that compiles and processes Tailwind CSS.

## Steps to Run the Project

### 1. Install Node.js
Make sure you have **Node.js** installed. If not, download and install it from [Node.js](https://nodejs.org/).

### 2. Download or Clone the Project
If you haven't already, clone or download the project folder to your local machine.

### 3. Install Project Dependencies
In your project folder, open a terminal/command prompt and run:

```bash
npm install
```

### 4. Install `gulp-cli` globally
To run Gulp from the command line, you need to install the `gulp-cli` globally. In your terminal, run the following command:

```bash
npm install --global gulp-cli
```
This will install all the required packages, including Gulp, Tailwind CSS, and other necessary tools.

### 5. Folder Structure
Make sure your project looks like this:

```
/project-folder
  /src
    styles.css         # Your Tailwind CSS file
    index.html         # Your HTML file
  gulpfile.js          # The Gulp configuration file
  package.json         # Project dependencies
```

### 6. Run the Gulp Task
To start the Gulp task and begin processing your CSS, run:

```bash
gulp
```

This will do the following:
- Compile the `styles.css` file in the `src/css/` folder using Tailwind CSS.
- Automatically watch for any changes in `styles.css` or any HTML files and recompile when changes are detected.

### 7. Check the Output
Once the task is running, check the `src/css/` folder for the compiled `styles.css` file. You can link this file in your `index.html`:

```html
<link href="css/styles.css" rel="stylesheet" />
```

### 8. Modify Your CSS (Optional)
- If you want to make changes to your styles, edit `src/css/styles.css`.
- If you want to customize Tailwind (e.g., change colors, fonts), you can modify the `tailwind.config.js` file (if you created one).

### 8. Stop the Task
To stop the Gulp task, press `Ctrl + C` in the terminal.
