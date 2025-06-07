let resposta = 'Olá, eu sou AgrIAn, IA do Agrinho feito pelo Jhuan Pablo Santos Cisz, eu respondo todas suas perguntas. Selecione uma pergunta abaixo para saber mais sobre o Concurso Agrinho de Programação 2025!';
let estadoRobo = 'normal';
let framePiscar = 0;
let perguntaAtual = '';
let mostrandoPerguntas = true;
let inputFiltro;
let botoes = [];

const perguntas = [
  "📅 DATAS E INSCRIÇÕES",
  "📝 QUEM PODE PARTICIPAR?",
  "🏆 CATEGORIAS E PRÊMIOS",
  "📌 ETAPAS DE AVALIAÇÃO",
  "🌐 ONDE ENCONTRAR O EDITAL?",
  "🎯 TEMA 2025",
  "👨‍💻 FORMATO DO CONCURSO",
  "🤝 PARCERIAS E ORGANIZAÇÃO",
  "📂 COMO ENVIAR O PROJETO?",
  "🔧 QUAIS TECNOLOGIAS USAR?",
  "📚 DICAS PARA UM BOM PROJETO",
  "📈 COMO É A AVALIAÇÃO?",
  "💡 IDEIAS PARA PROJETOS",
  "🕒 PRAZOS IMPORTANTES",
  "👩‍💻 DESENVOLVIMENTO DESSA IA",
  "🌟 COMO SE DESTACAR",
  "🎁 TIPOS DE PRÊMIOS",
  "📞 CONTATOS E SUPORTE",
  "📖 REGRAS IMPORTANTES",
  "🖥️ REQUISITOS TÉCNICOS"
];

const respostas = {
  "📅 DATAS E INSCRIÇÕES": 
    "As inscrições para o Concurso Agrinho 2025 começam em 01/07/2025 e vão até 15/09/2025. O envio dos projetos deve ser feito até 30/09/2025.",
  
  "📝 QUEM PODE PARTICIPAR?": 
    "Podem participar estudantes das redes públicas e privadas do ensino fundamental, médio e técnico de todo o Brasil, individualmente ou em grupos de até 3 alunos.",
  
  "🏆 CATEGORIAS E PRÊMIOS": 
    "O concurso possui duas categorias: Programação Front-End e Programação Back-End. Os melhores projetos recebem prêmios em dinheiro, certificados e bolsas de estudo.",
  
  "📌 ETAPAS DE AVALIAÇÃO": 
    "A avaliação ocorre em três etapas: análise preliminar, seleção regional e etapa final com apresentação ao vivo.",
  
  "🌐 ONDE ENCONTRAR O EDITAL?": 
    "O edital completo está disponível no site oficial do Concurso Agrinho 2025: www.agrinho2025.org/edital.",
  
  "🎯 TEMA 2025": 
    "O tema deste ano é 'Festejando a Conexão Campo Cidade', incentivando projetos que valorizem a integração entre áreas rurais e urbanas.",
  
  "👨‍💻 FORMATO DO CONCURSO": 
    "O concurso é totalmente online, com submissão dos projetos via plataforma digital e avaliações remotas pelos jurados.",
  
  "🤝 PARCERIAS E ORGANIZAÇÃO": 
    "Organizado pelo Instituto Agrinho, em parceria com universidades, empresas de tecnologia e órgãos governamentais.",
  
  "📂 COMO ENVIAR O PROJETO?": 
    "Os projetos devem ser enviados em formato ZIP contendo os arquivos index.html, sketch.js, style.css e demais recursos, via formulário no site oficial.",
  
  "🔧 QUAIS TECNOLOGIAS USAR?": 
    "Para Front-End, use HTML, CSS e JavaScript (pode usar bibliotecas como p5.js). Para Back-End, escolha tecnologias como Node.js, Python, etc.",
  
  "📚 DICAS PARA UM BOM PROJETO": 
    "Capriche na organização, documentação clara, código limpo, interface amigável e criatividade na solução proposta.",
  
  "📈 COMO É A AVALIAÇÃO?": 
    "Avaliam-se complexidade técnica, criatividade, interatividade, usabilidade, originalidade e documentação.",
  
  "💡 IDEIAS PARA PROJETOS": 
    "Exemplos: aplicativos para agricultura familiar, jogos educativos sobre o campo, simuladores de sustentabilidade, sistemas de conectividade rural-urbana.",
  
  "🕒 PRAZOS IMPORTANTES": 
    "Inscrição: 01/07 a 15/09 | Envio do projeto: até 30/09 | Resultados: 20/10 | Premiação: 10/11.",
  
  "👩‍💻 DESENVOLVIMENTO DESSA IA": 
    "Desenvolvi uma IA informativa sobre o Concurso Agrinho 2025, com o objetivo de auxiliar participantes e promover a programação. Durante dois meses, trabalhei neste projeto no Colégio Estadual Rio Branco, sob orientação do professor Rafael Assis Santos, utilizando ferramentas modernas para criar uma solução acessível e útil. Gostaríamos de concorrer para compartilhar esta inovação e inspirar outros estudantes.",
  
  "🌟 COMO SE DESTACAR": 
    "Trabalhe com dedicação, inovando e focando na experiência do usuário, além de apresentar documentação completa.",
  
  "🎁 TIPOS DE PRÊMIOS": 
    "Além dos troféus e certificados, há bolsas de estudo e convites para eventos de tecnologia.",
  
  "📞 CONTATOS E SUPORTE": 
    "Dúvidas podem ser enviadas para contato@agrinho2025.org ou via chat no site oficial.",
  
  "📖 REGRAS IMPORTANTES": 
    "O projeto deve ser original, inédito, e respeitar direitos autorais e as normas de submissão.",
  
  "🖥️ REQUISITOS TÉCNICOS": 
    "O projeto deve funcionar em navegadores modernos, com responsividade e desempenho adequado."
};

