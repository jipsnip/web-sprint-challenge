import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchQuiz, postAnswer, selectAnswer } from '../state/action-creators';

export function Quiz(props) {
  console.log("quiz props", props)

  useEffect(()=> {
    console.log('fetching quiz')
    if (props.quiz === null){
      console.log('test', props.quiz)
      props.fetchQuiz();
    }
  }, []);

  console.log('quiz data', props.quiz)

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz?.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${props.selectedAnswer === props.quiz.answers?.[0]?.answer_id ? 'selected' : ''}`}>
                {props.quiz.answers?.[0]?.text}
                <button onClick={()=> props.selectAnswer(props.quiz.answers?.[0]?.answer_id)}>
                  {`${props.selectedAnswer === props.quiz.answers?.[0]?.answer_id ? 'SELECTED' : 'Select'}`}
                </button>
              </div>

              <div className={`answer ${props.selectedAnswer === props.quiz.answers?.[1]?.answer_id ? 'selected' : ''}`}>
              {props.quiz.answers?.[1]?.text}
                <button onClick={()=> props.selectAnswer(props.quiz.answers?.[1]?.answer_id)}>
                {`${props.selectedAnswer === props.quiz.answers?.[1]?.answer_id ? 'SELECTED' : 'Select'}`}
                </button>
              </div>
            </div>

            <button 
              id="submitAnswerBtn" 
              disabled={props.selectedAnswer === null} 
              onClick={() => props.postAnswer(props.selectedAnswer, props.quiz?.quiz_id)}
            >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('quiz state', state)
  return({
    selectedAnswer: state.selectedAnswer,
    quiz: state.quiz
  });
}


export default connect(mapStateToProps, { selectAnswer, postAnswer, fetchQuiz })(Quiz);