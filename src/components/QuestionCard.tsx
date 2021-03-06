import React from 'react';

type Props = {
  question: string;
  answers: string[]; //or an Array<string>
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions
}) => {
  return (
    <div>
      <p className="number">Question: {questionNr} / {totalQuestions} </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />  {/*this is basically the innerHTML from JS*/}
      <div>
        {answers.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}


export default QuestionCard;