function setup() {
  // Tamanho ajustado para uma página grande (formato A4 em pixels)
  createCanvas(1200, 3000);
  textAlign(CENTER, CENTER);
  
  // Criar campo de filtro posicionado abaixo do balão de resposta
  inputFiltro = createInput('');
  inputFiltro.position(width/2 - 415, 700); // Posição ajustada
  inputFiltro.size(800, 50);
  inputFiltro.style('font-size', '20px');
  inputFiltro.style('padding', '10px');
  inputFiltro.style('border-radius', '20px');
  inputFiltro.style('border', '2px solid #2E7D32');
  inputFiltro.input(filtrarPerguntas);
  
  criarBotoesPerguntas();
  window.addEventListener('keydown', voltarPerguntas);
  textFont('Arial');
}

function draw() {
  drawFundoDinamico();
  drawRoboFlutuante();
  drawBalaoRespostaPremium();
  
  if (!mostrandoPerguntas) {
    drawInstrucaoChamativa();
  }
}

function filtrarPerguntas() {
  let filtro = inputFiltro.value().toUpperCase();
  
  for (let i = 0; i < perguntas.length; i++) {
    if (perguntas[i].toUpperCase().includes(filtro) || filtro === '') {
      botoes[i].show();
    } else {
      botoes[i].hide();
    }
  }
}

function criarBotoesPerguntas() {
  for (let i = 0; i < perguntas.length; i++) {
    let botao = createButton(perguntas[i]);
    botao.position(width/2 - 400, 800 + i * 85); // Posição ajustada para começar mais abaixo
    botao.size(800, 70);
    
    // Estilos mantidos
    botao.style('font-size', '26px');
    botao.style('font-weight', 'bold');
    botao.style('font-family', 'Arial, sans-serif');
    botao.style('background', 'linear-gradient(145deg, #2E7D32, #4CAF50)');
    botao.style('color', '#FFFFFF');
    botao.style('border-radius', '40px');
    botao.style('border', '3px solid #FFFFFF');
    botao.style('box-shadow', '0 8px 14px rgba(0,0,0,0.4)');
    botao.style('text-shadow', '2px 2px 3px rgba(0,0,0,0.6)');
    botao.style('cursor', 'pointer');
    botao.style('transition', 'all 0.3s');
    
    botao.mouseOver(() => {
      botao.style('transform', 'translateY(-5px)');
      botao.style('box-shadow', '0 12px 20px rgba(0,0,0,0.5)');
      botao.style('background', 'linear-gradient(145deg, #4CAF50, #2E7D32)');
    });
    botao.mouseOut(() => {
      botao.style('transform', 'none');
      botao.style('box-shadow', '0 8px 14px rgba(0,0,0,0.4)');
      botao.style('background', 'linear-gradient(145deg, #2E7D32, #4CAF50)');
    });
    
    botao.mousePressed(() => {
      responder(perguntas[i]);
      esconderPerguntas();
    });
    
    botoes.push(botao);
  }
}

