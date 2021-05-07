window._ = require('lodash');

window.cookie = {
	set: function (name,value,min=null) {
	    var expires = "";
	    if (min != null) {
	        var date = new Date();
	        date.setTime(date.getTime() + (min*60*1000));
	        expires = "; expires=" + date.toUTCString();
		}
		//console.log(name + "=" + value + expires + "; path=/")
	    document.cookie = name + "=" + value + expires + "; path=/";
	},
	get: function (name){
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	},
	erase: function (name) {   
	    document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';  
	}	
}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Authorization'] = cookie.get('Authorization');

//Including sweet alert
import swal from 'sweetalert2'
window.swal = swal;

let als = swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 5000,
    type: 'success',
    icon: 'success'
});
window.als = als;

let ale = swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 5000,
    type: 'error',
    icon: 'error'
});
window.ale = ale;

