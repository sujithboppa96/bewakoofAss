

import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { connect } from 'react-redux'
import './App.scss'
import { Header }  from './Header'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import { Students } from './components/Students/Students'
import { UserDetails } from './components/UserDetails/UserDetails'

import { store } from './index'
import axios from 'axios'




export class App extends React.Component {


  constructor() {
    super()
    this.state = {
      notes: [],
      noteContent: '',
      noteId: -1
    }
  }






addNotes = () => {
  store.dispatch({type: 'ADD', payLoad: 'asdfhyh'})
}
DeleteNotes = () => {
  store.dispatch({type: 'DELETE'})
}

EditNote = () => {
  this.setState({noteContent: ''})
}

handleNoteClick = (x, id) => {
  this.setState({noteContent: x.value})
  this.setState({noteId: id})
}
changeNoteContent = (e) => {
  this.setState({noteContent: e.target.value})
  store.dispatch({type: 'EDIT', index:this.state.noteId})
}



    render() {
      console.log(this.props)

      const data = this.props.notes.map((x,index) => {
        return <div key={x.id} onClick={() =>this.handleNoteClick(x, index)}>{x.value}</div>
      })
      return(
        <div>
        <div className="topContainer">
          <div onClick={this.addNotes}>ADD</div>
          <div onClick={this.addNotes}>DELETE</div>
          <div onClick={this.addNotes}>EDIT</div>
          <div onClick={this.addNotes}>SEARCH</div>

        </div>
        <div className="belowContainer">
          <div>
          {data}
          </div>
          <div>
          <div onChange={(e) =>this.changeNoteContent(e)}>
          {this.state.noteContent}
          </div>
          </div>
        </div>
      </div>
      )

    }
}


const mapStateToProps = (state) => ({
  notes: state.notes
})


export default connect(mapStateToProps)(App)
