import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import readlineSync from 'readline-sync'
import Question from './question.js';

const questions = [];

const dialog = {
  greet: () => {
    console.log('Welcome to Fast-test!');
    console.log('Let`s begin building your form!\n');
  },
  askQuestion: 'Tell me your question...',
  askType: 'Choose type of answer(s) for your question',
  askOptions: () => console.log('What`s options I set for your question?')
};



const getUserData = async () => {
  dialog.greet();
 // while(true) {

    const typeQuestion = {
      type: 'list',
      name: 'typeQuestion',
      message: dialog.askType,
      choices: ['input', 'list'],
    };
    const userQuestion = await inquirer.prompt({
      type: 'input',
      name: 'question',
      message: dialog.askQuestion,
    });
    const type = await inquirer.prompt(typeQuestion);
    const options = [];

    if (type.typeQuestion === 'list') {
      dialog.askOptions();


      
    }
    
    


  //}
};

getUserData();