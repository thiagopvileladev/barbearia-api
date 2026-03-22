const carrosselHolder = document.getElementById('carrosselHolder');
const servicosHolder = document.getElementById('servicosHolder');
const button1Hider = document.getElementById('button1Hider');
const button2Hider = document.getElementById('button2Hider');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const hero = document.getElementById('hero');
const header = document.getElementById('header');
const box = document.getElementById('box');
const footer = document.getElementById('footer');
const loginHolder = document.getElementById('loginHolder');
const logo = document.getElementById('logo');
const selecionarProfissional = document.getElementById('selecionarProfissional');
const headerBack = document.getElementById('headerBack');
const menuSlider = document.getElementById('menuSlider');
const menuSliderButton = document.getElementById('menuSliderButton');

const sectionProfissional = document.getElementById('selecionarProfissional');
const sectionHorario = document.getElementById('selecionarHorario');
const botoesProfissionais = document.querySelectorAll('.profissionalButton');
const btnVoltarProfissional = document.getElementById('btnVoltarProfissional');


let view_selecionar_profissional = false
let view_selecionar_horario = false

let corte_selecionado = ''
let lista_cortes = ['barba', 'corte_pente_1', 'corte_degrade', 'corte_e_barba', 'corte_low_fade', 'corte_social', 'depliacao_nariz_ouvido', 'hidratacao', 'pezinho_1', 'realinhamento_capilar', 'sobrancelha']






