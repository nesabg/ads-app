const validation = (type, field, errMessage) => {
    if(type === 'email'){
        if(field.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            return {
                err: false,
                message: null
            }
        }else {
            return {
                err: true,
                message: errMessage
            }
        }
    }else if(type === 'password'){
        if(field.length > 5 && field.length < 17) {
            return {
                err: false,
                message: null
            }
        }else {
            return {
                err: true,
                message: errMessage
            }
        }
    }
}

export default validation