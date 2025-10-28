// Importa o arquivo CSS que contém os estilos visuais do aplicativo
import './App.css';

// Define um array chamado 'cartas' contendo duas cartas do Super Trunfo
// Cada carta é um objeto com informações específicas sobre uma cidade
const cartas = [
  {
    estado: 'A',                    // Letra que representa um estado (exemplo: Estado A)
    codigo: 'A01',                  // Código da carta, combinando estado e número
    nomeCidade: 'Santa Catarina',   // Nome da cidade da carta
    populacao: 8187029,             // Número de habitantes na cidade
    area: 95730.69,                 // Área da cidade em km²
    pib: '699.28 bilhões de reais', // Produto Interno Bruto da cidade em texto
    pontosTuristicos: 15,           // Número de pontos turísticos da cidade
  },
  {
    estado: 'B',
    codigo: 'B02',
    nomeCidade: 'Coimbra',
    populacao: 140796,
    area: 319.4,
    pib: '126.28 euros',
    pontosTuristicos: 20,
  },
];

// Função componente React chamada 'Carta', que recebe uma carta como propriedade (prop)
// Ela retorna o JSX que representa visualmente os dados daquela carta
function Carta({ carta }) {
  return (
    // Um elemento div com a classe "carta" para aplicar estilos específicos
    <div className="carta">
      {/* Título da carta mostrando o código */}
      <h2>Carta: {carta.codigo}</h2>

      {/* Parágrafos mostrando as informações da carta. 
          Em cada parágrafo, a parte antes dos dois pontos está em negrito, para dar destaque */}
      <p><strong>Estado:</strong> {carta.estado}</p>
      <p><strong>Nome da Cidade:</strong> {carta.nomeCidade}</p>
      {/* O método toLocaleString() formata o número para mostrar separadores de milhar corretamente */}
      <p><strong>População:</strong> {carta.populacao.toLocaleString()}</p>
      <p><strong>Área:</strong> {carta.area.toLocaleString()} km²</p>
      <p><strong>PIB:</strong> {carta.pib}</p>
      <p><strong>Número de Pontos Turísticos:</strong> {carta.pontosTuristicos}</p>
    </div>
  );
}

// Componente principal do aplicativo React chamado 'App'
// Ele representa a estrutura geral do app, contendo o título e todas as cartas
export default function App() {
  return (
    // Div principal com classe "App" para aplicar estilos gerais
    <div className="App">
      {/* Container para o fundo e o conteúdo principal */}
      <div className="content-bg">
        {/* Título do jogo */}
        <h1>Cartas do Super Trunfo</h1>

        {/* Container que agrupa todas as cartas lado a lado */}
        <div className="cartas-container">
          {/* Faz um loop (map) sobre o array 'cartas' para criar um componente Carta para cada item */}
          {cartas.map((carta) => (
            // Cada Carta recebe uma chave única (aqui, o código) e a carta como propriedade
            <Carta key={carta.codigo} carta={carta} />
          ))}
        </div>
      </div>
    </div>
  );
}
