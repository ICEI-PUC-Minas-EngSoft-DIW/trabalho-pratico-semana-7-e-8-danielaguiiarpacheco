const itensF1 = [
  {
    id: 1,
    titulo: "Carros Icônicos",
    imagem: "./img/ferrari-car1.jpg",
    descricaoCurta: "Modelos lendários que marcaram época na Fórmula 1.",
    descricaoLonga:
      "A Fórmula 1 é repleta de carros que se tornaram lendas. Desde o McLaren MP4/4 de Ayrton Senna até o Ferrari F2004 de Michael Schumacher, cada um desses veículos representa uma era de domínio tecnológico e pilotagem excepcional. Estes carros não apenas venceram corridas, mas também capturaram a imaginação dos fãs ao redor do mundo.",
    especificacoes: {
      motor: "V6 Turbo Híbrido",
      potencia: "Mais de 1000 cv",
      peso: "Aproximadamente 750 kg",
      ano: "Décadas de 80 aos anos 2000",
    },
    curiosidades: [
      "O Williams FW14B foi pioneiro em controles eletrônicos",
      "O Ferrari F2004 venceu 15 das 18 corridas em 2004",
      "O McLaren MP4/4 tem a maior taxa de vitórias da história (93.8%)",
    ],
  },
  {
    id: 2,
    titulo: "Capacetes Históricos",
    imagem: "./img/helmet1.jpg",
    descricaoCurta: "Designs que contam histórias de velocidade e coragem.",
    descricaoLonga:
      "Os capacetes na F1 são mais do que equipamentos de segurança - são telas que contam histórias de identidade, patrocínio e personalidade. Desde os designs simples dos anos 50 até as complexas obras de arte modernas, cada capacete tem uma história única para contar sobre seu piloto e sua jornada no esporte.",
    especificacoes: {
      material: "Fibra de carbono e kevlar",
      peso: "Aproximadamente 1.2 kg",
      certificacao: "Padrão FIA 8860-2018",
      visor: "Policarbonato anti-embaçante",
    },
    curiosidades: [
      "Ayrton Senna mudou seu design apenas uma vez na carreira",
      "Lewis Hamilton introduziu designs temporários para causas sociais",
      "Os capacetes modernos custam até R$ 50.000",
    ],
  },
  {
    id: 3,
    titulo: "Pistas Memoráveis",
    imagem: "./img/psita-monaco1.jpg",
    descricaoCurta: "Os circuitos mais desafiadores e icônicos do mundo.",
    descricaoLonga:
      "Monaco, Silverstone, Monza, Spa-Francorchamps - nomes que ecoam através da história da F1. Estes circuitos testam os limites dos carros e a coragem dos pilotos. Cada curva tem sua própria lenda, cada reta sua própria história de glória e tragédia.",
    especificacoes: {
      extensao: "Varia de 3.3km a 7km",
      curvas: "De 12 a 20 curvas por circuito",
      recorde: "Lewis Hamilton em Silverstone (1:27.097)",
      altitude: "Spa tem variação de 102 metros",
    },
    curiosidades: [
      "Monaco é o circuito mais lento do calendário",
      "Spa-Francorchamps tem a curva Eau Rouge/Raidillon icônica",
      "Interlagos é o único circuito no hemisfério sul",
    ],
  },
  {
    id: 4,
    titulo: "Peças de Engenharia",
    imagem: "./img/peças-car-f1.jpg",
    descricaoCurta: "Componentes que definem performance e inovação.",
    descricaoLonga:
      "A engenharia da F1 está na vanguarda da tecnologia automotiva. Cada componente, do motor à aerodinâmica, representa anos de pesquisa e desenvolvimento. Estas peças não apenas impulsionam os carros a velocidades impressionantes, mas também frequentemente encontram seu caminho para carros de rua, demonstrando o legado tecnológico da F1.",
    especificacoes: {
      material: "Fibra de carbono e titânio",
      tolerancia: "Precisão de até 0.001mm",
      desenvolvimento: "Milhares de horas de CFD e túnel de vento",
      custo: "Milhões em P&D por componente",
    },
    curiosidades: [
      "As asas dianteiras têm mais de 100 componentes individuais",
      "Os freios carbon-carbon funcionam melhor a 600°C",
      "O câmbio pode trocar marchas em 0.05 segundos",
    ],
  },
];

function carregarCards() {
  const container = document.getElementById("cards-container");

  if (container) {
    container.innerHTML = itensF1
      .map(
        (item) => `
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card bg-dark border border-secondary h-100 text-center card-item">
                    <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}" style="height: 250px; object-fit: cover" />
                    <div class="card-body">
                        <h3 class="card-title text-danger">${item.titulo}</h3>
                        <p class="card-text text-secondary">${item.descricaoCurta}</p>
                        <a href="detalhes.html?id=${item.id}" class="btn btn-outline-danger">Ver Detalhes</a>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }
}

function carregarDetalhes() {
  const container = document.getElementById("detalhes-container");

  if (container) {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get("id"));

    const item = itensF1.find((i) => i.id === itemId);

    if (item) {
      container.innerHTML = `
                <div class="row">
                    <div class="col-12 col-md-6 mb-4">
                        <img src="${
                          item.imagem
                        }" class="img-fluid rounded" alt="${
        item.titulo
      }" style="max-height: 400px; object-fit: cover" />
                    </div>
                    <div class="col-12 col-md-6">
                        <h1 class="text-danger mb-3">${item.titulo}</h1>
                        <p class="lead">${item.descricaoLonga}</p>
                        
                        <h4 class="text-warning mt-4">Especificações Técnicas</h4>
                        <ul class="list-unstyled">
                            ${Object.entries(item.especificacoes)
                              .map(
                                ([chave, valor]) => `
                                <li class="mb-2"><strong class="text-info">${
                                  chave.charAt(0).toUpperCase() + chave.slice(1)
                                }:</strong> <span class="text-light">${valor}</span></li>
                            `
                              )
                              .join("")}
                        </ul>
                        
                        <h4 class="text-warning mt-4">Curiosidades</h4>
                        <ul class="list-unstyled">
                            ${item.curiosidades
                              .map(
                                (curiosidade) => `
                                <li class="mb-2"><span class="text-light">• ${curiosidade}</span></li>
                            `
                              )
                              .join("")}
                        </ul>
                    </div>
                </div>
            `;
    } else {
      container.innerHTML = `
                <div class="text-center">
                    <h2 class="text-danger">Item não encontrado</h2>
                    <p>O item solicitado não existe em nossa base de dados.</p>
                </div>
            `;
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("cards-container")) {
    carregarCards();
  }

  if (document.getElementById("detalhes-container")) {
    carregarDetalhes();
  }
});
