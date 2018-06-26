export const GET_REPOS = 'my-awesome-app/repos/LOAD';
export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

export const GET_PATROCINADORES = 'my-awesome-app/repos/INFO';
export const GET_PATROCINADORES_SUCCESS = 'my-awesome-app/repos/INFO_SUCCESS';
export const GET_PATROCINADORES_FAIL = 'my-awesome-app/repos/INFO_FAIL';

export const GET_RESTAURANTES = 'my-awesome-app/repos/USER';
export const GET_RESTAURANTES_SUCCESS = 'my-awesome-app/repos/USER_SUCCESS';
export const GET_RESTAURANTES_FAIL = 'my-awesome-app/repos/USER_FAIL';

const initialState = { repos: [], patrocinadores: [], restaurantes: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return { ...state, loading: false, error: 'Error getting patrocinadores info' };
    case GET_PATROCINADORES:
      return { ...state, loadingInfo: true };
    case GET_PATROCINADORES_SUCCESS:
      return { ...state, loadingInfo: false, patrocinadores: action.payload.data };
    case GET_PATROCINADORES_FAIL:
      console.log(action.payload);
      return {
        ...state,
        loadingInfo: false,
        errorInfo: 'Error getting repo info'
      };
    case GET_RESTAURANTES:
      return { ...state, loadingInfo: true };
    case GET_RESTAURANTES_SUCCESS:
      return { ...state, loadingInfo: false, restaurantes: action.payload.data };
    case GET_RESTAURANTES_FAIL:
      return {
        ...state,
        loadingProfile: false,
        errorInfo: 'Error getting restaurantes info'
      };
    default:
      return state;
  }
}

export function listRepos() {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/douglastaquary/festadopeixeapi/master/data.json`
      }
    }
  };
}

export function getPatrocinadores() {
  return {
    type: GET_PATROCINADORES,
    payload: {
      request: {
        url: `/douglastaquary/festadopeixeapi/master/patrocinadores.json`
      }
    }
  };
}

export function getRestaurantes() {
  return {
    type: GET_RESTAURANTES,
    payload: {
      request: {
        url: `/douglastaquary/festadopeixeapi/master/restaurantes.json`
      }
    }
  };
}

