(function(){
    document.addEventListener('keydown', handleKeydown)

    var keys = document.querySelectorAll('.key')
    keys.forEach((item)=>{
        item.addEventListener('click', handleClick);
        item.addEventListener('transitionend', removeClass);
    })


    function handleClick(e){
        var code;
        console.log(this.classList);
        // if()
        code = this.getAttribute('data-key')
        console.log(this+code);
        playSound(code)
    }

    function handleKeydown(e){
        console.log(e.keyCode);
        playSound(e.keyCode)
    }

    function removeClass(){
        console.log(this.classList);
        this.classList.remove('playing')
    }

    function playSound(code){
        let audioFile = document.querySelector('audio[data-key="'+code+'"]')
        console.log(audioFile);
        if(!audioFile) return;
        let element = document.querySelector('div[data-key="'+code+'"]')
        audioFile.currentTime = 0;
        audioFile.play();
        element.classList.add('playing')
        console.log(element.classList);
        
    }

}())

