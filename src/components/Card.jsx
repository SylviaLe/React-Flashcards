import React, {useState} from 'react'

export default function Card(props) {
    //states, for handling the flipping animation
    const [flip, setFlip] = useState(false)  //show the front instead of the back


    return (
        <div className="col">
            <div className="row">
                <div onClick={() => setFlip(!flip)} className={`col-md-10 m-3 mx-3 card ${flip ? 'flip' :''}`}>
                {/* default class is card. if flip is true then set the class to flip, otherwise blank */}
                {/* onclick will call a function, which is declared inside the {}, using arrow syntax. Call setFlip to be the oposite of whatever it is now */}
                    
                    {/* front side */}
                    <div className="front">
                        {props.card.question}
                        <div className="card-options">
                            {props.card.options.map(option => {
                                return <div className="option" key={option}>{option}</div>
                            })}
                        </div>
                    </div>


                    {/* back side */}
                    <div className="back">
                        {props.card.answer}
                    </div>
                    
                    {/* old code */}
                    {/* {flip ? props.card.answer : props.card.question} */}
                    {/* if flip is true, show the answer, otherwise, show the question */}
                </div>
            </div>
        </div>
    )
}


