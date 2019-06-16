import React, { Component } from 'react';

export default class CardMainContent extends Component {
  // const CardMainContent = props => {
  render() {
    const { cardData } = this.props;
    console.log(cardData.answers[0].answer)

    return (
      cardData.answers.map((answer) => {
        return <h1>{answer.answer}</h1>
      })
    )
  }
}

//   {props.cardData.answers.map((answer) => {
//     return (
//       <div className="card__answer-wrapper">
//         <p className="card__answer">{answer.answer}</p>

//         {answer.example &&
//           <div className="card__example-wrapper">
//             <p className="card__example-title">For example:</p>
//             <code className="card__example">
//               <pre>
//                 {answer.example}
//               </pre>
//             </code>
//           </div>
//         }

//       </div>
//     )
//   })
// }

// {card.links.map((link, index) => {
//     let content = `Link ${index + 1}`;

//     return (
//       <button> <a href={link}>{content}</a> </button>
//     )
//   })
// }
// }



// export default CardMainContent;