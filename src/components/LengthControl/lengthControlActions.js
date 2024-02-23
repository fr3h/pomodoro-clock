export const UPDATE_SESSION_LENGTH = 'UPDATE_SESSION_LENGTH';
export const UPDATE_BREAK_LENGTH = 'UPDATE_BREAK_LENGTH';

export const updateAttributeLength = (attribute, newLength)  => {

    switch (attribute) {
        case 'session':
            return  {
                type: UPDATE_SESSION_LENGTH,
                sessionLength: newLength,
            }
        case 'break':
        return {
            type: UPDATE_BREAK_LENGTH,
            breakLength: newLength,
        }
        default: 
        return
    }
};