import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { thumbnail} from "@cloudinary/url-gen/actions/resize";
import { focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";

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
      thumbnail()
        .width(150)
        .height(150)
        .gravity(focusOn(face()))
    );
  
  return (
    <>
      <AdvancedImage cldImg={myImage} />
    </>
  );
};

export { Img }