import React from 'react';
import { Link } from "react-router-dom";


const CreateQuestionButton = () => {
    return (
        <Link to="/question/create" className="btn btn-primary btn-sm">
            <span className="fa fa-plus"></span> Savol berish
        </Link>
    )
}


export default CreateQuestionButton;