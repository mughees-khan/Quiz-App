var questionContainer = document.getElementById('question')

function Question(title,options,answer){
    this.title = title
    this.options = options
    this.answer = answer
}

var question1 = new Question('What does HTML stands for?',['hyper text markup language','hyper text makeup language','hyper text checkup language','hyper text breakup language'],'hyper text markup language')

var question2 = new Question('What does CSS stands for?',['cascading style sheet','color style sheet','creative style sheet','computer style sheet'],'cascading style sheet')

var question3 = new Question('What does JS stands for?',['java sourse','javascript','jata script','java style'],'javascript')

var question4 = new Question('Inside which html element do we put the javascript?',['script','javascript','scripting','js'],'<script>')

var question5 = new Question('how do you write "Hello World" in an aert box?',['msgBox("HEllo World");','msg("HEllo World");','alertBox("HEllo World");','alert("HEllo World");'],'alert("HEllo World");')

var question6 = new Question('how do you create a function in js?',['function = myFunction()','function:myFunction()','function myFunction()','function == myFunction()'],'function myFunction()')

var question7 = new Question('How do you call a function name "myFunction"',['call myFunction()','myFunction()','call  function myFunction()','call myFunction() function'],'myFunction()')

var question8 = new Question('how to write an if statement in js?',['if i=5','if i==5 then','if (i==5)','if i=5 then'],'if (i==5)')

var question9 = new Question('How to write an IF statement for executing some code if i is not equal to 5',['if i=!5 then','if(i!=5)','if(i<>5)','if i<>5'],'if(i!=5)')

var question10 = new Question('how does a while loop start?',['while i=1 to 10','while(i<=10)','while(i<=10;i++)','while i+=10'],'hyper text markup language')


 
var questions = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10
]

var currentQuestion = 0

renderQuiz()
result()
function renderQuiz(){
    var titleElement = document.createElement('h1')
    titleElement.innerHTML = questions[currentQuestion].title

    questionContainer.appendChild(titleElement)

    for (var i=0; i<questions[currentQuestion].options.length; i++){

        var optionElement = document.createElement('input')
        optionElement.setAttribute('type','checkbox')
        optionElement.value = questions[currentQuestion].options[i]
        optionElement.setAttribute('class','options')
       

        var spanElement = document.createElement('span')
        spanElement.innerHTML = questions[currentQuestion].options[i]  + '<br />'

        questionContainer.appendChild(optionElement)
        questionContainer.appendChild(spanElement)
    }
    var backButton = document.createElement('button')
    backButton.innerHTML = 'BACK'
    
    backButton.setAttribute('onclick','backQuestion()')
    backButton.setAttribute('class','backBtn')

    questionContainer.appendChild(backButton)

    var nextButton = document.createElement('button')
    nextButton.innerHTML = 'NEXT'

    nextButton.setAttribute('onclick','nextQuestion()')
    nextButton.setAttribute('class','nextBtn')

    questionContainer.appendChild(nextButton)
     
   
}

function nextQuestion(){
    currentQuestion++
        questionContainer.innerHTML =''
        renderQuiz()

   
}
function backQuestion(){
    currentQuestion--
    questionContainer.innerHTML =''
    renderQuiz()
}
var score = 0
function result(){
   
    for(var i=0; i<questions[currentQuestion].options.length; i++){
        var correct = document.getElementById('final')
    if(correct.value.checked == questions.answer){
        score +=1
    }else{
        score
    }
}
    var result = document.getElementById('result')
    var text = document.createElement('p')
    text.innerHTML = score
    result.appendChild(text)
}