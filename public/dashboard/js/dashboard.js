// Vet o r    
const farmListId = document.getElementById("farm-list")
const farm = [2, 1, 3]
const farmStatus = ['critico', 'moderado', 'controlado']
const area = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

farmListId.addEventListener('load', listFarm())
function listFarm() {
    // Criando a lista das fazendas clicaveis
    const farmPosition = farm.length - 1
    for (let i = 0; i <= farmPosition; i++) {
        // let status = parseInt(Math.random() * 3);
        let status = i % 3;
        let farmList = document.getElementById("farm-list")
        farmList.insertAdjacentHTML("beforeEnd", `
            <article id='${farm[i]}' class="farm ${farmStatus[status]}">
                <div class="farm-position">
                    <h1>Fazenda ${farm[i]}</h1>
                    <img src="../assets/svg/down-arrow.svg">
                </div>
            </article>
        `)
    }
    setTimeout(() => {
        document.getElementById(farm[0]).click(chartGen)
    }, 0);
}

farmListId.addEventListener('click', chartGen)
function chartGen(farmId) {
    const farmContentId = document.getElementById("farm-content")
    const farmTableId = document.getElementById("farm-table")

    farmContentId.innerHTML = `
    <section id="dashboard${farmId.target.id}">
        <h2>Fazenda ${farmId.target.id}</h2>
        <section class="wrapper">
            <article class="fill">
                <div style="position: relative; height:100%; width:100%">
                    <canvas id="chart-1" width="1200" height="281"></canvas>
                </div>
            </article>
        </section>

        <section class="wrapper">
            <article class="box">
                <div style="position: relative; height:100%; width:100%">
                    <canvas id="chart-2" width="100%" height="40"></canvas>
                </div>
            </article>

            <article class="box">
                <div style="position: relative; height:100%; width:100%">
                    <canvas id="chart-3" width="100%" height="40"></canvas>
                </div>
            </article>
        </section>
    </section>
    `

    // Redefinindo tabelas
    farmTableId.innerHTML = ` 
        <!-- Tabela das ??reas mais inst??veis -->
        <article class="box">
            <h2 class="critico">
                Locais menos est??veis
            </h2>
            <table>
                <tbody id="table1">
                    <tr class="critico">
                        <th>??rea</th>
                        <th>Temperatura</th>
                        <th>Umidade</th>
                        <th>Status</th>
                    </tr>
                </tbody>
            </table>
        </article>
        
        <!-- Tabela das ??reas mais est??veis -->
        <article class="box">
            <h2 class="controlado">
                Locais mais est??veis
            </h2>
            <table>
                <tbody id="table2">
                    <tr class="controlado">
                        <th>??rea</th>
                        <th>Temperatura</th>
                        <th>Umidade</th>
                        <th>Status</th>
                    </tr>
                </tbody>
            </table>
        </article>
    </section> 
    `
    // chart1()
    obterDadosGrafico(1);
    chart2()
    chart3()
    tables()
}

function tables() {
    // Criando a tabela dos locais mais est??veis
    const farmTable1 = document.getElementById("table1")
    const farmTable2 = document.getElementById("table2")
    for (let i = 0; i < area.length; i++) {
        let status = parseInt(Math.random() * 3); // Gerando o status aleat??riamente
        // let status = i % 3;
        farmTable1.insertAdjacentHTML("beforeEnd", `
                <tr class="${farmStatus[status]}">
                    <td>??rea ${area[i]}</td>
                    <td>13</td>
                    <td>13</td>
                    <td style="text-transform: capitalize;" >${farmStatus[status]}</td>
                </tr>
        `)
    }

    for (let i = 0; i < area.length; i++) {
        let status = parseInt(Math.random() * 3); // Gerando o status aleat??riamente
        // let status = i % 3;
        farmTable2.insertAdjacentHTML("beforeEnd", `
                <tr class="${farmStatus[status]}">
                    <td>??rea ${area[i]}</td>
                    <td>13</td>
                    <td>13</td>
                    <td style="text-transform: capitalize;" >${farmStatus[status]}</td>
                </tr>
        `)
    }
}
// Gr??ficos
// Primeiro gr??fico - Linha : Decidir o que ter??
function chart1() {
    const chart = document.getElementById('chart-1').getContext('2d')

    // Dados para testes
    let umidade = []
    let label = []
    const limit = parseInt(Math.random() * 4) + 3

    for (let i = 1; i <= limit; i++) {
        umidade.push(parseInt(Math.random() * 99) + 1)
        label.push('??rea ' + i)
    }

    const chartConfig = new Chart(chart, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: 'Umidade',
                data: umidade,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
        }
    });
}

// Segundo gr??fico - Barra : Decidir o que ter??
function chart2() {
    const chart = document.getElementById('chart-2').getContext('2d');
    // Dados para testes
    let umidade = []
    let label = []
    const limit = parseInt(Math.random() * 3) + 2

    for (let i = 1; i <= limit; i++) {
        umidade.push(parseInt(Math.random() * 99) + 1)
        label.push('??rea ' + i)
    }

    const chartConfig = new Chart(chart, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'Umidade',
                data: umidade,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
        }
    });
}

