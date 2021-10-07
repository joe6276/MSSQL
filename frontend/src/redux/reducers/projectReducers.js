import { PROJECT, PROJECTS_GET } from "../types";

const initialState = {
    projects: [],
    project: {},
    loading: false,
    error: "",
    message: ""
}

const projectReducer  = (state = initialState, action) => {
    switch (action.type) {

        case PROJECT.REQUEST:
            return { ...state, loading: true, error: "", message: "" }
        case PROJECT.SUCCESS:
            return { ...state, loading: false, error: "", message: action.message }
        case PROJECT.FAIL :
            return { ...state, loading: false, error: action.error, message: "" }
        case PROJECTS_GET.REQUEST:
            return { ...state, projectsLoading: true, projectsError: "", projects:[] }
        case PROJECTS_GET.SUCCESS:
            return { ...state, projectsLoading: false,projects: action.projects }
        case PROJECTS_GET.FAIL :
            return { ...state, projectsLoading: false, projectsError: action.error, projects: [] }

        default:
            return { ...state };


    }
}

export default projectReducer