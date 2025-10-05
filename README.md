# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas.

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas.

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Daniel Aguiar Pacheco
- Matricula: 89837
- Proposta de projeto escolhida: 4. Coleções e Itens
- Breve descrição sobre seu projeto: Uma pagina web dedicada as curiosidades e informaçoes sobre o mundo automobilistico.

## Print da Home-Page

![HOME-PAGE](image.png)
![HOME-PAGE(2)](image-1.png)

## Print da página de detalhes do item

![CARROS](image-6.png)
![CAPACETES](image-3.png)
![CIRCUITOS](image-4.png)
![ENGENHARIA](image-5.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
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
```
