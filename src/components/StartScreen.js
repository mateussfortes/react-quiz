function StartScreen({ numQuestions, dispatch }) {
    return (
        <div className="start">
            <h2>Bem vindo ao React Quiz!</h2>
            <h3>{numQuestions} questões para finalizar seu teste</h3>
            <button 
                className="btn btn-ui"
                onClick={() => dispatch({type:"start"})}
            >Comece agora!</button>
        </div>
    );
}

export default StartScreen;