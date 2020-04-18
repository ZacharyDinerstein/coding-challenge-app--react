import React from 'react';
import shortid from 'shortid';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Answer = ({item}) => (
    <div key={shortid.generate()} className="card__answer-wrapper">
      <pre className="card__answer">{item.answer}</pre>

      {item.example &&
         <div className="card__example-wrapper">
            <p className="card__example-title">Example:</p>
            <SyntaxHighlighter language="javascript" style={atomOneDarkReasonable}>{item.example}</SyntaxHighlighter>
         </div>
      }
    </div>
);

export default Answer;