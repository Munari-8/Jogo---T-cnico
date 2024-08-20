/////\\\\\/////\\\\\/////\\\\\/////\\\\\////VARIÁVEIS GLOBAIS\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\

var choose = 20 //Barra de progressão
var choose2 //Barra de progresssão 2
var inv = [] //Inventário
var diario = [] //Será usado para armazenar as páginas do seu diário
var gameOver = true //Vai ser usada pra definir quando o jogador vai dar "FIM DE JOGO"
var n = Number //Vai ser usada pra armazenar números temporariamente
var ritmo = Number //Vai ser usada pras corridas
var estabilidade = 0//Vai ser usada pra corrida
 
/////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\FUNÇÕES////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\

function adicionarAoDiario(registro){ //Adiciona registros ao diário
    diario.push(registro)
    console.log(registro)
}
 
function adicionarAoInv(sentimento){ //Adiciona sentimentos ao inventário
    inv.push(sentimento)
    console.log(`Parabéns! Você adquiriu ${sentimento}!`)
}

function removerDoInv(sentimento){ //Tira elementos do inventário
    a = inv.indexOf(sentimento)
    delete inv[a]
    console.log(`Você usou ${sentimento}!`)
}

function rolarDado(){ //Gera um número aleatório
    let m = (inv.length) //Eu passei mais tempo do que eu me orgulho pra isso funcionar ali embaixo, tudo porque eu tava escrevendo lentgh sem querer
    let n = Math.round(Math.floor(Math.random() * (10 - 1 + 1)) + 1 + m)
    
    return n
}

function ajustarRitmo(lento, normal, rapido){ //Define o valor de "estabilidade", que dita se tu ganhou ou não a corrida
    if(ritmo == 1){
        estabilidade += lento
        b = `LENTO`
    }else if(ritmo == 2){
        estabilidade += normal
        b = `NORMAL`
    }else{
        estabilidade += rapido
        b = `RÁPIDO`
    }

    return estabilidade && b
}

function relerDiarios(){ //Aqui eu confesso que deu um trabalhão, mas depois de algumas horas de pesquisa, tentativa e erro, aqui está a função que te permite reler os registros do seu diário
    b = true
    while(b == true){
        console.log(`BIBLIOTECA DE REGISTROS:`)

        for (let i = 0; i < diario.length; i++){ 
            let [data, texto] = diario[i].split("\n") //Separa a data do resto do texto, usando de critério o \n
            
            console.log(`${i+1}. ${data}`) //Aqui ele exibe as opções de registros, show da bola
        }

        a = prompt(`Digite o número do registro que desejas ler:`)
        let aReg = parseInt(a) - 1 //Converte o número que o usuário digitou pra uma variável Number

        if(aReg >= 0 && aReg < diario.length){ //"Valida" o número que o usuário digitou
            console.log(`Registro número ${a}:\n${diario[aReg]}`) //Mostra no console o registro bonitinho maravilhoso perfeito
            alert(`Registro número ${a}:\n${diario[aReg]}`) //Mesma coisa só que no prompt
        }else{ //Aqui é caso tu digite alguma coisa errada, vai que né
            console.log(`Número do registro inválido.`)
            alert(`Número do registro inválido.`)
        }

        b = prompt(`Deseja rever mais algum registro?\n1 - Sim\n2 - Não`) //Autoexplicativo. Se sim, o valor continua positivo e o laço repete, se não, o valor vira negativo e a função termina de cumprir sua função
        if(b == 2){
            b = false
        }
    }
}

/////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\JOGO/////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\

/////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\CAPÍTULO 1//\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\
 
let a = prompt(`CRÔNICAS DO IMAGINÁRIO\nAperte qualquer tecla para iniciar`)
 
alert(`CAPÍTULO 1 | A Origem do Refúgio`)
console.log(`CAPÍTULO 1 | A Origem do Refúgio`)

alert(`12 de Junho de 2010\nXXXX, Eritréia`) //!//!//!//Parte 1 do CAPÍTULO 1//!//!//!//
console.log(`12 de Junho de 2010\nXXXX, Eritréia\n   Você acorda, se veste e vai tomar o seu café da manhã. Sua mãe se despede, e você toma o seu rumo à escola.\n   O intervalo chega, e você se reúne com os seus amigos para conversarem, até que um deles fala:\n    - Hoje, quando eu tava saindo de casa, eu vi carros do exército perto da minha casa. Eu não consegui avisar os meus pais, e agora, eu não sei mais nem se eu vou poder voltar pra lá.`)

a = prompt(`Você decide:\n1 - Chamar ele para ir para a sua casa\n2 - Não falar nada`)
 
if(a == 1){ //Ele foi contigo
    choose += 5
 
    adicionarAoInv(`SOLIDARIEDADE`) //EMOÇÃO !!!
 
    console.log(`Você convida ele para ir para a sua casa provisóriamente.`)
    console.log(`   - Pode ser, caso não seja muito incômodo, claro.`)
    a = prompt(`O que você diz?\n1 - "Claro que não, pode ficar lá até que tudo se acalme de novo."\n2 - "A gente anda meio ocupado, então não sei se vai dar pra você ficar lá por muito tempo."`)
   
    if(a == 1){
        choose += 1 //26
 
        console.log(`   - Claro que não, pode ficar lá até que tudo se acalme de novo.\n   - Ah, obrigado! Prometo não incomodar.`)
    }else{ //25
        console.log(`   - A gente anda meio ocupado, então não sei se vai dar pra você ficar lá por muito tempo.\n   - Sem problema, eu entendo, mas não vou ocupar o espaço de vocês por muito tempo.`)
    }
}else{
    choose -=5 //15
 
    console.log(`   - Bom, pelo jeito, eu acho que não vai ter como escapar. Também preciso ver como os meus pais estão.`)
}

if(choose > 20){ //Caso ele vá contigo
    console.log(`   Após um longo dia de aula, você e o seu amigo vão para a sua casa. Sua mãe te pergunta o porquê ele está com você.`)
    console.log(`   - Ele disse que viu o exército perto da casa dele quando tava vindo pra escola. Por isso, eu decidi trazer ele pra cá até termos alguma notícia sobre isso.`)
       
    if(choose == 26){ //Só pra ver oq a mãe fala se tá na pressa ou nem
        console.log(`   - Certo, se for por isso, tudo bem. Sinta se em casa, mas eu tenho certeza que seus pais devem estar bem`)
    }else{
        console.log(`   - Certo, se for por isso, tudo bem. Mas, por favor, tente ir atrás das notícias rápido, estamos bem ocupados por aqui.`)
    }  
    console.log(`   - Obrigado, mãe. Agora, deixa eu te mostrar onde você vai dormir.`)
    console.log(`   Você mostra ao seu amigo aonde ele dormirá, do lado da sua cama. Sua mãe, então, os-chamam para jantar.\n   Após a janta, vocês dois decidem ir dormir.`)
 
    console.log(`   - Boa noite, Gabriyesos.\n   - Boa noite, Abel. Até amanhã.`)
}else{ //Caso ele NÃO vá contigo
    console.log(`   Após um longo dia de aula, você volta para a sua casa. Sua mãe te recebe e te chama para jantar. Após a janta, você vai para o seu quarto novamente.`)
}
 
if(inv.includes(`SOLIDARIEDADE`)){ //Só dá pra escrever no diário se tu pegar o sentimento do dia, então tá aí pra checar se tu tem ele ou nem
    a = prompt(`Antes de dormir, você quer escrever no seu diário?\n1 - Sim\n2 - Não`)
    if(a == 1){
        adicionarAoDiario(`12/06/2010\n   Mais um dia se passa, mas, felizmente, eu continuo vivo. O Abel disse que o exército tava perto da casa dele hoje, quando ele tava saindo de casa, e, como ele tava com medo disso, eu decidi chamar ele pra passar um tempo aqui em casa. No fim, eu também tô com medo, todo mundo tá. Enfim, meu dia não foi nada demais, fui pra escola, voltei pra casa e jantei. Que boas notícias venham, por favor.`)
    }
}
 
console.log(`   Você cai no sono.`)

alert(`13 de Junho de 2010\nXXXX, Eritréia`) //!//!//!//PARTE 2 DO CAPÍTULO 1//!//!//!//
console.log(`13 de Junho de 2010\nXXXX, Eritréia`)

