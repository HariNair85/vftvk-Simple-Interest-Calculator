function compute()
{
    p = document.getElementById("principal").value;
}

function showRange(self){
    document.querySelector("#setRange").addEventListener("change", 
    function(self){
        document.querySelector(".setRange").textContent=self.value;
    }
    )
}
        