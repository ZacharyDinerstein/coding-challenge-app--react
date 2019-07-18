import React from 'react';
import shortid from 'shortid';

const CardMainContent = (props) => {
   let { cardData } = props;

   return (
      <>
         {cardData.answers.map((answer, index) => {
            return (
               <div key={shortid.generate()} className="card__answer-wrapper">
                  <pre className="card__answer">{answer.answer}</pre>

                  {answer.example &&
                     <div className="card__example-wrapper">
                        <p className="card__example-title">Example:</p>
                        <pre className="card__code-wrapper">
                           <code className="card__example">
                              {answer.example}
                           </code>
                        </pre>
                     </div>
                  }
               </div>
            )
         })}
         {cardData.links.map((link, index) => {
            let linkName = `Link ${index + 1}`
            return (
               <a key={shortid.generate()} href={link}>{linkName}</a>
            )
         })}
         {cardData.tags.map((tag) => {
            return (
               <p>{tag}</p>
            )
         })}
      </>
   )
}

export default CardMainContent;