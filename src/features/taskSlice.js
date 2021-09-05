import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: 'tasks',
    initialState:{
        tasks:[
            {
                id: 1,
                title: "Estudar Programacao",
                state: false,
              },
              {
                id: 2,
                title: "Ler Documentacao React js",
                state: true,
              },
              {
                id: 3,
                title: "Ler Adonis js",
                state: true,
              },
              {
                id: 4,
                title: "Learn JSON Composer",
                state: false,
              },
              {
                id: 5,
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
                state: true,
              },
              {
                id: 6,
                title: "Create React cli",
                state: false,
              },
        ],
    },
    reducers:{
        setTasks:(state,action)=>{
            let id = Object.keys(state.tasks).length;
            console.log(action.payload.title);
            state.tasks = [{
                id: id+1,
                title: action.payload.title,
                state: false,
              },
              ...state.tasks
              ];
        },
    }
})
export const {setTasks} = taskSlice.actions
export const selectTasks = state => state.tasks
export default taskSlice.reducer
