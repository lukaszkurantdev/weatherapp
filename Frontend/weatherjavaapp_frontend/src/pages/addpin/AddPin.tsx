import React from 'react';
import './AddPin.css';
//mobx
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
//components
import Input from '../../components/Input';
//navigation
import { withRouter } from 'react-router-dom';
//services
import ImageUploader from 'react-images-upload';

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
 
  state = {
    redirectToReferrer: false,
    picture: '',
  };

  navigateAfterAction = () => {
    this.props.history.push('/stormmap');
  };

  onDrop = (picture: any, pictureDataURLs: any) => {
    console.log(pictureDataURLs)
    this.setState({
      picture: pictureDataURLs[0] ? pictureDataURLs[0].split(';base64,')[1] : '',
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

        this.props.store?.pinsStore.addPin(
          data,
          this.navigateAfterAction,
        );
      }
    }
  };

  render() {
    return (
      <div className="main-default-container">
        <form className="change-password-form" onSubmit={this.changePassword}>
          <h2>Add pin</h2>
          <label>Title</label>
          <Input ref={this.titleInputRef} />
          <label>Description</label>
          <Input ref={this.descriptionInputRef} />
          <label>Image</label>
          <ImageUploader
            withIcon={true}
            singleImage
            buttonText='Choose images'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            withPreview
          />
          
          <input
            className="button"
            type="submit"
            value="Add pin"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(ChangePasswordPage);
