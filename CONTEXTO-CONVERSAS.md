# CFC Treino: contexto técnico das conversas (até 22/11/2026)

Só informações técnicas, porque este repositório é público.

## Como o app foi construído
- Base: seis provas oficiais FGV/CFC (2024.1 a 2026.2), 293 questões válidas (anuladas fora), com gabarito definitivo e explicação escrita para cada uma. A versão v1.3 ainda usava gabaritos preliminares de 2025.1 e 2025.2; o README da v2.0 já cita os definitivos. Confira se esses dois bancos foram mesmo corrigidos.
- 50 questões autorais (escritas com IA), mantidas separadas das estatísticas oficiais.
- Recursos: modo "Foco no peso" (prioriza assuntos de maior peso e erros anteriores), simulados cronometrados com a proporção da prova real, caderno de erros, guia de estudo, tela **Mais > Fórmulas rápidas** (liquidez, endividamento, prazos e NCG, ponto de equilíbrio, custo padrão, ABC, matemática financeira, probabilidade, contabilidade geral, cálculo trabalhista) e cronograma de 28 dias (16/11 a 13/12) com simulados em 22/11, 29/11 e 06/12.
- Tema "Argila" do Pista Financeira (Padrão MW), efeito tátil nos botões, vibração, resposta com confirmação antes de enviar.
- Decisão: tudo em arquivo HTML único (nada de v0/v1 soltos). Gerado por script de build fora desta pasta; os dois formatos (PWA e offline) saem juntos.
- Publicado como PWA no GitHub Pages (repositório público, exigência do plano gratuito).

## Cuidados
- Progresso fica no navegador por endereço; trocar de endereço exige exportar/importar backup JSON.
- Um bug de barra de navegação inferior sobreposta apareceu na versão PWA em tela de celular; confira se foi resolvido.
- Provas e gabaritos são do CFC/FGV: só estudo pessoal, sem venda.

## Conversa de origem (no claude.ai)
- Preparação para prova em 30 dias (15–16/11): https://claude.ai/chat/d8abe10e-5831-43b2-8f21-fb51d49661b4
