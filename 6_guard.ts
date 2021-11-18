function strip (x : string | number) {
    if (typeof x === 'number'){
        return x.toFixed(2)
    }
    return x.trim()
}


class Responce {
    header : 'response header'
    result : 'result'
}

class ResponceError {
    header : 'response header'
    eerror : 'eerror'
}

function handle(res : Responce |ResponceError ) {
    if ( res instanceof Responce){
        return {
            info : res.header + res.result
        }
    }
    return {
        info : res.header + res.eerror
    }
}


//===============
type AlertType = 'success' | 'danger'

function setAlertType(type : AlertType) {
//...
}

setAlertType('success')
setAlertType('danger')
setAlertType('fail')