if(choose > 20){ //Se ele FOI contigo !!!!
    while(gameOver == true){ //O tal do checkpoint, pra caso tu morra tu volte pra essa parte do capítulo (eu até pensei em voltar pro início do capítulo mesmo, mas aí ficaria meio massante talvez)
        console.log(`   Vocês dois acordam, se vestem e vão tomar café da manhã. Sua mãe se despede, e vocês tomam o seu rumo à escola. No meio do caminho, vocês começam a conversar.\n    - Muito obrigado pela hospitalidade e tudo mais, mas eu acho que amanhã eu vou voltar pra casa, preciso saber se meus pais estão bem.`)
        a = prompt(`O que você diz?\n 1 - "Não posso ser contra, você deve tá morrendo de ansiedade e med.o"\n 2 - "Não posso deixar, vai que eles realmente estejam lá, você pode se machucar também."`)
    
        if(a == 1){ //Diálogo inútil mas útil pra imersão (eu acho)
            console.log(`   - Não posso ser contra, você deve tá morrendo de ansiedade e med.o\n   - Obrigado por entender.`)
        }else{
            console.log(`   - Não posso deixar, vai que eles realmente estejam lá, você pode se machucar também.\n   - Eu entendo que você não quer isso, mas eu preciso disso, Gabriyesos. Eu não aguento mais\n   - Você sabe o que pode acontecer se eles tiverem lá, né?\n   - Eu não ligo, eu só quero estar com minha família.\n   - Tá.`)
        }
    
        console.log(`   O dia passa, a aula termina, e na saída da escola, seu amigo começa a falar:`)
        console.log(`   - Bom, então é isso, vou voltar pra casa agora.`)
    
        a = prompt(`O que você faz?\n1 - Não fala nada\n2 - Acompanha ele até sua casa`)
    
        if(a == 2){
            console.log(`   - Gabriyesos, você tem CERTEZA? É perigoso, e eu não quero envolver mais ninguém em um problema MEU.`)
            a = prompt(`O que você diz?\n1 - "Não, desculpa."\n2 - "Sim."`) //Só pra confirmar
    
            if(a == 2){ //Foi
                console.log(`   - Bom, se é assim, vamos indo.`)
            }else{ //Não foi
                console.log(`   - É o melhor a se fazer.`)

                a = 1
            }
        }
    
        if(a == 1){ //Diálogo básico caso tu deixe ele ir sozinho
            console.log(`   - Tchau Gabriyesos, até amanhã!\n   - Tchau, Abel.`)

            choose -= 10

            gameOver = false
        }
    
        if(a == 1){ //Tu voltou pra casa sozinho !!!
            console.log(`   Você vai para sua casa, apreensivo. Quando chega lá, sua mãe está na cozinha, e logo grita para você:\n    - Tachlowini, seu tio me ligou mais cedo dizendo que queria falar contigo.\n   - Sobre?\n   - Isso aí eu não perguntei, liga pra ele que tu descobre.\n   Você então sobe para o seu quarto, pega o seu celular e liga para o seu tio.`)
            console.log(`   - Alô, Tachlowini?.\n    - Oi, tio.\n   - Bom, sua mãe deve ter dito sobre a minha ligação. Eu queria te perguntar se você não quer vir morar aqui, comigo, em Israel. Eu ouvi uns rumores de que o exército tava indo pra região onde vocês moram.\n   - Espera, então...\n   - Então?\n   - Nada, desculpa. Enfim, eu até iria, mas não posso deixar meus pais aqui.\n   - Bom, você quem sabe, caso mude de ideia, só me ligar. Tchau, Tachlowini.\n   - Tchau, tio`)
            console.log(`A ligação desliga e a sua mãe te chama pra jantar. Logo após, você se prepara para ir dormir.`)
    
            adicionarAoInv(`APREENSIBILIDADE`) //EMOÇÃO !!!
        
            if(inv.includes(`APREENSIBILIDADE`)){
                a = prompt(`Antes de dormir, você quer escrever no seu diário?\n1 - Sim.\n2 - Não.`)
    
                if(a == 1){
                    adicionarAoDiario(`13/06/2010\n   Eu deixei ele voltar pra casa sozinho. Meu tio me disse que o exército tá vindo pra cá. É muita coisa pra minha cabeça processar. Se ele não for amanhã, eu nunca mais vou me perdoar. Deus, por favor, nos ajude.`)
                }
            }
        }else{ //Tu foi com ele (daqui pra frente é só da frente pra trás) !!!
            console.log(`   Vocês dois partiram em direção a casa dele, apreensivos, mas esperançosos. Quando mais perto chegavam, mais tenso ficavam, mas, logo... essa tensão virou medo. Dava pra ver de longe, casas e casas cercadas pelo exército, incluindo a de Abel. Ele desabou, sem família e sem chão. Ele se levanta e se prepara para correr até sua casa.`)
            
            a = prompt(`O que você faz?\n1 - O impede.\n2 - Nada.`)

            if(a == 1){ //Vê se é game over ou nem
                console.log(`   Você o segura, impedindo-o de sair correndo.`)

                choose += 5 //25
 
                adicionarAoInv(`CALMARIA`) //EMOÇÃO !!!

                gameOver = false
            }else{
                console.log(`   Você fica paralisado, vendo o seu amigo correndo em direção à sua casa, até que um som alto se espalha pelo ar... BANG! Abel está morto.`)
                alert(`FIM DE JOGO\nTente novamente.`)
                console.log(`FIM DE JOGO\nTente novamente.`)
            }
        }
    }

    if(choose > 20){
        console.log(`   - Tachlowini, eu preciso ver eles.\n   - Mas e se eles te pegarem Abel!? Eu não posso deixar você fazer isso.\n   - Eu não ligo se eles me pegarem! Eu só preciso ver minha família.\n   - Mas eu ligo, seus amigos ligam... a sua família liga. Você não pode agir igual a um maluco suicida desse jeito!\n   - Mas... os meus pais...   - Se você quer o bem deles, Abel, o que te resta é viver, por eles.\n   - ... Você tem razão, me desculpa.\n   - Sem desculpas, só... nunca mais age desse jeito.`)
        console.log(`   Vocês, então, saem correndo dali o mais rápido possível, até que chegam na sua casa. Você abre a porta, tal qual abre a sua boca:`)
        console.log(`   - Mãe! Eles chegaram! O exército tá aqui!\n   - Tachlowini, calma.\n   - Não tem calma, o exército chegou aqui e já cercaram e levaram os pais do Abel!\n   - Calma Tachlowini! Explica isso direito.\n   - Eles... eu... eu e o Gabriyesos fomos até a minha casa pra ver se tava tudo certo, e... eles tavam lá, envolta de um monte de casas, uma delas, a minha...\n   - Certo, e vocês acham que eles virão pra cá logo, não é?\n   - É.\n   - Bom, se eles vierem, a gente sai daqui, mas, por enquanto, eu e seu pai não podemos abandonar essa casa por um "e se".\n   - Mas! Mãe!\n   - Você sabe que não podemos. Ficaremos aqui até que algo realmente urgente aconteça.\n   - Mas-\n   - Sem mas, agora se arrumem que a janta tá quase pronta. Ah, e aliás, Tachlowini, o seu tio ligou dizendo que queria conversar contigo, depois liga pra ele de volta.`)
        
        console.log(`   Você ouve essa última frase enquanto entra em seu quarto, com raiva, raiva por não poder fazer nada, embora observasse e prevesse que o fim chegaria. Sua mãe os-chama para jantar, mas, por ainda estar frustrado e com raiva, você diz que ficará e ligará para o seu tio, enquanto Abel estava morto de fome. +291 XX 8154-8613.`)
        console.log(`   - Alô, Tachlowini?.\n   - Oi, tio. A mãe disse que queria falar comigo.\n   - Ah, sim, verdade.\n   - E?\n   - Bom, eu queria te perguntar se você não quer vir morar aqui, comigo, em Israel. Eu ouvi uns rumores de que o exército tava indo pra região onde vocês moram.\n   - ... \n   - Tachlowini??\n   - Obrigado por ligar. Mas eu ainda não sei se quero deixar meus pais aqui, embora eu queira muito.\n   - Aconteceu alguma coisa?\n   - Eu vi o exército perto da casa de um amigo meu e... enfim, qualquer coisa eu te ligo de volta, mas, por enquanto, não pretendo ir.\n   - Certo, então. Tchau, Tachlowini.\n   - Tchau, tio.`)

        console.log(`   Após algum tempo, Abel voltou, e você foi logo contar à ele sobre o que seu tio havia lhe-dito.`)
        console.log(`   - Gabriyesos, isso é perfeito, precisamos ir!\n   - Mas, e os meus pais?\n   - É questão de tempo até que o exército chegue aqui, e, como você mesmo disse, se não pode salvá-los, viva, por eles.\n   - Não é a mesma coisa, eu ainda tenho os meus pais do meu lado.\n   - Se eles não querem sair daqui, não tem o que fazer, mas você pode!\n   - Eu... eu ainda preciso pensar mais sobre isso. Agora, vamos dormir, até amanhã eu me decido. Boa noite, Abel.\n   - Boa noite, Gabriyesos.`) //Não faz muito sentido ele ter 0 empatia, mas tô c preguiça de escrever mais
    }
}else{ //Se ele NÃO foi contigo (aqui é só chato mesmo) !!!!
    console.log(`   Você acorda, se veste e vai tomar o seu café da manhã. Sua mãe se despede, e você toma o seu rumo à escola.\n   O intervalo chega, entretanto, você e seus amigos percebem que um deles não veio, Abel.\n   - Onde tá o Abel? Ele não veio hoje?\n   - Pelo jeito não, mas, por que?\n   - Será que, ele e os pais dele...`)
    a = prompt(`O que você faz?\n 1 - Tenta acalmar a situação\n 2 - Não fala nada`)
   
    if(a == 1){ //Acalma !
        choose += 1 //16
 
        adicionarAoInv(`CALMARIA`) //EMOÇÃO !!!
 
        console.log(`   - Calma aí, eu acho que não. Se o exército realmente tivesse perto da casa dele, ele não iria direto pra lá, ele deve estar seguro em algum outro lugar. Ou, quem sabe, ele só tava errado ontem. Não vamos sofrer por antecedência.\n   - Você tá certo, a gente não deve sofrer por algo que nem sabemos se aconteceu.`)
    }else{ //Não acalma
        console.log(`   - Bom, a gente ficar aqui especulando não vai mudar nada.\n   - Só espero que ele esteja bem.`)
    }
    console.log(`   A aula acaba e você volta pra sua casa. Sua mãe está na cozinha, quando grita para você:\n    - Tachlowini, seu tio me ligou mais cedo dizendo que queria falar contigo.\n   - Sobre o que?\n   - Isso aí eu não perguntei, liga pra ele que tu descobre.\n   Você então sobe para o seu quarto, pega o seu celular e liga para o seu tio.`)
    console.log(`   - Alô, Tachlowini?.\n   - Oi, tio. A mãe me disse que tu queria falar comigo.\n   - Ah, sim, verdade.\n   - E?\n   - Bom, eu queria te perguntar se você não quer vir morar aqui, comigo, em Israel. Eu ouvi uns rumores de que o exército tava indo pra região onde vocês moram.\n   - Espera, então...\n   - Então?\n   - Nada, desculpa. Enfim, eu até gostaria, mas eu não posso abandonar meinha vida aqui.\n   - Bom, você quem sabe, caso mude de ideia, só me ligar. Tchau, Tachlowini.\n   - Tchau, tio`)
    console.log(`   A ligação desliga e a sua mãe te chama pra jantar. Logo após, você se prepara para ir dormir`)
 
    if(inv.includes(`CALMARIA`)){ //Só da pra escrever no diário se tu pegar o sentimento do dia, então tá aí pra checar se tu tem ele ou nem
        a = prompt(`Antes de dormir, você quer escrever no seu diário?\n1 - Sim\n2 - Não`)
 
        if(a == 1){
            adicionarAoDiario(`13/06/2010\n   Hoje, meu tio ligou pra mim, perguntou se eu não queria morar com ele lá em Israel. Eu não quero deixar meus pais e meus amigos pra trás, então eu disse que não. Na escola, o Abel não veio, e isso... meu tio disse que ouviu que o exército tava vindo pra cá. Eu tenho medo do que pode acontecer, mas eu sinto que vai dar tudo certo... tem que dar tudo certo.`)
        }
    }
}

