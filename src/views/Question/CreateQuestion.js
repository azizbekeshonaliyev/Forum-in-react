import React, {useState} from "react";
import MultiSelect from "react-multi-select-component";
import RightMenu from "./RightMenu";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

 const CreateQuestion = (props) => {

    const options = [
      { label: "Lravel", value: "laravel" },
      { label: "Vuejs", value: "vuejs" },
      { label: "Reactjs", value: "react"},
      { label: "Python", value: "python" }
    ];

    const [selected, setSelected] = useState([]);
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')


    function submit(e){
      e.preventDefault()

      props.addQuestion({
        title : title,
        desc: desc
      })

      setTitle('')
      setDesc('')
      
    }

    return (
      <div className="row pt-4">
      <div className="col-12 col-sm-12 col-md-9">
        <div className="col-12 col-sm-12 p-0">
          <div className="box-shadow mb-4">
            <div className="col-12 bg-topics py-3">
              <span className="h6 text-topics">
                <span className="fa fa-plus"></span> Ask a public question</span>
            </div>
            <div className="col-12 bg-white py-4 topics">
              <div className="row">
                <dir className="col-10 col-sm-10 col-md-12 col-lg-10 mx-auto">
                  <form onSubmit={submit}>
                    <div className="form-group">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
                      Title
                      </label>
                      <div className="col-12">
                        <input
                          type="input"
                          className="form-control"
                          id="inputEmail3"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputEmail3"
                        className="col-12 col-form-label"
                      >
                        Body
                      </label>
                      <div className="col-12">
                        <CKEditor
                            editor={ ClassicEditor }
                            data={desc}
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setDesc(data)
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-12 col-form-label"
                      >
                        Tags
                      </label>
                      <div className="col-12">
                        <MultiSelect
                          options={options}
                          value={selected}
                          onChange={setSelected}
                          labelledBy={"Select"}
                      />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm"
                        >
                          Post question
                        </button>
                      </div>
                    </div>
                  </form>
                </dir>
              </div>
            </div>
          </div>
        </div>
      </div>
        <RightMenu></RightMenu>
      </div>
    );
}

export default CreateQuestion;