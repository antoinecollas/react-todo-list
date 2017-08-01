import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ItemForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            description: '',
        };  
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit(event){
        this.props.handleForm(this.state.title, this.state.description);
        this.state={
            title: '',
            description: '',
        }; 
        event.preventDefault();
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title:</label><input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} required></input>
                <label htmlFor="description">Description:</label><input type="text" id="description" name="description" size="50" value={this.state.description} onChange={this.handleChange} required></input>
                <button type="submit">Add</button>
            </form>
        )
    }
}

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
            /*correspond à l'état du titre et de la description:
            si un champ est true, alors on est en train de le modifier sinon on est simplement en train de l'afficher*/
            title: false, 
            description: false,
        };
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(event){
        this.setState({[event.target.className]: true});
    }
    
    render(){
        return(
            <div className='item'>
                
                {this.state.title ? (
                    <form><input type="text" name="title" value={this.props.title} required></input></form>
                ):(
                    <h2 className="title" onClick={this.handleClick}>{this.props.title}</h2>
                )}
                
                <p className='description'>{this.props.description}</p>
            </div>
        )
    }
}

function ItemList(props){
    const list=props.list;
    return(
        <div className='list'>
            {list.map((item) => (
                <Item  key={item.key} title={item.title} description={item.description}/>
            ))}
        </div>
    )
}
class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
        this.handleForm=this.handleForm.bind(this);
    }
    
    handleForm(itemTitle, itemDescription){
        var temp=this.state.list;
        var itemKey=(temp.length===0)? 0 : temp[0].key+1;
        var item={
            key: itemKey,
            title: itemTitle,
            description: itemDescription
        };
        temp.unshift(item);
        this.setState({list: temp});
    }
    
    render(){
        return(
            <div className='board'>
                <ItemForm handleForm={this.handleForm}/>
                <ItemList list={this.state.list}/>
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