console.log(`   Você cai no sono.`)
 
alert(`14 de Junho de 2010\nXXXX, Eritréia`) //!//!//!//Parte 3 do CAPÍTULO 1//!//!//!//
console.log(`14 de Junho de 2010\nXXXX, Eritréia`)

if(choose > 20){ //Esse aqui é divertido //ELE TÁ CONTIGO
    gameOver = true //Isso aqui é só pro checkpoint funcionar, ignora pfv
    while(gameOver == true){ //De novo o tal do checkpoint
        console.log(`   São 02:40 da manhã, você não está conseguindo dormir direito, pensando muito sobre a proposta de seu tio. TUM! Você ouve um barulho alto vindo do hall de entrada casa... TUM! PLAFT! Seu amigo acorda em meio aos barulhos. Ele te encara com um olhar de medo, quando passos começam a ser ouvidos, e, em seguida... gritos, gritos de seus pais. Você já sabia o que estava acontecendo, sua casa não é mais sua, mas sim, do governo. Desesperados, vocês dois pegam meia dúzia de pertences e caminham na ponta do pé, até uma porta nos fundos da casa. Vocês saem e percebem que o caos já havia se instaurado no seu bairro, onde o exército estava se preparando para cercá-lo por inteiro.`)
        a = prompt(`O que você faz?\n1 - Agarra o seu amigo e sai dali correndo.\n2 - Tenta sair dali com o seu amigo discretamente.`)

        if(a == 2){ //Stealth / AMBOS VIVOS) !!!!
            removerDoInv(`CALMARIA`)
            
            a = 1

            console.log(`   Vocês dois começam a se esgueirar pelas plantas, moitas e paredes, sem que ninguém note-os. Entretanto... TRRRIM-TRRRIM!`)

            n = rolarDado()

            if(n > 5){ //Não muda nada de significativo no futuro, mas eu gosto de detalhes assim. Roda um dado pra definir quem perde o celular
                console.log(`   É o celular de Abel. Sem pensar, ele joga o celular longe, enquanto vocês dois correm.`)

                choose2 = true
            }else{
                console.log(`   É o seu celular. Sem pensar, você o joga longe, enquanto vocês dois correm.`)

                choose2 = false
            }

            gameOver = false
        }else{ //Corre / SÓ UM VIVO !!!!
            a = 2
            choose -= 10

            console.log(`   Você agarra o braço do seu amigo e diz para ele se preparar para correr o mais rápido que ele pode. 3, 2, 1... BANG! Você rapidamente olha pra trás e vê a cabeça de Abel rolando pelo chão, deixando um rastro de sangue para trás.`)
            
            n = rolarDado()

            if(n > 5){
                console.log(`   Mesmo de frente à uma cena tão terrível, você continua correndo, sem objetivo, sem rumo, apenas sobrevivendo. Quando você para de correr, as lágrimas surgem, e você nem sabe mais aonde está.`)

                gameOver = false
            }else{
                console.log(`   De frente à uma cena tão horrível, você fica paralisado. BANG!`)
                alert(`FIM DE JOGO\nTente novamente.`)
                console.log(`FIM DE JOGO\nTente novamente.`)
            }
        }
    }

    if(a == 1){
        console.log(`   Quando vocês dois param, não sabem nem onde estão. Tudo o que lhe-resta, é chorar.`)
        console.log(`   - Gabriyesos! Tá tudo bem?\n   - Tudo bem? Claro que não tá tudo bem! Meus pais foram detidos, seus pais foram detidos, nós dois perdemos as nossas casas, provavelmentes os nossos amigos, nossa escola, nossa vida! Nós perdemos TUDO!\n   - E o que adianta remoer tudo isso? O que já foi já foi.\n   - Agora você tá cheio dos conselhos né, antes tava quase se matando por nada.\n   - E fugir desse jeito também não foi suicídio?\n   - Sim, e, sinceramente, eu queria que tivesse funcionado.\n   - Bom, e agora?\n   - Agora é torçer pra alguma bala perdida nos achar.\n   - Cala a boca, Gabriyesos, se você quer morrer, tudo bem, mas eu não, e é por sua culpa!\n   - ... Você promete não morrer?\n   - Só se você também prometer.\n   - Então, eu prometo.\n   - Eu também prometo. Agora, para onde podemos ir?\n   - Deve ter algum lugar abandonado pra gente dormir.\n   - Você não tem mais nenhum parente ou conhecido por aqui?\n   - Tinha...\n   - Bom, então vamos andando, vai, levanta.`)
        console.log(`   Após algum tempo de caminhada, vocês dois encontram um velho galpão.`)
        console.log(`   - Boa noite, Gabriyesos.\n   - Boa noite, Abel.`)
    }
}else{ //SE ELE NÃO TÁ CONTIGO !!!!
    choose -= 10

    gameOver = true //Mesma coisa de antes
    while(gameOver == true){ //Mais um checkpoint
        console.log(`   São 02:40 da manhã, você não está conseguindo dormir direito, pensando muito sobre a proposta de seu tio. TUM! Você ouve um barulho alto vindo do hall de entrada casa... TUM! PLAFT! Passos começam a ser ouvidos, e, em seguida... gritos, gritos de seus pais. Você já sabia o que estava acontecendo, sua casa não é mais sua, mas sim, do governo. Desesperados, você pega uma meia dúzia de pertences e caminha na ponta do pé, até uma porta nos fundos da casa. Você sai e percebe que o caos já havia se instaurado no seu bairro, onde o exército estava se preparando para cercá-lo por inteiro.`)

        a = prompt(`O que você faz?\n1 - Sai dali correndo\n2 - Tenta sair dali discretamente`)

        if(a == 2){
            removerDoInv(`CALMARIA`)

            console.log(`   Você atravessa plantas, arbustos e paredes, até que finalmente chega em um lugar seguro.`)

            gameOver = false
        }else{ //Primeira vez que a mecânica da corrida aparece, criei ela lá no capítulo 3, mas achei que encaixava legal aqui
            alert(`<!> TUTORIAL <!>\nPara ganhar uma corrida, é nescessário juntar um número mínimo de pontos. O valor deles varia de etapa para etapa. Caso não reúna os pontos necessários, é FIM DE JOGO! Pense bem!`) //Tutorial pra pessoa não fica confusa
            console.log(`<!> TUTORIAL <!>\nPara ganhar uma corrida, é nescessário juntar um número mínimo de pontos. O valor deles varia de etapa para etapa. Caso não reúna os pontos necessários, é FIM DE JOGO! Pense bem!`)

            ritmo = prompt(`Qual será seu ritmo inicial?\n1 - Lento\n2 - Normal\n3 - Rápido`)
            ajustarRitmo(1, 1, 3)

            ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
            ajustarRitmo(1, 2, 3)

            if(estabilidade > 4){ //Se for 5 ou maior, ele fica bem
                gameOver = false

                adicionarAoInv(`ADRENALINA`)

                console.log(`   Você sai correndo como nunca havia corrido antes. Quando para, você não faz ideia de onde está, só sabe que está tudo acabado.`)
            }else{ //Se não ele morre (literalmente)
                console.log(`   Enquanto corria, você ouve um som... BANG!`)
                alert(`FIM DE JOGO!\nTente novamente.`)
                console.log(`FIM DE JOGO!\nTente novamente.`)
            }
        }

        estabilidade = 0
    }
}
if(choose < 20){
    console.log(`   Sem pais, sem casa, sem amigos... você sente como se tivesse perdido a vida. Mesmo desejando que alguém acabe com tudo aquilo, o seu corpo o-rejeitava.\n    Você se levanta e começa a vagar, até que ache algum lugar abandonado para passar a noite.\n   Você adentra um velho galpão, não é muito, mas é o que tem.`)

    if(inv.includes(`ADRENALINA`)){
        a = prompt(`Antes de dormir, você quer escrever no seu diário?\n1 - Sim\n2 - Não`)
        
        if(a == 1){
            adicionarAoDiario(`14/06/2010\n   Eu não consigo entender, por que continuo a vagar, mesmo quando meu templo perdeu um pilar? O exército chegou, e com eles, a minha vida acabou. Casa, família, amigos, tudo foi perdido. A cabeça distoa do corpo, um me quer morto, o outro caminha com um olhar torto. No fim, não sei o que será de mim, talvez ligue para o meu tio, talvez eu busque por um fuzil, tudo o que sei, é que o futuro dirá o que de mim será.`)
        }
    }
}

console.log(`   Você cai no sono.`)

alert(`14 de Junho de 2010\nXXXX, Eritréia`) //!//!//!//Parte 4 do CAPÍTULO 1//!//!//!//
console.log(`14 de Junho de 2010\nXXXX, Eritréia`)

