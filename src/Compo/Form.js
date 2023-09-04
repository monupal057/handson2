import React, { Component } from 'react'

class From extends Component {

    state={
        name: "",
        department: "",
        rating: "",
        data: []
    }

    handelChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handelClick=()=>{
        const obj={
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating
        }
        this.state.data.push(obj);
        this.setState({
            data: this.state.data, name:"",department:"",rating:"",
        })
    }

  render() {
    return (
      <div className='MainBox'>
        <h1>Employee FeedBack</h1>
        <label > Name:
        <input type="text" name="name" onChange={this.handelChange} placeholder='Enter your Name' value={this.state.name} />
        </label>

        <label> Department:
        <input type="text" name="department" onChange={this.handelChange} placeholder='Enter Your Department' value={this.state.department} />
        </label>
        
        <label>Rating: 
        <input type="number" name="rating" onChange={this.handelChange} placeholder='Enter your Rating' value= {this.state.rating} />
        </label>
        
        <button className='btn' onClick={this.handelClick}>Submit</button>
        <div className='myFeedBack'>    
            {this.state.data.map((item)=>{
                return(
                    <h4>Name: {item.name} | Department: {item.department} | Rating: {item.rating}</h4>
                    )
                })}
        </div>
      </div>
    )
  }
}

export default From;