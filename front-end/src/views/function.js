import axios from "axios";

const apiHost = "http://127.0.0.1:8000";

export const getB2s = (b2s) => {
    return axios
        .get(apiHost + `/b2s/${b2s}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getElimination = (data) => {
    return axios
        .post(apiHost + `/elimination`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getInterpolation = (data) => {
    return axios
        .post(apiHost + `/interpolation`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getDifferentiation = (data) => {
    return axios
        .post(apiHost + `/differentiation`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getIntegration = (data) => {
    return axios
        .post(apiHost + `/integration`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getRootFinding = (data) => {
    return axios
        .post(apiHost + `/root-finding`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};