if(choose > 20){ //JUNTO DELE !!!!
    console.log(`   O dia nem havia começado, e a sua vida já havia despencado. O sol se levanta, e com ele, vocês também.`)
    console.log(`   - Bom dia, Abel.\n   - Bom dia, Gabriyesos. Como é que você tá?\n   - Mal, mas melhor do que ontem, acho que já tô perto da aceitação. E você?\n   - Tô mal também, mas pelo menos a gente tá vivo. Agora, o que vamos fazer?\n   - Nem ideia.`)
    
    if(choose2 == true){
        console.log(`   - Ah, eu tinha esquecido que eu joguei meu celular fora, aquela hora.   - Falando nisso, deixa eu ver como o meu tá.`)
        console.log(`   Nesse momento, você percebe algo.`)
        console.log(`   - Abel! Já sei o que vamos fazer!\n   - Fala aí.\n   - Lembra do meu tio?\n   - Ah, sim! Liga pra ele!\n   - Tá, tá.`)
    }else{
        console.log(`   - Que droga, tô sem meu celular.\n   - Aé, você jogou ele fora na hora do desespero.\n   - Pois é, ia ligar pro meu tio pra falar com ele sobre tudo isso, mas não dá.\n   - Verdade! Tinha até esquecido do seu tio, pode usar meu celular.\n   - Pode ser, eu só preciso lembrar o número.`)

        let cNum = 81548613
        let tNum

        while(tNum != cNum){ //Sisteminha pra ter que acertar o número, ele tá mais pra cima, mas dá pra achar
            tNum = prompt(`Digite o número do seu tio:`)

            if(tNum != cNum){
                alert(`Errado! Tente novamente`)
                console.log(`Errado! Tente novamente`)
            }
        }
    }

    //E tome diálogo
    console.log(`   TRRRIM-TRRRIM! TRRRIM-TRRRIM! TRRRIM-TRRRIM!`)
    console.log(`   - Alô, quem fala?\n   - Oi tio, é o Tachlowini.\n   - Ah, oi, Tachlowini, nesse horário você não deveria estar em aula?\n   - Bom, eu até estaria, caso não tivessem cercado a minha casa e levado meus pais, sobrando só eu e o meu amigo Abel.\n   - Mas... espera, o que!? ... então, os boatos eram verdade.\n   - Pois é, enfim, e sobre aquele negócio de ir morar aí contigo?\n   - Bom, não sei se vai dar pra chegar lá agora, com tudo isso, mas eu vou te mandar a localização de onde é.\n   - Beleza, mas, como vai funcionar?\n   - Vamos lá, a viagem não vai ser algo bom e nem divertido, tanto por causa de onde vocês vão passar e com quem vocês vão viajar.\n   - Como assim "com quem"?\n   - Seguinte, vocês vão falar com uns caras, e essa gente vai pôr vocês em um caminhão, junto de mais umas 20 pessoas. Aí, vocês vão cruzar um grande pedaço de terrra, incluindo, o deserto do Sinai, até chegarem aqui.\n   - Só isso?\n   - É, se quiserem saber de mais alguma coisa, perguntem à eles, mas, já avisando, eles não são seus amigos.\n   - Bom, se foi isso, muito obrigado. Agora tchau, tio, até mais.\n   - Vou estar esperando vocês, tchau, até mais.`)
    
    console.log(`   Vocês arrumam suas coisas e partem em direção ao lugar que o seu tio havia enviado. Por sorte, o caminho era tranquilo e livre de soldados. Chegando lá, vocês avistam o pessoal que seu tio havia falado sobre.`)
    console.log(`   - Oi, por acaso, são vocês que fazem a travessia até Israel?\n   - E o que isso interessa à duas crianças como vocês?\n   - Nossas casas foram invadidas, agora, estamos sozinhos.\n   - Se é assim, a gente vai sair com um caminhão hoje à noite, ainda tem espaço, a gente põe o nome de vocês na lista e depois é só aparecer nesse lugar aqui - Ele diz, apontando para um mapa.\n   - Grabriyesos, você tem certeza disso?\n   - Não nos resta mais nada além disso. Põe aí, Tachlowini e Abel.\n   - Certo, pode tirar uma foto, se quiser, mas não inventa de aparecer com mais alguém além de vocês lá que ela não vai subir no caminhão, mas sim pro céu.\n   - Claro. É isso então.`)

    console.log(`   O lugar indicado pelo homem era no meio do nada, então, vocês passam o resto do dia ali, discutindo sobre passado, presente e futuro, naquele pedaço da cidade.\n   A noite vem, e com ela o caminhão também chega no local combinado.`)
    console.log(`   - Bom, é isso, vamos lá, mudar de vida.\n   - Finalmente, diga-se de passagem.\n   - O que importa é que estamos aqui por eles, mas, acima de tudo, por nós.\n   - Tá chegando a nossa hora, vamos.\n   - Já vou, só... espera um pouquinho.`)

    adicionarAoInv(`LEVEZA`)

    if(inv.includes(`LEVEZA`)){ //Meio inútil esse includes, mas é pra não perder o costume
        a = prompt(`Antes de subir no caminhão, você quer escrever no seu diário?\n1 - Sim\n2 - Não`)

        if(a == 1){
            adicionarAoDiario(`14/06/2010 - Parte 2\n   Finalmente, aceitei a mudança, não era o que eu queria, mas me trouxe esperança, fé, autoestima e confiança. Muito obrigado, Abel, graças ao seu recado, fui do inferno ao céu. Agora, partiremos por um caminho sinuoso, dividiremos a vida com os outros, para, desse modo, entendermos quem realmente somos. Estão nos chamando, essa é a minha deixa. Até algum dia.`)
        }
    }

    console.log(`   Vocês embarcam no caminhão, mais que isso, em uma jornada de libertação, guiada por traição. Boa noite, Tachlowini Gabriyesos.`)
}else{ //SOZINHO !!!!
    console.log(`   O dia nem havia começado, e a sua vida já havia despencado. O sol se levanta, e com ele, você também.\n   Você se levanta, ainda abalado, mas também mais calmo, após processar toda essa situação. Você lembra do seu tio, e decide ligar para ele e obedecer o seu corpo.`)

    adicionarAoInv(`CALMARIA`)

    console.log(`   - Alô, Tachlowini?\n   - Oi, tio.\n   - Espera, nesse horário você não deveria estar em aula?\n   - Bom, eu até estaria, caso não tivessem cercado a minha casa e levado meus pais e meu amigo, sobrando só eu.\n   - Mas... espera, o que!? ... então, os boatos eram reais...\n   - Mais reais impossíveis... enfim, e sobre aquele negócio de ir morar contigo?\n   - Bom, não sei se vai dar pra chegar lá agora, com tudo isso, mas eu vou te mandar a localização de onde é.\n   - Tá, como vai funcionar?\n   - Vamos lá, a viagem não vai ser algo bom e nem divertido, tanto por causa de onde você vai passar e com quem você vai viajar.\n   - "com quem"?\n   - Seguinte, você vai falar com uma gente, e essa gente vai te pôr em um caminhão, junto de mais umas 20 pessoas. Aí, você vai cruzar um grande pedaço de terrra, incluindo, o deserto do Sinai, até chegar em Israel.\n   - Só?\n   - É, se quiser saber de mais alguma coisa, pergunta pra eles, mas, já avisando, eles não são seus amigos.\n   - Eu não tenho mais nenhum mesmo. Obrigado, tio, até mais.\n   - Vou estar te esperando, tchau, até mais.`)

    console.log(`   Você arruma as suas coisas e parte em direção ao lugar que seu tio havia enviado. Por sorte, o caminho era tranquilo e livre de soldados. Chegando lá, você avista o pessoal que seu tio havia lhe dito.`)
    console.log(`   - Oi, por acaso, são vocês que fazem a travessia até Israel?\n   - E o que isso interessa à uma criança como você?\n   - Minha casa foi invadida, meus pais detidos e meu amigo morto.\n   - Se é assim, a gente vai sair com um caminhão hoje à noite, ainda tem espaço, a gente põe o teu nome na lista e depois é só aparecer nesse lugar aqui - Ele diz, apontando para um mapa.\n   - Pode por aí então, Tachlowini Gabriyesos.\n   - Certo, pode tirar uma foto, se quiser, mas não inventa de aparecer com mais alguém lá que ela não vai subir no caminhão, mas sim pro céu.\n   - Claro. É isso então.`)

    console.log(`   Você passa o resto do dia ali por perto, refletindo sobre todos os acontecimentos da sua vida e tudo o que te levou até aquele caminho. Você percebe que o discurso dado á Abel também serve para você, se não quer viver por você, viva pela sua família, pelos seus amigos, mas viva.   A noite vem, e com ela o caminhão que traçará o caminho até a sua nova vida. Você está aqui, e ele começa a chamar os nomes.`)

    if(inv.includes(`CALMARIA`)){ //De novo, só pra não perder o costume
        a = prompt(`Antes de subir no caminhão, você quer escrever no seu diário?\n1 - Sim\n2 - Não`)

        if(a == 1){
            adicionarAoDiario(`14/06/2010\n   Minha vida desabou, e agora, o que me restou? Não é sobre retalhos, mas sobre abrir atalhos, que, na verdade, mais parecem espantalhos. Essa caminhão é muito mais que uma fuga, é sobre libertação, travar uma luta com minha mente, convence-lá de que isto não é em vão. Obrigado mãe, obrigado pai, obrigado Abel, obrigado tio Said, por vocês, nesse mundo eu vou pôr anel.`)
        }
    }
}

/////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\CAPÍTULO 2/////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\

alert(`CAPÍTULO 2 | Em Busca de um Refúgio`) //Esse aqui é bem tranquilinho, eu não mato o Abel muitas vezes
console.log(`CAPÍTULO 2 | Em Busca de um Refúgio`)

