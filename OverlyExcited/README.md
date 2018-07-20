Practice: Overly Excited
Requirements
For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

If you haven't done so yet, create the workspace/javascript/overly-excited directory structure in your home directory. Open your terminal and enter in the following command.

mkdir -p ~/workspace/javascript/overly-excited
Now that you have created the directory, you want to change to that directory so that you can add files to it.

cd ~/workspace/javascript/overly-excited
Create an index.html file in this directory with the touch command.

Create an overly-excited.js file in this directory with the touch command.

Copy the following code and paste it into the index.html file. Notice that the overly-excited.js file is properly linked so that when you load this HTML file in a web browser, the logic in that file will be executed.

<!DOCTYPE html>
<html>
<head>
    <title>Overly Excited</title>
</head>
<body>

    <script src="overly-excited.js"></script>
</body>
</html>
Open the index.html file in your web browser.

At this point, you will simply see a blank web page because you have no content in the HTML file. Open your developer tools using the Option+Command+I keyboard shortcut.

At the top of the developer tools panel, you will see the word Console. Click on that word. The console.log() statement will output any message into this panel in your developer tools. You can try it out immediately by clicking in the Console panel, and typing console.log("Hello, world!"), and then pressing your return key.