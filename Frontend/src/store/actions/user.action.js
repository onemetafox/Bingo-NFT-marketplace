import axios from "axios";

export const findOne = (address) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/users/findOne",
      {
        address: address,
      }
    );
    return data;
  } catch (error) {
    return [];
  }
};

export const createUser =
  (address, username, customeUrl, selectedImage, bio, twitter, portfoli) =>
    async (dispatch) => {

      const formData = new FormData();
      formData.append('address', address);
      formData.append('username', username);
      formData.append('customeUrl', customeUrl);
      formData.append('selectedImage', selectedImage);
      formData.append('bio', bio);
      formData.append('twitter', twitter);
      formData.append('portfoli', portfoli);

      // const { data } = await axios.post(
      //   "http://localhost:5000/api/v1/users/create",
      //   formData,
      //   {
      //     header: {
      //       'Content-Type': 'text/plain',
      //       'Access-Control-Allow-Origin': 'origin-list'
      //     }
      //   }
      // );
      // return data;
    };

export const updateById =
  (id, username, customeUrl, selectedImage, bio, twitter, portfoli) =>
    async (dispatch) => {
      try {
        var formData = new FormData();
        formData.append('id', id);
        formData.append('username', username);
        formData.append('customeUrl', customeUrl);
        formData.append('selectedImage', selectedImage);
        formData.append('bio', bio);
        formData.append('twitter', twitter);
        formData.append('portfoli', portfoli);


        console.log(formData);
        // const { data } = await axios.post(
        //   "http://localhost:5000/api/v1/users/update",
        //   {
        //     id: id,
        //     username: username,
        //     customURL: customeUrl,
        //     profilePhoto: portfoli,
        //     userBio: bio,
        //     websiteURL: twitter,
        //     userImg: selectedImage,
        //   }
        // );
        // return data;
      } catch (error) {
        return [];
      }
    };