//\\//Parte 1 do CAPÍTULO 2//\\//
if(choose > 20){ //ELE TÁ CONTIGO !!!! //Texto, texto e mais texto
    alert(`15 de Junho de 2010 - ????, Eritréia`)
    adicionarAoDiario(`15/06/2010\n   E o primeiro dia de viagem foi... monótono. Não podemos conversar muito, só quando paramos para se esticar. Temos pouca água, a maioria dela só eles podem tomar. Enfim, não há nada que não possa piorar, por isso, não posso reclamar, apenas agradecer e rezar. Alguns dizem que, por mais de um mês, assim será. E não há nada que eu possa fazer, apenas esperar. Estamos sob o luar, paramos para descansar, e eles não sabem que não estou a cochilar. Parece que estão se aproximando, não sei quando poderei voltar, então, até logo.`)

    adicionarAoInv(`MONOTONIA`)

    alert(`18 de Junho de 2010 - ????, ????`)
    adicionarAoDiario(`18/06/2010\n   Finalmente uma brecha se abriu. Dias quentes e solitários, me lembram de até Abril. Enfim, não sei onde estamos, ninguém nunca fala nada, mas é o que todos pensamos: também não fazem ideia. Tanto eu, quanto Abel estamos bem, sem fome e sem sede também, apenas torcemos para que logo cheguemos, embora o tempo esteja desaparecendo. Até mais.`)

    alert(`30 de Junho de 2010 - Sinai, Egito`)
    adicionarAoDiario(`30/06/2010\n   Já nem sei mais quantos dias fazem, só sei que eu já não aguento mais isso. Já faz uma semana que estamos no Sinai, e aqui é quente pra caramba, ou seja, nossa água já foi quase toda embora, e a comida já está acabando. É um inferno de andar aqui, toda hora atolamos e temos que sair do caminhão e passar um bom tempo sob o sol escaldante do deserto. Já fazem dois dias que eles seguem dizendo que estamos perto, mas, sinceramente, eu já nem sei mais se conseguiremos chegar. Algumas pessoas morreram de sede, e o Abel tá cada vez pior por conta disso, ó Deus, nos ajude, por favor. Simplesmente não há como piorar`)

    adicionarAoInv(`DESESPERO`)

    alert(`2 de Julho de 2010 - ????, ????`)

    n = rolarDado() //Esse daqui é bem divertida, se tu tiver sorte, o Abel vive, se não, meus pêsames

    if(n > 5){ //Abel vivo !!! 31c
        adicionarAoDiario(`02/07/2010\n   Achei que não diria isso, mas, saímos do Sinai. Não tem muito o que dizer, o Abel melhorou, eu melhorei, e mais umas duas pessoas morreram. Eu vou conseguir, eu sinto isso.`)
    
        adicionarAoInv(`ESPERANÇA`)
    }else{ //Abel morre (décima quinta vez que eu faço isso, coitado) !!! 24c
        choose -= 7

        adicionarAoDiario(`02/07/2010\n   "Não há como piorar", existe praga maior que essa? O Abel acabou desmaiando de fome e caiu pra fora do caminhão, e eles simplesmente ignoraram todos os meus gritos e súplicas. Novamente, somos apenas eu e minha mente... não que fosse muito diferente, mas ele era meu porto seguro, minha gente. Enfim, agora eu tenho mais um peso amarrado a minha perna, obrigado, mundo. Saímos do Sinai, mas eu não consegui sair desse jogo que me faz perder tudo e todos. Até.`)
    
        adicionarAoInv(`INDIFERENÇA`)
    }
}else{ //SOZINHO !!!!
    gameOver = true
    while(gameOver == true){ //OMG CHECKPOINT!!
        alert(`15 de Junho de 2010 - ????, Eritréia`)
        adicionarAoDiario(`15/06/2010\n   Monotonia. Não é um grande problema, afinal, o que pode ser considerado um problema depois de tudo isso? Desde que eu chegue lá e meu tio esteja bem, já seria uma vitória dentre cem derrotas. É bem simples aqui, você cala a boca e fica ali, na caçamba, de baixo da lona. De vez em quando a gente para, aí a gente troca algumas palavras, toma uma boa água e come alguma coisa. Subimos na caçamba e repetimos tudo que eu havia dito. É noite, por isso escrevo, se me verem, viro pelego. Acho que estão vindo, até algum dia, "amigo".`)

        adicionarAoInv(`MONOTONIA`)

        alert(`18 de Junho de 2010 - ????, ????`)
        adicionarAoDiario(`18/06/2010\n   Mente vazia, oficina do diabo, o Abel ainda ressoa e por pouco eu não desabo. Continuamos nessa "rotina", anda, para, come, bebe e assim segue a minha - No meio da escrita, você começa a ouvir barulhos.`)
        a = prompt(`Quer continuar escrevendo?\n1 - Sim\n2 - Não`)

        if(a == 1){ //Isso aqui é bem bobo, é só pra ter algo diferente aqui. Se tu escrever demais, perde (e a pessoa tem que ser meio burra pra isso na verdade)
            diario.pop
            adicionarAoDiario(`18/06/2010\n   Mente vazia, oficina do diabo, o Abel ainda ressoa e por pouco eu não desabo. Continuamos nessa "rotina", anda, para, come, bebe e assim segue a minha vida. Dizem que ainda estamos muito longe, nem fora da Eritréia estamos. Embora não sejam as melhores condições, estou - Você escuta sons de passo.`)
            a = prompt(`Quer continuar escrevendo?\n1 - Sim\n2 - Não`)

            if(a == 1){
                diario.pop
                adicionarAoDiario(`18/06/2010\n   Mente vazia, oficina do diabo, o Abel ainda ressoa e por pouco eu não desabo. Continuamos nessa "rotina", anda, para, come, bebe e assim segue a minha vida. Dizem que ainda estamos muito longe, nem fora da Eritréia estamos. Embora não sejam as melhores condições, estou fazendo as pazes com a minha cabeça, torçendo pra que tudo dispaireça e eu não me perca (nem o caminhão). Enfim, estão vindo novamente, até mais, prometo não ser inconsequente.`)
                a = prompt(`Quer continuar escrevendo?\n1 - Sim\n2 - Não`)

                if(a == 1){
                    diario.pop
                    console.log(`18/06/2010\n   Mente vazia, oficina do diabo, o Abel ainda ressoa e por pouco eu não desabo. Continuamos nessa "rotina", anda, para, come, bebe e assim segue a minha vida. Dizem que ainda estamos muito longe, nem fora da Eritréia estamos. Embora não sejam as melhores condições, estou - Você escuta sons de passo. Ah, só mais uma coisa, eu - Você então se depara com um dos homens lhe encarando, na sua frente.`)
                    alert(`FIM DE JOGO!\nTente novamente.`)
                    console.log(`FIM DE JOGO!\nTente novamente.`)
                }else{
                    gameOver = false
                }
            }else{
                gameOver = false
            }
        }else{
            gameOver = false
        }
    }

    alert(`30 de Junho de 2010 - Sinai, Egito`)
    adicionarAoDiario(`30/06/2010\n   Eu já aceitei que o que já foi não volta mais, mas, não porque eu quis, mas porque eu não tenho opção. Esse lugar é um inferno. Já faz uma semana que estamos nesse Sinai, mas parece que já fazem meses. Por causa do calor e do solo, a gente tem que parar constantemente, e sempre que a gente para, a gente tem que ficar debaixo desse sol escaldante dos infernos. A noite, o calor se vai e o frio congelante chega, e tudo o que temos para nos cobrir são simples lençóis. Não sei mais quanto tempo eu vou aguentar, várias pessoas já morreram de sede, afinal, eles tomam quase toda a água que temos, sobrando muito pouco para nós. Só mais uns dias, por favor.`)

    adicionarAoInv(`DESESPERO`)

    alert(`2 de Julho de 2010 - ????, ????`)
    adicionarAoDiario(`02/07/2010\n   Saímos daquele inferno, finalmente. Eu já era alguém que aceitava muita coisa de braços abertos, mas, depois dessa viagem, a vida já é um absurdo. Enfim, durante todo esse trajeto, pensamentos foram e vieram, sobre os meus pais, sobre meus amigos, sobre o Abel e sobre mim. Por muitas vezes, quis, em tudo isso, pôr um fim, entretanto, fui levando, caminhando e aceitando que não há porquê desistir, e não é sobre viver pelos outros, mas sim, sobre mim. Até mesmo o pior dos lugares já teve os seus bons dias, tal qual de onde eu vim, e eu me considero um cara de sorte, mesmo querendo por um fim, consegui fugir da morte. Agora, uma nova vida me aguarda, vou sentir falta da minha casa? Claro, mas não é sobre reviver memórias passadas, mas sobre amá-las e zela-las com muito carinho. Enfim, sinto que estão vindo. Boa noite.`)

    adicionarAoInv(`ESPERANÇA`)
}
 
alert(`8 de Julho de 2010\nXXXX, Israel`) //\\//Parte 2 do CAPÍTULO 2//\\// //Aqui é quando tu chega em "Israel"
console.log(`8 de Julho de 2010\nXXXX, Israel`)
if(choose > 25){ //CONTIGO !!!!
    console.log(`   Após 23 dias de viagem, vocês finalmente chegam em Israel.\n   Quando descem, vocês logo dão de cara com guardas querendo seus documentos. Você então checa o seus bolsos.`)
    console.log(`   BOLSOS:\n- Telefone (sem bateria);\n- Diário;\n- Caneta (com pouca tinta);\n- Fotos.`)
    a = prompt(`O guarda percebe que você não possui os documentos. O que você faz?\n1 - Corre.\n2 - Inventa uma desculpa.`)

    //Isso aqui literalmente não muda nada, eu só achei divertido
    if(a == 1){ //Correu
        console.log(`   Mais uma vez, você corre como se sua vida dependesse disso. Contudo, quando você olha para trás, você dá de frente com um pilar e desmaia. Quando acorda, você está em um tipo de cela, junto de seu amigo e outras duas crianças.`)
    }else{ //Mentiu
        console.log(`   Você diz que os-perdeu no meio do caminho, mas que estão cadastrados no "sistema".\n   O guarda não acredita em você, óbviamente. Ele, então, te leva até uma espécie de cela, em um tipo de cadeia, junto de seu amigo e outras duas crianças.`)
    }

    console.log(`   - Abel, onde a gente tá?\n   - Sei lá, mas é pra cá que quem não tem documento vem.\n   - Faz sentido. E quanto tempo a gente vai ter que ficar aqui?\n   - Disseram que entre 1 e 7 dias, mais ou menos.\n   - Já é melhor do que aquele inferno.\n   - Com certeza.`)
    console.log(`   Vocês passam o resto do dia conversando. A noite chega, e com ela chega a comida, não é nada incrível, mas já é melhor do que o que tinham durante a viagem.`)
    
    a = prompt(`Antes de dormir, você quer escrever no seu diário?\n1 - Sim\n2 - Não`)

    if(a == 1){
        console.log(`   Ao checar seus bolsos, você percebe que não há mais nada lá, nem seu diário, seu telefone, etc.`)
    }

    console.log(`   - Boa noite, Abel.\n   - Boa noite, Gabriyesos.`)
}else{ //SOZINHO !!!!
    console.log(`   Após 23 dias de viagem, você finalmente chega em Israel.\n   Quando desce, você logo dá de cara com guardas querendo seus documentos. Você então checa os seus bolsos.`)
    console.log(`   BOLSOS:\n- Telefone (sem bateria);\n- Diário;\n- Caneta (com pouca tinta);\n- Fotos.`)
    a = prompt(`O guarda percebe que você não possui os documentos. O que você faz?\n1 - Corre.\n2 - Inventa uma desculpa.`)

    //Isso aqui literalmente não muda nada, eu só achei divertido
    if(a == 1){ //Correu
        console.log(`   Mais uma vez, você corre como se sua vida dependesse disso. Contudo, quando você olha para trás, você dá de frente com um pilar e desmaia. Quando acorda, você está em um tipo de cela, junto de outras duas crianças.`)
    }else{ //Mentiu
        console.log(`   Você diz que os-perdeu no meio do caminho, mas que estão cadastrados no "sistema".\n   O guarda não acredita em você, óbviamente. Ele, então, te leva até uma espécie de cela, em um tipo de cadeia, junto de outras duas crianças.`)
    }

    console.log(`   Você passa o resto do seu dia pensando e, de vez em quando, conversando com os outros dois. A noite chega, e com ela chega a comida, não é nada incrível, mas já é melhor do que o que tinham durante a viagem.`)

    a = prompt(`Antes de dormir, você quer escrever no seu diário?\n1 - Sim\n2 - Não`)

    if(a == 1){
        console.log(`   Ao checar seus bolsos, você percebe que não há mais nada lá, nem seu diário, seu telefone, etc.`)
    }
}

