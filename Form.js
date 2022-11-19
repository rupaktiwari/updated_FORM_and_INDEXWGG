//well done
import questions from "./Data"
import { useState,useEffect} from "react"
import { Link } from "react-router-dom";
import './indexwgg.css';
import './Appwgg.css';

function Form () {

    const [ans,setAns] = useState("")
    const [currentQuestion, setCurrentQuestion] = useState(
      Math.floor(Math.random() * (80- 0 + 1)) + 0
    );
    const [score,setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    
  
    const nextQuestion = Math.floor(Math.random() * (80- 0 + 1)) + 0;

    const handleSubmit = (evt) => {
      evt.preventDefault()
     if(questions[currentQuestion].answer == ans) {
     setCurrentQuestion(nextQuestion)
     setScore(score+1)
     setAns('');
     }
     else {
      setCurrentQuestion(currentQuestion)
      setScore(score)
     }
     setAns('');
   
}
  
    const handleSkip = () => {
      setCurrentQuestion(nextQuestion);
      setAns('');
      console.log(questions.length);
    }

    const handleStart = () => {
        window.location.reload(false);
     
      }
      const handlePlayAgain = () => {
        setShowScore(false);
        window.location.reload(false);
        
      }
     
    
      //code for the timer
      const [timer, setTimer] = useState(100);
  
      useEffect(()=> {
       

        if (timer===0) {
        return(
        setShowScore(true)
        )
        
        }
    
        const interval = setInterval(()=> {
          setTimer((prev) => prev-1);
        }, 1000);
        return () => clearInterval(interval);
      },[timer]);

      

return(
  
  
<div className="body">

{showScore ? (

  < div className='scoreContainer'>
<h2 className='h1'>STRIVE FOR PROGRESS</h2>
<div>
<hr className='line'/>
</div>

<div>
<h2 className='h2'> FINAL SCORE : {score}</h2>
</div>

<div className='butt'>
<button className='playagain' onClick={handlePlayAgain}>PLAY AGAIN</button> 

 <Link to= '/'>
 <button className='quitgame'>QUIT GAME</button>

 </Link>
 

</div>

</div>


) : (

    <div className="container">
    <div >
      <div className="verytop">
       
       <button className = 'timer'>{timer}</button>
      
     
       
        </div>  

       


    <form  className = "form" onSubmit={handleSubmit}>
          
    <input type="text"  value = {ans} autoComplete = 'off' name = "formans"  placeholder="Guess the answer" onChange={(e) => setAns(e.target.value)} />
    <div className="submit">
    <button className="submitButton" type='submit' >Submit</button>
    </div>
    
    </form>

   </div>

   <div>
    <hr className="topline"/>
    </div>
   

  <div className="words">
  {questions[currentQuestion].questionText.map((questionText) => <div className='wordButtons'  ><h3>{questionText}</h3></div> )}
  <hr className="line"></hr>

  {questions[currentQuestion].hint.map((hint) => <div className="hintxa"><h3 className="hinto">{hint}</h3></div> )}

  <div className="hintImage"></div>
 
  <hr className="linere"></hr>
  

  
  </div>

 
   
  <div className="bottomButton">
  <button type="submit" name="footer" className="skipButton" onClick={handleSkip}>Skip</button>

 

 <button type="submit" name="footer" className="scoreButton" onClick={handleStart} >Restart</button>

  
</div>
  </div>
  

)}

</div>
)

}
export default Form;

