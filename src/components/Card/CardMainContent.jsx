import React from 'react';
import shortid from 'shortid';
import Answer from './CardSubCategories/Answer';

const CardMainContent = ({cardData, handleDeleteItem, handleEditItem}) => {
   let {answers, links, tags, company, categories} = cardData;

   return (
      <>
         {answers.map(item => <Answer item={item}/>)}

         {!links.length && links.map((link, index) => {
            let linkName = `Link ${index + 1}`;
            return <a key={shortid.generate()} href={link}>{linkName}</a>;
         })}

         {company &&
            <>
               <h4>Company</h4>
               <p>{company}</p>
            </>
         }

         {tags && <h4>Tags</h4>}

         {tags && cardData.tags.map(tag => {
            return <p key={shortid.generate()}>{tag}</p>
         })}

         {categories && <h4>Categories</h4>}

         {categories && cardData.categories.map(category => {
            return <p key={shortid.generate()}>{category}</p>
         })}
         <button onClick={handleDeleteItem}>DELETE</button>
         <button onClick={handleEditItem}>Edit</button>
      </>
   )
};

export default CardMainContent;