// Terceiro gr??fico - Misto : Decidir o que ter??
function chart3() {
    const chart = document.getElementById('chart-3').getContext('2d');
    // Dados para testes
    let umidade = []
    let temperatura = []
    let label = []
    const limit = parseInt(Math.random() * 3) + 2

    for (let i = 1; i <= limit; i++) {
        umidade.push(parseInt(Math.random() * 99) + 1)
        temperatura.push(parseInt(Math.random() * 44) + 1)
        label.push('??rea ' + i)
    }

    const chartConfig = new Chart(chart, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Temperatura',
                data: temperatura,
                // this dataset is drawn below
                order: 2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Umidade',
                data: umidade,
                type: 'line',
                // this dataset is drawn on top
                order: 1,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    '#74025c'
                ],
                borderWidth: 2
            }],
            labels: label
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Atualizando gr??ficos em tempo real
let proximaAtualizacao;


// O gr??fico ?? constru??do com tr??s fun????es:
// 1. obterDadosGrafico -> Traz dados do Banco de Dados para montar o gr??fico da primeira vez
// 2. plotarGrafico -> Monta o gr??fico com os dados trazidos e exibe em tela
// 3. atualizarGrafico -> Atualiza o gr??fico, trazendo novamente dados do Banco

// Esta fun????o *obterDadosGrafico* busca os ??ltimos dados inseridos em tabela de medidas.
// para, quando carregar o gr??fico da primeira vez, j?? trazer com v??rios dados.
// A fun????o *obterDadosGrafico* tamb??m invoca a fun????o *plotarGrafico*

//     Se quiser alterar a busca, ajuste as regras de neg??cio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function obterDadosGrafico(fkSensor) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimas/${fkSensor}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            console.log("Obtendo dados: Resposta Ok")
            
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                console.log("Indo plotar gr??fico")
                plotarGrafico(resposta, fkSensor);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obten????o dos dados p/ gr??fico: ${error.message}`);
        });
}

// Esta fun????o *plotarGrafico* usa os dados capturados na fun????o anterior para criar o gr??fico
// Configura o gr??fico (cores, tipo, etc), materializa-o na p??gina e, 
// A fun????o *plotarGrafico* tamb??m invoca a fun????o *atualizarGrafico*
function plotarGrafico(resposta, fkSensor) {
    console.log('iniciando plotagem do gr??fico...');

    var dados = {
        labels: [],
        datasets: [
            {
                yAxisID: 'y-umidade',
                label: 'Umidade',
                borderColor: '#32B9CD',
                backgroundColor: '#32b9cd8f',
                fill: true,
                data: []
            },
            {
                yAxisID: 'y-temperatura',
                label: 'Temperatura',
                borderColor: '#FFF',
                backgroundColor: '#32b9cd8f',
                fill: true,
                data: []
            }
        ]
    };

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.labels.push(registro.horario);
        dados.datasets[0].data.push(registro.umidade);
        dados.datasets[1].data.push(registro.temperatura);
    }

    console.log(JSON.stringify(dados));


    const chart = document.getElementById('chart-1').getContext('2d')
    window.grafico_linha = Chart.Line(chart, {
        data: dados,
        options: {
            responsive: true,
            animation: { duration: 500 },
            hoverMode: 'index',
            stacked: false,
            title: {
                display: false,
                text: 'Dados capturados'
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                    ticks: {
                        beginAtZero: true,
                        max: 50,
                        min: 0
                    }
                }, {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    id: 'y-umidade',
                    ticks: {
                        beginAtZero: true,
                        max: 50,
                        min: 0
                    },

                    gridLines: {
                        drawOnChartArea: false,
                    },
                }],
            }
        }
    });
    console.log("Plotando gr??fico =)")

    setTimeout(() => atualizarGrafico(fkSensor, dados), 2000);
}


// Esta fun????o *atualizarGrafico* atualiza o gr??fico que foi renderizado na p??gina,
// buscando a ??ltima medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de neg??cio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function atualizarGrafico(fkSensor, dados) {
    // console.log("Indo atualizar gr??fico")

    fetch(`/medidas/tempo-real/${fkSensor}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {

                console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                console.log(`Dados atuais do gr??fico: ${dados}`);

                // tirando e colocando valores no gr??fico
                dados.labels.shift(); // apagar o primeiro
                dados.labels.push(novoRegistro[0].horario); // incluir um novo momento

                dados.datasets[0].data.shift();  // apagar o primeiro de umidade
                dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

                dados.datasets[1].data.shift();  // apagar o primeiro de temperatura
                dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

                window.grafico_linha.update();

                // Altere aqui o valor em ms se quiser que o gr??fico atualize mais r??pido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGrafico(fkSensor, dados), 5000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gr??fico atualize mais r??pido ou mais devagar
            proximaAtualizacao = setTimeout(() => atualizarGrafico(fkSensor, dados), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obten????o dos dados p/ gr??fico: ${error.message}`);
        });
}