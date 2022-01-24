import axios from 'axios';
import { GET_NFT_BID_SUCCESS, GET_NFT_BID_FAIL, UPLOAD_CREATE_BID_FAIL, UPLOAD_CREATE_BID_SUCCESS } from "./types";

export const newCollection = (name, image, description, author) => async (dispatch) => {

    console.log(name, image);
    const { data } = await axios.post("http://localhost:5000/api/v1/collect/newCollect", {
        name: name,
        image: image,
        description: description,
        author: author
    }, {
        header: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': 'origin-list'
        }
    });

    try {
        if (data.message) {
            dispatch({ type: UPLOAD_CREATE_BID_FAIL, payload: data.message })
        }
        else {
            dispatch({ type: UPLOAD_CREATE_BID_SUCCESS, payload: data })
        }

    } catch (error) {
        dispatch({ type: UPLOAD_CREATE_BID_FAIL, payload: error })
    }
}

export const getCollections = async () => {
    const { data } = await axios.post("http://localhost:5000/api/v1/collect/", {
    });
    return data;
}


export const getCollectionOne = async (name) => {
    const { data } = await axios.post("http://localhost:5000/api/v1/collect/findOne", {
        name: name
    });
    return data;
}