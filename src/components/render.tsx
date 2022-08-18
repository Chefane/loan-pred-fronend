import React from 'react';

type renderProps={
    list : {
    Loan_ID: string,
    }[]
}

export default function Render(props: renderProps){
    return <div>
      
           {props.list.map(t => {
               return(
         <li key={t.Loan_ID}>{t.Loan_ID}</li>
               )
           })}
    
    </div>
}