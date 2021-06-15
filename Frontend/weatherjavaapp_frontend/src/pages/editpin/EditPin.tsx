import React from 'react';
import './EditPin.css';
//mobx
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
//components
import Input from '../../components/Input';
//navigation
import { withRouter } from 'react-router-dom';
//services
import ImageUploader from 'react-images-upload';
import { toJS } from 'mobx';

interface IProps {
  store?: RootStore;
  navigation?: any;
  history: any;
  location: any;
  match: any;
}



@inject('store')
@observer
class ChangePasswordPage extends React.Component<IProps> {
  descriptionInputRef = React.createRef<Input>();
  titleInputRef = React.createRef<Input>();
  id: number | null = null;

  state = {
    redirectToReferrer: false,
    picture: '',
    pictureNotEdited: true,
  };

  componentDidMount = () => {
    const id = parseInt(this.props.match.params.id, 10);
    this.id = id;
    const pins = toJS(this.props.store?.pinsStore.pins);
    const pin = pins?.find(el => el.pin.id === id)
    if(pin) {
        this.descriptionInputRef.current?.setValue(pin.pin.description)
        this.titleInputRef.current?.setValue(pin.pin.title)
        this.setState({picture: pin.pin.image || ''})
    }
  }

  navigateAfterAction = () => {
    this.props.history.push('/stormmap');
  };

  onDrop = (picture: any, pictureDataURLs: any) => {
    console.log(pictureDataURLs)
    this.setState({
      picture: pictureDataURLs[0] ? pictureDataURLs[0].split(';base64,')[1] : '',
      pictureNotEdited: false,
    });
  }

  changePassword = (event: any) => {
    event.preventDefault();
    const titleInput = this.titleInputRef.current;
    const descriptionInput = this.descriptionInputRef.current;
  
    if (titleInput && descriptionInput) {
      const titleValidation = titleInput.validate();
      const descriptionValidation = descriptionInput.validate();

      if (titleValidation && descriptionValidation) {
        const title = titleInput.getValue();
        const description = descriptionInput.getValue();

        const data = {
          title,
          description,
          image: undefined
        };

        if(this.state.picture) {
          //@ts-ignore
          data.image = this.state.picture;
        }

        this.props.store?.pinsStore.editPin(
          {...data, id: this.id},
          this.navigateAfterAction,
        );
      }
    }
  };

  render() {
    return (
      <div className="main-default-container">
        <form className="change-password-form" onSubmit={this.changePassword}>
          <h2>Edit pin</h2>
          <label>Title</label>
          <Input ref={this.titleInputRef} />
          <label>Description</label>
          <Input ref={this.descriptionInputRef} />
          <label>Image</label>
         
          <ImageUploader
            defaultImage={this.state.picture}
            withIcon={true}
            singleImage
            buttonText='Choose images'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            withPreview
          />
           {this.state.pictureNotEdited && this.state.picture && (
             <div>
                <img className="edit-image-review" src={'data:image/png;name=15_2.png;base64,'+this.state.picture} alt=""/>
            </div>
           )}
         
          <input
            className="button"
            type="submit"
            value="Edit pin"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(ChangePasswordPage);
