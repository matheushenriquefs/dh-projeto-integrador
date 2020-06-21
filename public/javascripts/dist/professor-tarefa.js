/* Validando form de criar tarefa */

let formCriar = document.getElementById("formCriar");

let feedbackA = document.getElementById("feedbackCriar");

let feedbackJ = document.getElementById("feedbackSucesso"); 


formCriar.addEventListener("submit", evt => {

    evt.preventDefault();

    let titulo = document.getElementById("tituloCriar").value;

    let descricao = document.getElementById("descricaoCriar").value;

    let arquivo = document.getElementById('validatedCustomFile').value;

    let data = document.getElementById('dataCriar').value;

    if (titulo == "" || titulo == null) {
        feedbackA.innerText = "O campo título deve ser preenchido!";
        setTimeout(()=>{
            feedbackA.style.display = 'none';
            //opacity=0
        }, 3000);
        titulo.focus();

    } else if (descricao == "" || descricao == null) {
        feedbackA.innerText = "O campo descrição deve ser preenchido!";
        setTimeout(()=>{
            feedbackA.style.display = 'none';
            //opacity=0
        }, 3000);
        descricao.focus();
    
    } else if (arquivo == "" || arquivo == null) {
        feedbackA.innerText = "O campo arquivo deve ser preenchido!";
        setTimeout(()=>{
            feedbackA.style.display = 'none';
            //opacity=0
        }, 3000);
        arquivo.focus();
    
    } else if (data == "" || data == null) {
        feedbackA.innerText = "O campo data deve ser preenchido!";
        setTimeout(()=>{
            feedbackA.style.display = 'none';
            //opacity=0
        }, 3000);
        data.focus();
    
    }else {
        feedbackJ.innerText = "Tarefa postada com sucesso!";
        setTimeout(()=>{
            feedbackJ.style.display = 'none';
            //opacity=0
        }, 3000);
        formCriar.submit()
    }

});


/* Validando form de editar tarefa */

let formEditar = document.getElementsByClassName('formEditar');

let feed = document.getElementsByClassName('feedbackEditar');

let feedSucesso = document.getElementsByClassName('feedbackEditSucesso');

let tituloA = document.getElementsByClassName('modalTarefaTitulo');

let descricaoA = document.getElementsByClassName('modalTarefaDesc');

let dataA = document.getElementsByClassName('modalTarefaData');

for(let i = 0; i < formEditar.length; i++){

    formEditar[i].addEventListener("submit", ev => {
    
        ev.preventDefault();
    
    
        if (tituloA[i].value == ""){
            feed[i].innerText = "O campo título deve ser preenchido";
            setTimeout(()=>{
                feed[i].style.display = 'none';
                //opacity=0
            }, 3000);
            tituloA[i].focus();
    
        }else if (descricaoA[i].value == ""){
            feed[i].innerText = "O campo descrição deve ser preenchido"
            setTimeout(()=>{
                feed[i].style.display = 'none';
                //opacity=0
            }, 3000);
            descricaoA[i].focus();
    
        }else if (dataA[i].value == ""){
            feed[i].innerText = "O campo data deve ser preenchido"
            setTimeout(()=>{
                feed[i].style.display = 'none';
                //opacity=0
            }, 3000);
            dataA[i].focus();
    
        }else{
            feedSucesso[i].innerText = "O campo descrição deve ser preenchido"
            setTimeout(()=>{
                feedSucesso[i].style.display = 'none';
                //opacity=0
            }, 3000);
            formEditar[i].submit();
        }
    })

}





