const languages = ['Reactjs','Vuejs','Nodejs','Laravel','PHP'];
const colors = ['red','purple','yellow','skyblue','green'];

const getTextAni = document.querySelector(".text-ani");


function* genFun(){

    let idx = 0;

    while(true){

        yield idx++;

        if(idx >= languages.length){
            idx = 0;
        }

    }

};

const getGen = genFun();


function showWords(word){

    let x = 0;

    getTextAni.innerHTML = "";
    getTextAni.classList.add(colors[languages.indexOf(word)]);

    const showInterval = setInterval(function(){

        if(x >= word.length){

            clearInterval(showInterval);
            deleteWords();

        }else{

            getTextAni.innerHTML += word[x];
            x++;

        }

    },500);


};


function deleteWords(){

    const getWords = getTextAni.innerHTML;
    let getLastIdx = getWords.length - 1;


    const delInterVal = setInterval(function(){

        if(getLastIdx >= 0){
            getTextAni.innerHTML = getTextAni.innerHTML.substring(0,getLastIdx);
            getLastIdx--;
        }else{

            getTextAni.classList.remove(colors[languages.indexOf(getWords)]);
            showWords(languages[getGen.next().value]);
            clearInterval(delInterVal);

        }


    },500);

};


showWords(languages[getGen.next().value]);

// ----------------------------------------------------

const getTextLights = document.querySelectorAll(".text-light");

getTextLights.forEach(function(getTextLight){

    const arrText = getTextLight.innerHTML.split("");

    getTextLight.innerHTML = "";

    arrText.forEach(function(text,idx){

        const newEm = document.createElement("em");
        newEm.innerHTML = text;
        newEm.style.animationDelay = `${0.05 * idx}s`;

        getTextLight.append(newEm);

    });

});

