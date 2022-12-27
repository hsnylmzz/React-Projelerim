import React, { Component } from 'react'

class TodoInput extends Component {
  render() {
    const {item,handleSubmit,handleChange,editItem} = this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input 
            type="text" 
            onChange={handleChange}
            className="form-control text-capitalize" 
            placeholder="Görev Ekle" 
            value={item}/>
          </div>
          <button 
          type="submit" 
          className={
            editItem 
            ? "btn btn-block btn-success mt-3" 
            : "btn btn-block btn-primary mt-3"
          }>
            {editItem ? "Görevi Düzenle" : "Görev Ekle"}
          </button>
        </form>
      </div>
    )
  }
}
export default TodoInput;