# Instruções para o Claude neste projeto

## Sobre o projeto
CFC Treino: app de estudo para o Exame de Suficiência do CFC (prova em 13/12/2026), em HTML/JS puro, sem bibliotecas de terceiros, anúncios ou rastreamento.
Tem 293 questões oficiais (FGV/CFC 2024.1 a 2026.2) com explicações, questões autorais, simulados e guia.
- `index.html` + `manifest.webmanifest` + `sw.js` + `icons/`: versão PWA (GitHub Pages: vavastack/cfc-treino).
- `CFC-Treino-offline.html`: arquivo único, abre com duplo clique.
Leia o `README.md` antes de mexer.

Leia também `CONTEXTO-CONVERSAS.md` (histórico técnico do app).

## Quem trabalha aqui
O dono (Wanderson) está aprendendo a programar com os próprios projetos.
- Responda sempre em português do Brasil.
- Explique em poucas linhas o que vai mudar e por quê; dê o próximo passo prático.
- Mudanças pequenas, uma ideia por commit, mensagem em português.

## Regras
1. A prova é em 13/12/2026: priorize correção de gabarito e de explicação, não recurso novo.
2. As provas são do CFC/FGV: uso só para estudo pessoal, sem fins comerciais. Nunca sugerir vender o material.
3. Explicações e questões autorais não são oficiais: manter o aviso de conferir com apostila e norma vigente.
4. O progresso fica no navegador de cada endereço. Ao mexer em chaves de armazenamento ou formato do backup (JSON), não quebre a importação de backups antigos.
5. Mudou algo no app? Atualize os dois formatos (PWA e offline), o número da versão e o cache do `sw.js` juntos.
6. Instalar programa ou mexer em configuração do PC: só com autorização dele. Chaves de API: ele digita.

## Padrão MW
Valem as do Padrão MW (F:\Wanderson\Projetos\Padrao-MW\projetos-code\PADRAO-PROJETOS-CODE.md): trava `.sessao.lock`, trabalhar em cópia, backup e hash, sem commit, push ou publicação sem aprovação, autorização antes de instalar ou configurar o PC, chaves ele digita, responder em português.

## Revisão
No fechamento de versão: subagente Opus no recorte + Codex somente leitura via `cmd /c codex exec`; relatório em `docs/revisoes/`.
