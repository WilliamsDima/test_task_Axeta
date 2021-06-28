import userLang from '../../assets/images/Profile/russia.png';
const ADD_SKILL = 'ADD_SKILL';
const DELETE_SKILL = 'DELETE_SKILL';
const CHANGE_AGE = 'CHANGE_AGE';

let initialState = {
    userProfile: [
        {
            id: 2346346,
            name: 'Dmitry Williams',
            location: 'Yaroslavl Russia', 
            language: {
                img: userLang,
                text:'Russia'
            },
            expretionce: [
                {skill:  'JavaScript', exp: 2},
                {skill:  'C#', exp: 0.6},
                {skill:  'Java', exp: 0.6},
                {skill:  'React', exp: 1},
                {skill:  'Redux', exp: 1}
            ]
        }
    ]




};


const mainReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case ADD_SKILL: {

            let copyState = {...state}

            copyState.userProfile[0].expretionce.push(
                {skill: action.newSkill, exp: 0}
            )
        
            
            return copyState;
        }

        case DELETE_SKILL: {

            let copyState = {...state}

            copyState.userProfile[0].expretionce.splice(action.idSkill, 1);
    
            return copyState;
        }

        case CHANGE_AGE: {

            let copyState = {...state}

            copyState.userProfile[0].expretionce[action.idExp].exp = action.numberAge;
            
            return copyState;
        }

   
        default:
            return state
    }
}


export let addNewSkill = (text) => {

    return {
        type: ADD_SKILL,
        newSkill: text
    }
}


export let deleteSkill = (id) => {

    return {
        type: DELETE_SKILL,
        idSkill: id
    }
}

export let newAgeNumber = (n, i) => {

    return {
        type: CHANGE_AGE,
        idExp: i,
        numberAge: n
    }
}


export default mainReducer;