import React from 'react';
import shortid from 'shortid';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CardMainContent = (props) => {
   let { cardData } = props,
      {
         answers,
         links,
         tags,
         company,
         categories
      } = cardData;

   return (
      <>
         {answers.map((answer, index) => {
            return (
               <div key={shortid.generate()} className="card__answer-wrapper">
                  <pre className="card__answer">{answer.answer}</pre>

                  {answer.example &&
                     <div className="card__example-wrapper">
                        <p className="card__example-title">Example:</p>
                        <SyntaxHighlighter language="javascript" style={atomOneDarkReasonable}>
                           {answer.example}
                        </SyntaxHighlighter>
                     </div>
                  }
               </div>
            )
         })}
         {!links.length && cardData.links.map((link, index) => {
            let linkName = `Link ${index + 1}`
            return (
               <a key={shortid.generate()} href={link}>{linkName}</a>
            )
         })}
         {company && <p>{company}</p>}

         {tags && cardData.tags.map((tag, index) => {
            return (
               <p key={index}>{tag}</p>
            )
         })}
         {categories && cardData.categories.map((category, index) => {
            return (
               <p key={index}>{category}</p>
            )
         })}
      </>
   )
}

export default CardMainContent;