console.log(`   Você cai no sono.`)

alert(`9 de Julho de 2010\nHadera, Israel`) //\\//Parte 3 do CAPÍTULO 2//\\// //Bem chatinho, mas nescessário
console.log(`09/07/2010\nHadera, Israel`)

if(choose > 25){ //CONTIGO //Texto e diálogo e texto e diálogo e bla bla bla
    console.log(`   Você acorda cedo, junto dos outros, e são todos levados para tomar café da manhã. Perto de vocês, um guarda começa a falar:`)
    console.log(`   - Khalid, ligamos para o seu irmão e ele se dispôs a ficar com você. Segunda-feira ele vem te buscar.\n   - C-certo.\n   - Raja, não conseguimos resposta de nenhum dos seus parentes, você ficará aqui, por enquanto.\n   - Tá.\n   - Tachlowini, conseguimos contato com o seu tio, ele já está vindo de Hadera e te leva hoje. Aliás, já te matriculamos em uma escola e hoje já será o seu primeiro dia.\n   - Certo.\n   - Já você, Abel, não conseguimos contato com nenhum familiar, entretanto, o tio de Tachlowini falou sobre você, logo, também irá com ele.\n   - Ok.`)
    
    console.log(`   Algumas horas depois, seu tio chega, eles devolvem os seus pertences e vocês vão embora daquele lugar. Quando vê seu tio, sua primeira reação é correr para abraça-lo.\n   A viagem não é muito longa, vocês chegam lá umas 10:00 da manhã. Enquanto seu tio prepara um almoço, vocês arrumam suas coisas em seus respectivos quartos. Logo, ele os-chama para almoçar.`)
    console.log(`   - Nunca foi tão bom estar tão longe de casa.\n   - Longe de casa? Agora, essa é a nossa casa.\n   - Verdade. Enfim, comer essa comida é de uma sorte tremenda.\n   - Como foi a viagem?\n   - Dizer que foi a pior coisa das nossas vidas seria pouco.\n   - Pois é, o Abel quase morreu de fome e eu de frio, nunca mais piso em um deserto.\n   - Vocês nunca mais vão sentir isso, eu prometo. Mas, e a cabeça de vocês?\n   - Sinceramente, eu usei essa viagem pra processar tudo isso, e agora, eu já tô muito melhor.\n   - Qualquer coisa, eu tô aqui. Enfim, Tachlowini, vai se arrumando que daqui a pouco você tem aula. E eu vou junto, inclusive, tenho que matricular o Abel.`)

    console.log(`   O almoço termina, você se arruma e vai para à escola.\n   O sinal bate e a aula termina. Você volta para sua nova casa. Lá, seu tio te espera, na cozinha. Você se arruma e desce para jantar.`)
    console.log(`   - E então, Tachlowini, como foi o seu primeiro dia?\n   - Normal, não fiz novos amigos, não consegui entender direito as matérias, mas deu pra se virar.\n   - Tá animado com alguma coisa?\n   - Eu acho que tudo. Aqui é bem diferente da Eritréia, as casas, escolas, ruas, tudo.\n   - Eu tive a mesma reação quando eu me mudei. Agora, coma antes que esfrie.`)
    
    console.log(`   Após a janta, todos vão dormir.`)
    console.log(`   - Boa noite, Abel.\n   - Boa noite, Gabriyesos.`)
}else{ //SOZINHO //E tome texto e diálogo e texto e não sei o que lá
    console.log(`   Você acorda cedo, junto dos outros, e são todos levados para tomar café da manhã. Perto de vocês, um guarda começa a falar:`)
    console.log(`   - Khalid, ligamos para o seu irmão e ele se dispôs a ficar com você. Segunda-feira ele vem te buscar.\n   - C-certo.\n   - Raja, não conseguimos resposta de nenhum dos seus parentes, você ficará aqui, por enquanto.\n   - Tá.\n   - Tachlowini, conseguimos contato com o seu tio, ele já está vindo de Hadera e te leva hoje. Aliás, já te matriculamos em uma escola e hoje já será o seu primeiro dia.\n   - Certo.`)

    console.log(`   Algumas horas depois, seu tio chega, eles devolvem os seus pertences e você vai embora daquele lugar. Quando vê seu tio, sua primeira reação é correr para abraça-lo.\n   A viagem não é muito longa, vocês chegam lá umas 10:00 da manhã. Enquanto seu tio prepara um almoço, você arruma suas coisas no seu novo quarto. Logo, ele te chama para almoçar.`)
    console.log(`   - Nunca foi tão bom estar tão longe de casa.\n   - Longe de casa? Agora, essa é a nossa casa.\n   - Verdade. Enfim, comer essa comida é de uma sorte tremenda.\n   - Como foi a viagem?\n   - Dizer que foi a pior coisa da minha vida seria pouco.\n   - Pois é, mas, uma coisa que eu não te perguntei antes, e o Abel?\n   - Eu queria poder dizer que ele só foi detido, mas não, ele não está mais entre nós.\n   - Eu sinto muito, qualquer coisa, saiba que eu tô aqui. Enfim, vai se arrumando que daqui a pouco você tem aula.`)

    console.log(`   O almoço termina, você se arruma e vai para à escola.\n   O sinal bate e a aula termina. Você volta para sua nova casa. Lá, seu tio te espera, na cozinha. Você se arruma e desce para jantar.`)
    console.log(`   - E então, Tachlowini, como foi o seu primeiro dia?\n   - Normal, não fiz novos amigos, não consegui entender direito as matérias, mas deu pra se virar.\n   - Tá animado com alguma coisa?\n   - Eu acho que tudo. Aqui é bem diferente da Eritréia, as casas, escolas, ruas, tudo.\n   - Eu tive a mesma reação quando eu me mudei. Agora, coma antes que esfrie.`)

    console.log(`   Após a janta, vocês dois vão dormir.`)
    console.log(`   - Boa noite, tio.\n   - Boa noite, Tachlowini.`)
}

console.log(`   Você cai no sono.`)

/////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\CAPÍTULO 3/////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\

alert(`CAPÍTULO 3 | A Chama Olímpica`) //*emoji de fogo**emoji de fogo* //Aqui volta a ser jogável
console.log(`CAPÍTULO 3 | A Chama Olímpica`)

gameOver = true //Não lembro o laço pra executar pelo menos uma vez, então tá aí
while(gameOver == true){ //Checkpoint
    alert(`8 de Janeiro de 2016\nHadera, Israel`) //\\//Parte 1 do CAPÍTULO 3//\\//

    console.log(`08/01/2016\n   Tá, eu posso explicar. Quando eu fui arrumar esse quarto pela primeira vez, eu te perdi, e só fui te encontrar hoje, no dia que eu tô de mudança. Nesse dia primeiro eu fiz 18 anos, e, como a gente vive em uma situação complicada, eu não pude ficar. A vida aqui em Israel é tranquila, eu trabalho em um comércio e passo a maior parte do meu tempo livre praticando corrida. Sim, corrida, eu descobri essa paixão com meu professor, Rafiq, e já disputei alguns vários campeonatos, ganhando vários, diga-se de passagem. Inclusive, eu me lembro até hoje da minha primeira vitória...`)

    console.log(`11/06/2012 - Cesareia, Israel.`) //Aqui é a primeira corrida do jogo, com a mecânica do ritmo lá da função
    console.log(`   - Vamos lá Gabriyesos, é agora, a hora te você dar o seu melhor!\n   - Mas e se eu tropeçar ou algo ruim acontecer?\n   - Se isso acontecer, você vai estar entre os 3 melhores do estado. Vai lá que esse mundo inteiro vai ser seu!`)

    a = prompt(`Deseja relembrar como funciona a "corrida"?\n1 - Sim\n2 - Não`)
    if(a == 1){
        alert(`<!> TUTORIAL <!>\nPara ganhar uma corrida, é nescessário juntar um número mínimo de pontos. O valor deles varia de etapa para etapa. Caso não reúna os pontos necessários, é FIM DE JOGO! Pense bem!`) //Caso a pessoa não lembre né
        console.log(`<!> TUTORIAL <!>\nPara ganhar uma corrida, é nescessário juntar um número mínimo de pontos. O valor deles varia de etapa para etapa. Caso não reúna os pontos necessários, é FIM DE JOGO! Pense bem!`) //Caso a pessoa não lembre né
    }

    ritmo = prompt(`Qual será seu ritmo inicial?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 2, 3)
    console.log(`Você inicia a corrida em um ritmo ${b}`)

    ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(3, 2, 1)
    console.log(`Você continua a corrida em um ritmo ${b}`)

    ritmo = prompt(`Qual será seu ritmo final?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 1, 3)
    console.log(`Você termina a corrida em um ritmo ${b}`)

    if(estabilidade > 6){
        gameOver = false

        alert(`PARABÉNS! Você venceu a corrida!`)
        console.log(`Parabéns! Você venceu a corrida!`)

        adicionarAoInv(`CONQUISTA`)
    }else{
        alert(`FIM DE JOGO!\nTente novamente.`)
        console.log(`FIM DE JOGO!\nTente novamente.`)
    }

    estabilidade = 0
}

