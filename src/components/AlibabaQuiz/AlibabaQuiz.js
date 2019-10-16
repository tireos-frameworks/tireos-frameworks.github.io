import React from 'react';

import './AlibabaQuiz.scss';
import QuestionBg from './img/questions-bg.jpg';
import SelectBox from '../FormItems/SelectBox/SelectBox';

const AlibabaQuiz = () => {

  const submitQuiz = (e) => {
    e.preventDefault();
    console.log('submit form', e.target);
  };

  const selectBoxValues = ['value1', 'value2', 'value3', 'value4', 'value5', 'value6'];

  return (
    <div className="alibaba-quiz">
      <div className="alibaba-quiz__image alibaba-quiz-image">
        <div className="alibaba-quiz-image__bg"/>
        <div className="alibaba-quiz-image__title">
          An easy way to send buying requests to suppliers & get quotes quickly.
        </div>
        <ul className="alibaba-quiz-image__advantages">
          <li>Get quotes for you custom request</li>
          <li>Let the right supply find you</li>
          <li>Close deals with one click</li>
        </ul>
        <div className="alibaba-quiz-image__button">
          <a href="/catalog/" className={'btn btn--primary'}>Learn more</a>
        </div>
      </div>
      <div className="alibaba-quiz__form">
        <form action=""
              className="quiz-form"
              style={{ backgroundImage: 'url("' + QuestionBg + '")' }}
              onSubmit={submitQuiz}
        >
          <div className="quiz-form__title">One Request, Multiply Quotes</div>

          <div className="form-control form-control--solid">
            <input type="text" placeholder={"What are you a looking for..."}/>
          </div>
          <div className="form-control">
            <input type="text" placeholder={'Quantity'}/>
          </div>
          <div className="form-control">
            <SelectBox
              name="alibaba-quiz-section"
              currentValue={'Введите значение'}
              values={selectBoxValues}/>
          </div>

          <div className="form-control"/>

          <button className={"btn btn--primary"}>Request For Quotation</button>

        </form>
      </div>
    </div>
  )
};
export default AlibabaQuiz;
