# Readme Generator

## Description
This application was developed for the purpose of generating a concise Readme using node.js. The user is prompted with a series of questions and options to add to their readme through the command-line. When the user has answered all of the given prompts then the Readme file will be generated in the repository. 

## Demo
![Readme Demo](https://github.com/inesr19/Readme-Generator/blob/main/assets/Demo%20Readme.gif)

## Changes Made - Javascript Source Code
1. Added node_modules and DS_Store to gitignore.
2. Included package.json to repo.
3. Added 'inquirer' dependency to package.json.
4. Added variables for require() method.
5. Added questions for each readme section being displayed using inquirer formatting guidelines.
6. Added functionality to the writeFile() method so that information can be passed through the generateMarkdown file.
7. Added switch functionality for license options and used this property to render license badges.
8. Created a license section for the provided renderLicenseSection() function.
9. Added readme sections with appropriate formatting to the generateMarkdown() function.


## Walkthrough Video
* [Sample Readme](https://drive.google.com/file/d/1FefADWQYbaWS7VvBDAEeMzd4nXh87UGq/view)