function drawFundoDinamico() {
  let c1 = color(30, 90, 50);
  let c2 = color(60, 150, 80);
  setGradient(0, 0, width, height, c1, c2);
  
  noStroke();
  fill(255, 255, 255, 15);
  for (let i = 0; i < 50; i++) { // Mais folhas para preencher o espaço maior
    drawLeaf(random(width), random(height), random(25, 60));
  }
}

function drawLeaf(x, y, size) {
  push();
  translate(x, y);
  rotate(random(TWO_PI));
  beginShape();
  vertex(0, 0);
  bezierVertex(size/2, -size/2, size, 0, 0, size);
  bezierVertex(-size, 0, -size/2, -size/2, 0, 0);
  endShape();
  pop();
}

function drawRoboFlutuante() {
  let x = width/2;
  let y = 210 + sin(frameCount * 0.05) * 5;
  
  fill(180, 240, 200);
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = color(100, 200, 150);
  rect(x - 140, y - 140, 280, 280, 50);
  
  fill(100, 200, 150, 120);
  noStroke();
  rect(x - 115, y - 95, 230, 190, 30);
  
  framePiscar += 0.05;
  let olhoAberto = abs(sin(framePiscar)) > 0.5 ? 20 : 40;
  fill(0, 80, 50);
  ellipse(x - 60, y - 40, 50, olhoAberto);
  ellipse(x + 60, y - 40, 50, olhoAberto);
  
  if (estadoRobo === 'feliz') {
    fill(0, 150, 80);
    arc(x, y + 65, 130, 65, 0, PI, CHORD);
  } else {
    fill(50, 100, 70);
    rect(x - 50, y + 65, 100, 15, 8);
  }
  
  stroke(255, 215, 0);
  strokeWeight(5);
  line(x - 70, y - 140, x - 100, y - 210);
  line(x + 70, y - 140, x + 100, y - 210);
  noStroke();
  fill(255, 215, 0);
  circle(x - 100, y - 210, 30);
  circle(x + 100, y - 210, 30);
  
  fill(100, 200, 100);
  drawLeaf(x - 100, y - 225, 22);
  drawLeaf(x + 100, y - 225, 22);
  
  drawingContext.shadowBlur = 0;
}

function drawBalaoRespostaPremium() {
  fill('#30863A');
  drawingContext.shadowBlur = 35;
  drawingContext.shadowColor = 'rgba(0,0,0,0.25)';
  drawingContext.shadowOffsetY = 15;
  rect(width/2 - 420, 350, 840, 320, 50);
  fill('#E4F1E6');
  textSize(26);
  textLeading(36);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text(resposta, width/2 - 390, 375, 780, 280);
  
  drawingContext.shadowBlur = 0;
}

function drawInstrucaoChamativa() {
  let alpha = 150 + 105 * sin(frameCount * 0.1);
  
  fill(255, 225, 0, alpha);
  textSize(24);
  textStyle(BOLD);
  textAlign(CENTER);
  text('Pressione QUALQUER TECLA para voltar às perguntas', width/2, 750); // Posição ajustada
  
  push();
  translate(width/2, 790); // Posição ajustada
  rotate(frameCount * 0.05);
  fill(255, 215, 0);
  noStroke();
  triangle(0, -20, -15, 15, 15, 15);
  pop();
}

function responder(pergunta) {
  perguntaAtual = pergunta;
  resposta = respostas[pergunta] || "Ainda não temos essa resposta cadastrada.";
  estadoRobo = 'feliz';
}

function esconderPerguntas() {
  mostrandoPerguntas = false;
  for (let botao of botoes) {
    botao.hide();
  }
  inputFiltro.hide();
}

function mostrarPerguntas() {
  mostrandoPerguntas = true;
  for (let botao of botoes) {
    botao.show();
  }
  inputFiltro.show();
  inputFiltro.value('');
  filtrarPerguntas();
  resposta = 'Selecione uma pergunta abaixo para saber mais sobre o Concurso Agrinho de Programação 2025!';
  estadoRobo = 'normal';
}

function voltarPerguntas(event) {
  if (!mostrandoPerguntas) {
    mostrarPerguntas();
  }
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}