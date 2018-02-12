import React from 'react';
import SaveIcon from '../icons/saveIcon';
import EditIcon from '../icons/editIcon';
import Xicon from '../icons/Xicon';
import {getArticle, updateArticle, verifySlug} from '../util/articleApiUtil';
// import '../../styles/input.css';

export default class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value,
      slug: this.props.slug,
      parentValue: this.props.value,
      parentSlug: this.props.slug,
      className: this.props.className,
      editing: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState(
      {
        value: nextProps.value,
        slug: nextProps.slug,
        parentValue: nextProps.value,
        parentSlug: nextProps.slug
      }
    );
  }


  setSlug(title){
    if (title.length >= 1) {
      var slug = this.slugify(title);
      if (slug !== this.state.parentSlug) {
        verifySlug(slug).then(response => this.setState({value: title , slug: response.slug}));
      } else {
        this.setState({value: title, slug: slug});
      }
    } else {
      this.setState({value: title, slug: ""});
    }
  }

  slugify(title){
    return(
      title.toLowerCase()
            .replace(/[;/?:@&=+$,.!""'']/g, "")
            .replace(/\s/g, "-")
    );
  }

  discard(){
    this.setState({value: this.state.parentValue, slug: this.state.parentSlug, editing: false});

  }

  onChange(e){
    return e => {
      this.setSlug(e.target.value);
    };
  }

  handleKeyPress(e){
    if (e && e.key === "Enter"){
      this.setState({editing: false}, this.props.update(this.state.value, this.state.slug));
    }
  }

  autoFocus(){
    this.nameInput.selectionStart = this.nameInput.selectionEnd = this.nameInput.value.length;
    this.nameInput.focus();
  }

  render(){
    if (this.state.editing === true){
      return (
        <div className={`${this.state.className}-body input-body`}>
          <input
            className={this.state.className}
            placeholder=''
            type="text"
            value={this.state.value}
            onChange={this.onChange()}
            onKeyPress={(e) => this.handleKeyPress(e)}
            ref={(input) => { this.nameInput = input; }}
          />
          <div> slug: {this.state.slug} </div>
          <button onClick={() => this.setState({editing: false}, this.props.update(this.state.value, this.state.slug))}>
            <SaveIcon/>
          </button>
          <button onClick={() => this.discard()}>
            <Xicon/>
          </button>
        </div>
      );
    } else {
      return (
        <div className={`${this.state.className}-body input-body`}>
          <div
            className={`${this.state.className} input-display`}
            placeholder=''
            type="text"
            value={this.state.value}
            onChange={this.onChange()}
            onClick={() => this.setState({editing: true}, () => this.autoFocus())}
          >{this.state.value}
          </div>
          <button onClick={() => this.setState({editing: true}, () => this.autoFocus())}>
            <EditIcon/>
          </button>
        </div>
      );
    }
  }
}