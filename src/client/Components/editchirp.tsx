import * as React from 'react'
import {  RouteComponentProps } from 'react-router-dom'

class EditButton extends React.Component<IEditProps, IEditState>{
    constructor(props: IEditProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            text: ''
        }
    }

    async componentDidMount() {
        let id= this.state.id
        let r = await fetch(`/api/chirps/${id}`)
        let chirp = await r.json();
        this.setState({ name: chirp.name, text: chirp.text })
    }

    handleEditChirp=(e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        let id= this.state.id
        fetch(`/api/chirps/${id}`, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers:{"content-type": 'application/json'}
        }).then(() => this.props.history.push('/'))
    } 




    render() {
        return (
            <div className="container border border-dark mt-5 shadow p-3 mb-5 bg-white rounded">
                <form>
                    <div className="form-group">
                        <label htmlFor="name" className="input-label">Username:</label>
                        <input type="text"  className="form-control" id="name" value={this.state.name}onChange={(e: React.ChangeEvent<HTMLInputElement>)=>this.setState({name: e.target.value})} ></input>
                        <label htmlFor="message" className="input-label">Message:</label>
                        <input type="text" className="form-control" id="message" value={this.state.text} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>this.setState({text: e.target.value})}></input>
                        <button className="btn btn-success" type="submit" onClick={this.handleEditChirp}>Save Edit</button>
                    </div>
                </form>
            </div>
        )


    }
}

export default EditButton

interface IEditProps extends RouteComponentProps <{id:string}>{}
interface IEditState {
    id: string,
    name: string,
    text: string
}