console.log(`08/01/2016\n... Aquele dia foi mágico! Eu e meu professor festejamos muito, não só nós, mas a escola inteira. Enfim, se fosse pra listar dois sonhos, eu diria: 1. Reencontrar a minha família; e 2. Ser reconhecido pelo o meu esporte. Pra falar a verdade, eu quero ser um dos maiores justamente pra poder reencontrar e ajudar a todos que me ajudaram até aqui, meus pais, meu tio e meu professor. Eu prometo que vou orgulhar todos vocês.`)
diario.push(`08/01/2016\n   Tá, eu posso explicar. Quando eu fui arrumar esse quarto pela primeira vez, eu te perdi, e só fui te encontrar hoje, no dia que eu tô de mudança. Nesse dia primeiro eu fiz 18 anos, e, como a gente vive em uma situação complicada, eu não pude ficar. A vida aqui em Israel é tranquila, eu trabalho em um comércio e passo a maior parte do meu tempo livre praticando corrida. Sim, corrida, eu descobri essa paixão com meu professor, Rafiq, e já disputei alguns vários campeonatos, ganhando vários, diga-se de passagem. Inclusive, eu me lembro até hoje da minha primeira vitória... Aquele dia foi mágico! Eu e meu professor festejamos muito, não só nós, mas a escola inteira. Enfim, se fosse pra listar dois sonhos, eu diria: 1. Reencontrar a minha família; e 2. Ser reconhecido pelo o meu esporte. Pra falar a verdade, eu quero ser um dos maiores justamente pra poder reencontrar e ajudar a todos que me ajudaram até aqui, meus pais, meu tio e meu professor. Eu prometo que vou orgulhar todos vocês.`)

gameOver = true
while(gameOver == true){
    alert(`27 de Junho de 2019\nHadera, Israel`) //\\//Parte 2 do CAPÍTULO 3//\\//

    console.log(`27/06/2019\n   Bom, eu fui, simplesmente, selecionado pra competir no Mundial de Atletismo pela equipe de refugiados... eu estou sonhando, não estou? É um sentimento maravilhoso, até porque eu sei bem de todos os campeonatos que eu tive que participar pra chegar até aqui... bem, eu e o meu treinador. Se tivesse que destacar algum, eu falaria do...`)

    console.log(`03/02/2019 - Cairo, Egito\n Era um dia frio, você não estava acosumado a competir nessa temperatura, mas decidiu que iria se desafiar.`)
    console.log(`   - Gabriyesos, você conseguiu, chegou na final! Mas agora é foco, pra mostrar pra todos que você é o melhor, mesmo longe do que te fez você. Tá pronto?\n   - Quem liga? O importante é por esse troféu no bolso, e é isso que eu vou fazer.\n   - É assim que se fala! Agora, vai lá e brilha!\n   - Conta comigo!`)

    //Mais uma corrida show de bola
    ritmo = prompt(`Qual será seu ritmo inicial?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 2, 3)
    console.log(`Você inicia a corrida em um ritmo ${b}`) //3

    ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(3, 2, 1)
    console.log(`Você continua a corrida em um ritmo ${b}`) //1

    ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 3, 1)
    console.log(`Você continua a corrida em um ritmo ${b}`) //2

    ritmo = prompt(`Qual será seu ritmo final?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 1, 3)
    console.log(`Você termina a corrida em um ritmo ${b}`) //3

    if(estabilidade > 9){
        gameOver = false

        adicionarAoInv(`GLÓRIA`)

        alert(`PARABÉNS! Você venceu a corrida!`)
        console.log(`Parabéns! Você venceu a corrida!`)
    }else{
        alert(`FIM DE JOGO!\nTente novamente.`)
        console.log(`FIM DE JOGO!\nTente novamente.`)
    }

    estabilidade = 0
}

console.log(`17/06/2019\n... Que dia! Enfim, o evento vai ser no Catar, um país cheio de tecnologia e coisa do tipo, vai ser incrível! Mas, você sabe, esse não é o fim, eu sei que eu posso muito mais, esse é só o começo.`)
diario.push(`17/06/2019\n   Bom, eu fui, simplesmente, selecionado pra competir no Mundial de Atletismo pela equipe de refugiados... eu estou sonhando, não estou? É um sentimento maravilhoso, até porque eu sei bem de todos os campeonatos que eu tive que participar pra chegar até aqui... bem, eu e o meu treinador. Se tivesse que destacar algum, eu falaria do... Que dia! Enfim, o evento vai ser no Catar, um país cheio de tecnologia e coisa do tipo, vai ser incrível! Mas, você sabe, esse não é o fim, eu sei que eu posso muito mais, esse é só o começo.`)

alert(`27 de Setembro de 2019\nDoha, Catar`) //\\//Parte 1 da parte 3 do CAPÍTULO 3//\\// //Primeiro dia de campeonato

console.log(`27/09/2019\n   Hoje, é seu dia de estréia no Campeonato Mundial de Atletismo, precisa ficar entre os cinco primeiros para chegar à próxima fase. Você já está na pista, com o seu treinador.`)
console.log(`   - É agora, você tá pronto?\n   - Sim.\n   - Então vai lá e brilha.`)

//A corrida em si
ritmo = prompt(`Qual será seu ritmo inicial?\n1 - Lento\n2 - Normal\n3 - Rápido`)
ajustarRitmo(1, 2, 3)
console.log(`Você inicia a corrida em um ritmo ${b}`)

ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
ajustarRitmo(2, 3, 1)
console.log(`Você continua a corrida em um ritmo ${b}`)

ritmo = prompt(`Qual será seu ritmo final?\n1 - Lento\n2 - Normal\n3 - Rápido`)
ajustarRitmo(1, 1, 3)
console.log(`Você termina a corrida em um ritmo ${b}`)

choose2 = true //Pros ifs fucnionarem ali embaixo

//Aqui é pra checar qual a sua posição pra ver se tu se classificou ou não
if(estabilidade == 9){
    alert(`PARABÉNS! Você terminou a corrida em PRIMEIRO!`)
    console.log(`PARABÉNS! Você terminou a corrida em PRIMEIRO!`)
}else if(estabilidade == 8){
    alert(`PARABÉNS! Você terminou a corrida em TERCEIRO!`)
    console.log(`PARABÉNS! Você terminou a corrida em TERCEIRO!`)
}else if(estabilidade == 7){
    alert(`PARABÉNS! Você terminou a corrida em QUINTO!`)
    console.log(`PARABÉNS! Você terminou a corrida em QUINTO!`)
}else{
    alert(`QUE PENA! Você terminou a corrida fora da zona de classificação.`)
    console.log(`QUE PENA! Você terminou a corrida fora da zona de classificação.`)

    choose2 = false
}
estabilidade = 0

if(choose2 == true){ //\\//Parte 2 da parte 3 do CAPÍTULO 3//\\// //Segundo dia de campeonato
    alert(`28 de Setembro de 2019\nDoha, Catar`)
    console.log(`28/09/2019\n   Hoje é o segundo dia da competição e do evento, e, mais uma vez, você se vê na pista e com a missão de entrar no top cinco.`)
    console.log(`   - Chegamos nas semis... tá pronto?\n   - Sinceramente, não sei, mas eu vou dar o meu melhor.\n   - Isso é o que importa. Agora, vai lá e brilha.`)

    //A corrida né
    ritmo = prompt(`Qual será seu ritmo inicial?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 2, 3)
    console.log(`Você inicia a corrida em um ritmo ${b}`) //3

    ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 3, 1)
    console.log(`Você continua a corrida em um ritmo ${b}`) //2
    
    ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(3, 2, 1)
    console.log(`Você continua a corrida em um ritmo ${b}`) //1

    ritmo = prompt(`Qual será seu ritmo final?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 1, 3)
    console.log(`Você termina a corrida em um ritmo ${b}`) //3

    //Aqui é pra checar qual a sua posição pra ver se tu se classificou ou não
    if(estabilidade == 12){
        alert(`PARABÉNS! Você terminou a corrida em PRIMEIRO!`)
        console.log(`PARABÉNS! Você terminou a corrida em PRIMEIRO!`)
    }else if(estabilidade == 11){
        alert(`PARABÉNS! Você terminou a corrida em SEGUNDO!`)
        console.log(`PARABÉNS! Você terminou a corrida em SEGUNDO!`)
    }else if(estabilidade == 10){
        alert(`PARABÉNS! Você terminou a corrida em TERCEIRO!`)
        console.log(`PARABÉNS! Você terminou a corrida em TERCEIRO!`)
    }else if(estabilidade == 9){
        alert(`PARABÉNS! Você terminou a corrida em QUARTO!`)
        console.log(`PARABÉNS! Você terminou a corrida em QUARTO!`)
    }else if(estabilidade == 8){
        alert(`PARABÉNS! Você terminou a corrida em QUINTO!`)
        console.log(`PARABÉNS! Você terminou a corrida em QUINTO!`)
    }else{
        alert(`QUE PENA! Você terminou a corrida fora da zona de classificação.`)
        console.log(`QUE PENA! Você terminou a corrida fora da zona de classificação.`)
    
        choose2 = false
    }

    estabilidade = 0
}

