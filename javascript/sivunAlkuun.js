document.addEventListener("DOMContentLoaded", function(){
    const kuvake = document.getElementById("palaaSivunAlkuun");
    const laukaisuPaikka = window.innerHeight * .8;
    let onRuudulla = false;

    window.onscroll = function () {
        if (!onRuudulla && (document.body.scrollTop > laukaisuPaikka || document.documentElement.scrollTop > laukaisuPaikka)){
            kuvake.style.right = "-5px";
            onRuudulla = true;
        } else if (onRuudulla && (document.body.scrollTop <= laukaisuPaikka && document.documentElement.scrollTop <= laukaisuPaikka)){
            kuvake.style.right = "-50px";
            onRuudulla = false;
        }
    };

    kuvake.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
