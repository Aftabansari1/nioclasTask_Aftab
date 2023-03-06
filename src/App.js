import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useEffect, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Next from "./Next";
import Previous from "./Previous";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
     fetch(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_901`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  const previousHandle = async() => {
    await fetch(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=BinomialTheorem_901`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  };

  const nextHandle = async() => {
    await fetch(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=DifferentialCalculus2_901`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  };

  return (
    
      <MathJaxContext>
        <div className="parent">
        <div className="containerMain">
        <ul>
          {questions.map((item) => (
            <MathJax key={item.QuestionID}>
              <li>{item.Question}</li>
            </MathJax>
          ))}
        </ul>
        <div className="buttonContainer ">
          <MathJax>
            {/* <button onClick={previousHandle}>Previous</button> */}
            <Previous previousHandle={previousHandle}/>
          </MathJax>
          <MathJax>
            {/* <button onClick={nextHandle}>Next</button> */}
            <Next nextHandle={nextHandle}/>
          </MathJax>
        </div>
        </div>
        </div>
      </MathJaxContext>
  );
}

export default App;
