const root = document.querySelector('#root');
const names = [];
const form = document.querySelector('.addName');


function rerender(){
    root.innerText = '';
    for (i=0; i< names.length; i++){
        
        createname(names[i].firstname, names[i].lastname);
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    const firstname = form.firstname;
    const lastname = form.lastname;
    
    const newname = {
        firstname: firstname.value,
        lastname: lastname.value
    };

    names.push(newname);

    rerender();

    firstname.value = '';
    lastname.value = '';

});

function createname(firstname, lastname){
    const div = document.createElement('div');
    const pfirstname = document.createElement('p');
    const plastname = document.createElement('p');

    div.classList.add('namecard');

    pfirstname.innerText = firstname;
    plastname.innerText = lastname;
    div.append(pfirstname, plastname);
    root.append(div);

}