if(choose2 == true){ //\\//Parte 3 da parte 3 do CAPÍTULO 3//\\//
    n = rolarDado() //Isso aqui é só pra te prejudicar ou te ajudar, tudo na base da sorte. Aqui é só pra mudar a frase ali em baixo, no aso
    if(n >= 10){
        c = `TRANQUILO`
    }else if(n <= 5){
        c = `NERVOSO`
    }

    //De novo a corrida
    alert(`29 de Setembro de 2019\nDoha, Catar`)
    console.log(`29/09/2019\n   Hoje é a final da sua categoria, e você está ${c}. Mesma pista, mesmo trinador, mesmas palavras, chegou a sua hora de brilhar.`)

    ritmo = prompt(`Qual será seu ritmo inicial?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 2, 3)
    console.log(`Você inicia a corrida em um ritmo ${b}`)

    ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(2, 3, 1)
    console.log(`Você continua a corrida em um ritmo ${b}`)

    ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(2, 3, 1)
    console.log(`Você continua a corrida em um ritmo ${b}`)

    ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(3, 2, 1)
    console.log(`Você continua a corrida em um ritmo ${b}`)

    ritmo = prompt(`Qual será seu ritmo final?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 1, 3)
    console.log(`Você termina a corrida em um ritmo ${b}`)

    if(n >= 10){ //Isso aqui segue o sistema ali em cima pra te prejudicar ou não
        estabilidade += 1
    }else if(n <= 5){
        estabilidade -= 1
    }

    //Aqui é pra checar qual a sua posição pra ver se tu se ganhou ou não
    if(estabilidade >= 15){
        alert(`PARABÉNS!!! Você terminou a corrida em PRIMEIRO! Você ganhou a categoria dos 100 METROS!`)
        console.log(`PARABÉNS!!! Você terminou a corrida em PRIMEIRO! Você ganhou a categoria dos 100 METROS!`)
    
        adicionarAoInv(`FAMA`)
    }else if(estabilidade >= 13){
        alert(`PARABÉNS! Você terminou a corrida em SEGUNDO! Você está no pódio!`)
        console.log(`PARABÉNS! Você terminou a corrida em SEGUNDO! Você está no pódio!`)
    }else if(estabilidade >= 11){
        alert(`PARABÉNS! Você terminou a corrida em TERCEIRO! Você está no pódio!`)
        console.log(`PARABÉNS! Você terminou a corrida em TERCEIRO! Você está no pódio!`)
    }else{
        (`QUE PENA! Você terminou a corrida FORA do pódio.`)
    }
    estabilidade = 0
}

alert(`17 de Outubro de 2020\nHadera, Israel`) //\\//Parte 4 do CAPÍTULO 3//\\//
adicionarAoDiario(`17/10/2020\n   Se eu contar, tu não acredita, nem eu mesmo tô acreditando, e nem queria, pra falar a verdade. Eu fui chamado pra competir no MUNDIAL de Meia Maratona, até aí legal né? Um sonho. Mas aí, o que acontece... O MEU VOO ATRASA E EU FICO DE FORA. E qual o problema disso? Ano que vem é ano de Olímpiadas, e esse campeonato me daria palco pra poder ser chamado pelo COI, mas agora, vai ser cem vezes mais difícil. Eu não tenho todo esse tempo, mas preciso fazer algo que ponha os olhos deles em mim, e vai ser isso que eu vou fazer, pode anotar.`)

gameOver = true
while(gameOver == true){
    alert(`18 de Dezembro de 2020\nGan HaShlosha, Israel`)
    console.log(`18/12/2020\n   Esse será o dia, o dia que todos colocarão os olhos em você, e você sabe que terá de ser PERFEITO. Você está no Parque Nacional de Gan HaShlosha, para uma maratona, esperando para ouvir o som da largada. 3, 2, 1.`)

    //A ÚLTIMA (e mais difícil)
    ritmo = prompt(`Qual será seu ritmo inicial?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(3, 2, 1)
    console.log(`Você inicia a maratona em um ritmo ${b}`)

    ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(2, 3, 1)
    console.log(`Você continua a maratona em um ritmo ${b}`)

    ritmo = prompt(`Um terço já foi. Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 2, 3)
    console.log(`Você continua a maratona em um ritmo ${b}`)

    ritmo = prompt(`Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(2, 3, 1)
    console.log(`Você continua a maratona em um ritmo ${b}`)

    ritmo = prompt(`Dois terços já foram. Qual será seu novo ritmo?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(3, 2, 1)
    console.log(`Você continua a maratona em um ritmo ${b}`)

    ritmo = prompt(`Qual será seu ritmo final?\n1 - Lento\n2 - Normal\n3 - Rápido`)
    ajustarRitmo(1, 1, 3)
    console.log(`Você termina a maratona em um ritmo ${b}`)

    if(inv.includes(`FAMA`)){
        estabilidade += 3
    }

    if(estabilidade >= 18){
        alert(`PARABÉNS!!! Você terminou a maratona em PRIMEIRO e quebrou o seu próprio recorde!`)
        console.log(`PARABÉNS!!! Você terminou a maratona em PRIMEIRO e quebrou o seu próprio recorde!`)

        adicionarAoInv(`ÊXTASE`)
    }else if(estabilidade >= 16){
        alert(`PARABÉNS! Você terminou a maratona em SEGUNDO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
        console.log(`PARABÉNS! Você terminou a maratona em SEGUNDO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
    }else if(estabilidade >= 14){
        alert(`PARABÉNS! Você terminou a maratona em TERCEIRO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
        console.log(`PARABÉNS! Você terminou a maratona em TERCEIRO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
    }else if(estabilidade >= 12){
        alert(`PARABÉNS! Você terminou a maratona em QUARTO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
        console.log(`PARABÉNS! Você terminou a maratona em QUARTO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
    }else if(estabilidade >= 10){
        alert(`PARABÉNS! Você terminou a maratona em QUINTO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
        console.log(`PARABÉNS! Você terminou a maratona em QUINTO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
    }else if(estabilidade >= 8){
        alert(`PARABÉNS! Você terminou a maratona em SEXTO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
        console.log(`PARABÉNS! Você terminou a maratona em SEXTO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
    }else if(estabilidade >= 6){
        alert(`PARABÉNS! Você terminou a maratona em SÉTIMO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
        console.log(`PARABÉNS! Você terminou a maratona em SÉTIMO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
    }else if(estabilidade >= 4){
        alert(`PARABÉNS! Você terminou a maratona em OITAVO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
        console.log(`PARABÉNS! Você terminou a maratona em OITAVO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
    }else if(estabilidade >= 3){
        alert(`PARABÉNS! Você terminou a maratona em NONO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
        console.log(`PARABÉNS! Você terminou a maratona em NONO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
    }else if(estabilidade >= 2){
        alert(`PARABÉNS! Você terminou a maratona em DÉCIMO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
        console.log(`PARABÉNS! Você terminou a maratona em DÉCIMO! Mas, não foi o nescessário para chamar a atenção do Comitê Olímpico.`)
    }else{
        (`QUE PENA! Você ficou fora do TOP 10!`)
    }

    estabilidade = 0

    if(inv.includes(`ÊXTASE`)){
        gameOver = false
    }else{
        alert(`Você não terminou em primeiro e não conseguiu quebrar seu recorde pessoal, e, consequentemente, chamar a atenção do Comitê Olímpico.\nFIM DE JOGO! Tente novamente.`)
        console.log(`Você não terminou em primeiro e não conseguiu quebrar seu recorde pessoal, e, consequentemente, chamar a atenção do Comitê Olímpico.\nFIM DE JOGO! Tente novamente.`)
    }
}

/////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\CAPÍTULO 4/////\\\\\/////\\\\\/////\\\\\/////\\\\\/////\\\\\

alert(`CAPÍTULO 4 | Jogos Olímpicos de Tóquio`) //Aqui é só alegria e TEXTO

alert(`23 de Julho de 2021\nTóquio, Japão`) //\\//Parte 1 do CAPÍTULO 4//\\//
adicionarAoDiario(`23/07/2021\n   Eu falei... não falei? Eu foi o primeiro, do time dos refugiados, a atingir o padrão de qualificação pros Jogos Olímpicos... nem eu sei mais o que tá acontecendo com a minha vida. Hoje foi a abertura, e, além de poder visitar uma cidade do calibre de Tóquio, eu fui uma das pessoas que carregou a bandeira do nosso comitê olímpico, na abertura. Posso dizer que foi um dos maiores e melhores momentos da minha vida. Eu já ‘tava acostumado a estar cercado por uma plateia, graças aos campeonatos, mas não tem como não se emocionar, é, simplesmente, o maior evento esportivo DO MUNDO INTEIRO, ISSO É ESPETACULAR. Poder carregar aquela bandeira significa muito mais do que ser um bom atleta, mas sim, significa ser notado pelo Comitê Olímpico Internacional, significa que você conseguiu superar uma barreira que separa nações. Isso é algo que eu JAMAIS imaginei. Eu falei que conseguiria, e eu consegui, mas isso ainda é muito surreal pra mim. Não tem muito o que falar, só uma felicidade enorme no meu peito e esperança, esperança de que a minha família possa saber que eu estou... bem, melhor que nunca.`)

alert(`8 de Agosto de 2021\nTóquio, Japão`)

if(choose > 25){
    a = `E muito obrigado por estar sempre ao meu lado, Abel.`
}else{
    a = ``
}
adicionarAoDiario(`08/08/2021\n   Bom, as Olimpíadas acabaram. Eu não consegui nenhuma medalha, é claro, mas só de poder competir com tanta gente talentosa e gente que passou pelos mesmos problemas que eu passei, já foi a melhor coisa que aconteceu na minha vida. Agora, é foco pra se qualificar pras próximas olimpíadas, mostrar do que eu sou capaz e impressionar a todos, incluindo os meus pais. Já faz cinco anos que eu não vejo mais eles, e, sabendo que eles ainda estão naquela situação infernal, as vezes eu realmente fico com medo. O problema é que, se eu pisar lá, na Eritréia, é capaz de eu mesmo ser preso. Rezo todos os dias pra que eles estejam bem, mas, não passam disso, orações. Enfim, preciso esfriar a cabeça, me distrair com alguma coisa, afinal, todo esse esforço exige também um pouco de descanso. ${a}`)

a = prompt(`Deseja reler seus diários?\n1 - Sim\n2 - Não`)
if(a == 1){
    relerDiarios()
}

alert(`Obrigado por jogar!`)
console.log("Obrigado por jogar!")

if(choose > 25){
    console.log("     _\n  |\\'/-..--.\n / _ _   ,  ;\n`~=`Y'~_<._./\n <`-....__.'  ")
}