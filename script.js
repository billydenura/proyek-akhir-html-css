let a = window.location
// console.log(a)
// console.log(a.pathname)
// console.log(a.hostname)

let headerList = document.getElementsByClassName("header-list")
let menu = headerList[0].getElementsByTagName("a")
// console.log(menu[0].innerHTML)
// // console.log(menuLowerCase)
// console.log(a.pathname.slice(1).replace(".html",""))

for (i=0;i<menu.length;i++){
    let menuLowerCase = menu[i].innerHTML.toLowerCase().trim()
    if(menuLowerCase == a.pathname.slice(1).replace(".html","")){
        menu[i].classList.add("aktif")
    }

}

if(a.pathname.slice(1).replace(".html","")=="product"){
    console.log(a.search)
    // console.log(a.searchParams.get("q"))
    console.log(a)
    let mengambil = new URL(a.href)
    let sideBarMenu = document.getElementsByClassName("side-bar-menu")
    let sideBarMenus = sideBarMenu[0].getElementsByTagName("p")
    console.log(sideBarMenus.length)
    let x = 0
    while(x < sideBarMenus.length ){
        console.log("menu: "+sideBarMenus[x].innerHTML)
        console.log("q: "+mengambil.searchParams.get("q"))
        // sideBarMenus[0].style.fontWeight="800"
        
        if(sideBarMenus[x].innerHTML == mengambil.searchParams.get("q")){
            sideBarMenus[x].style.fontWeight="800"
            let produk = document.getElementsByClassName("produk")
            let tea = document.getElementsByClassName("produk tea")
            let coffee = document.getElementsByClassName("produk coffee")
            let nonCoffee = document.getElementsByClassName("produk non-coffee")
            console.log(produk)

            for(y=0;y<produk.length;y++){
                produk[y].style.display="none"
                if (sideBarMenus[x].innerHTML == "Tea Based"){
                    for(t=0;t<tea.length;t++){
                        tea[t].style.display="flex"
                    }                    
                }
                else if(sideBarMenus[x].innerHTML == "Coffee Based"){
                    for(t=0;t<coffee.length;t++){
                        coffee[t].style.display="flex"
                    }                    
                }                
                else if(sideBarMenus[x].innerHTML == "Non Coffee"){
                    for(t=0;t<nonCoffee.length;t++){
                        nonCoffee[t].style.display="flex"
                    }                    
                }
                
            }

        }
        x++;
    }
}