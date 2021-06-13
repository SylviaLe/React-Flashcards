import React, { useRef, useEffect } from 'react'

export default function Form({ cates, setCates, cards, setCards }) {

    //refs
    const categoryEl = useRef()
    const amountEl = useRef()


    async function getQuestions(){
        const amt = amountEl.current.value
        const cate = categoryEl.current.value

        const response = await fetch(`https://opentdb.com/api.php?amount=${amt}&category=${cate}`)
        const data = await response.json()
        
        setCards(data.results.map((qItem, index) => {
            const ans = decodeStr(qItem.correct_answer)
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            const options = [...qItem.incorrect_answers.map(a => decodeStr(a)), ans] //get all the incorrect ans, then append the correct at the back

            return {
            id: `${index}-${Date.now()}`,
            question:  decodeStr(qItem.question),
            answer: ans,
            options: options.sort(() => Math.random() - .5) //ensure randomness for options
            }
        }))
    } 

    function decodeStr(str){
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str
        return textArea.value
    }

    function handleSubmit(e){
        e.preventDefault() //force it to go through our code
        
        getQuestions()
    }


    return (
        <div>
            <div>
                {cates != null ? <form action="" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="category">Category: </label>
                            <select name="" id="category" ref={categoryEl}>
                            {cates.map(cate => {
                                return <option value={cate.id} key={cate.id}>{cate.name}</option>
                            })}
                            </select>
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="amount">Number of questions: </label>
                            <input type="number" id='amount' min='5' step='1' default={10} ref={amountEl}/>
                        </div>
                    </div>
                    <button className='btn btn-dark text-warning d-block mx-auto my-3'>Generate</button>
                    </form>
                : null}
            </div>
        </div>
    )
}