import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
//import required actions
import { thumbnail, fill} from "@cloudinary/url-gen/actions/resize";
//import required qualifiers
import { focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";
//plugins
import {lazyload, placeholder} from '@cloudinary/react';

  const Img = ({ uploadedImg }) => {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'freshiadev'
      }
    });
  
    // cld.image returns a CloudinaryImage with the configuration set.
    const myImage = cld.image(uploadedImg);
  
    myImage.resize(
      //you can replace your thumbnail with fill()-to remove focus on face only
      thumbnail()
        .width(150)
        .height(150)
        .gravity(focusOn(face()))
    );
  
  return (
    <>
      <AdvancedImage cldImg={myImage}  plugins={[lazyload(), placeholder({mode: 'predominant-color'})]}/>
    </>
  );
};

export { Img }