function hideElements() {
    view_selecionar_profissional = true
    hero.style.display = 'none';
    box.style.display = 'none';
    footer.style.display = 'none';
    logo.style.width = '100%';
    logo.style.margin = '0';
    selecionarProfissional.style.display = 'flex';
    headerBack.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backHeader (){
    if(view_selecionar_horario == false){
        hero.style.display = 'flex';    
        box.style.display = 'flex';
        footer.style.display = 'flex';
        logo.style.width = '100%';
        selecionarProfissional.style.display = 'none';
        headerBack.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else{
        view_selecionar_horario = false
        selecionarProfissional.style.display = 'flex'
        sectionHorario.style.display = 'none'
    }

}

headerBack.addEventListener('click', function () {
    backHeader()
})



for (let i = 1; i <= 11; i++) {
    const btn = document.getElementById(`button1HiderButton${i}`);
    if (btn) {
        btn.addEventListener('click', function() {
            hideElements();
            corte_selecionado = lista_cortes[i - 1];
        });
    }
}




window.irParaOFinal = function(alvoId) {
    const elemento = document.getElementById(alvoId);
    if (elemento) {
        setTimeout(() => {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
};


let button1Bool = false;
button1.addEventListener('click', function () {
    if (button1Bool == false) {
        button1Bool = true;
        button1Hider.style.display = 'flex';
        button1.style.borderRadius = '0px';
        servicosHolder.style.gap = '0';
        document.getElementById('buttonArrow1').style.transform = 'rotate(180deg)';
        irParaOFinal('button1Hider'); 
    } else {
        button1Bool = false;
        button1Hider.style.display = 'none';
        button1.style.borderRadius = '11px';
        servicosHolder.style.gap = '1rem';
        document.getElementById('buttonArrow1').style.transform = 'rotate(0)';
    }
});

let button2Bool = false;
button2.addEventListener('click', function () {
    if (button2Bool == false) {
        button2Bool = true;
        button2Hider.style.display = 'flex';
        button2.style.borderRadius = '0px';
        button2.style.margin = '1rem 0 0 0';
        servicosHolder.style.gap = '0';
        document.getElementById('buttonArrow2').style.transform = 'rotate(180deg)';
        irParaOFinal('button2Hider');
    } else {
        button2Bool = false;
        button2Hider.style.display = 'none';
        button2.style.borderRadius = '11px';
        button2.style.margin = '0';
        servicosHolder.style.gap = '1rem';
        document.getElementById('buttonArrow2').style.transform = 'rotate(0)';
    }
});


window.irParaOFinal = function(alvoId) {
    const elemento = document.getElementById(alvoId);
    if (elemento) {

        setTimeout(() => {

            const elementoPosicao = elemento.getBoundingClientRect().top + window.pageYOffset;
            

            const offset = 4 * parseFloat(getComputedStyle(document.documentElement).fontSize);
            
            window.scrollTo({
                top: elementoPosicao - offset,
                behavior: 'smooth'
            });
        }, 0); 
    }
};








let profissionalSelecionado = '';
let dataSelecionada = '';
let horarioSelecionado = '';

botoesProfissionais.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        view_selecionar_horario = true
        headerBack.style.display = 'none'
        profissionalSelecionado = index === 0 ? 'Rafael' : 'Daniel';
        sectionProfissional.style.display = 'none';
        sectionHorario.style.display = 'flex';
        gerarCalendario(); 
        gerarHorarios();   
    });
});


btnVoltarProfissional.addEventListener('click', () => {
    sectionHorario.style.display = 'none';
    sectionProfissional.style.display = 'flex';
    headerBack.style.display = 'block'
    view_selecionar_horario = false
});

// --- LÓGICA DO CALENDÁRIO ---
let dataRealHoje = new Date();
let mesVisivel = dataRealHoje.getMonth(); 
let anoVisivel = dataRealHoje.getFullYear(); 

const btnMesAnterior = document.getElementById('btnMesAnterior');
const btnMesProximo = document.getElementById('btnMesProximo');

function gerarCalendario() {
    const diasGrid = document.getElementById('diasGrid');
    const mesAnoTexto = document.getElementById('mesAnoTexto');
    diasGrid.innerHTML = ''; // Limpa os dias antigos

    const nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    mesAnoTexto.innerText = `${nomesMeses[mesVisivel]} ${anoVisivel}`;

    const primeiroDia = new Date(anoVisivel, mesVisivel, 1).getDay();
    const diasNoMes = new Date(anoVisivel, mesVisivel + 1, 0).getDate();

    const limiteMaximo = new Date(dataRealHoje.getFullYear(), dataRealHoje.getMonth() + 1, dataRealHoje.getDate());
    limiteMaximo.setHours(23, 59, 59); 

    for (let i = 0; i < primeiroDia; i++) {
        const espaco = document.createElement('div');
        diasGrid.appendChild(espaco);
    }


    for (let i = 1; i <= diasNoMes; i++) {
        const btnDia = document.createElement('button');
        btnDia.classList.add('diaBtn');
        btnDia.innerText = i;
        const dataAtualLoop = new Date(anoVisivel, mesVisivel, i);
        dataAtualLoop.setHours(23, 59, 59); 
        if (dataAtualLoop < dataRealHoje || dataAtualLoop > limiteMaximo) {
            btnDia.disabled = true;
        } else {
            if (i === dataRealHoje.getDate() && 
                mesVisivel === dataRealHoje.getMonth() && 
                anoVisivel === dataRealHoje.getFullYear() && 
                dataSelecionada === '') {
                
                btnDia.classList.add('selecionado'); 
                
                let mesFormatado = (mesVisivel + 1).toString().padStart(2, '0');
                let diaFormatado = i.toString().padStart(2, '0');
                dataSelecionada = `${diaFormatado}/${mesFormatado}/${anoVisivel}`;
            }

            btnDia.addEventListener('click', () => {
                document.querySelectorAll('.diaBtn').forEach(b => b.classList.remove('selecionado'));
                btnDia.classList.add('selecionado');
                let mesFormatado = (mesVisivel + 1).toString().padStart(2, '0');
                let diaFormatado = i.toString().padStart(2, '0');
                dataSelecionada = `${diaFormatado}/${mesFormatado}/${anoVisivel}`;
                gerarHorarios();
                checarConfirmacao();
            });
        }
        diasGrid.appendChild(btnDia);
    }
}


btnMesAnterior.addEventListener('click', () => {
    // Só permite voltar se estivermos no mês seguinte ao atual
    if (anoVisivel > dataRealHoje.getFullYear() || mesVisivel > dataRealHoje.getMonth()) {
        mesVisivel--;
        if (mesVisivel < 0) {
            mesVisivel = 11; 
            anoVisivel--;
        }
        gerarCalendario();
    }
});

btnMesProximo.addEventListener('click', () => {
    // Só permite avançar se estivermos no mês atual
    if (anoVisivel === dataRealHoje.getFullYear() && mesVisivel === dataRealHoje.getMonth()) {
        mesVisivel++;
        if (mesVisivel > 11) {
            mesVisivel = 0;
            anoVisivel++;
        }
        gerarCalendario();
    }
});


// --- LÓGICA DE HORÁRIOS ---

// Esta função agora apenas chama a busca no servidor
function gerarHorarios() {
    if (dataSelecionada !== '') {
        buscarHorariosLivres(dataSelecionada);
    }
}

// Função que busca no C++ (Agora FORA da gerarHorarios)
function buscarHorariosLivres(dataEscolhida) {
    const horariosBox = document.getElementById('horariosBox');
    horariosBox.innerHTML = ''; 

    const agora = new Date();
    
    // Pegamos o dia/mês/ano de "agora" para comparar com a data selecionada
    const diaHoje = agora.getDate().toString().padStart(2, '0');
    const mesHoje = (agora.getMonth() + 1).toString().padStart(2, '0');
    const anoHoje = agora.getFullYear();
    const dataHojeFormatada = `${diaHoje}/${mesHoje}/${anoHoje}`;

    // Configurações do expediente (em minutos para facilitar o cálculo)
    // 8:00 = 480 minutos | 19:30 = 1170 minutos
    const inicioExpediente = 8 * 60; 
    const fimExpediente = 19 * 60 + 30; 
    const intervalo = 10;

    for (let minutosTotais = inicioExpediente; minutosTotais <= fimExpediente; minutosTotais += intervalo) {
        const horas = Math.floor(minutosTotais / 60);
        const minutos = minutosTotais % 60;
        
        const horaFormatada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
        
        // Lógica de esconder horários que já passaram
        if (dataEscolhida === dataHojeFormatada) {
            const minutosAgora = agora.getHours() * 60 + agora.getMinutes();
            if (minutosTotais < minutosAgora) {
                continue; // Pula este horário (não cria o botão)
            }
        }

        // Criação do botão
        let btnHora = document.createElement('button');
        btnHora.classList.add('horarioBtn'); 
        btnHora.innerText = horaFormatada;         

        btnHora.addEventListener('click', () => {
            document.querySelectorAll('.horarioBtn').forEach(b => b.classList.remove('selecionado'));
            btnHora.classList.add('selecionado');
            horarioSelecionado = horaFormatada;
            checarConfirmacao(); 
        });

        horariosBox.appendChild(btnHora);
    }

    // Se após o loop não houver botões (ex: passou das 19:30)
    if (horariosBox.innerHTML === '') {
        horariosBox.innerHTML = '<p style="text-align: center; color: #666;">Não há mais horários disponíveis para hoje.</p>';
    }

    horarioSelecionado = '';
    checarConfirmacao();
}

// --- LÓGICA DE CONFIRMAÇÃO ---

function checarConfirmacao() {
    const btnConfirmar = document.getElementById('btnConfirmar');
    if (dataSelecionada !== '' && horarioSelecionado !== '') {
        btnConfirmar.disabled = false;
    } else {
        btnConfirmar.disabled = true;
    }
}

const btnConfirmar = document.getElementById('btnConfirmar');
btnConfirmar.addEventListener('click', confirmarAgendamento);

function confirmarAgendamento() {
    const dadosAgendamento = {
        nome: "GAY",
        telefone: "61983791418",
        profissional: profissionalSelecionado,
        servico: corte_selecionado,
        data: dataSelecionada,
        horario: horarioSelecionado
    };

    const dadosEmJSON = JSON.stringify(dadosAgendamento);

    console.log("--- DADOS EM FORMATO JSON ---");
    console.log(dadosEmJSON); 
}

